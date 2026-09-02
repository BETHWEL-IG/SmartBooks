"use client";

import React, { useState } from "react";
import {
  SERVICES_DATA,
  ServiceItem,
} from "@/lib/data";
import {
  ShoppingBag,
  Boxes,
  GraduationCap,
  Activity,
  Code2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
} from "lucide-react";

export default function ServicesShowcase() {
  const [activeTabId, setActiveTabId] = useState<string>("pos");

  const iconMap: Record<string, any> = {
    ShoppingBag,
    Boxes,
    GraduationCap,
    Activity,
    Code2,
  };

  const activeService = SERVICES_DATA.find((s) => s.id === activeTabId) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-24 bg-[#060911] relative overflow-hidden">
      {/* Glow background */}
      <div className="ambient-glow-2 top-1/2 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-semibold text-sky-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Software Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Specialized Software Solutions Built for <span className="gradient-text-cyan">Scale & Speed</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3">
            We don&apos;t just write code; we design reliable business engines with offline security, thermal hardware drivers, and scalable cloud synchronization.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.iconName] || Code2;
            const isActive = service.id === activeTabId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTabId(service.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-slate-950 shadow-lg shadow-sky-500/25 scale-105"
                    : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-slate-950" : "text-sky-400"}`} />
                <span>{service.title.split("(")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Service Display Card */}
        <div className="gradient-border-card p-6 sm:p-10 lg:p-12 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/15 border border-sky-400/30 text-sky-300 uppercase tracking-wider">
                  {activeService.badge}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                  <Cpu className="w-3.5 h-3.5 text-sky-400" />
                  {activeService.metrics}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {activeService.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeService.fullDesc}
              </p>

              {/* Highlights list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeService.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Built with Modern Technologies:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeService.techTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-sky-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={`#contact?service=${activeService.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-sky-500/20 group"
                >
                  <span>Inquire About {activeService.title.split("(")[0]}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Visual Architecture Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">system_architecture.v3</span>
                </div>

                <div className="py-6 space-y-4">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-sky-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                        <ShoppingBag className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Client Interface / Frontend</div>
                        <div className="text-[10px] text-slate-400">Touch POS, Desktop App, Web & Mobile</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400">Active</span>
                  </div>

                  <div className="flex justify-center">
                    <div className="h-6 w-0.5 bg-gradient-to-b from-sky-500 to-indigo-500" />
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-indigo-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Offline Engine & Sync Layer</div>
                        <div className="text-[10px] text-slate-400">Local SQLite DB + Background Push Sync</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-sky-400">0.02ms</span>
                  </div>

                  <div className="flex justify-center">
                    <div className="h-6 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500" />
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-purple-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                        <Boxes className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Central Cloud Management & DB</div>
                        <div className="text-[10px] text-slate-400">PostgreSQL + Real-Time Analytics & SMS</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-purple-400">Secure</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-center text-[11px] text-slate-400">
                  🔒 Encrypted • Automated Daily Backups • Role Permissions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
