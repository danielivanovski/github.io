'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesGallery from '@/components/ServicesGallery';
import StudioVideoShowcase from '@/components/StudioVideoShowcase';
import HealthBenefits from '@/components/HealthBenefits';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import FloatingContactBar from '@/components/FloatingContactBar';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      
      {/* Top Bar Navigation */}
      <Navbar />

      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero />

        {/* Services Showcase (No Prices, Pure Authentic Treatments) */}
        <ServicesGallery />

        {/* Massage video */}
        <StudioVideoShowcase />

        {/* 6 Health Benefits from Medical Poster */}
        <HealthBenefits />

        {/* Certified Team Daniel & Sofija */}
        <TeamSection />

        {/* Direct Contacts & Messaging (Phone 078 377 387, Instagram, Viber, WhatsApp) */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating 1-Click Phone/Viber/WhatsApp/Instagram Bar */}
      <FloatingContactBar />

    </div>
  );
}
