"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

interface HeroProps {
  name: string;
  summary: string;
  email: string;
  location: string;
}

export function HeroSection({ name, summary, email, location }: HeroProps) {
  const [willChange, setWillChange] = useState<"transform, opacity" | "auto">(
    "transform, opacity"
  );

  return (
    <motion.section
      className="md:col-span-7 bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group"
      initial="initial"
      animate="animate"
      variants={fadeUp}
      style={{ willChange }}
      onAnimationComplete={() => setWillChange("auto")}>
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#ccff00]/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />

      <Badge className="w-fit mb-6 px-4 py-1.5 bg-[#1a1a1a] border-[#333] text-zinc-300 rounded-full text-sm">
        <span className="w-2 h-2 rounded-full bg-[#ccff00] mr-2 animate-pulse" />
        Available for work
      </Badge>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
        Finance & Accounting <br />
        <span className="text-[#ccff00]">specialist.</span>
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
