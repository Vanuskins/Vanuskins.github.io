"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Palette, WandSparkles } from "lucide-react";

const skills = [
  "UI / UX Design", "Figma", "React", "Next.js",
  "TypeScript", "Tailwind CSS", "Motion Design", "Prototyping",
  "Branding", "Design Systems",
];

const marqueeSkills = [...skills, ...skills, ...skills];

const stats = [
  { value: "3+",   label: "Years of experience" },
  { value: "40+",  label: "Projects shipped" },
  { value: "100%", label: "Attention to detail" },
];

const process = [
  { icon: Palette, title: "Visual taste", text: "Clean layouts, smooth contrast and tiny details that make the page feel premium." },
  { icon: WandSparkles, title: "Soft motion", text: "Subtle transitions, hover states and micro-interactions instead of noisy effects." },
  { icon: Code2, title: "Real product", text: "Components are built with Next.js, TypeScript and Tailwind, ready to evolve." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const f = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
  });

  return (
    <section id="about" className="relative bg-[#030303] py-36 px-6" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.07) 0%, transparent 70%)" }} />
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.p {...f(0)} className="text-xs tracking-[0.28em] uppercase text-white/22 mb-5">
          About me
        </motion.p>
        <motion.h2 {...f(0.1)} className="text-4xl sm:text-5xl font-bold text-white/90 leading-tight mb-12">
          I turn ideas into<br />
          <span className="text-white/28">beautiful interfaces.</span>
        </motion.h2>

        <motion.div {...f(0.14)} className="mb-14 grid gap-3 md:grid-cols-3">
          {process.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.045]"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-400/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-40" />
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Icon size={18} className="text-white/65" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-white/85">{title}</h3>
              <p className="text-sm leading-relaxed text-white/35">{text}</p>
            </div>
          ))}
        </motion.div>

        {/* Stats cards */}
        <motion.div {...f(0.18)} className="grid grid-cols-1 gap-4 mb-14 sm:grid-cols-3">
          {stats.map(({ value, label }) => (
            <div key={label}
              className="flex flex-col gap-2 px-6 py-5 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm hover:border-white/14 hover:bg-white/[0.05] transition-all duration-300">
              <p className="text-4xl sm:text-5xl font-bold text-white/90 leading-none">{value}</p>
              <p className="text-xs text-white/30 leading-snug">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Text block */}
        <div className="flex flex-col gap-5 max-w-2xl">
          <motion.p {...f(0.22)} className="text-[16px] leading-[1.85] text-white/55 font-light">
            I obsess over the details most people never notice —{" "}
            <span className="text-white font-medium">the weight of a typeface</span>,{" "}
            the curve of a button corner,{" "}
            <span className="text-white font-medium">the exact milliseconds of an easing curve</span>.
            That&apos;s where good design actually lives.
          </motion.p>
          <motion.p {...f(0.34)} className="text-[16px] leading-[1.85] text-white/55 font-light">
            My workflow bridges{" "}
            <span className="text-white font-medium">Figma and code</span> — I build systems
            that are not just beautiful, but{" "}
            <span className="text-white font-medium">real and maintainable</span>.
            Concept to component, design to deployment.
          </motion.p>
        </div>

        {/* Infinite marquee */}
        <motion.div {...f(0.55)} className="mt-14 overflow-hidden relative">
          <div
            className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #030303, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #030303, transparent)" }}
          />
          <motion.div
            className="flex gap-3 w-max"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {marqueeSkills.map((s, i) => (
              <span
                key={i}
                className="whitespace-nowrap px-4 py-2 rounded-xl text-xs font-medium text-white/45 bg-white/4 border border-white/8 backdrop-blur-sm hover:text-white/80 hover:border-white/18 transition-colors duration-300 cursor-default">
                {s}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}