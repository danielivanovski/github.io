'use client';

import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-14 h-14',
  }[size];

  const textSize = {
    sm: 'text-sm font-bold',
    md: 'text-lg font-bold',
    lg: 'text-2xl font-black',
  }[size];

  return (
    <div className="flex items-center gap-3 shrink-0">
      {/* Authentic Colorful Lotus / Droplet Emblem inspired by the flyer */}
      <div className={`relative ${iconDimensions} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Central golden core */}
          <circle cx="50" cy="50" r="10" fill="#FBBF24" />
          
          {/* Top Petal - Emerald */}
          <path
            d="M50 12 C44 24 44 38 50 42 C56 38 56 24 50 12 Z"
            fill="#10B981"
            opacity="0.95"
          />
          {/* Top Right Petal - Amber Gold */}
          <path
            d="M78 22 C67 30 58 40 60 46 C66 45 77 35 78 22 Z"
            fill="#F59E0B"
            opacity="0.95"
          />
          {/* Right Petal - Rose Coral */}
          <path
            d="M88 50 C76 56 62 56 58 50 C62 44 76 44 88 50 Z"
            fill="#F43F5E"
            opacity="0.95"
          />
          {/* Bottom Right Petal - Purple */}
          <path
            d="M78 78 C70 67 60 58 54 60 C55 66 65 77 78 78 Z"
            fill="#8B5CF6"
            opacity="0.95"
          />
          {/* Bottom Petal - Cyan Blue */}
          <path
            d="M50 88 C56 76 56 62 50 58 C44 62 44 76 50 88 Z"
            fill="#06B6D4"
            opacity="0.95"
          />
          {/* Bottom Left Petal - Amber Orange */}
          <path
            d="M22 78 C33 70 42 60 40 54 C34 55 23 65 22 78 Z"
            fill="#F97316"
            opacity="0.95"
          />
          {/* Left Petal - Ruby Red */}
          <path
            d="M12 50 C24 44 38 44 42 50 C38 56 24 56 12 50 Z"
            fill="#E11D48"
            opacity="0.95"
          />
          {/* Top Left Petal - Lime Green */}
          <path
            d="M22 22 C30 33 40 42 46 40 C45 34 35 23 22 22 Z"
            fill="#84CC16"
            opacity="0.95"
          />

          {/* Golden energy ring */}
          <circle cx="50" cy="50" r="14" stroke="#FDE68A" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.8" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-serif tracking-wider text-amber-100 ${textSize}`}>
            СОНИТА МАСАЖА
          </span>
          <span className="text-[10px] tracking-widest uppercase text-amber-400/90 font-medium font-sans">
            Massage Therapy · Даниел & Софија
          </span>
        </div>
      )}
    </div>
  );
}
