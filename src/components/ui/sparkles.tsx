"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SparklesProps = {
  id?: string;
  className?: string;
  particleColor?: string;
  particleDensity?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  background?: string;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  opacityDir: number;
};

export const SparklesCore = ({ id, className, particleColor = "#ffffff", particleDensity = 100, minSize = 0.8, maxSize = 2.5, speed = 0.6, background = "transparent" }: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speed * 0.8,
      vy: (Math.random() - 0.5) * speed * 0.8,
      size: minSize + Math.random() * (maxSize - minSize),
      opacity: Math.random(),
      opacityDir: Math.random() > 0.5 ? 1 : -1,
    });

    for (let i = 0; i < particleDensity; i++) particles.push(spawn());

    const r = parseInt(particleColor.slice(1, 3), 16);
    const g = parseInt(particleColor.slice(3, 5), 16);
    const b = parseInt(particleColor.slice(5, 7), 16);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += p.opacityDir * 0.005;
        if (p.opacity >= 1) p.opacityDir = -1;
        if (p.opacity <= 0) p.opacityDir = 1;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [particleColor, particleDensity, minSize, maxSize, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={cn("w-full h-full", className)}
      style={{ background }}
    >
      <canvas ref={canvasRef} id={id} className="w-full h-full" />
    </motion.div>
  );
};
