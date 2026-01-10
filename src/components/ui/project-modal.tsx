"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../sections/projects";
import { Button } from "./button";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      scrollYRef.current = window.scrollY;
      
      // Lock body scroll
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
      
      return () => {
        // Restore body scroll
        const scrollY = scrollYRef.current;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        document.body.style.width = "";
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, onClose]);

  // Prevent scroll on backdrop
  const handleBackdropWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleBackdropTouch = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  if (!project) return null;

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
            onWheel={handleBackdropWheel}
            onTouchMove={handleBackdropTouch}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md"
            style={{ touchAction: "none" }}
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full max-w-5xl h-[90vh] max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
              style={{ 
                maxHeight: "90vh",
                height: "90vh"
              }}
            >
              {/* Header with Cancel Button */}
              <div className="relative flex items-center justify-between p-4 md:p-6 border-b border-border bg-card/50 backdrop-blur-sm shrink-0">
                <div className="flex-1 min-w-0 pr-4">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground truncate">{project.title}</h2>
                  <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">
                    {project.category}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-2 rounded-lg hover:bg-accent active:bg-accent/80 transition-colors group"
                  aria-label="Close modal"
                  type="button"
                >
                  <X className="h-5 w-5 md:h-6 md:w-6 text-foreground group-hover:rotate-90 transition-transform duration-200" />
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div 
                ref={scrollContainerRef}
                className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
                style={{ 
                  WebkitOverflowScrolling: "touch",
                  overscrollBehavior: "contain",
                  scrollBehavior: "smooth",
                  flex: "1 1 auto"
                }}
                onWheel={(e) => {
                  e.stopPropagation();
                  // Allow scrolling within the container
                }}
                onTouchMove={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="p-4 md:p-6 space-y-6 pb-8 min-h-full">
                  {/* Project Image */}
                  <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-xl overflow-hidden border border-border bg-muted/50 shrink-0">
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      className="object-contain bg-muted/30 p-2"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                    />
                  </div>

                  {/* Links Section */}
                  <div className="flex flex-wrap items-center gap-3 pb-4 border-b border-border shrink-0">
                    {project.github && (
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <Button variant="outline" size="sm" className="gap-2 shrink-0">
                          <Github className="h-4 w-4 shrink-0" />
                          <span className="hidden sm:inline">View on GitHub</span>
                          <span className="sm:hidden">GitHub</span>
                        </Button>
                      </Link>
                    )}
                    {project.live && project.live !== "#" && (
                      <Link href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <Button variant="default" size="sm" className="gap-2 shrink-0">
                          <ExternalLink className="h-4 w-4 shrink-0" />
                          <span className="hidden sm:inline">Visit Website</span>
                          <span className="sm:hidden">Website</span>
                        </Button>
                      </Link>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4 text-foreground min-h-0">
                    {project.content}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
