"use client";
import { Github, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030303] border-t border-white/5 px-6 py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto mb-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-9"
        >
          <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-fuchsia-400/10 blur-3xl" />
          <div className="absolute -bottom-28 left-12 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-white/25">Have an idea?</p>
              <h2 className="max-w-xl text-3xl font-bold leading-tight text-white/90 sm:text-4xl">
                Let&apos;s make something that feels alive.
              </h2>
            </div>
            <a
              href="https://t.me/VANUSKINSLOVE"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(255,255,255,0.14)]"
            >
              Message me
              <Send size={15} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/18 text-sm font-light">
          © 2025 <span className="text-white/45 font-medium">Vanuskins</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/Vanuskins" target="_blank" rel="noopener noreferrer"
             className="p-2 rounded-lg bg-white/4 border border-white/8 hover:bg-white/10 hover:border-white/15 transition-all duration-300">
            <Github size={14} className="text-white/35 hover:text-white/70 transition-colors" />
          </a>
          <a href="https://t.me/VANUSKINSLOVE" target="_blank" rel="noopener noreferrer"
             className="p-2 rounded-lg bg-white/4 border border-white/8 hover:bg-white/10 hover:border-white/15 transition-all duration-300">
            <Send size={14} className="text-white/35 hover:text-white/70 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
