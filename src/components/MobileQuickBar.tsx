"use client";

import React from "react";
import { PhoneCall, Sparkles, MessageCircle } from "lucide-react";

export default function MobileQuickBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#090d16]/95 border-t border-sky-500/20 backdrop-blur-xl px-4 py-2.5 shadow-2xl shadow-black">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          href="https://wa.me/254742795896?text=Hello%20SmartBook%20Software,%20I'd%20like%20to%20inquire%20about%20a%20custom%20software%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        <a
          href="tel:+254742795896"
          className="py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-xs flex items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
          <span>Call</span>
        </a>

        <a
          href="#contact"
          className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/20 active:scale-95 transition-transform"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get Quote</span>
        </a>
      </div>
    </div>
  );
}

