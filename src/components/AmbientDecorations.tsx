"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring } from "framer-motion";

export default function AmbientDecorations() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const glowX = useSpring(mouseX, { stiffness: 90, damping: 22 });
  const glowY = useSpring(mouseY, { stiffness: 90, damping: 22 });
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const updatePointer = () => setIsFinePointer(media.matches);
    updatePointer();
    media.addEventListener("change", updatePointer);

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 180);
      mouseY.set(event.clientY - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      media.removeEventListener("change", updatePointer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 shadow-[0_0_18px_rgba(217,70,239,0.55)]"
        style={{ scaleX: progress }}
      />

      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 72%)",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-[2] opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.16) 0 1px, transparent 1px), radial-gradient(circle at 70% 65%, rgba(255,255,255,0.12) 0 1px, transparent 1px)",
          backgroundSize: "42px 42px, 58px 58px",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[60] hidden h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.20)_0%,rgba(34,211,238,0.08)_38%,transparent_68%)] blur-2xl md:block"
        style={{ x: glowX, y: glowY, opacity: isFinePointer ? 1 : 0 }}
      />
    </>
  );
}
