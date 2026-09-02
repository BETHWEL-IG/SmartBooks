"use client";

import React, { useState } from "react";
import { CASE_STUDIES, FAQS } from "@/lib/data";
import {
  Trophy,
  ChevronDown,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Building,
  TrendingUp,
} from "lucide-react";

export default function CaseStudies() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="case-studies" className="py-24 bg-[#060911] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Case Studies Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-semibold text-sky-400 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Proven Business Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Real Software for <span className="gradient-text-cyan">Real-World Operations</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3">
            See how our custom Point of Sale, ERP, and School/Hospital systems helped our clients eliminate inventory loss, cut queue times, and automate bookkeeping.
          </p>
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="gradient-border-card p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Top Badge & Metric */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-sky-500/15 text-sky-300 border border-sky-400/25">
                    {study.category}
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-black gradient-text-emerald">
                      {study.metricNumber}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium">
                      {study.metricLabel}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {study.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-medium mb-3">
                  {study.result}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {study.details}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                  {study.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Accordion Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-semibold text-sky-400 mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Got Questions? We&apos;ve Got Answers.
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="glass-panel rounded-xl border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-white hover:text-sky-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-sky-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
