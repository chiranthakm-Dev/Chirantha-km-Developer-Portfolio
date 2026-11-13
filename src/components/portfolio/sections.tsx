import Image from "next/image";
import { content as c, type Entry } from "@/data/content";
import {
  ArrowUpRight,
  ArrowDown,
  Download,
  Code2,
  FlaskConical,
} from "lucide-react";
import type { ReactNode } from "react";
export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  const index = c.sections.findIndex((s) => s.id === id);
  const section = c.sections[index];
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`section ${className}`}
    >
      <div className="section-heading" data-reveal>
        <span className="section-index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <p className="eyebrow">{section.note}</p>
          <h2 id={`${id}-heading`}>{section.title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}
export function DateRange({ entry }: { entry: Entry }) {
  if (!entry.start) return null;
  const parts = entry.dates?.split(" – ");
  return (
    <p className="date">
      <time dateTime={entry.start}>{parts?.[0]}</time>
      {entry.end ? (
        <>
          {" "}
          — <time dateTime={entry.end}>{parts?.[1]}</time>
        </>
      ) : parts?.[1] ? (
        ` — ${parts[1]}`
      ) : null}
    </p>
  );
}
export function Hero() {
  return (
    <div className="hero" aria-labelledby="hero-name">
      <div className="ghost" aria-hidden="true" />
      <div className="hero-top">
        <span className="eyebrow">{c.hero.eyebrow}</span>
        <span className="edition">
          <span className="status-dot" />
          {c.location}
        </span>
      </div>
      <div className="hero-stage">
        <div className="hero-card">
          <div className="hero-card-top">
            <span>{c.hero.descriptor}</span>
            <span aria-hidden="true">↗</span>
          </div>
          <h1 id="hero-name">
            <span>{c.name.split(" ")[0]}</span>{" "}
            <span className="name-last">
              {c.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <div className="hero-card-bottom">
            <span>{c.name}</span>
            <span className="hairline" aria-hidden="true" />
            <span>{c.year}</span>
          </div>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-image">
            <Image
              src={c.portrait.src}
              alt={c.portrait.alt}
              fill
              sizes="(max-width: 767px) 150px, (max-width: 1100px) 170px, 210px"
              priority
              quality={85}
            />
          </div>
          <figcaption>
            <span>{c.portrait.caption}</span>
            <span aria-hidden="true">↗</span>
          </figcaption>
        </figure>
      </div>
      <p className="hero-roles">
        {c.roles.map((role, i) => (
          <span key={role}>
            {i > 0 && <i className="status-dot" aria-hidden="true" />}
            {role}
          </span>
        ))}
      </p>
      <div className="specialties">
        <div>
          <Code2 aria-hidden="true" strokeWidth={1} />
          <span>{c.hero.specialties[0]}</span>
        </div>
        <span className="vertical-rule" aria-hidden="true" />
        <div>
          <FlaskConical aria-hidden="true" strokeWidth={1} />
          <span>{c.hero.specialties[1]}</span>
        </div>
      </div>
      <div className="hero-actions">
        <span className="cta-line" aria-hidden="true" />
        <a className="pill" href={c.resumePath} download={c.resumeFilename}>
          {c.hero.primary}
          <Download size={15} aria-hidden="true" />
        </a>
        <span className="cta-line" aria-hidden="true" />
      </div>
      <a className="explore" href="#projects">
        {c.hero.secondary}
        <ArrowDown size={15} aria-hidden="true" />
      </a>
    </div>
  );
}
export function PortfolioSections() {
  return (
    <div className="content-shell">
      <Section id="summary">
        <div className="summary-grid" data-reveal>
          <p className="summary-copy">{c.summary}</p>
          <p className="summary-aside">
            {c.hero.descriptor}
            <span>{c.languages}</span>
          </p>
        </div>
        <div className="proof-grid">
          {c.proof.map((p) => (
            <article key={p.label} data-reveal>
              <p className="proof-value">{p.value}</p>
              <p>{p.label}</p>
              <span>{p.context}</span>
            </article>
          ))}
        </div>
      </Section>
      <Section id="skills">
        <div className="skills-grid">
          {c.skills.map((group, i) => (
            <article className="skill-group" key={group.title} data-reveal>
              <span className="mini-number" aria-hidden="true">
                /0{i + 1}
              </span>
              <h3>{group.title}</h3>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      <Section id="experience">
        <div className="timeline">
          {c.experience.map((entry) => (
            <article
              className="experience-entry"
              key={entry.organization}
              data-reveal
            >
              <div className="experience-meta">
                <DateRange entry={entry} />
                <p>{entry.organization}</p>
                <span>{entry.location}</span>
              </div>
              <div>
                <h3>{entry.title}</h3>
                <ul className="bullet-list">
                  {entry.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section id="projects">
        <div className="projects-grid">
          {c.projects.map((entry, i) => (
            <article
              className={`project-card project-${i}`}
              key={entry.title}
              data-reveal
            >
              <div className="project-art" aria-hidden="true">
                <span className="art-label">
                  0{i + 1} / {c.year}
                </span>
                <div className={`abstract abstract-${i}`}>
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <span className="art-mark">↗</span>
              </div>
              <div className="project-body">
                <h3>{entry.title}</h3>
                <p>{entry.bullets[0]}</p>
                <ul className="tags">
                  {entry.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section id="research">
        <div className="research-list">
          {c.research.map((entry) => (
            <article key={entry.title} className="research-entry" data-reveal>
              <DateRange entry={entry} />
              <div>
                <p className="eyebrow">{entry.organization}</p>
                <h3>{entry.title}</h3>
                {entry.bullets.map((b) => (
                  <p key={b}>{b}</p>
                ))}
              </div>
              <FlaskConical aria-hidden="true" strokeWidth={1} />
            </article>
          ))}
        </div>
      </Section>
      <Section id="education">
        <article className="education-card" data-reveal>
          <div>
            <p className="eyebrow">{c.education.organization}</p>
            <h3>{c.education.title}</h3>
            <p>{c.education.location}</p>
            <ul className="bullet-list">
              {c.education.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <DateRange entry={c.education} />
        </article>
      </Section>
      <Section id="certifications">
        <ul className="certifications">
          {c.certifications.map((entry) => (
            <li key={entry.title} data-reveal>
              <time dateTime={entry.year}>{entry.year}</time>
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.organization}</p>
              </div>
              <span aria-hidden="true">↗</span>
            </li>
          ))}
        </ul>
      </Section>
      <Section id="achievements">
        <div className="achievement-grid">
          {c.achievements.map((entry) => (
            <article key={entry.title} data-reveal>
              <time dateTime={entry.year}>{entry.year}</time>
              <h3>{entry.title}</h3>
              <p>{entry.detail}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section id="contact" className="contact-section">
        <div className="contact-card" data-reveal>
          <p className="eyebrow">{c.hero.descriptor}</p>
          <a className="contact-email" href={`mailto:${c.email}`}>
            {c.email}
            <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-details">
            <div>
              <span>{c.labels.phone}</span>
              <a href={c.phoneHref}>{c.phone}</a>
            </div>
            <div>
              <span>{c.labels.location}</span>
              <p>{c.location}</p>
            </div>
            <div>
              <span>{c.labels.elsewhere}</span>
              <a href={c.github}>
                {c.labels.github}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a href={c.linkedin}>
                {c.labels.linkedin}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
          <a
            className="pill pill-light"
            href={c.resumePath}
            download={c.resumeFilename}
          >
            {c.hero.primary}
            <Download size={16} aria-hidden="true" />
          </a>
        </div>
      </Section>
    </div>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <a className="wordmark" href="#top">
        {c.shortName}
        <span aria-hidden="true">.</span>
      </a>
      <p>
        © {c.year} {c.labels.copyright}
      </p>
      <a href="#top">
        {c.labels.top}
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </footer>
  );
}
