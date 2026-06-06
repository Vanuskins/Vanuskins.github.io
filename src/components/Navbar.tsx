"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Send, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
];

const socials = [
  { icon: Github, href: "https://github.com/Vanuskins", label: "GitHub" },
  { icon: Send, href: "https://t.me/VANUSKINSLOVE", label: "Telegram" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-3 py-2 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        style={{ minWidth: 440 }}
      >
        <div className="flex items-center gap-1 mr-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
               className="group p-2 rounded-xl bg-white/5 hover:bg-white/12 border border-white/0 hover:border-white/15 transition-all duration-300">
              <Icon size={15} className="text-white/50 group-hover:text-white transition-colors duration-300" />
            </a>
          ))}
        </div>
        <div className="w-px h-5 bg-white/10 mx-1" />
        <div className="flex items-center gap-1 ml-1 flex-1 justify-center">
          {links.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setActive(label)}
               className="relative px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 text-white/50 hover:text-white">
              {active === label && (
                <motion.span layoutId="pill"
                  className="absolute inset-0 rounded-xl bg-white/10 border border-white/15"
                  transition={{ type: "spring", stiffness: 350, damping: 35 }} />
              )}
              <span className="relative z-10">{label}</span>
            </a>
          ))}
        </div>
      </motion.nav>
      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-5 right-5 z-50 md:hidden p-2.5 rounded-xl bg-white/8 backdrop-blur-xl border border-white/10">
        {mobileOpen ? <X size={18} className="text-white" /> : <Menu size={18} className="text-white" />}
      </motion.button>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-16 right-5 z-50 md:hidden flex flex-col gap-1.5 p-3 rounded-2xl bg-black/70 backdrop-blur-2xl border border-white/10 min-w-[180px]">
            {links.map(({ label, href }) => (
              <a key={label} href={href} onClick={() => { setActive(label); setMobileOpen(false); }}
                 className="px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200">{label}</a>
            ))}
            <div className="w-full h-px bg-white/10 my-1" />
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2.5 px-4 py-2 rounded-xl text-sm text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200">
                <Icon size={14} /> {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
