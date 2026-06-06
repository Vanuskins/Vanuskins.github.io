"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  "UI / UX Design","Figma","React","Next.js",
  "TypeScript","Tailwind CSS","Motion Design","Prototyping",
  "Branding","Design Systems",
];

const stats = [
  { value: "3+",  label: "Years of experience" },
  { value: "40+", label: "Projects shipped" },
  { value: "100%",label: "Attention to detail" },
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
        <div className="grid md:grid-cols-[1fr_160px] gap-14 items-start">
          <div>
            <motion.p {...f(0.2)} className="text-white/42 leading-[1.8] text-[15px] mb-4">
              Hey, I'm Vanuskins — a designer who lives at the intersection of aesthetics and engineering.
              I obsess over the details most people never notice: the weight of a typeface, the curve of a
              button corner, the exact milliseconds of an easing curve.
            </motion.p>
            <motion.p {...f(0.3)} className="text-white/30 leading-[1.8] text-[15px] mb-12">
              My workflow bridges Figma and code — I design systems that are not only beautiful but actually
              buildable. When I'm not pushing pixels, I'm exploring generative art, motion design, and
              whatever new creative tool the internet decided to drop this week.
            </motion.p>
            <motion.div {...f(0.4)} className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-white/45 bg-white/4 border border-white/8 backdrop-blur-sm hover:text-white/80 hover:border-white/18 transition-all duration-300 cursor-default">
                  {s}
                </span>
              ))}
            </motion.div>
          </div>
          <motion.div {...f(0.25)} className="flex flex-col gap-8">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-4xl font-bold text-white/88 leading-none mb-1.5">{value}</p>
                <p className="text-xs text-white/28 leading-snug">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
