"use client";

import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Users, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Achievement {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  badge?: string;
  icon: React.ReactNode;
  type: "competition" | "leadership" | "research" | "certification";
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "indegene-hackathon",
    title: "Indegene Hackathon 2025",
    subtitle: "AI for Data Handling",
    description: "Ranked in Top 5 as a solo contestant among 2000+ teams of working professionals.",
    badge: "Top 5",
    icon: <Trophy className="w-5 h-5" />,
    type: "competition",
  },
  {
    id: "inceptrix-hackathon",
    title: "Inceptrix Hackathon",
    subtitle: "Hostena, Pan-India",
    description: "Organized event of 1000+ teams as PR & Outreach Lead and Tech Lead.",
    badge: "Organizer",
    icon: <Users className="w-5 h-5" />,
    type: "leadership",
  },
  {
    id: "echo-club",
    title: "Founder of Echo Club",
    subtitle: "Student-led Club",
    description: "Student-led club focusing on business-driven technologies and development.",
    badge: "Founder",
    icon: <Sparkles className="w-5 h-5" />,
    type: "leadership",
  },
  {
    id: "kaggle",
    title: "Kaggle Competition",
    subtitle: "Tabular Playground Series",
    description: "Achieved Top 12% in Tabular Playground Series out of 5000+ participants.",
    badge: "Top 12%",
    icon: <Award className="w-5 h-5" />,
    type: "competition",
  },
  {
    id: "fast-fashion-research",
    title: "Published Research (2024)",
    subtitle: "How Fast Fashion Impacts Gen Z Mental Health",
    description: "Economics-driven interdisciplinary study exploring the intersection of fast fashion consumption patterns and mental health outcomes in Generation Z.",
    badge: "Published",
    icon: <BookOpen className="w-5 h-5" />,
    type: "research",
  },
  {
    id: "ai-hallucinations-research",
    title: "Ongoing Research (2025)",
    subtitle: "Reducing Hallucinations in AI Systems using Contrastive Prompting",
    description: "Currently under peer review. Investigating novel approaches to reduce AI hallucinations through contrastive prompting techniques.",
    badge: "Under Review",
    icon: <BookOpen className="w-5 h-5" />,
    type: "research",
  },
  {
    id: "google-cloud-bootcamp",
    title: "Google Cloud Bootcamp",
    subtitle: "Google Developers",
    description: "Achieved Top 5% among 500+ participants in the Google Cloud Bootcamp sponsored by Google Developers.",
    badge: "Top 5%",
    icon: <GraduationCap className="w-5 h-5" />,
    type: "certification",
  },
];

const getTypeColor = (type: Achievement["type"]) => {
  switch (type) {
    case "competition":
      return "text-blue-500 bg-blue-500/10 border-blue-500/20";
    case "leadership":
      return "text-purple-500 bg-purple-500/10 border-purple-500/20";
    case "research":
      return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
    case "certification":
      return "text-orange-500 bg-orange-500/10 border-orange-500/20";
    default:
      return "text-muted-foreground bg-muted border-border";
  }
};

const AchievementsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      {/* Blur overlay for background when achievements section is in view */}
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
        id="achievements"
        className="flex flex-col items-center justify-center min-h-screen py-20 z-10 pointer-events-auto relative"
      >
        <div ref={sectionRef} className="w-full max-w-4xl px-4 md:px-8 mx-auto">
          <SectionHeader
            id="achievements"
            title="Achievements & Research"
            desc="Highlights of my journey and contributions."
            className="mb-12 md:mb-20"
          />

          <div className="flex flex-col gap-6 md:gap-8">
            {ACHIEVEMENTS.map((achievement, index) => (
              <AchievementCard key={achievement.id} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card/95 backdrop-blur-sm text-card-foreground border-border/80",
          "hover:border-primary/40 hover:bg-card transition-all duration-300",
          "shadow-md hover:shadow-lg hover:scale-[1.02]"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <div className="flex items-start gap-3">
                <div className={cn(
                  "p-2 rounded-lg border-2 mt-1 shrink-0",
                  getTypeColor(achievement.type)
                )}>
                  {achievement.icon}
                </div>
                <div className="flex-1 space-y-1">
                  <CardTitle className="text-xl font-bold tracking-tight text-foreground">
                    {achievement.title}
                  </CardTitle>
                  {achievement.subtitle && (
                    <div className="text-base font-medium text-foreground/80">
                      {achievement.subtitle}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {achievement.badge && (
              <Badge 
                variant="outline" 
                className={cn(
                  "w-fit font-mono text-xs font-normal shrink-0 border-2",
                  getTypeColor(achievement.type)
                )}
              >
                {achievement.badge}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-base text-foreground/90 leading-relaxed">
            {achievement.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AchievementsSection;
