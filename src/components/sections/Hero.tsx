"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030303]">
      <SparklesCore
        id="hero-sparkles"
        background="transparent"
        minSize={0.4}
        maxSize={1.8}
        particleDensity={100}
        className="absolute inset-0 w-full h-full"
        particleColor="#ffffff"
        speed={0.6}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(139,92,246,0.14) 0%, transparent 70%)" }} />
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-white/5 border border-white/10 text-white/40 backdrop-blur-sm">
          Designer &amp; Creative Developer
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="text-7xl sm:text-9xl lg:text-[11rem] font-bold tracking-tighter leading-none bg-gradient-to-b from-white via-white/85 to-white/15 bg-clip-text text-transparent select-none">
          Vanuskins
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="max-w-sm text-sm text-white/30 leading-relaxed font-light tracking-wide">
          Crafting digital experiences where aesthetics meet function.<br />Minimal by design, expressive by nature.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex items-center gap-3 mt-2">
          <a href="#projects"
             className="px-6 py-2.5 rounded-xl text-sm font-medium text-white bg-white/10 hover:bg-white/18 border border-white/15 hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03]">
            View Projects
          </a>
          <a href="#about"
             className="px-6 py-2.5 rounded-xl text-sm font-medium text-white/45 hover:text-white border border-white/8 hover:border-white/18 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03]">
            About me
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/18">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ArrowDown size={13} className="text-white/18" />
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </section>
  );
}
