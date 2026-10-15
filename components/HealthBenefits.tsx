'use client';

import React from 'react';
import { Heart, Droplets, Activity, MoveUpRight, Sparkles, ShieldCheck, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { HEALTH_BENEFITS, SALON_INFO } from '@/lib/data';

export default function HealthBenefits() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className="w-6 h-6 text-rose-400" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-cyan-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-amber-400" />;
      case 'MoveUpRight':
        return <MoveUpRight className="w-6 h-6 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-indigo-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="benefits" className="py-20 bg-stone-900 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <span>Здравствени Придобивки</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-50">
            Како професионалната масажа влијае на вашето здравје
          </h2>
          <p className="text-sm sm:text-base text-stone-300">
            Покрај длабоката релаксација, редовната масажа делува терапевтски на мускулно-скелетниот и нервниот систем.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HEALTH_BENEFITS.map((benefit, idx) => (
            <div
              key={benefit.id}
              className="p-6 rounded-2xl border border-stone-800 bg-stone-950/70 hover:border-amber-400/60 transition-all flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center">
                    {getIcon(benefit.iconName)}
                  </div>
                  <span className="font-mono text-xs text-stone-500 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs font-semibold text-amber-400/90 uppercase tracking-wide">
                  {benefit.titleEn}
                </p>
                <h3 className="text-lg font-serif font-bold text-stone-100 mt-1">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 mt-2.5 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-900 flex items-center gap-2 text-xs text-stone-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Клинички докажан ефект</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Summary Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="text-xl font-serif font-bold text-amber-100">
              Почувствувајте олеснување и енергија уште по првата сесија
            </h4>
            <p className="text-xs sm:text-sm text-stone-300">
              Даниел и Софија вршат индивидуална консултација пред секој третман за да го одредат најсоодветниот притисок и фокусни зони.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${SALON_INFO.phoneIntl}`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-stone-950 font-bold text-sm hover:bg-amber-300 transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>{SALON_INFO.phoneFormatted}</span>
            </a>
            <a
              href={`viber://chat?number=%2B${SALON_INFO.whatsappNumber}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-700 text-white font-semibold text-sm hover:bg-purple-600 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Viber Контакт</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
