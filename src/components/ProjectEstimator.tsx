"use client";

import React, { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Printer,
  Barcode,
  Smartphone,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface EstimatorOptions {
  type: string;
  branches: number;
  platforms: string[];
  features: string[];
}

export default function ProjectEstimator({
  onSelectEstimate,
}: {
  onSelectEstimate?: (estimateData: any) => void;
}) {
  const [projectType, setProjectType] = useState("pos-single");
  const [branches, setBranches] = useState(1);
  const [platforms, setPlatforms] = useState<string[]>(["desktop", "cloud"]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "receipt-printer",
    "barcode-scan",
    "mpesa-payments",
  ]);

  const projectTypes = [
    { id: "pos-single", name: "Single Store POS System", baseDays: 7, basePrice: 400, desc: "For boutiques, cafes, minimarts" },
    { id: "pos-multi", name: "Multi-Branch Retail POS + ERP", baseDays: 16, basePrice: 950, desc: "Supermarkets, retail chains, wholesale" },
    { id: "school", name: "School / College ERP Suite", baseDays: 20, basePrice: 1200, desc: "Fee collection, SMS, grading, portals" },
    { id: "hospital", name: "Hospital / Clinic EMR Suite", baseDays: 24, basePrice: 1400, desc: "Patient records, triage, pharmacy POS" },
    { id: "custom", name: "Custom SaaS / Web & Mobile App", baseDays: 28, basePrice: 1600, desc: "Bespoke digital platforms & workflows" },
  ];

  const availablePlatforms = [
    { id: "desktop", label: "Desktop Application (Windows/Mac)", icon: "💻" },
    { id: "cloud", label: "Cloud Web Portal & Live Analytics", icon: "☁️" },
    { id: "mobile", label: "Mobile Companion App (iOS & Android)", icon: "📱" },
  ];

  const featureOptions = [
    { id: "receipt-printer", label: "Thermal Receipt Printing (ESC/POS)", days: 1, cost: 60 },
    { id: "barcode-scan", label: "Barcode & QR Scanner Integration", days: 1, cost: 50 },
    { id: "cash-drawer", label: "Automated Cash Drawer Trigger", days: 1, cost: 40 },
    { id: "mpesa-payments", label: "M-Pesa / Mobile Money STK Push API", days: 2, cost: 120 },
    { id: "offline-sync", label: "100% Offline-First SQLite Sync Engine", days: 3, cost: 150 },
    { id: "sms-alerts", label: "Automated SMS Receipts / Alerts", days: 2, cost: 80 },
  ];

  const togglePlatform = (id: string) => {
    setPlatforms((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((p) => p !== id) : prev) : [...prev, id]
    );
  };

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Calculations
  const currentTypeObj = projectTypes.find((t) => t.id === projectType) || projectTypes[0];
  const branchMultiplier = branches > 1 ? 1 + (branches - 1) * 0.25 : 1;
  const platformMultiplier = 1 + (platforms.length - 1) * 0.2;

  const featuresCost = selectedFeatures.reduce((acc, fId) => {
    const feat = featureOptions.find((f) => f.id === fId);
    return acc + (feat ? feat.cost : 0);
  }, 0);

  const featuresDays = selectedFeatures.reduce((acc, fId) => {
    const feat = featureOptions.find((f) => f.id === fId);
    return acc + (feat ? feat.days : 0);
  }, 0);

  const estimatedMinPrice = Math.round(
    (currentTypeObj.basePrice * branchMultiplier * platformMultiplier + featuresCost) * 0.95
  );
  const estimatedMaxPrice = Math.round(
    (currentTypeObj.basePrice * branchMultiplier * platformMultiplier + featuresCost) * 1.25
  );
  const estimatedDays = Math.round((currentTypeObj.baseDays + featuresDays) * (branches > 1 ? 1.15 : 1));

  const handleApplyToForm = () => {
    const estimatePayload = {
      projectType: currentTypeObj.name,
      branches,
      platforms,
      features: selectedFeatures,
      estimatedCostRange: `$${estimatedMinPrice} - $${estimatedMaxPrice}`,
      estimatedTimeline: `${estimatedDays} Business Days`,
    };
    if (onSelectEstimate) {
      onSelectEstimate(estimatePayload);
    }
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="estimator" className="py-24 bg-[#080d1a] relative overflow-hidden border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-semibold text-sky-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Scope & Cost Planner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Interactive <span className="gradient-text-cyan">Project Cost & Scope</span> Estimator
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3">
            Select your software requirements, scale, and hardware integrations to receive an instant turnaround time and investment ballpark.
          </p>
        </div>

        {/* 2-Column Interactive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Configuration Panel (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Software Category */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
                1. Select System Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`p-3.5 rounded-xl text-left transition-all border ${
                      projectType === type.id
                        ? "bg-sky-500/15 border-sky-400/80 text-white shadow-md shadow-sky-500/10"
                        : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-white">{type.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scale & Branches */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800">
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  2. Number of Branches / Counters:
                </label>
                <span className="px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 font-mono font-bold text-xs">
                  {branches} {branches === 1 ? "Location / Counter" : "Locations / Counters"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={branches}
                onChange={(e) => setBranches(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>1 Single Store</span>
                <span>5 Multi-Store</span>
                <span>10+ Enterprise Chain</span>
              </div>
            </div>

            {/* 3. Platform Targets */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
                3. Platform Targets
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {availablePlatforms.map((plat) => {
                  const isSelected = platforms.includes(plat.id);
                  return (
                    <button
                      key={plat.id}
                      onClick={() => togglePlatform(plat.id)}
                      className={`p-3 rounded-xl text-left transition-all border ${
                        isSelected
                          ? "bg-sky-500/15 border-sky-400 text-white font-medium"
                          : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-300"
                      }`}
                    >
                      <div className="text-xl mb-1">{plat.icon}</div>
                      <div className="text-xs font-semibold text-white">{plat.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Hardware & Feature Integrations */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
                4. Peripherals & API Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 rounded-xl text-left transition-all flex items-center justify-between border ${
                        isChecked
                          ? "bg-indigo-500/15 border-indigo-400 text-white font-medium"
                          : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className="text-xs text-slate-200">{feat.label}</div>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                          isChecked ? "bg-indigo-500 text-white" : "border border-slate-700"
                        }`}
                      >
                        {isChecked && "✓"}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary & Estimate Card (5 Cols Sticky) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="gradient-border-card p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-sky-400" />
                  <h3 className="font-extrabold text-base text-white">Estimated Project Scope</h3>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  Instant Estimate
                </span>
              </div>

              {/* Price Estimate */}
              <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-800/80 text-center">
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                  Estimated Investment Range
                </div>
                <div className="text-3xl sm:text-4xl font-black gradient-text-cyan tracking-tight">
                  ${estimatedMinPrice.toLocaleString()} – ${estimatedMaxPrice.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Includes complete custom source code, on-site setup & training
                </div>
              </div>

              {/* Timeline estimate */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-semibold text-white">Estimated Turnaround:</span>
                </div>
                <span className="text-xs font-bold text-sky-300 font-mono">
                  ~{estimatedDays} Business Days
                </span>
              </div>

              {/* What is Included Checklist */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Included in Every Build:
                </div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>100% Full Ownership of System & Data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Offline-First Reliability & Auto Cloud Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Physical Hardware Driver Configuration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Cashier & Staff Training + Video Manuals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Priority WhatsApp & On-Site SLA Support</span>
                  </div>
                </div>
              </div>

              {/* Apply Estimate CTA */}
              <button
                onClick={handleApplyToForm}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-sky-500/25 active:scale-[0.98] transition-all"
              >
                <span>Request Build With This Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
