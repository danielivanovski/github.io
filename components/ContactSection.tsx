'use client';

import React, { useState } from 'react';
import { Phone, Instagram, MessageSquare, Clock, Send, Check } from 'lucide-react';
import { SALON_INFO } from '@/lib/data';

export default function ContactSection() {
  const [quickMessage, setQuickMessage] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SALON_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const getViberUrl = () => {
    const text = quickMessage.trim() || 'Здраво Даниел и Софија, сакам да прашам за слободен термин за масажа.';
    return `viber://chat?number=%2B38978377387&draft=${encodeURIComponent(text)}`;
  };

  const getWhatsAppUrl = () => {
    const text = quickMessage.trim() || 'Здраво Даниел и Софија, сакам да прашам за слободен термин за масажа.';
    return `https://wa.me/38978377387?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 bg-stone-900 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <span>Директна Комуникација</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-50">
            Контактирајте нè за прашања и термин
          </h2>
          <p className="text-sm sm:text-base text-stone-300">
            Јавете се директно или испратете порака преку Viber, WhatsApp или Instagram за брз одговор од Даниел и Софија.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards: 4 Direct Channels */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-colors">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-stone-100">Телефонски повик</h3>
                <p className="text-xs text-stone-400">
                  Директен разговор со терапевт за консултација и термини.
                </p>
                <p className="font-mono text-xl font-bold text-amber-300 pt-1">
                  {SALON_INFO.phoneFormatted}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a
                  href={`tel:${SALON_INFO.phoneIntl}`}
                  className="flex-1 py-2.5 px-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs text-center transition-colors shadow-md"
                >
                  Повикај веднаш
                </a>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="py-2.5 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs transition-colors"
                  title="Копирај број"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : 'Копирај'}
                </button>
              </div>
            </div>

            {/* Instagram Profile Card */}
            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col justify-between space-y-4 hover:border-pink-500/40 transition-colors">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center">
                  <Instagram className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-stone-100">Instagram профил</h3>
                <p className="text-xs text-stone-400">
                  Следете ги нашите објави и испратете директна порака (DM).
                </p>
                <p className="font-mono text-lg font-bold text-pink-300 pt-1">
                  @{SALON_INFO.instagramHandle}
                </p>
              </div>

              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-xs text-center transition-colors shadow-md"
              >
                Отвори @sonitamassage
              </a>
            </div>

            {/* Viber Chat Card */}
            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col justify-between space-y-4 hover:border-purple-500/40 transition-colors">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-stone-100">Viber разговор</h3>
                <p className="text-xs text-stone-400">
                  Инстант комуникација и прашања за масажите преку Viber.
                </p>
                <p className="font-mono text-sm text-purple-300 font-semibold pt-1">
                  {SALON_INFO.phoneFormatted}
                </p>
              </div>

              <a
                href={getViberUrl()}
                className="w-full py-2.5 px-3 rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-bold text-xs text-center transition-colors shadow-md"
              >
                Отвори Viber чет
              </a>
            </div>

            {/* WhatsApp Chat Card */}
            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-colors">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-stone-100">WhatsApp разговор</h3>
                <p className="text-xs text-stone-400">
                  Брзи одговори и директен контакт со терапевтите.
                </p>
                <p className="font-mono text-sm text-emerald-300 font-semibold pt-1">
                  +{SALON_INFO.whatsappNumber}
                </p>
              </div>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-colors shadow-md"
              >
                Отвори WhatsApp чет
              </a>
            </div>

          </div>

          {/* Right Column: Quick Direct Message Composer & Working Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Message Form */}
            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-4 shadow-xl">
              <h3 className="text-lg font-serif font-bold text-amber-100">
                Брза директна порака до Даниел & Софија
              </h3>
              <p className="text-xs text-stone-400">
                Внесете прашање подолу и одберете каде сакате веднаш да ја испратите (Viber или WhatsApp):
              </p>

              <div>
                <textarea
                  rows={3}
                  value={quickMessage}
                  onChange={(e) => setQuickMessage(e.target.value)}
                  placeholder="Здраво Даниел и Софија, сакам да прашам за термин за длабоко-ткивна масажа..."
                  className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 rounded-lg text-sm text-stone-100 focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={getViberUrl()}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-semibold text-xs text-center transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Испрати на Viber</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs text-center transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Испрати на WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Working Hours (NO ADDRESS, NO BITOLA/SKOPJE) */}
            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-3 text-xs text-stone-300 shadow-lg">
              <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm">
                <Clock className="w-4 h-4" />
                <span>Работно Време</span>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex justify-between border-b border-stone-900 pb-2">
                  <span className="text-stone-400">Понеделник - Петок:</span>
                  <span className="font-semibold text-stone-100">{SALON_INFO.workingHours.weekdays}</span>
                </div>
                <div className="flex justify-between border-b border-stone-900 pb-2">
                  <span className="text-stone-400">Сабота:</span>
                  <span className="font-semibold text-stone-100">{SALON_INFO.workingHours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Недела:</span>
                  <span className="font-semibold text-amber-300">{SALON_INFO.workingHours.sunday}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
