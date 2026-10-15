'use client';

import React, { useState } from 'react';
import { Phone, Instagram, MessageSquare, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { SALON_INFO } from '@/lib/data';
import { spaAudio } from '@/lib/sound';
import Logo from '@/components/Logo';

export default function Navbar() {
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const active = spaAudio.toggle();
    setIsPlayingSound(active);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#1c1815]/95 backdrop-blur-md border-b border-[#3b322a] text-amber-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        
        {/* Zone 1: Authentic Logo and Brand */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 hover:opacity-95 transition-opacity">
          <Logo size="md" showText={true} />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-amber-100/80">
          <a href="#services" className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0">
            Услуги
          </a>
          <a href="#video-tour" className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0">
            Видео
          </a>
          <a href="#benefits" className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0">
            Придобивки
          </a>
          <a href="#team" className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0">
            Даниел & Софија
          </a>
          <a href="#contact" className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0">
            Контакт
          </a>
        </nav>

        {/* Zone 3: Direct Actions (Phone & Social) */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Ambient Music button */}
          <button
            onClick={toggleSound}
            title={isPlayingSound ? 'Исклучи релаксирачки звук' : 'Пушти релаксирачки спа звук'}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md border transition-all ${
              isPlayingSound
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                : 'bg-stone-900/50 text-stone-300 border-stone-700 hover:text-amber-200'
            }`}
          >
            {isPlayingSound ? <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline whitespace-nowrap">{isPlayingSound ? 'Музика: Вклучена' : 'Спа Звук'}</span>
          </button>

          {/* Instagram Link */}
          <a
            href={SALON_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-stone-900/80 hover:bg-stone-800 text-pink-300 border border-stone-700 transition-colors whitespace-nowrap"
            title="Instagram @sonitamassage"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>@sonitamassage</span>
          </a>

          {/* Call CTA */}
          <a
            href={`tel:${SALON_INFO.phoneIntl}`}
            className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-lg shadow-md transition-all transform active:scale-95 whitespace-nowrap shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>{SALON_INFO.phoneFormatted}</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-400 hover:text-amber-200"
            aria-label="Отвори мени"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-5 border-t border-[#3b322a] bg-[#1c1815] text-stone-200 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm pt-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded hover:bg-stone-800 text-amber-100"
            >
              Услуги
            </a>
            <a
              href="#video-tour"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded hover:bg-stone-800 text-amber-100"
            >
              Видео
            </a>
            <a
              href="#benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded hover:bg-stone-800 text-amber-100"
            >
              Придобивки
            </a>
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded hover:bg-stone-800 text-amber-100"
            >
              Даниел & Софија
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded hover:bg-stone-800 text-amber-100 col-span-2"
            >
              Контакт
            </a>
          </div>

          <div className="pt-2 border-t border-stone-800 flex flex-wrap gap-2 text-xs">
            <a
              href={`tel:${SALON_INFO.phoneIntl}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-amber-400 text-stone-950 font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Повикај: {SALON_INFO.phone}</span>
            </a>
            <a
              href={`viber://chat?number=%2B${SALON_INFO.whatsappNumber}`}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-purple-700 text-white font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Viber</span>
            </a>
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-pink-700 text-white font-medium"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
