import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import { content as c } from "@/data/content";
import Navigation from "@/components/portfolio/navigation";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});
export const metadata: Metadata = {
  metadataBase: new URL(c.url),
  title: { default: c.title, template: c.titleTemplate },
  description: c.description,
  alternates: { canonical: "/" },
  authors: [{ name: c.name }],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: c.title,
    description: c.description,
    url: c.url,
    type: "profile",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: c.title },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: c.title,
    description: c.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: c.name,
    jobTitle: c.roles[0],
    email: c.email,
    telephone: c.phone,
    url: c.url,
    sameAs: [c.github, c.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: c.education.organization,
    },
    knowsAbout: c.skills.flatMap((g) => g.items),
  };
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${mono.variable}`}
    >
      <body id="top">
        <a className="skip-link" href="#main-content">
          {c.labels.skip}
        </a>
        <div className="ambient" aria-hidden="true">
          <div />
          <div />
        </div>
        <Navigation />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(person).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
