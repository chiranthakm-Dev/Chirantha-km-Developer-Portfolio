"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application, SPEObject, SplineEvent } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { Skill, SkillNames, SKILLS, KEYBOARD_SKILLS } from "@/data/constants";
import { sleep } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloader } from "./preloader";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { Section, getKeyboardState } from "./animated-background-config";
import { useSounds } from "./realtime/hooks/use-sounds";
import { SkillModal } from "./ui/skill-modal";

gsap.registerPlugin(ScrollTrigger);

const AnimatedBackground = () => {
  const { isLoading, bypassLoading } = usePreloader();
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const splineContainer = useRef<HTMLDivElement>(null);
  const [splineApp, setSplineApp] = useState<Application>();
  const selectedSkillRef = useRef<Skill | null>(null);

  const { playPressSound, playReleaseSound } = useSounds();

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>("hero");

  // Animation controllers refs
  const bongoAnimationRef = useRef<{ start: () => void; stop: () => void }>();
  const keycapAnimationsRef = useRef<{ start: () => void; stop: () => void }>();

  const [keyboardRevealed, setKeyboardRevealed] = useState(false);
  const router = useRouter();

  // --- Event Handlers ---

  // Name mapping for flexible skill matching (handles case variations and aliases)
  const SKILL_NAME_MAPPING: Record<string, string> = {
    "python": "python", "py": "python",
    "c": "c",
    "c++": "cpp", "cpp": "cpp", "cplusplus": "cpp",
    "react": "react", "reactjs": "react", "react.js": "react",
    "github": "github", "gh": "github",
    "vercel": "vercel",
    "llm": "llm", "llms": "llm", "large language models": "llm",
    "java": "java",
    "go": "go", "golang": "go",
    "kotlin": "kotlin",
    "js": "js", "javascript": "js",
    "sql": "sql",
    "mle": "mle", "machine learning engineering": "mle",
    "tensorflow": "tensorflow", "tf": "tensorflow",
    "scikit": "scikit", "scikit-learn": "scikit", "sklearn": "scikit",
    "fastapi": "fastapi", "fast-api": "fastapi",
    "docker": "docker",
    "gcp": "gcp", "google cloud": "gcp", "google cloud platform": "gcp",
    "mongodb": "mongodb", "mongo": "mongodb",
    "postgres": "postgres", "postgresql": "postgres", "pg": "postgres",
    "kubernetes": "kubernetes", "k8s": "kubernetes", "kube": "kubernetes",
    "redhat": "redhat", "red hat": "redhat", "red hat linux": "redhat",
    "restapi": "restapi", "rest api": "restapi", "rest": "restapi",
    "cybersec": "cybersec", "cybersecurity": "cybersec", "security": "cybersec",
    "fintech": "fintech", "fin tech": "fintech",
  };

  // Helper to normalize skill name
  const normalizeSkillName = (skillName: string): string => {
    const normalizedName = skillName.toLowerCase().trim();
    return SKILL_NAME_MAPPING[normalizedName] || normalizedName;
  };

  // Helper to check if skill is in KEYBOARD_SKILLS (only the 25 specified skills)
  const isValidKeyboardSkill = (skillName: string): boolean => {
    const mappedName = normalizeSkillName(skillName);
    return KEYBOARD_SKILLS.some((skill) => skill.name === mappedName);
  };
  
  // Helper to get skill by name (with flexible matching)
  const getSkillByName = (skillName: string): Skill | undefined => {
    const mappedName = normalizeSkillName(skillName);
    return KEYBOARD_SKILLS.find((skill) => skill.name === mappedName) || SKILLS[mappedName as SkillNames];
  };

  // Hover handler removed - only click/press will open modal

  const handleSplineInteractions = () => {
    if (!splineApp) return;

    const isInputFocused = () => {
      const activeElement = document.activeElement;
      return (
        activeElement &&
        (activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA" ||
          (activeElement as HTMLElement).isContentEditable)
      );
    };

    splineApp.addEventListener("keyUp", () => {
      if (!splineApp || isInputFocused()) return;
      playReleaseSound();
      setIsSkillModalOpen(false);
      setSelectedSkill(null);
      selectedSkillRef.current = null;
      if (splineApp.getVariable("heading") && splineApp.getVariable("desc")) {
      splineApp.setVariable("heading", "");
      splineApp.setVariable("desc", "");
      }
    });
    splineApp.addEventListener("keyDown", (e: SplineEvent) => {
      if (!splineApp || isInputFocused()) return;
      
      const targetName = e.target.name;
      console.log("KeyDown event on:", targetName); // Debug log
      
      // Only respond to valid keyboard skills (the 25 specified)
      if (!isValidKeyboardSkill(targetName)) {
        console.log("Invalid skill:", targetName); // Debug log
        return;
      }
      
      const skill = getSkillByName(targetName);
      if (skill && isValidKeyboardSkill(skill.name)) {
        console.log("Opening modal for:", skill.label); // Debug log
        playPressSound();
        setSelectedSkill(skill);
        setIsSkillModalOpen(true);
        selectedSkillRef.current = skill;
      }
    });
    
    // Click event for mouse/touch interactions (replaces hover)
    splineApp.addEventListener("mouseDown", (e: SplineEvent) => {
      if (!splineApp || isInputFocused()) return;
      
      const targetName = e.target.name;
      console.log("MouseDown event on:", targetName); // Debug log
      
      // Only respond to valid keyboard skills (the 25 specified)
      if (!isValidKeyboardSkill(targetName)) {
        console.log("Invalid skill (click):", targetName); // Debug log
        return;
      }
      
      const skill = getSkillByName(targetName);
      if (skill && isValidKeyboardSkill(skill.name)) {
        console.log("Opening modal for (click):", skill.label); // Debug log
        playPressSound();
        setSelectedSkill(skill);
        setIsSkillModalOpen(true);
        selectedSkillRef.current = skill;
      }
    });
    
    // Removed mouseHover event - popup opens only on click/press (keyDown or mouseDown)
  };

  // --- Animation Setup Helpers ---

  const createSectionTimeline = (
    triggerId: string,
    targetSection: Section,
    prevSection: Section,
    start: string = "top 50%",
    end: string = "bottom bottom"
  ) => {
    if (!splineApp) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: triggerId,
        start,
        end,
        scrub: true,
        onEnter: () => {
          setActiveSection(targetSection);
          const state = getKeyboardState({ section: targetSection, isMobile });
          gsap.to(kbd.scale, { ...state.scale, duration: 1 });
          gsap.to(kbd.position, { ...state.position, duration: 1 });
          gsap.to(kbd.rotation, { ...state.rotation, duration: 1 });
        },
        onLeaveBack: () => {
          setActiveSection(prevSection);
          const state = getKeyboardState({ section: prevSection, isMobile, });
          gsap.to(kbd.scale, { ...state.scale, duration: 1 });
          gsap.to(kbd.position, { ...state.position, duration: 1 });
          gsap.to(kbd.rotation, { ...state.rotation, duration: 1 });
        },
      },
    });
  };

  const setupScrollAnimations = () => {
    if (!splineApp || !splineContainer.current) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;

    // Initial state
    const heroState = getKeyboardState({ section: "hero", isMobile });
    gsap.set(kbd.scale, heroState.scale);
    gsap.set(kbd.position, heroState.position);

    // Section transitions
    createSectionTimeline("#skills", "skills", "hero");
    createSectionTimeline("#projects", "projects", "skills", "top 70%");
    createSectionTimeline("#contact", "contact", "projects", "top 30%");
  };

  const getBongoAnimation = () => {
    const framesParent = splineApp?.findObjectByName("bongo-cat");
    const frame1 = splineApp?.findObjectByName("frame-1");
    const frame2 = splineApp?.findObjectByName("frame-2");

    if (!frame1 || !frame2 || !framesParent) {
      return { start: () => { }, stop: () => { } };
    }

    let interval: NodeJS.Timeout;
    const start = () => {
      let i = 0;
      framesParent.visible = true;
      interval = setInterval(() => {
        if (i % 2) {
          frame1.visible = false;
          frame2.visible = true;
        } else {
          frame1.visible = true;
          frame2.visible = false;
        }
        i++;
      }, 100);
    };
    const stop = () => {
      clearInterval(interval);
      framesParent.visible = false;
      frame1.visible = false;
      frame2.visible = false;
    };
    return { start, stop };
  };

  const getKeycapsAnimation = () => {
    if (!splineApp) return { start: () => { }, stop: () => { } };

    let tweens: gsap.core.Tween[] = [];
    const removePrevTweens = () => tweens.forEach((t) => t.kill());

    const start = () => {
      removePrevTweens();
      KEYBOARD_SKILLS
        .sort(() => Math.random() - 0.5)
        .forEach((skill, idx) => {
          const keycap = splineApp.findObjectByName(skill.name);
          if (!keycap) return;
          const t = gsap.to(keycap.position, {
            y: Math.random() * 200 + 200,
            duration: Math.random() * 2 + 2,
            delay: idx * 0.6,
            repeat: -1,
            yoyo: true,
            yoyoEase: "none",
            ease: "elastic.out(1,0.3)",
          });
          tweens.push(t);
        });
    };

    const stop = () => {
      removePrevTweens();
      KEYBOARD_SKILLS.forEach((skill) => {
        const keycap = splineApp.findObjectByName(skill.name);
        if (!keycap) return;
        const t = gsap.to(keycap.position, {
          y: 0,
          duration: 4,
          repeat: 1,
          ease: "elastic.out(1,0.7)",
        });
        tweens.push(t);
      });
      setTimeout(removePrevTweens, 1000);
    };

    return { start, stop };
  };

  const updateKeyboardTransform = async () => {
    if (!splineApp) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;

    kbd.visible = false;
    await sleep(400);
    kbd.visible = true;
    setKeyboardRevealed(true);

    const currentState = getKeyboardState({ section: activeSection, isMobile });
    gsap.fromTo(
      kbd.scale,
      { x: 0.01, y: 0.01, z: 0.01 },
      {
        ...currentState.scale,
        duration: 1.5,
        ease: "elastic.out(1, 0.6)",
      }
    );

    const allObjects = splineApp.getAllObjects();
    const keycaps = allObjects.filter((obj) => obj.name === "keycap");

    await sleep(900);

    if (isMobile) {
      const mobileKeyCaps = allObjects.filter((obj) => obj.name === "keycap-mobile");
      mobileKeyCaps.forEach((keycap) => { keycap.visible = true; });
    } else {
      const desktopKeyCaps = allObjects.filter((obj) => obj.name === "keycap-desktop");
      desktopKeyCaps.forEach(async (keycap, idx) => {
        await sleep(idx * 70);
        keycap.visible = true;
      });
    }

    keycaps.forEach(async (keycap, idx) => {
      keycap.visible = false;
      await sleep(idx * 70);
      keycap.visible = true;
      gsap.fromTo(
        keycap.position,
        { y: 200 },
        { y: 50, duration: 0.5, delay: 0.1, ease: "bounce.out" }
      );
    });
  };

  // --- Effects ---

  // Initialize GSAP and Spline interactions
  useEffect(() => {
    if (!splineApp) return;
    
    // Debug: List all objects in the scene to see what keycaps exist
    const allObjects = splineApp.getAllObjects();
    console.log("=== Spline Scene Objects ===");
    const objectNames = allObjects.map(obj => obj.name).filter(name => name);
    console.log("Total objects:", allObjects.length);
    console.log("Object names:", objectNames);
    console.log("Expected skill names:", KEYBOARD_SKILLS.map(s => s.name));
    
    // Check which skills have matching keycaps
    const foundSkills = KEYBOARD_SKILLS.filter(skill => {
      const found = allObjects.find(obj => obj.name === skill.name || obj.name === skill.name.toLowerCase());
      return !!found;
    });
    console.log("Found keycaps for skills:", foundSkills.map(s => s.name));
    console.log("Missing keycaps:", KEYBOARD_SKILLS.filter(s => !foundSkills.includes(s)).map(s => s.name));
    console.log("===========================");
    
    handleSplineInteractions();
    setupScrollAnimations();
    bongoAnimationRef.current = getBongoAnimation();
    keycapAnimationsRef.current = getKeycapsAnimation();
    return () => {
      bongoAnimationRef.current?.stop()
      keycapAnimationsRef.current?.stop()
    }

  }, [splineApp, isMobile]);

  // Handle keyboard text visibility based on theme and section
  useEffect(() => {
    if (!splineApp) return;
    const textDesktopDark = splineApp.findObjectByName("text-desktop-dark");
    const textDesktopLight = splineApp.findObjectByName("text-desktop");
    const textMobileDark = splineApp.findObjectByName("text-mobile-dark");
    const textMobileLight = splineApp.findObjectByName("text-mobile");

    if (!textDesktopDark || !textDesktopLight || !textMobileDark || !textMobileLight) return;

    const setVisibility = (
      dDark: boolean,
      dLight: boolean,
      mDark: boolean,
      mLight: boolean
    ) => {
      textDesktopDark.visible = dDark;
      textDesktopLight.visible = dLight;
      textMobileDark.visible = mDark;
      textMobileLight.visible = mLight;
    };

    if (activeSection !== "skills") {
      setVisibility(false, false, false, false);
    } else if (theme === "dark") {
      isMobile
        ? setVisibility(false, false, false, true)
        : setVisibility(false, true, false, false);
    } else {
      isMobile
        ? setVisibility(false, false, true, false)
        : setVisibility(true, false, false, false);
    }
  }, [theme, splineApp, isMobile, activeSection]);

  // Remove the old Spline variable setting since we're using modal now
  // useEffect for setting Spline variables removed - using modal instead

  // Handle rotation and teardown animations based on active section
  useEffect(() => {
    if (!splineApp) return;

    let rotateKeyboard: gsap.core.Tween | undefined;
    let teardownKeyboard: gsap.core.Tween | undefined;

    const kbd = splineApp.findObjectByName("keyboard");

    if (kbd) {
      rotateKeyboard = gsap.to(kbd.rotation, {
        y: Math.PI * 2 + kbd.rotation.y,
        duration: 10,
        repeat: -1,
        yoyo: true,
        yoyoEase: true,
        ease: "back.inOut",
        delay: 2.5,
        paused: true, // Start paused
      });

      teardownKeyboard = gsap.fromTo(
        kbd.rotation,
        { y: 0, x: -Math.PI, z: 0 },
        {
          y: -Math.PI / 2,
          duration: 5,
          repeat: -1,
          yoyo: true,
          yoyoEase: true,
          delay: 2.5,
          immediateRender: false,
          paused: true,
        }
      );
    }

    const manageAnimations = async () => {
      // Reset text if not in skills
      if (activeSection !== "skills") {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }

      // Handle Rotate/Teardown Tweens
      if (activeSection === "hero") {
        rotateKeyboard?.restart();
        teardownKeyboard?.pause();
      } else if (activeSection === "contact") {
        rotateKeyboard?.pause();
      } else {
        rotateKeyboard?.pause();
        teardownKeyboard?.pause();
      }

      // Handle Bongo Cat
      if (activeSection === "projects") {
        await sleep(300);
        bongoAnimationRef.current?.start();
      } else {
        await sleep(200);
        bongoAnimationRef.current?.stop();
      }

      // Handle Contact Section Animations
      if (activeSection === "contact") {
        await sleep(600);
        teardownKeyboard?.restart();
        keycapAnimationsRef.current?.start();
      } else {
        await sleep(600);
        teardownKeyboard?.pause();
        keycapAnimationsRef.current?.stop();
      }
    };

    manageAnimations();

    return () => {
      rotateKeyboard?.kill();
      teardownKeyboard?.kill();
    };
  }, [activeSection, splineApp]);

  // Reveal keyboard on load/route change
  useEffect(() => {
    const hash = activeSection === "hero" ? "#" : `#${activeSection}`;
    router.push("/" + hash, { scroll: false });

    if (!splineApp || isLoading || keyboardRevealed) return;
    updateKeyboardTransform();
  }, [splineApp, isLoading, activeSection]);

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Spline
        className="w-full h-full fixed"
        ref={splineContainer}
        onLoad={(app: Application) => {
          setSplineApp(app);
          bypassLoading();
        }}
        scene="/assets/skills-keyboard.spline"
      />
    </Suspense>
      <SkillModal
        skill={selectedSkill}
        isOpen={isSkillModalOpen}
        onClose={() => {
          setIsSkillModalOpen(false);
          setSelectedSkill(null);
          selectedSkillRef.current = null;
          if (splineApp) {
            playReleaseSound();
            splineApp.setVariable("heading", "");
            splineApp.setVariable("desc", "");
          }
        }}
      />
    </>
  );
};

export default AnimatedBackground;
