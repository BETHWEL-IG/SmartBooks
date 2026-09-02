"use client";

import React from "react";
import { Code2, Heart, ArrowUp, PhoneCall, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-slate-800/80 pt-16 pb-28 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 via-blue-600 to-violet-600 p-[1px]">
                <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-sky-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Smart<span className="text-sky-400">Book</span>{" "}
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  Software
                </span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              We engineer custom Point of Sale (POS), enterprise ERPs, school/hospital suites, and bespoke web/mobile platforms for forward-thinking businesses.
            </p>
            <div className="text-xs text-slate-500 font-mono">
              Designed for speed • 100% Offline Reliable • Built to Last
            </div>
          </div>

          {/* Solutions Col */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Solutions
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#pos-demo" className="hover:text-sky-400 transition-colors">
                  Point of Sale (POS) Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Supermarket Multi-Branch ERP
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  School & College ERP
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Hospital & Clinic EMR
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Bespoke SaaS & Web Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Company & Tools
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#pos-demo" className="hover:text-sky-400 transition-colors">
                  Live POS Terminal Demo
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-sky-400 transition-colors">
                  Project Cost Calculator
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-sky-400 transition-colors">
                  Our Engineering Roadmap
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-sky-400 transition-colors">
                  Client Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">
                  Schedule Free Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Support */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Get In Touch
            </div>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/?text=Hello%20SmartBook%20Software"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>WhatsApp Engineer</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>projects@smartbook.software</span>
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                24/7 On-Call Support for Live POS Deployments
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} SmartBook Software & Technologies. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
