"use client";
import { Github, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/5 py-12 px-6">
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
