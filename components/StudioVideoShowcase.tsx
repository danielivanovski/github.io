'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, Film, Maximize2 } from 'lucide-react';
import { spaAudio } from '@/lib/sound';

export default function StudioVideoShowcase() {
  const [activeClip, setActiveClip] = useState<'daniel' | 'ambience'>('daniel');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentVideoSrc = activeClip === 'daniel' ? '/videos/danielVideo.mp4' : '/videos/ambienceVideo.mp4';

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

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const toggleSoundMachine = () => {
    const active = spaAudio.toggle();
    setIsAudioEnabled(active);
  };

  return (
    <section id="video-tour" className="py-20 bg-stone-950 text-stone-100 border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Автентични Видеа од Салонот</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-50">
            Видео снимки од терапевтите и амбиентот
          </h2>
          <p className="text-sm text-stone-300">
            Погледнете ги реалните сесии и опуштената спа атмосфера во нашиот салон.
          </p>
        </div>

        {/* Video switcher tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-stone-900 rounded-xl border border-stone-800">
            <button
              onClick={() => {
                setActiveClip('daniel');
                setIsPlaying(true);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeClip === 'daniel'
                  ? 'bg-amber-400 text-stone-950 shadow-md font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Видео 1: Даниел — Терапевтска масажа (danielVideo.mp4)</span>
            </button>

            <button
              onClick={() => {
                setActiveClip('ambience');
                setIsPlaying(true);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeClip === 'ambience'
                  ? 'bg-amber-400 text-stone-950 shadow-md font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Видео 2: Спа амбиент со свеќи & релаксација</span>
            </button>
          </div>
        </div>

        {/* Real HTML5 Video Player */}
        <div className="max-w-4xl mx-auto bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl">
          
          <div className="relative aspect-video w-full bg-stone-950">
            <video
              key={currentVideoSrc}
              ref={videoRef}
              src={currentVideoSrc}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover object-center"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Current Video Tag */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-amber-300 font-mono text-xs font-bold border border-amber-500/40">
                {activeClip === 'daniel' ? 'dANIELvIDEO.MP4' : 'ambienceVideo.mp4'}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur-md text-stone-200 text-xs font-medium">
                {activeClip === 'daniel' ? 'Терапевт Даниел во акција' : 'Амбиент на салонот'}
              </span>
            </div>

            {/* Big center play icon if paused */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all"
                aria-label="Пушти видео"
              >
                <div className="w-16 h-16 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shadow-xl transform active:scale-90 transition-transform">
                  <Play className="w-8 h-8 translate-x-0.5 fill-stone-950" />
                </div>
              </button>
            )}

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-3 left-3 right-3 z-10 p-3 rounded-2xl bg-stone-950/85 backdrop-blur-md border border-stone-800 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-xl bg-amber-400 text-stone-950 hover:bg-amber-300 font-bold transition-all"
                  title={isPlaying ? 'Паузирај' : 'Пушти'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <button
                  onClick={handleRestart}
                  className="p-2 rounded-xl bg-stone-800 text-stone-200 hover:bg-stone-700 transition-colors"
                  title="Одново"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 rounded-xl bg-stone-800 text-stone-200 hover:bg-stone-700 transition-colors"
                  title={isMuted ? 'Вклучи звук' : 'Исклучи звук'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
                </button>

                <button
                  onClick={toggleSoundMachine}
                  className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-medium transition-colors ${
                    isAudioEnabled
                      ? 'bg-amber-400/20 text-amber-300 border-amber-400/40'
                      : 'bg-stone-800 text-stone-300 border-stone-700 hover:text-stone-100'
                  }`}
                >
                  {isAudioEnabled ? <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
                  <span>{isAudioEnabled ? 'Спа Музика: Вклучена' : 'Вклучи спа музика'}</span>
                </button>
              </div>

              <button
                onClick={handleFullscreen}
                className="p-2 rounded-xl bg-stone-800 text-stone-200 hover:bg-stone-700 transition-colors"
                title="Цел екран"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Description Footer */}
          <div className="p-4 bg-stone-950 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-400">
            <p>
              {activeClip === 'daniel'
                ? 'Вистинска снимка од сесија на длабоко-ткивна масажа на нозе и грб од терапевтот Даниел.'
                : 'Вистинска снимка од пријатниот салонски амбиент со топло осветлување, свеќи и масажа на лице.'}
            </p>
            <span className="text-amber-400 font-mono text-[11px] font-semibold shrink-0">
              HD 720p H.264
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
