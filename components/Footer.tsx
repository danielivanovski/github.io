'use client';

import React from 'react';
import { Phone, Instagram, MessageSquare } from 'lucide-react';
import { SALON_INFO } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <a href="#" className="text-base font-serif font-bold text-amber-100 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 flex items-center justify-center text-slate-950 font-black text-xs">
                M
              </span>
              <span>Massage Therapy</span>
            </a>
            <p className="text-stone-400 text-xs leading-relaxed">
              Сертифициран тим Даниел & Софија. Професионални терапевтски масажи, релаксација, тригер точки и апаративна нега на тело.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-stone-200 uppercase tracking-wider text-[11px]">
              Брзи Линкови
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <a href="#services" className="hover:text-amber-200 transition-colors">
                  Услуги & Третмани
                </a>
              </li>
              <li>
                <a href="#video-tour" className="hover:text-amber-200 transition-colors">
                  Видео & Амбиент
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-amber-200 transition-colors">
                  Здравствени Придобивки
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-amber-200 transition-colors">
                  Даниел & Софија
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-200 transition-colors">
                  Контакт & Прашања
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts */}
          <div className="space-y-3">
            <h4 className="font-semibold text-stone-200 uppercase tracking-wider text-[11px]">
              Директна Комуникација
            </h4>
            <div className="space-y-2 text-stone-300">
              <a
                href={`tel:${SALON_INFO.phoneIntl}`}
                className="flex items-center gap-2 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono font-semibold">{SALON_INFO.phoneFormatted}</span>
              </a>

              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-pink-300 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>@{SALON_INFO.instagramHandle}</span>
              </a>

              <a
                href={`viber://chat?number=%2B${SALON_INFO.whatsappNumber}`}
                className="flex items-center gap-2 hover:text-purple-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                <span>Viber разговор</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${SALON_INFO.phoneIntl}`}
                className="inline-block py-2 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs transition-colors shadow-sm"
              >
                Повикај: {SALON_INFO.phone}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <p>© {new Date().getFullYear()} Massage Therapy. Сите права се задржани.</p>
          <div className="flex items-center gap-4">
            <a href={`tel:${SALON_INFO.phoneIntl}`} className="hover:text-stone-300">
              Тел: {SALON_INFO.phone}
            </a>
            <span>·</span>
            <a href={SALON_INFO.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-stone-300">
              Instagram: @{SALON_INFO.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
