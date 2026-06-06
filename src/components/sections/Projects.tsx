"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { number: "01", title: "AuraUI", description: "A design system built around glass morphism and fluid motion. Components that breathe life into any product.", tags: ["Design System","Figma","React"], glow: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.15)", href: "#" },
  { number: "02", title: "Spectra Dashboard", description: "Analytics platform with a cinematic dark interface. Complex data, made effortlessly readable.", tags: ["Dashboard","Next.js","Tailwind"], glow: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.15)", href: "#" },
  { number: "03", title: "Void Typeface", description: "A custom variable typeface for digital interfaces. Geometric precision meets organic warmth.", tags: ["Typography","Typeface","Branding"], glow: "rgba(244,63,94,0.08)", border: "rgba(244,63,94,0.15)", href: "#" },
  { number: "04", title: "Motion Canvas", description: "Generative art experiments using WebGL and GLSL. Every render is unique, never the same twice.", tags: ["WebGL","GLSL","Creative Coding"], glow: "rgba(251,146,60,0.08)", border: "rgba(251,146,60,0.15)", href: "#" },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="projects" className="relative bg-[#030303] py-36 px-6" ref={ref}>
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-xs tracking-[0.28em] uppercase text-white/22 mb-5">Selected work</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-white/90 mb-16">Projects</motion.h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.a key={p.number} href={p.href}
              initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
              whileHover={{ scale: 1.025 }}
              className="group relative flex flex-col justify-between gap-4 p-6 rounded-2xl overflow-hidden cursor-pointer min-h-[230px]"
              style={{ background: `radial-gradient(ellipse at top left, ${p.glow} 0%, transparent 60%), rgba(255,255,255,0.02)`, border: `1px solid ${p.border}` }}>
              <div className="flex items-start justify-between">
                <span className="text-xs font-mono text-white/18">{p.number}</span>
                <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="p-1.5 rounded-lg bg-white/8 border border-white/12">
                  <ArrowUpRight size={13} className="text-white/60" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white/90 mb-2">{p.title}</h3>
                <p className="text-sm text-white/38 leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (<span key={t} className="px-2.5 py-0.5 rounded-md text-[11px] font-medium text-white/32 bg-white/4 border border-white/8">{t}</span>))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
