"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Skill } from "@/data/constants";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface SkillModalProps {
  skill: Skill | null;
  isOpen: boolean;
  onClose: () => void;
}

const getLevelColor = (level?: string) => {
  switch (level) {
    case "Pro":
      return "bg-green-500/20 text-green-400 border-green-500/50";
    case "Intermediate":
      return "bg-blue-500/20 text-blue-400 border-blue-500/50";
    case "Beginner":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/50";
  }
};

export const SkillModal = ({ skill, isOpen, onClose }: SkillModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!skill) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-[10000] w-[80vw] max-w-xs -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card backdrop-blur-md p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-2 top-2 rounded-full p-1.5 transition-colors hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Content */}
            <div className="flex flex-col items-center gap-2.5">
              {/* Icon */}
              <div className="relative h-14 w-14 rounded-lg bg-muted p-2.5 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.label}
                  className="h-full w-full object-contain p-1"
                />
              </div>

              {/* Title and Level */}
              <div className="text-center">
                <h3 className="text-lg font-bold mb-1.5">{skill.label}</h3>
                {skill.level && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={cn(
                      "inline-block rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider",
                      getLevelColor(skill.level)
                    )}
                  >
                    {skill.level}
                  </motion.span>
                )}
              </div>

              {/* Description */}
              <p className="text-center text-xs text-muted-foreground leading-relaxed">
                {skill.shortDescription}
              </p>

              {/* Decorative line */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
