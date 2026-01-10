"use client";
import React, { useEffect, useState } from "react";
// Import necessary icons
import { DiMongodb, DiPostgresql } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaPhone,
  FaPython,
  FaReact,
  FaRust,
} from "react-icons/fa6";
import {
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiArduino,
  SiC,
  SiCplusplus,
  SiFastapi,
  SiGo,
  SiGooglecloud,
  SiKubernetes,
  SiNumpy,
  SiPandas,
  SiRedhat,
  SiScikitlearn,
  SiTensorflow,
  SiVercel,
  SiVscodium,
} from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "chirantha.km88@gmail.com",
    href: "mailto:chirantha.km88@gmail.com",
    icon: <FaEnvelope size={"24px"} />,
  },
  {
    name: "Phone",
    content: "+91 8310228282",
    href: "tel:+918310228282",
    icon: <FaPhone size={"24px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/chiranthkm",
    content: "/in/chiranthkm",
    icon: <FaLinkedin size={"24px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/chiranthkm",
    content: "/chiranthkm",
    icon: <FaGithub size={"24px"} />,
  },
];

// Tools list STRICTLY matching your provided list
const TOOLS = [
  { name: "Python", icon: <FaPython size={"50px"} color={"#3776AB"} /> },
  { name: "Java", icon: <FaJava size={"50px"} color={"#ed8b00"} /> },
  { name: "C", icon: <SiC size={"50px"} color={"#A8B9CC"} /> },
  { name: "C++", icon: <SiCplusplus size={"50px"} color={"#00599C"} /> },
  { name: "Go", icon: <SiGo size={"50px"} color={"#00add8"} /> },
  { name: "Kotlin", icon: <span style={{ fontSize: "50px", color: "#7f52ff", fontWeight: "bold" }}>K</span> }, // Placeholder if icon missing
  { name: "JavaScript", icon: <SiVscodium size={"50px"} color={"#f0db4f"} /> }, // Using generic JS color
  { name: "SQL", icon: <DiPostgresql size={"50px"} color={"#336791"} /> },
  { name: "React.js", icon: <FaReact size={"50px"} color={"#61dafb"} /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill size={"50px"} color={"#38bdf8"} /> },
  { name: "ML Engineering", icon: <SiScikitlearn size={"50px"} color={"#ff6f00"} /> },
  { name: "TensorFlow", icon: <SiTensorflow size={"50px"} color={"#ff6f00"} /> },
  { name: "Scikit learn", icon: <SiScikitlearn size={"50px"} color={"#f7931e"} /> },
  { name: "LLMs", icon: <span style={{ fontSize: "30px", fontWeight: "bold" }}>AI</span> },
  { name: "FastAPI", icon: <SiFastapi size={"50px"} color={"#009688"} /> },
  { name: "Docker", icon: <FaDocker size={"50px"} color={"#2496ed"} /> },
  { name: "Kubernetes", icon: <SiKubernetes size={"50px"} color={"#326ce5"} /> },
  { name: "GCP", icon: <SiGooglecloud size={"50px"} color={"#4285f4"} /> },
  { name: "Red Hat Linux", icon: <SiRedhat size={"50px"} color={"#ee0000"} /> },
  { name: "MongoDB", icon: <DiMongodb size={"50px"} color={"#4db33d"} /> },
  { name: "PostgreSQL", icon: <DiPostgresql size={"50px"} color={"#336791"} /> },
  { name: "Git", icon: <FaGit size={"50px"} color={"#f05032"} /> },
  { name: "GitHub", icon: <FaGithub size={"50px"} color={"#fff"} /> },
  { name: "Vercel", icon: <SiVercel size={"50px"} color={"#fff"} /> },
  { name: "REST APIs", icon: <span style={{ fontSize: "20px", fontWeight: "bold" }}>API</span> },
  { name: "Cybersecurity", icon: <span style={{ fontSize: "40px" }}>🔒</span> },
  { name: "FinTech", icon: <span style={{ fontSize: "40px" }}>💸</span> },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* SIDEBAR */}
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square bg-zinc-800 object-cover"
                  alt="Chirantha K M"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl font-bold">Chirantha K M</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full text-zinc-200">
                  Full Stack & AI Engineer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md transition-colors"
                      href={link.href}
                      target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : "_self"}
                      rel="noreferrer"
                    >
                      <div className="w-8 flex justify-center">{link.icon}</div>
                      <div className="flex flex-col overflow-hidden">
                        <div className="text-sm font-semibold">{link.name}</div>
                        <div className="text-xs text-zinc-500 truncate w-full">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="basis-3/4 w-full">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 font-bold text-white">About Me</h1>
            <p className="mb-6 text-zinc-400 leading-relaxed font-roboto">
              Hello! I&apos;m <span className="text-white font-semibold">Chirantha</span>, a Computer Science and Business Systems student passionate about bridging the gap between intelligent algorithms and real-world solutions.
            </p>
            <p className="mb-6 text-zinc-400 leading-relaxed">
              My expertise lies in <span className="text-white">Python, Machine Learning, and Full Stack Development</span>. I have hands-on experience building production-grade ML models, secure IoT systems, and scalable web apps. Currently, I am expanding my horizons into <span className="text-white">Rust and Go</span> while researching AI safety.
            </p>
            <p className="mb-10 text-zinc-400 leading-relaxed">
              When I&apos;m not debugging code, you can find me analyzing economic trends, participating in hackathons, or researching ways to reduce hallucinations in LLMs.
            </p>

            <h1 className="text-3xl mb-10 font-bold text-white">Tech Stack</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px] flex items-center justify-center text-zinc-500">Loading tools...</p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                    breakpoints: {
                      640: { perPage: 3 },
                      768: { perPage: 4 },
                    },
                  }}
                  aria-label="My Tech Stack"
                >
                  {TOOLS.map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        className="flex flex-col items-center justify-center gap-2 p-4 border-[.5px] border-zinc-700 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors mx-2 h-32"
                        title={tool.name}
                      >
                        <div className="text-4xl text-white">{tool.icon}</div>
                        <span className="text-xs text-zinc-400 text-center font-medium">{tool.name}</span>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
