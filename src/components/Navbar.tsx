"use client";

import React, { useState, useEffect } from "react";
import {
  Code2,
  Menu,
  X,
  Sparkles,
  PhoneCall,
  Terminal,
  Calculator,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services", icon: Layers },
    { name: "Live POS Demo", href: "#pos-demo", icon: Terminal, highlight: true },
    { name: "Project Estimator", href: "#estimator", icon: Calculator },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Our Process", href: "#process" },
    { name: "Tech Stack", href: "#tech-stack" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060911]/90 backdrop-blur-md border-b border-sky-500/15 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 via-blue-600 to-violet-600 p-[1px] shadow-md shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all">
              <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform duration-200" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-sky-300 transition-colors">
                  Smart<span className="text-sky-400">Book</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">
                  Software
                </span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider">Custom Business Systems</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-150 ${
                    link.highlight
                      ? "text-sky-300 bg-sky-500/15 border border-sky-400/30 hover:bg-sky-500/25"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/?text=Hello%20SmartBook%20Software,%20I'd%20like%20to%20inquire%20about%20a%20custom%20software%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-xl transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Talk to Engineer</span>
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center p-[1px] rounded-xl font-medium text-xs text-white overflow-hidden group shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 transition-all duration-300 group-hover:scale-105" />
              <span className="relative flex items-center gap-1.5 px-4 py-2 bg-[#090d16]/90 rounded-[11px] group-hover:bg-transparent transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-sky-400 group-hover:text-white" />
                <span>Get a Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-medium bg-sky-500 text-slate-950 font-semibold rounded-lg hover:bg-sky-400 transition"
            >
              Quote
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090d16]/98 border-b border-sky-500/20 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2 transition-all">
          <div className="grid grid-cols-1 gap-1 pt-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    link.highlight
                      ? "text-sky-300 bg-sky-500/10 border border-sky-500/30 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 text-sky-400" />}
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-sm transition-all"
            >
              Request Free Consultation & Quote
            </a>
            <a
              href="https://wa.me/?text=Hello%20SmartBook%20Software,%20I'd%20like%20to%20inquire%20about%20a%20custom%20software%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 px-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              Chat on WhatsApp Directly
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
