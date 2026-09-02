"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  PhoneCall,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function ContactSection({
  prefilledData,
}: {
  prefilledData?: any;
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    systemType: "Point of Sale (POS) System",
    budgetRange: "$500 - $1,500",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({
        ...prev,
        systemType: prefilledData.projectType || prev.systemType,
        message: `Estimated Scope:\n- System: ${prefilledData.projectType}\n- Scale: ${prefilledData.branches} Location(s)\n- Estimated Cost: ${prefilledData.estimatedCostRange}\n- Estimated Turnaround: ${prefilledData.estimatedTimeline}\n\nAdditional notes: `,
      }));
    }
  }, [prefilledData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello SmartBook Software! I'm interested in building a software system for my business (${formData.businessName || "My Business"}). System type: ${formData.systemType}.`
  );

  return (
    <section id="contact" className="py-24 bg-[#080d1a] relative overflow-hidden border-t border-sky-500/10">
      <div className="ambient-glow-1 bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-xs font-semibold text-emerald-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Project Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Your Next <span className="gradient-text-cyan">Software System</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3">
            Speak directly with our senior software engineers. We provide free requirements analysis, architecture blueprints, and transparent fixed-price quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Instant Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="gradient-border-card p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Contacts & Channels</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you need a single POS machine setup or a nationwide enterprise ERP rollout, we respond within 1 hour.
              </p>

              <div className="space-y-4 pt-2">
                {/* WhatsApp button */}
                <a
                  href={`https://wa.me/?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 transition group"
                >
                  <div className="p-2 rounded-lg bg-emerald-500 text-slate-950 font-bold group-hover:scale-105 transition-transform">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-400">WhatsApp Instant Chat</div>
                    <div className="text-[11px] text-emerald-200/80">Click to chat with an engineer right now</div>
                  </div>
                </a>

                {/* Direct Phone */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Direct Phone Call</div>
                    <div className="text-xs text-sky-400 font-mono">+254 700 000 000 / +254 711 000 000</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Email Address</div>
                    <div className="text-xs text-indigo-400 font-mono">projects@smartbook.software</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Headquarters & On-Site Deployments</div>
                    <div className="text-xs text-slate-400">Silicon Savannah Tech Hub, Nairobi & Global Remote</div>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>Free 30-min strategy & feasibility consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Strict NDA & 100% Client Code Ownership</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="gradient-border-card p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-sky-300">{formData.name || "friend"}</strong>. A senior software engineer from SmartBook will review your requirements and reach out within 1 hour.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Mwangi"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+254 7XX XXX XXX"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Supermarket"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        System Needed
                      </label>
                      <select
                        value={formData.systemType}
                        onChange={(e) => setFormData({ ...formData, systemType: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-sky-400 transition"
                      >
                        <option value="Point of Sale (POS) System">Point of Sale (POS) System</option>
                        <option value="Multi-Branch Supermarket POS + ERP">Multi-Branch Supermarket POS + ERP</option>
                        <option value="School & College Management ERP">School & College Management ERP</option>
                        <option value="Hospital & Clinic EMR System">Hospital & Clinic EMR System</option>
                        <option value="Custom Web / Mobile Application">Custom Web / Mobile Application</option>
                        <option value="Custom API & Hardware Integration">Custom API & Hardware Integration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Budget Range
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-sky-400 transition"
                      >
                        <option value="$300 - $600">$300 - $600 (Single POS setup)</option>
                        <option value="$600 - $1,500">$600 - $1,500 (Multi-counter POS / School)</option>
                        <option value="$1,500 - $3,500">$1,500 - $3,500 (Full ERP / Hospital / Custom App)</option>
                        <option value="$3,500+">$3,500+ (Enterprise Multi-Branch Suite)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Project Details & Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your hardware setup (receipt printers, scanners), branch locations, or specific features you need..."
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-sky-500/25 active:scale-[0.98] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Project Inquiry & Get Blueprint</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    We respect your privacy. No spam. 100% Confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
