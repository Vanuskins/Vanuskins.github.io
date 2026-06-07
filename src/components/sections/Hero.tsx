"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";

const FONT_STYLES = [
  { id: "bold", style: { fontFamily: "inherit", fontStyle: "normal" as const, fontWeight: 700, letterSpacing: "-0.04em" }, gradient: "from-white via-white/90 to-white/20" },
  { id: "serif", style: { fontFamily: "'Playfair Display', serif", fontStyle: "italic" as const, fontWeight: 700, letterSpacing: "-0.02em" }, gradient: "from-violet-200 via-purple-100 to-white/20" },
  { id: "mono", style: { fontFamily: "'Space Mono', monospace", fontStyle: "normal" as const, fontWeight: 700, letterSpacing: "-0.06em" }, gradient: "from-emerald-200 via-green-100 to-white/20" },
  { id: "bebas", style: { fontFamily: "'Bebas Neue', sans-serif", fontStyle: "normal" as const, fontWeight: 400, letterSpacing: "0.05em" }, gradient: "from-orange-200 via-amber-100 to-white/20" },
  { id: "script", style: { fontFamily: "'Dancing Script', cursive", fontStyle: "normal" as const, fontWeight: 700, letterSpacing: "0.01em" }, gradient: "from-pink-200 via-rose-100 to-white/20" },
];

export default function Hero() {
  const [fontIndex, setFontIndex] = useState(0);
  const currentFont = FONT_STYLES[fontIndex];
  const handleNickClick = () => setFontIndex((prev) => (prev + 1) % FONT_STYLES.length);
  const words = "VANUSKINS".split(" ");

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 h-full w-full">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.6}
          particleDensity={130}
          particleColor="#FFFFFF"
          speed={0.7}
          className="h-full w-full"
        />
        <motion.div
          className="absolute left-[12%] top-[24%] h-28 w-28 rounded-full border border-violet-300/15 bg-violet-400/5 blur-[0.2px]"
          animate={{ y: [0, -18, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[14%] top-[34%] h-20 w-20 rounded-[2rem] border border-cyan-200/15 bg-cyan-300/5"
          animate={{ y: [0, 20, 0], rotate: [12, -10, 12] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />
        <motion.div
          className="absolute bottom-[18%] left-[22%] h-3 w-3 rounded-full bg-fuchsia-300/50 shadow-[0_0_28px_rgba(217,70,239,0.75)]"
          animate={{ scale: [1, 1.6, 1], opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_78%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/10 to-[#030303]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-white/[0.04] border border-white/[0.1] text-white/50 backdrop-blur-sm"
        >
          Designer &amp; Creative Developer
        </motion.div>

        <motion.h1
          whileTap={{ scale: 0.96 }}
          onClick={handleNickClick}
          className={`text-7xl sm:text-9xl lg:text-[11rem] leading-none bg-gradient-to-b ${
            currentFont.gradient
          } bg-clip-text text-transparent cursor-pointer select-none transition-all duration-300`}
          style={currentFont.style}
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-4 last:mr-0">
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={`${wordIndex}-${letterIndex}`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: wordIndex * 0.1 + letterIndex * 0.035,
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="max-w-sm text-sm text-white/30 leading-relaxed font-light tracking-wide"
        >
          Crafting digital experiences where aesthetics meet function.<br />Minimal by design, expressive by nature.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-2"
        >
          <a href="#projects" className="group rounded-[1.15rem] border border-white/10 bg-white/95 px-7 py-3 text-sm font-semibold text-black shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl">
            <span className="opacity-90 transition-opacity group-hover:opacity-100">View Projects</span>
            <ArrowRight size={16} className="ml-2 inline-block opacity-70 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100" />
          </a>
          <a href="#about" className="px-7 py-3 rounded-[1.15rem] text-sm font-medium text-white/55 hover:text-white border border-white/10 hover:border-white/20 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5">
            About me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/18">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ArrowDown size={13} className="text-white/18" />
        </motion.div>
      </motion.div>
    </section>
  );
}
