const config = {
  title: "Chirantha K M| A Software Devloper",
  description: {
    long: "Explore the portfolio of Chirantha K M, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Chirantha K M, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Chirantha",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Chirantha K M",
  email: "chirantha.km88@gmail.com",
  site: "chiranthkm-dev.vercel",

  // for github stars button
  githubUsername: "chiranthakm-Dev",
  githubRepo: "https://github.com/chiranthakm-Dev",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/chiranthkm",
    instagram: "https://www.instagram.com/chiranth_k_m_?igsh=MXZrdzdlaHF6NHhuag%3D%3D&utm_source=qr",
    github: "https://github.com/chiranthakm-Dev",
  },
};
export { config };
