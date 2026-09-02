"use client";

import React from "react";
import { DEVELOPMENT_STEPS } from "@/lib/data";
import { Workflow, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProcessRoadmap() {
  return (
    <section id="process" className="py-24 bg-[#060911] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-semibold text-sky-400 mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Proven Engineering Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How We Take Your Vision From <span className="gradient-text-cyan">Concept to Deployment</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3">
            A battle-tested 5-step development methodology ensuring transparent progress, zero downtime, and seamless staff adoption.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {DEVELOPMENT_STEPS.map((item, index) => (
            <div
              key={index}
              className="gradient-border-card p-6 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-black gradient-text-cyan">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:border-sky-400/60 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Phase {index + 1}</span>
                <span className="text-sky-400 font-semibold">100% Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
