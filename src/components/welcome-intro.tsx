"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Phase = "counting" | "name" | "exiting" | "done";

const COUNT_DURATION_MS = 2400; // durasi counter 0 -> 100%
const NAME_HOLD_MS = 1100; // lama nama ditampilkan sebelum exit
const EXIT_DURATION_S = 1.4; // fade-out gradual, bukan swipe

const ACCENT = "#ccff00";
const BG = "#0a0a0a";
const BORDER = "#262626";

// Cinematic easing — deceleration curve, tidak linear
const EASE_OUT_CINEMATIC = [0.16, 1, 0.3, 1] as const;

/** Ease-out cubic, dipakai untuk progress counter supaya terasa "melambat" mendekati 100% */
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

interface WelcomeIntroProps {
  children: React.ReactNode;
}

export default function WelcomeIntro({ children }: WelcomeIntroProps) {
  const prefersReducedMotion = useReducedMotion();

  const [phase, setPhase] = useState<Phase>("counting");
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const skippedRef = useRef(false);

  const goToName = useCallback(() => {
    setCount(100);
    setPhase("name");
  }, []);

  const handleSkip = useCallback(() => {
    if (skippedRef.current) return;
    skippedRef.current = true;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setCount(100);
    setPhase("exiting");
  }, []);

  useEffect(() => {
    setMounted(true);
    // if (prefersReducedMotion) {
    //   setCount(100);
    //   setPhase("done");
    // }
  }, []);

  // Animasi counter 0% -> 100%, dengan easing supaya lebih smooth & cinematic
  useEffect(() => {
    if (phase !== "counting") return;

    const tick = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const linear = Math.min(elapsed / COUNT_DURATION_MS, 1);
      const eased = easeOutCubic(linear);
      setCount(Math.floor(eased * 100));

      if (linear < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        goToName();
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [phase, goToName]);

  useEffect(() => {
    if (phase !== "name") return;
    const timer = setTimeout(() => setPhase("exiting"), NAME_HOLD_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  const handleExitComplete = useCallback(() => {
    if (phase === "exiting") setPhase("done");
  }, [phase]);

  const showOverlay = phase !== "done";

  return (
    <>
      <div aria-hidden={mounted && showOverlay}>{children}</div>

      <AnimatePresence onExitComplete={handleExitComplete}>
        {mounted && showOverlay && phase !== "exiting" && (
          <IntroOverlay
            key="intro-overlay"
            phase={phase}
            count={count}
            onSkip={handleSkip}
          />
        )}
        {mounted && showOverlay && phase === "exiting" && (
          <IntroOverlay
            key="intro-overlay-exit"
            phase={phase}
            count={100}
            onSkip={handleSkip}
            exiting
          />
        )}
      </AnimatePresence>
    </>
  );
}

interface IntroOverlayProps {
  phase: Phase;
  count: number;
  onSkip: () => void;
  exiting?: boolean;
}

function IntroOverlay({ phase, count, onSkip, exiting }: IntroOverlayProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: BG }}
      initial={{ opacity: 1, filter: "blur(0px)" }}
      animate={
        exiting
          ? { opacity: 0, filter: "blur(6px)" }
          : { opacity: 1, filter: "blur(0px)" }
      }
      exit={{ opacity: 0, filter: "blur(6px)" }}
      transition={{ duration: EXIT_DURATION_S, ease: EASE_OUT_CINEMATIC }}>
      {/* Ambient glow, konsisten dengan hero-section.tsx */}
      <div className="pointer-events-none absolute top-0 right-0 h-[30rem] w-[30rem] -mr-40 -mt-40 rounded-full bg-[#ccff00]/5 blur-[60px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[24rem] w-[24rem] -mb-32 -ml-32 rounded-full bg-[#ccff00]/5 blur-[60px]" />

      {/* Sistem partikel ambient, drift halus di seluruh layar */}
      <ParticleField
        active={phase !== "exiting"}
        fadingOut={exiting}
      />

      {/* Objek geometris melayang di belakang teks — memberi kesan depth & cinematic */}
      <FloatingObjects phase={phase} />

      {/* Vignette halus supaya fokus tetap di tengah */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(10,10,10,0.65) 100%)",
        }}
      />

      {/* Counter / Nama di tengah */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {phase === "counting" && (
            <motion.div
              key="counter"
              className="font-sans text-6xl font-bold tracking-tight sm:text-8xl"
              style={{ color: ACCENT }}
              initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{
                opacity: 0,
                filter: "blur(6px)",
                transition: { duration: 0.4, ease: EASE_OUT_CINEMATIC },
              }}
              transition={{ duration: 0.7, ease: EASE_OUT_CINEMATIC }}>
              {count.toString().padStart(2, "0")}
              <span className="text-3xl sm:text-5xl">%</span>
            </motion.div>
          )}

          {(phase === "name" || phase === "exiting") && (
            <motion.div
              key="name"
              className="font-sans text-4xl font-bold tracking-tight text-white sm:text-6xl"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: EASE_OUT_CINEMATIC }}>
              Ari <span style={{ color: ACCENT }}>Hazamie</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress bar tipis di bawah counter, transisi smooth (bukan linear) */}
        {phase === "counting" && (
          <motion.div
            className="mt-8 h-[2px] w-40 overflow-hidden rounded-full sm:w-56"
            style={{ backgroundColor: BORDER }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}>
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: ACCENT, width: `${count}%` }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </div>

      {/* Tombol skip */}
      <motion.button
        type="button"
        onClick={onSkip}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT_CINEMATIC }}
        className="absolute bottom-6 right-6 z-20 rounded-full border px-4 py-1.5 font-sans text-xs uppercase tracking-widest text-zinc-300 transition-colors hover:text-black sm:bottom-8 sm:right-8 sm:text-sm"
        style={{ borderColor: BORDER, backgroundColor: "#1a1a1a" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = ACCENT;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#1a1a1a";
        }}>
        Skip →
      </motion.button>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Particle field — canvas-based ambient dust, drift ke atas, cinematik       */
