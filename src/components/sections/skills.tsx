"use client";

import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { KEYBOARD_SKILLS } from "@/data/constants";
import { SkillModal } from "../ui/skill-modal";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<typeof KEYBOARD_SKILLS[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleSkillClick = (skill: typeof KEYBOARD_SKILLS[0]) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const getLevelColor = (level?: string) => {
    switch (level) {
      case "Pro":
        return "border-green-500/60 bg-green-500/40 hover:bg-green-500/50";
      case "Intermediate":
        return "border-blue-500/60 bg-blue-500/40 hover:bg-blue-500/50";
      case "Beginner":
        return "border-yellow-500/60 bg-yellow-500/40 hover:bg-yellow-500/50";
      default:
        return "border-gray-500/60 bg-gray-500/40 hover:bg-gray-500/50";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Blur overlay for background when skills section is in view */}
      <AnimatePresence>
        {isInView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1] pointer-events-none"
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <SectionWrapper 
        id="skills" 
        className="w-full min-h-screen py-20 pointer-events-auto relative z-10"
      >
        <div ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader id='skills' title="Tech Stack" desc="Click on any skill to learn more" />
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4 mt-12 md:mt-16">
            {KEYBOARD_SKILLS.map((skill, index) => (
              <motion.button
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                onClick={() => handleSkillClick(skill)}
                className={cn(
                  "group relative flex flex-col items-center justify-center gap-2 p-3 md:p-4",
                  "rounded-lg border-2 transition-all duration-300",
                  "cursor-pointer transform hover:scale-105 hover:shadow-lg",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                  getLevelColor(skill.level)
                )}
                title={`${skill.label} - ${skill.level}`}
              >
                {/* Icon */}
                <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerHTML = `<div class="text-xl font-bold">${skill.label.charAt(0)}</div>`;
                      }
                    }}
                  />
                </div>

                {/* Name */}
                <span className="text-[10px] md:text-xs font-medium text-center text-foreground/90 group-hover:text-foreground transition-colors leading-tight">
                  {skill.label}
                </span>

                {/* Level Badge */}
                {skill.level && (
                  <span className={cn(
                    "absolute top-1 right-1 px-1.5 py-0.5 rounded-full text-[8px] font-semibold uppercase tracking-wider",
                    skill.level === "Pro" && "bg-green-500/20 text-green-400",
                    skill.level === "Intermediate" && "bg-blue-500/20 text-blue-400",
                    skill.level === "Beginner" && "bg-yellow-500/20 text-yellow-400"
                  )}>
                    {skill.level}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
    </SectionWrapper>

      <SkillModal
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedSkill(null);
        }}
      />
    </>
  );
};

export default SkillsSection;
