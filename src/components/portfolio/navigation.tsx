"use client";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { content as c } from "@/data/content";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("summary");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="/#top"
        aria-label={`${c.shortName} — ${c.labels.top}`}
      >
        {c.shortName}
        <span aria-hidden="true">.</span>
      </a>
      <button
        id="menu-toggle"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? c.labels.closeMenu : c.labels.menu}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav
        id="site-nav"
        aria-label={c.labels.navigation}
        className={open ? "navigation is-open" : "navigation"}
      >
        {c.sections.map((s) => (
          <a
            key={s.id}
            href={`/#${s.id}`}
            aria-current={active === s.id ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            {s.title}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a
          className="nav-resume"
          href={c.resumePath}
          download={c.resumeFilename}
          aria-label={c.hero.primary}
        >
          <span>{c.labels.resume}</span>
          <Download size={15} aria-hidden="true" />
        </a>
        <a className="nav-contact" href="/#contact">
          {c.labels.contact}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