/* -------------------------------------------------------------------------- */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseAlpha: number;
  twinklePhase: number;
}

function ParticleField({
  active,
  fadingOut,
}: {
  active: boolean;
  fadingOut?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const opacityRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = Math.min(70, Math.floor((width * height) / 14000));
    particlesRef.current = Array.from({ length: COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.12,
      vy: -0.08 - Math.random() * 0.18,
      r: 0.6 + Math.random() * 1.6,
      baseAlpha: 0.15 + Math.random() * 0.45,
      twinklePhase: Math.random() * Math.PI * 2,
    }));

    let last = performance.now();

    const draw = (now: number) => {
      const dt = Math.min(now - last, 48);
      last = now;

      // Fade in/out sistem partikel secara halus
      const target = active ? 1 : 0;
      opacityRef.current += (target - opacityRef.current) * 0.04;

      ctx.clearRect(0, 0, width, height);

      if (opacityRef.current > 0.01) {
        for (const p of particlesRef.current) {
          p.x += p.vx * (dt / 16);
          p.y += p.vy * (dt / 16);
          p.twinklePhase += 0.015 * (dt / 16);

          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          const twinkle = 0.6 + 0.4 * Math.sin(p.twinklePhase);
          const alpha = p.baseAlpha * twinkle * opacityRef.current;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(204, 255, 0, ${alpha})`;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // active flag dibaca langsung lewat closure di atas; effect ini cuma trigger re-render
  }, [active, fadingOut]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Floating objects — bentuk geometris halus yang orbit lambat di belakang    */
/* teks utama, memberi kedalaman & rasa "cinematic set piece"                 */
/* -------------------------------------------------------------------------- */

function FloatingObjects({ phase }: { phase: Phase }) {
  const isExiting = phase === "exiting";

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center">
      {/* Ring besar, rotasi lambat & pulse halus */}
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute h-[26rem] w-[26rem] sm:h-[34rem] sm:w-[34rem]"
        initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
        animate={{
          opacity: isExiting ? 0 : 0.35,
          rotate: 360,
          scale: [0.94, 1, 0.94],
        }}
        transition={{
          opacity: { duration: 1.2, ease: EASE_OUT_CINEMATIC },
          rotate: { duration: 40, ease: "linear", repeat: Infinity },
          scale: { duration: 6, ease: "easeInOut", repeat: Infinity },
        }}>
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke={ACCENT}
          strokeOpacity="0.25"
          strokeWidth="0.75"
          strokeDasharray="2 10"
        />
      </motion.svg>

      {/* Ring kedua, arah putar berlawanan, lebih kecil */}
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute h-[18rem] w-[18rem] sm:h-[24rem] sm:w-[24rem]"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{
          opacity: isExiting ? 0 : 0.4,
          rotate: -360,
        }}
        transition={{
          opacity: { duration: 1.2, ease: EASE_OUT_CINEMATIC, delay: 0.1 },
          rotate: { duration: 28, ease: "linear", repeat: Infinity },
        }}>
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke={ACCENT}
          strokeOpacity="0.18"
          strokeWidth="0.5"
        />
      </motion.svg>

      {/* Titik-titik kecil yang mengorbit — "objek" pendukung */}
      {ORBIT_DOTS.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: isExiting ? 0 : dot.alpha,
            x: dot.path.map((p) => p.x),
            y: dot.path.map((p) => p.y),
          }}
          transition={{
            opacity: {
              duration: 0.8,
              ease: EASE_OUT_CINEMATIC,
              delay: 0.2 + i * 0.05,
            },
            x: { duration: dot.duration, ease: "linear", repeat: Infinity },
            y: { duration: dot.duration, ease: "linear", repeat: Infinity },
          }}
        />
      ))}

      {/* Kristal / diamond kecil yang melayang naik-turun perlahan */}
      <motion.div
        className="absolute -translate-x-32 translate-y-24 sm:-translate-x-48 sm:translate-y-32"
        initial={{ opacity: 0, y: 0 }}
        animate={{
          opacity: isExiting ? 0 : 0.5,
          y: [0, -14, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          opacity: { duration: 1, ease: EASE_OUT_CINEMATIC, delay: 0.3 },
          y: { duration: 5, ease: "easeInOut", repeat: Infinity },
          rotate: { duration: 8, ease: "easeInOut", repeat: Infinity },
        }}>
        <div
          className="h-2.5 w-2.5"
          style={{
            backgroundColor: ACCENT,
            opacity: 0.6,
            transform: "rotate(45deg)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute translate-x-36 -translate-y-16 sm:translate-x-52 sm:-translate-y-20"
        initial={{ opacity: 0, y: 0 }}
        animate={{
          opacity: isExiting ? 0 : 0.4,
          y: [0, 12, 0],
          rotate: [0, -30, 0],
        }}
        transition={{
          opacity: { duration: 1, ease: EASE_OUT_CINEMATIC, delay: 0.4 },
          y: { duration: 6.5, ease: "easeInOut", repeat: Infinity },
          rotate: { duration: 9, ease: "easeInOut", repeat: Infinity },
        }}>
        <div
          className="h-2 w-2 rounded-[2px]"
          style={{
            backgroundColor: ACCENT,
            opacity: 0.5,
            transform: "rotate(45deg)",
          }}
        />
      </motion.div>
    </div>
  );
}

// Jalur orbit sederhana untuk titik-titik pendukung (relatif terhadap pusat)
const ORBIT_DOTS = [
  {
    alpha: 0.6,
    duration: 18,
    path: [
      { x: 120, y: -40 },
      { x: 60, y: 100 },
      { x: -110, y: 30 },
      { x: -40, y: -110 },
      { x: 120, y: -40 },
    ],
  },
  {
    alpha: 0.45,
    duration: 24,
    path: [
      { x: -150, y: 10 },
      { x: -70, y: -120 },
      { x: 130, y: -60 },
      { x: 90, y: 120 },
      { x: -150, y: 10 },
    ],
  },
  {
    alpha: 0.5,
    duration: 21,
    path: [
      { x: 20, y: 150 },
      { x: 150, y: 50 },
      { x: 40, y: -140 },
      { x: -130, y: -30 },
      { x: 20, y: 150 },
    ],
  },
];
