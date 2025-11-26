'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function VideoPreview() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="py-16 md:py-24 bg-gradient-to-br from-[#0c0a09] via-[#1c1917] to-[#0c0a09]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎥 Pogledajte kako izgleda
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Zavirite u <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">Vanjinu kuhinju</span>
            </h2>
            <p className="text-lg text-[#a8a29e] max-w-2xl mx-auto">
              Pogledajte kako izgledaju naši video tutoriali i zašto su drugačiji od svega što ste videli
            </p>
          </div>
        </ScrollReveal>

        {/* Video Container */}
        <ScrollReveal direction="zoom">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video">
              {!isPlaying ? (
                <>
                  {/* Thumbnail */}
                  <img 
                    src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&h=675&fit=crop&q=90"
                    alt="Video preview - priprema zdravih deserata"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="group relative"
                    >
                      {/* Play button */}
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:bg-orange-600 group-hover:scale-110 transition-all">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      {/* Pulse animation */}
                      <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-orange-500 rounded-full animate-ping opacity-30"></div>
                    </button>
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-lg text-white text-sm">
                    2:34
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#1c1917]">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🎬</div>
                    <p className="text-xl">Video se učitava...</p>
                    <p className="text-[#a8a29e] mt-2">Ovde bi bio embedovan pravi video</p>
                    <button 
                      onClick={() => setIsPlaying(false)}
                      className="mt-4 text-orange-400 hover:text-orange-300"
                    >
                      ← Nazad na thumbnail
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Video features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">📹</div>
                <p className="text-white font-medium text-sm">HD Kvalitet</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-white font-medium text-sm">Korak po korak</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🇷🇸</div>
                <p className="text-white font-medium text-sm">Srpski jezik</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">♾️</div>
                <p className="text-white font-medium text-sm">Neograničen pristup</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal direction="up">
          <div className="text-center mt-12">
            <a 
              href="#pricing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all"
            >
              <span>Pristupite svim video tutorijalima</span>
              <span>→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
