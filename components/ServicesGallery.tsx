'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Clock, Check, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { SERVICES, SALON_INFO } from '@/lib/data';
import { getAssetPath } from '@/lib/utils';

export default function ServicesGallery() {
  const [filter, setFilter] = useState<'all' | 'therapeutic' | 'relax' | 'aesthetic' | 'beauty'>('all');

  const filteredServices = SERVICES.filter(s => {
    if (filter === 'all') return true;
    return s.category === filter;
  });

  return (
    <section id="services" className="py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Услуги & Третмани</span>
              <span aria-hidden="true">·</span>
              <span>Даниел & Софија</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-50">
              Нашите специјализирани третмани
            </h2>
            <p className="text-sm sm:text-base text-stone-300">
              Секоја терапија се изведува од сертифицираните терапевти Даниел и Софија со индивидуален пристап, врвна хигиена и професионална опрема.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-950 rounded-xl border border-stone-800 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-amber-400 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Сите услуги ({SERVICES.length})
            </button>
            <button
              onClick={() => setFilter('therapeutic')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'therapeutic'
                  ? 'bg-amber-400 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Терапевтски
            </button>
            <button
              onClick={() => setFilter('relax')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'relax'
                  ? 'bg-amber-400 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Релакс & Спа
            </button>
            <button
              onClick={() => setFilter('aesthetic')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'aesthetic'
                  ? 'bg-amber-400 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Кавитација
            </button>
            <button
              onClick={() => setFilter('beauty')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'beauty'
                  ? 'bg-amber-400 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Нега & Убавина
            </button>
          </div>
        </div>

        {/* Services Grid (NO PRICES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isCavitation = service.id === 'cavitation-slimming';
            return (
              <div
                key={service.id}
                className={`group rounded-2xl bg-stone-950 border overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-md ${
                  isCavitation
                    ? 'border-amber-400/80 ring-1 ring-amber-400/30'
                    : 'border-stone-800/90 hover:border-amber-500/50'
                }`}
              >
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden bg-stone-900">
                  <Image
                    src={getAssetPath(service.image)}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                  
                  {/* Top Badge for Cavitation or Category */}
                  {isCavitation && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-amber-400 text-stone-950 font-bold text-[11px] shadow">
                        Апаративен третман
                      </span>
                    </div>
                  )}

                  {/* Duration badge without price */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-stone-900/90 text-stone-200 backdrop-blur-sm border border-stone-700/60">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{service.duration} мин</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-xs text-amber-400/90 font-medium mb-1">
                      {service.titleEn}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-stone-100 group-hover:text-amber-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="pt-2 border-t border-stone-900 space-y-1.5 text-xs text-stone-300">
                    {service.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="line-clamp-1">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Action buttons */}
                  <div className="pt-2 grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${SALON_INFO.phoneIntl}`}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs transition-colors shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Јави се</span>
                    </a>
                    <a
                      href={`viber://chat?number=%2B${SALON_INFO.whatsappNumber}&draft=${encodeURIComponent(`Здраво Даниел и Софија, сакам да се информирам за ${service.title}.`)}`}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-purple-700 hover:bg-purple-600 text-white font-medium text-xs transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Viber</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
