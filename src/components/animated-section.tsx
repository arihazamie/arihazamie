"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

interface Props {
  children: ReactNode;
  className?: string;
  /** Stagger support: 0 | 0.1 | 0.2 | 0.3 */
  delay?: number;
  /** "onLoad" animates immediately; "onView" animates when scrolled into view */
  animate?: "onLoad" | "onView";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  animate = "onView",
}: Props) {
  // will-change is set before animation so the browser can pre-promote the
  // layer to the GPU. It is cleared after animation completes to free memory.
  const [willChange, setWillChange] = useState<"transform, opacity" | "auto">(
    "transform, opacity"
  );

  const variants = {
    ...fadeUp,
    transition: { ...fadeUp.transition, delay },
  };

  const sharedProps = {
    className,
    style: { willChange },
    variants,
    onAnimationComplete: () => setWillChange("auto"),
  } as const;

  if (animate === "onLoad") {
    return (
      <motion.div
        {...sharedProps}
        initial="initial"
        animate="animate">
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      {...sharedProps}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}>
      {children}
    </motion.div>
  );
}
