"use client";

import React from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  ShoppingBag,
  Terminal,
  CheckCircle2,
  Cpu,
  Calculator,
} from "lucide-react";
import { STATS } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="ambient-glow-1 -top-20 -left-20" />
      <div className="ambient-glow-2 top-1/3 -right-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top announcement pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 backdrop-blur-md text-xs font-medium text-sky-300 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Custom POS Systems, ERPs, School/Clinic & Web/Mobile Solutions</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
            We Engineer Intelligent,{" "}
            <span className="gradient-text-cyan">High-Performance</span>{" "}
            Software for Your Business.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From lightning-fast, offline-first <strong className="text-sky-300">Point of Sale (POS)</strong> solutions to multi-branch ERPs, school portals, and custom SaaS platforms — we build software that drives real revenue.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href="#pos-demo"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Terminal className="w-5 h-5 text-slate-950" />
              <span>Test Interactive POS Demo</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>

            <a
              href="#estimator"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-400/50 text-slate-200 font-semibold text-sm sm:text-base backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <Calculator className="w-4 h-4 text-sky-400" />
              <span>Calculate Project Cost</span>
            </a>
          </div>

          {/* Trust bullet badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Offline-First POS Capability</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>On-Site Setup & Staff Training</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Custom Tailored to Your Workflow</span>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Stats Cards */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="gradient-border-card p-5 sm:p-6 text-center group hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black gradient-text-cyan mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
