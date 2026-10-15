'use client';

import React, { useRef, useState } from 'react';
import { Phone, MessageSquare, Instagram, Play, Pause, Volume2, VolumeX, Maximize2, Shield, Heart, Clock, Sparkles } from 'lucide-react';
import { SALON_INFO } from '@/lib/data';
import Logo from '@/components/Logo';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="relative overflow-hidden bg-stone-950 text-stone-100 py-12 lg:py-16">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 2-Column Split: Headline + Info on Left, danielVideo.mp4 on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand, Headline, Team & Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Logo Emblem Header */}
            <div className="inline-block">
              <Logo size="lg" showText={false} />
            </div>

            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <span>Салон за Масажа</span>
              <span aria-hidden="true" className="text-amber-500/60">·</span>
              <span>Сертифициран тим Даниел & Софија</span>
            </div>

            {/* MAIN HEADLINE AS REQUESTED: СОНИТА МАСАЖА */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-amber-50 tracking-tight leading-tight [text-wrap:balance]">
                СОНИТА МАСАЖА
              </h1>
              <p className="text-base sm:text-xl font-serif text-amber-300/90 italic">
                Професионална терапија & спа релаксација
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-stone-300 font-normal leading-relaxed max-w-xl">
              Длабоко-ткивна масажа, тригер точка терапија, релакс со природни етерични масла и ултразвучна кавитација од сертифицираниот тим <strong>Даниел & Софија</strong>.
            </p>

            {/* Direct Communication Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${SALON_INFO.phoneIntl}`}
                className="flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all transform active:scale-95 whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                <span>Повикај: {SALON_INFO.phoneFormatted}</span>
              </a>

              <a
                href={`viber://chat?number=%2B${SALON_INFO.whatsappNumber}&draft=${encodeURIComponent('Здраво Даниел и Софија, сакам да прашам за термин за масажа.')}`}
                className="flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-white bg-purple-700 hover:bg-purple-600 rounded-xl transition-colors whitespace-nowrap shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Viber</span>
              </a>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent('Здраво Даниел и Софија, сакам да прашам за термин за масажа.')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors whitespace-nowrap shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:opacity-90 rounded-xl transition-opacity whitespace-nowrap shadow-md active:scale-95"
              >
                <Instagram className="w-4 h-4" />
                <span>@sonitamassage</span>
              </a>
            </div>

            {/* Quick Contact Bar Note */}
            <div className="pt-1 text-xs text-stone-400 flex flex-wrap items-center gap-3">
              <span className="text-amber-400 font-bold">● Достапни за термини</span>
              <span aria-hidden="true">·</span>
              <span>Консултација со Даниел & Софија</span>
              <span aria-hidden="true">·</span>
              <span>Тел: 078 377 387</span>
            </div>

          </div>

          {/* Right Column: danielVideo.mp4 Video Player */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 bg-stone-900 shadow-2xl group">
              
              {/* Video Player */}
              <div className="relative aspect-video w-full bg-stone-950">
                <video
                  ref={videoRef}
                  src="/videos/danielVideo.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  controls={false}
                  className="w-full h-full object-cover object-center"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Video Watermark / Title Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-black/75 backdrop-blur-md text-amber-300 font-mono text-xs font-bold border border-amber-500/40 shadow">
                    danielVideo.mp4
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur-md text-stone-200 text-xs font-medium">
                    Терапија во тек
                  </span>
                </div>

                {/* Video Controls Overlay */}
                <div className="absolute bottom-3 left-3 right-3 z-10 p-2.5 rounded-xl bg-stone-950/85 backdrop-blur-md border border-stone-800 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="p-2 rounded-lg bg-amber-400 text-stone-950 hover:bg-amber-300 font-bold transition-transform active:scale-95"
                      title={isPlaying ? 'Паузирај' : 'Пушти'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 transition-colors"
                      title={isMuted ? 'Вклучи звук' : 'Исклучи звук'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
                    </button>

                    <span className="text-[11px] text-stone-300 font-medium hidden sm:inline">
                      Длабоко-ткивна масажа од Даниел
                    </span>
                  </div>

                  <button
                    onClick={handleFullscreen}
                    className="p-2 rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 transition-colors"
                    title="Цел екран"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Sub-strip below video */}
              <div className="p-3.5 bg-stone-950 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Вистинска видео снимка од сесија во салонот</span>
                </span>
                <a
                  href="#video-tour"
                  className="text-stone-300 hover:text-amber-200 underline font-semibold"
                >
                  Погледни повеќе видеа ↓
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* 4 Trust Markers */}
      <div className="relative z-10 mt-14 border-y border-stone-800/80 bg-stone-900/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm text-stone-300">
            
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-stone-100">Даниел & Софија</p>
                <p className="text-stone-400 text-xs">Сертифициран тим</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-stone-100">8+ Години</p>
                <p className="text-stone-400 text-xs">Искуство во масажа</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-stone-100">100% Природни</p>
                <p className="text-stone-400 text-xs">Етерични масла</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-stone-100">Мирна Оаза</p>
                <p className="text-stone-400 text-xs">Свеќи и спа релаксација</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
