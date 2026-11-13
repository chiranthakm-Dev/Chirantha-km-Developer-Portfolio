// Render the outlined C once into the platform icon sizes. No font dependency.
const fs = require("node:fs");
const { execFileSync } = require("node:child_process");
const sharp = require("sharp");
const c = JSON.parse(
  execFileSync(process.execPath, ["scripts/export-content.cjs"], {
    encoding: "utf8",
  }),
);
const svg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#1F4D3F"/><path d="M46 16H29C19 16 14 22 14 32s5 16 15 16h17v-9H30c-4 0-6-2-6-7s2-7 6-7h16Z" fill="#FAF3EE"/></svg>\n';
async function generate() {
  fs.writeFileSync("public/icon.svg", svg);
  for (const [file, size] of [
    ["apple-touch-icon.png", 180],
    ["icon-192.png", 192],
    ["icon-512.png", 512],
  ]) {
    await sharp(Buffer.from(svg))
      .resize(size, size)
      .png()
      .toFile(`public/${file}`);
  }
  const png = await sharp(Buffer.from(svg)).resize(32, 32).png().toBuffer();
  const header = Buffer.alloc(22);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(32, 6);
  header.writeUInt8(32, 7);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(22, 18);
  fs.writeFileSync("public/favicon.ico", Buffer.concat([header, png]));
  fs.writeFileSync(
    "public/site.webmanifest",
    JSON.stringify(
      {
        id: "/",
        name: c.title,
        short_name: c.name,
        description: c.description,
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#FAF3EE",
        theme_color: "#1F4D3F",
        icons: [192, 512].map((size) => ({
          src: `/icon-${size}.png`,
          sizes: `${size}x${size}`,
          type: "image/png",
          purpose: "any",
        })),
      },
      null,
      2,
    ) + "\n",
  );
  console.log(
    `Generated outlined SVG, ICO, PNG icons and manifest. Title: ${c.title.length} characters; description: ${c.description.length}.`,
  );
}
generate().catch((e) => {
  console.error(e);
  process.exit(1);
});
