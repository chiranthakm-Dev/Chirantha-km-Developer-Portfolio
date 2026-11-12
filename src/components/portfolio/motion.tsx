"use client";
import { useEffect } from "react";
export default function MotionEnhancement() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cleanup = () => {};
    let cancelled = false;
    async function setup() {
      cleanup();
      if (media.matches) return;
      const [{ animate }, { default: Lenis }] = await Promise.all([
        import("framer-motion"),
        import("lenis"),
      ]);
      if (cancelled || media.matches) return;
      const lenis = new Lenis({
        autoRaf: true,
        anchors: true,
        smoothWheel: true,
      });
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate(
                entry.target as HTMLElement,
                { opacity: [0.8, 1], y: [16, 0] },
                { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              );
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 },
      );
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => observer.observe(el));
      const entrance = animate(
        ".hero-card",
        { opacity: [0.8, 1], y: [22, 0] },
        { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      );
      const stagger = [
        ".hero-roles",
        ".specialties",
        ".hero-actions",
        ".explore",
      ].map((selector, i) =>
        animate(
          selector,
          { opacity: [0.8, 1], y: [8, 0] },
          { duration: 0.45, delay: 0.15 + i * 0.12 },
        ),
      );
      const buttons = Array.from(
        document.querySelectorAll<HTMLElement>(".pill"),
      );
      const magnetic = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;
        const button = event.currentTarget as HTMLElement;
        const rect = button.getBoundingClientRect();
        button.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * 0.06}px, ${(event.clientY - rect.top - rect.height / 2) * 0.12}px)`;
      };
      const reset = (event: PointerEvent) => {
        (event.currentTarget as HTMLElement).style.transform = "";
      };
      buttons.forEach((button) => {
        button.addEventListener("pointermove", magnetic);
        button.addEventListener("pointerleave", reset);
      });
      const ghost = document.querySelector<HTMLElement>(".ghost");
      const parallax = () => {
        if (ghost)
          ghost.style.translate = `0 ${Math.min(window.scrollY, 1000) * 0.06}px`;
      };
      window.addEventListener("scroll", parallax, { passive: true });
      cleanup = () => {
        observer.disconnect();
        lenis.destroy();
        entrance.stop();
        stagger.forEach((animation) => animation.stop());
        buttons.forEach((button) => {
          button.removeEventListener("pointermove", magnetic);
          button.removeEventListener("pointerleave", reset);
          button.style.transform = "";
        });
        window.removeEventListener("scroll", parallax);
        if (ghost) ghost.style.translate = "";
        document
          .querySelectorAll<HTMLElement>(
            "[data-reveal], .hero-card, .hero-roles, .specialties, .hero-actions, .explore",
          )
          .forEach((el) => {
            el.style.opacity = "1";
            el.style.transform = "none";
          });
      };
    }
    void setup();
    media.addEventListener("change", setup);
    return () => {
      cancelled = true;
      cleanup();
      media.removeEventListener("change", setup);
    };
  }, []);
  return null;
}
