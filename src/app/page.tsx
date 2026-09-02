"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LivePosDemo from "@/components/LivePosDemo";
import ServicesShowcase from "@/components/ServicesShowcase";
import ProjectEstimator from "@/components/ProjectEstimator";
import ProcessRoadmap from "@/components/ProcessRoadmap";
import TechStack from "@/components/TechStack";
import CaseStudies from "@/components/CaseStudies";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileQuickBar from "@/components/MobileQuickBar";

export default function Home() {
  const [selectedEstimate, setSelectedEstimate] = useState<any>(null);

  const handleSelectEstimate = (estimateData: any) => {
    setSelectedEstimate(estimateData);
  };

  return (
    <main className="min-h-screen bg-[#060911] text-slate-100 flex flex-col relative overflow-hidden">
      {/* Top Fixed Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <Hero />

      {/* Interactive Live Mini-POS Terminal Simulator */}
      <LivePosDemo />

      {/* Core Services Breakdown */}
      <ServicesShowcase />

      {/* Interactive Project Cost & Scope Estimator */}
      <ProjectEstimator onSelectEstimate={handleSelectEstimate} />

      {/* Development Lifecycle & Process */}
      <ProcessRoadmap />

      {/* Tech Stack & Reliability Architecture */}
      <TechStack />

      {/* Case Studies & FAQs */}
      <CaseStudies />

      {/* Lead Capture & Direct Contacts */}
      <ContactSection prefilledData={selectedEstimate} />

      {/* Global Footer */}
      <Footer />

      {/* Sticky Quick-Action Bar for Phone Screen Viewports */}
      <MobileQuickBar />
    </main>
  );
}
