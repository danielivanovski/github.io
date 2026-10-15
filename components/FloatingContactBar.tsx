'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, Instagram, ChevronUp, ChevronDown } from 'lucide-react';
import { SALON_INFO } from '@/lib/data';

export default function FloatingContactBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end gap-2">
      
      {/* Expanded Actions Menu */}
      {isExpanded && (
        <div className="p-2 rounded-2xl bg-stone-900/95 backdrop-blur-md border border-stone-700/80 shadow-2xl flex flex-col gap-1.5 w-52 animate-in fade-in slide-in-from-bottom-2 duration-200">
          
          <a
            href={`tel:${SALON_INFO.phoneIntl}`}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs transition-colors"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <div className="text-left">
              <p className="leading-tight">Повикај</p>
              <p className="font-mono text-[10px] opacity-90">{SALON_INFO.phoneFormatted}</p>
            </div>
          </a>

          <a
            href={`viber://chat?number=%2B${SALON_INFO.whatsappNumber}&draft=${encodeURIComponent('Здраво Даниел и Софија, сакам да прашам за термин за масажа.')}`}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-purple-700 hover:bg-purple-600 text-white font-medium text-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>Отвори Viber</span>
          </a>

          <a
            href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent('Здраво Даниел и Софија, сакам да прашам за термин за масажа.')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>Отвори WhatsApp</span>
          </a>

          <a
            href={SALON_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-pink-700 hover:bg-pink-600 text-white font-medium text-xs transition-colors"
          >
            <Instagram className="w-4 h-4 shrink-0" />
            <span>Instagram: @sonitamassage</span>
          </a>
        </div>
      )}

      {/* Main Trigger Capsule */}
      <div className="flex items-center gap-1.5 p-1 bg-stone-900/95 backdrop-blur-md rounded-2xl border border-stone-700 shadow-xl">
        
        {/* Direct Call Quick Icon */}
        <a
          href={`tel:${SALON_INFO.phoneIntl}`}
          className="w-10 h-10 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 flex items-center justify-center font-bold transition-all transform active:scale-95 shadow-md"
          title={`Повикај: ${SALON_INFO.phone}`}
          aria-label="Телефонски повик"
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* Direct Viber Quick Icon */}
        <a
          href={`viber://chat?number=%2B${SALON_INFO.whatsappNumber}&draft=${encodeURIComponent('Здраво, сакам да прашам за термин за масажа.')}`}
          className="w-10 h-10 rounded-xl bg-purple-700 hover:bg-purple-600 text-white flex items-center justify-center transition-all transform active:scale-95 shadow-md"
          title="Viber порака"
          aria-label="Viber порака"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        {/* Direct Instagram Quick Icon */}
        <a
          href={SALON_INFO.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 hover:opacity-90 text-white flex items-center justify-center transition-all transform active:scale-95 shadow-md"
          title="Instagram @sonitamassage"
          aria-label="Instagram профил"
        >
          <Instagram className="w-4 h-4" />
        </a>

        {/* Toggle Expand */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-2 py-2 text-stone-400 hover:text-amber-200 flex items-center gap-1 text-xs"
          aria-label="Отвори мени за контакт"
        >
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>
      </div>

    </div>
  );
}
