"use client";

import React from "react";
import { TECH_STACK } from "@/lib/data";
import {
  Code,
  Globe,
  Layout,
  Server,
  Database,
  Monitor,
  Smartphone,
  Printer,
  Cpu,
} from "lucide-react";

export default function TechStack() {
  const iconMap: Record<string, any> = {
    Globe,
    Code,
    Layout,
    Server,
    Database,
    Monitor,
    Smartphone,
    Printer,
  };

  return (
    <section id="tech-stack" className="py-20 bg-[#070b14] border-t border-b border-sky-500/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-semibold text-sky-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Industrial Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built on <span className="gradient-text-cyan">Modern, High-Speed</span> Foundations
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            We pick technologies known for rock-solid uptime, instant hardware driver response, and zero maintenance headaches.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {TECH_STACK.map((tech, idx) => {
            const Icon = iconMap[tech.icon] || Code;
            return (
              <div
                key={idx}
                className="glass-panel p-4 rounded-xl border border-slate-800/90 hover:border-sky-400/40 flex items-center gap-3.5 group hover:bg-slate-900/80 transition-all"
              >
                <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-[11px] text-slate-400">{tech.category}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
