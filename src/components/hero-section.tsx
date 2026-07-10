"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin } from "lucide-react";

interface HeroProps {
  name: string;
  summary: string;
  email: string;
  location: string;
}

export function HeroSection({ name, summary, email, location }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [willChange, setWillChange] = useState<"transform, opacity" | "auto">(
    "transform, opacity"
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const variants = prefersReducedMotion
    ? {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, ease: "easeOut" },
      };

  return (
    <motion.section
      suppressHydrationWarning
      className="md:col-span-7 bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group"
      initial={mounted ? "initial" : false}
      animate="animate"
      variants={variants}
      style={{ willChange }}
      onAnimationComplete={() => setWillChange("auto")}>
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#ccff00]/5 rounded-full blur-[60px] -mr-40 -mt-40 pointer-events-none will-change-transform transform-gpu" />

      <Badge className="w-fit mb-6 px-4 py-1.5 bg-[#1a1a1a] border-[#333] text-zinc-300 rounded-full text-sm">
        <span className="w-2 h-2 rounded-full bg-[#ccff00] mr-2 animate-pulse" />
        Available for work
      </Badge>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
        <span className="sr-only">Ari Hazamie – </span>
        Developer. Analyst. <br />
        <span className="text-[#ccff00]">Finance.</span>
      </h1>

      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10 text-justify">
        I&apos;m <strong className="text-white">{name}</strong>. {summary}
      </p>

      <div className="flex flex-wrap gap-4 mt-auto">
        <a
          href={`mailto:${email}`}
          className="px-6 py-3 bg-[#ccff00] text-black font-bold rounded-xl hover:bg-[#b3e600] transition-colors flex items-center gap-2">
          <Mail className="w-5 h-5" /> Let&apos;s Connect
        </a>
        <div className="px-6 py-3 bg-[#1a1a1a] border border-[#262626] text-zinc-300 font-medium rounded-xl flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#ccff00]" />
          {location}
        </div>
      </div>
    </motion.section>
  );
}