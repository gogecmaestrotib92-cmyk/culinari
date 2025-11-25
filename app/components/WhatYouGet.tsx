'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function WhatYouGet() {
  const [activeTab, setActiveTab] = useState<'book' | 'planner'>('book');

  const bookFeatures = [
    { icon: "📖", title: "50+ Recepata" },
    { icon: "📸", title: "HD Fotografije" },
    { icon: "🎥", title: "Video Tutoriali" },
    { icon: "📊", title: "Nutritivne Info" },
    { icon: "🛒", title: "Liste za Kupovinu" },
    { icon: "📱", title: "Mobilni Pristup" },
    { icon: "🔄", title: "Besplatna Ažuriranja" },
    { icon: "💬", title: "Email Podrška" },
  ];

  const plannerFeatures = [
    { icon: "🤖", title: "AI Personalizacija" },
    { icon: "🗓️", title: "Nedeljni Planovi" },
    { icon: "🛒", title: "Smart Lista" },
    { icon: "⏰", title: "Notifikacije" },
    { icon: "📈", title: "Praćenje Progresa" },
    { icon: "🔄", title: "Instant Zamene" },
    { icon: "👨‍👩‍👧‍👦", title: "Porodični Mod" },
    { icon: "⭐", title: "VIP Pristup" },
  ];

  const features = activeTab === 'book' ? bookFeatures : plannerFeatures;

  return (
    <section id="what-you-get" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg shadow-orange-200">
              📦 Šta je uključeno
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
              Sve što vam <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">treba</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 p-1.5 rounded-2xl">
            <button
              onClick={() => setActiveTab('book')}
              className={`relative px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === 'book'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="flex items-center gap-2">
                📚 E-Knjiga
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeTab === 'book' ? 'bg-white/20' : 'bg-orange-100 text-orange-600'
                }`}>€16.99</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('planner')}
              className={`relative px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === 'planner'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="flex items-center gap-2">
                🤖 AI Planner
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeTab === 'planner' ? 'bg-white/20' : 'bg-purple-100 text-purple-600'
                }`}>€4.99/mes</span>
              </span>
            </button>
          </div>
        </div>

        {/* Features Grid - Compact */}
        <div className="max-w-4xl mx-auto">
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 transition-all duration-300 ${
            activeTab === 'book' ? 'opacity-100' : 'opacity-100'
          }`}>
            {features.map((feature, index) => (
              <div
                key={`${activeTab}-${index}`}
                className={`group flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                  activeTab === 'book'
                    ? 'bg-gradient-to-br from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 border border-orange-100'
                    : 'bg-gradient-to-br from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 border border-purple-100'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{feature.icon}</span>
                <span className="font-semibold text-gray-800 text-sm">{feature.title}</span>
              </div>
            ))}
          </div>

          {/* Quick Info */}
          <div className={`mt-6 p-4 rounded-2xl text-center transition-all duration-300 ${
            activeTab === 'book'
              ? 'bg-gradient-to-r from-orange-500 to-amber-500'
              : 'bg-gradient-to-r from-purple-600 to-indigo-600'
          }`}>
            <p className="text-white font-medium">
              {activeTab === 'book' 
                ? '✨ Jednokratna kupovina • Doživotni pristup • 100% garancija povrata'
                : '✨ Otkaži bilo kad • Novi recepti svake nedelje • AI prilagođavanje'
              }
            </p>
          </div>
        </div>

        {/* Bonus Badge */}
        <ScrollReveal delay={200}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2.5 rounded-full shadow-lg text-sm font-bold">
              🎁 BONUS: E-Knjiga + 1 mesec AI Plannera GRATIS!
            </div>
          </div>
        </ScrollReveal>

        {/* Compact ChatGPT Comparison */}
        <ScrollReveal direction="up">
          <div className="mt-10 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white max-w-4xl mx-auto">
            <h3 className="text-lg font-bold mb-4 text-center">
              Zašto Culinari umesto ChatGPT-a? 🤔
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-red-400">
                  <span>✗</span><span className="text-gray-400">Generički recepti</span>
                </div>
                <div className="flex items-center gap-2 text-red-400">
                  <span>✗</span><span className="text-gray-400">Bez fotografija</span>
                </div>
                <div className="flex items-center gap-2 text-red-400">
                  <span>✗</span><span className="text-gray-400">Bez garancije</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-green-400">
                  <span>✓</span><span className="text-gray-200">Testirani recepti</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <span>✓</span><span className="text-gray-200">HD slike + video</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <span>✓</span><span className="text-gray-200">100% garancija</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
