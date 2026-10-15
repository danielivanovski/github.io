'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Check, Phone, MessageSquare } from 'lucide-react';
import { SALON_INFO, THERAPISTS } from '@/lib/data';

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-stone-950 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Team Photo (Daniel & Sofija) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border-2 border-stone-800 shadow-2xl bg-stone-900 group">
              <Image
                src="/images/viber_image_2026-10-15_15-50-50-363.jpg"
                alt="Сертифициран тим Даниел & Софија - СОНИТА МАСАЖА"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center filter brightness-100 group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-transparent pointer-events-none" />
              
              {/* Photo Caption Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-stone-900/90 backdrop-blur-md border border-stone-700/70 text-xs space-y-1.5 shadow-lg">
                <div className="flex items-center justify-between">
                  <p className="font-serif font-bold text-amber-200 text-sm">
                    Даниел & Софија
                  </p>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                    Сертифициран тим
                  </span>
                </div>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  <strong>Софија</strong> (од лево) и <strong>Даниел</strong> (од десно) — долгогодишно професионално искуство во терапевтска масажа, релаксација и апаративна естетика.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Award className="w-4 h-4" />
              <span>Сертифицирани Терапевти</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-50 leading-tight">
              Запознајте ги терапевтите Даниел & Софија
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              Во нашиот салон секој третман се изведува со највисоки стандарди за квалитет, медицинска прецизност и максимална хигиена. <strong>Даниел и Софија</strong> посветено работат на секој мускулен проблем со цел ослободување од болка, подобрена циркулација и длабока спа релаксација.
            </p>

            {/* Individual Profiles for Sofija and Daniel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Sofija */}
              <div className="p-4 rounded-xl bg-stone-900/70 border border-stone-800 space-y-2 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-base text-amber-200">Софија</h3>
                  <span className="text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Терапевт (од лево)
                  </span>
                </div>
                <p className="text-xs text-stone-300 font-medium">Сертифициран терапевт за масажа & естетика</p>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Специјализирана за релакс масажи со етерични масла, третмани на лице и апаративна ултразвучна кавитација со топол, персонализиран пристап.
                </p>
              </div>

              {/* Daniel */}
              <div className="p-4 rounded-xl bg-stone-900/70 border border-stone-800 space-y-2 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-base text-amber-200">Даниел</h3>
                  <span className="text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Физиотерапевт (од десно)
                  </span>
                </div>
                <p className="text-xs text-stone-300 font-medium">Сертифициран физиотерапевт & масер</p>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Специјалист за длабоко ткиво, спортски масажи, рехабилитација и тригер точки за брзо олеснување на хронична болка во грбот и вратот.
                </p>
              </div>
            </div>

            {/* Credentials Checklist */}
            <div className="space-y-2 text-xs sm:text-sm text-stone-300 pt-1">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Сертифицирани техники за длабоко ткиво, тригер точки и апаративна кавитација</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Строга хигиена, дезинфицирана опрема и свежи памучни крпи за секој клиент</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Директна комуникација со Даниел и Софија за секое прашање</span>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${SALON_INFO.phoneIntl}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs transition-colors shadow-md active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Повикај: {SALON_INFO.phoneFormatted}</span>
              </a>
              <a
                href={`viber://chat?number=%2B${SALON_INFO.whatsappNumber}&draft=${encodeURIComponent('Здраво Даниел и Софија, сакам да се информирам за третман.')}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-semibold text-xs transition-colors shadow-md active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Viber разговор со Даниел & Софија</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
