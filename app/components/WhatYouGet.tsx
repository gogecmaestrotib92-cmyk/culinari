'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import PayPalButton from './PayPalButton';

export default function WhatYouGet() {
  const [activeTab, setActiveTab] = useState<'book' | 'planner' | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{name: string; priceEUR: string; description: string} | null>(null);

  const bookBenefits = [
    { icon: "📖", title: "50+ Ekskluzivnih Recepata" },
    { icon: "📸", title: "HD Fotografije Svakog Koraka" },
    { icon: "🎥", title: "Video Tutoriali" },
    { icon: "📊", title: "Nutritivne Vrednosti" },
    { icon: "🛒", title: "Gotove Liste za Kupovinu" },
    { icon: "🔄", title: "Besplatna Ažuriranja Zauvek" },
    { icon: "📱", title: "Pristup na Svim Uređajima" },
    { icon: "💬", title: "Email Podrška 24/7" },
  ];

  const plannerBenefits = [
    { icon: "🤖", title: "AI Personalizacija Recepata" },
    { icon: "🗓️", title: "Automatski Nedeljni Planovi" },
    { icon: "🛒", title: "Smart Lista Namirnica" },
    { icon: "📈", title: "Praćenje Progresa" },
    { icon: "🔄", title: "Instant Zamene Recepata" },
    { icon: "👨‍👩‍👧‍👦", title: "Porodični Mod" },
    { icon: "⏰", title: "Pametne Notifikacije" },
    { icon: "⭐", title: "VIP Pristup Novim Funkcijama" },
  ];

  const handleTabClick = (tab: 'book' | 'planner') => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const handleBuyClick = (planType: 'book' | 'planner') => {
    if (planType === 'book') {
      setSelectedPlan({
        name: "E-Knjiga Recepata",
        priceEUR: "16.99",
        description: "Digitalna kolekcija zdravih deserata"
      });
    } else {
      setSelectedPlan({
        name: "AI Meal Planner",
        priceEUR: "4.99",
        description: "Personalizovani planer obroka"
      });
    }
    setShowModal(true);
  };

  const handlePaymentSuccess = (details: any) => {
    console.log('Payment successful:', details);
    setTimeout(() => {
      setShowModal(false);
      setSelectedPlan(null);
    }, 3000);
  };

  return (
    <section id="what-you-get" className="py-16 md:py-20 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
              Izaberite vaš <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">paket</span>
            </h2>
            <p className="text-stone-400 max-w-xl mx-auto">
              Kliknite na paket da vidite sve pogodnosti
            </p>
          </div>
        </ScrollReveal>

        {/* Product Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
          {/* E-Knjiga Card */}
          <div 
            onClick={() => handleTabClick('book')}
            className={`flex-1 cursor-pointer rounded-3xl p-6 transition-all duration-500 border-2 ${
              activeTab === 'book'
                ? 'bg-gradient-to-br from-orange-500/30 to-amber-500/30 border-orange-500 shadow-2xl shadow-orange-500/20 scale-[1.02]'
                : 'bg-stone-900/50 border-stone-800 hover:border-orange-500/50 hover:bg-stone-900'
            }`}
          >
            <div className="text-center">
              <div className="mb-4 h-48 overflow-hidden rounded-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?w=800&q=80" 
                  alt="E-Knjiga Recepata" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                  📚 BESTSELLER
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">E-Knjiga</h3>
              <div className="inline-flex items-baseline gap-1 mb-3">
                <span className="text-3xl font-black text-orange-400">€16.99</span>
                <span className="text-stone-500 text-sm">jednokratno</span>
              </div>
              <p className="text-stone-400 text-sm mb-4">50+ zdravih recepata za deserte</p>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'book'
                  ? 'bg-orange-500 text-white'
                  : 'bg-stone-800 text-stone-300'
              }`}>
                {activeTab === 'book' ? '▼ Sakrij pogodnosti' : '▶ Prikaži pogodnosti'}
              </div>

              <div className="mt-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBuyClick('book');
                  }}
                  className="inline-block w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-lg hover:scale-105 transition-all shadow-orange-500/20"
                >
                  Poruči Odmah
                </button>
              </div>
            </div>

            {/* E-Knjiga Benefits Slide */}
            <div className={`overflow-hidden transition-all duration-500 ${
              activeTab === 'book' ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}>
              <div className="grid grid-cols-1 gap-3">
                {bookBenefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="text-white font-medium">{benefit.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Planner Card */}
          <div 
            onClick={() => handleTabClick('planner')}
            className={`flex-1 cursor-pointer rounded-3xl p-6 transition-all duration-500 border-2 ${
              activeTab === 'planner'
                ? 'bg-gradient-to-br from-purple-600/30 to-indigo-600/30 border-purple-500 shadow-2xl shadow-purple-500/20 scale-[1.02]'
                : 'bg-stone-900/50 border-stone-800 hover:border-purple-500/50 hover:bg-stone-900'
            }`}
          >
            <div className="text-center">
              <div className="mb-4 h-48 overflow-hidden rounded-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" 
                  alt="AI Meal Planner" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
                  🤖 AI POWERED
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">AI Planner</h3>
              <div className="inline-flex items-baseline gap-1 mb-3">
                <span className="text-3xl font-black text-purple-400">€4.99</span>
                <span className="text-stone-500 text-sm">/mesečno</span>
              </div>
              <p className="text-stone-400 text-sm mb-4">Personalizovani planovi ishrane</p>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'planner'
                  ? 'bg-purple-500 text-white'
                  : 'bg-stone-800 text-stone-300'
              }`}>
                {activeTab === 'planner' ? '▼ Sakrij pogodnosti' : '▶ Prikaži pogodnosti'}
              </div>

              <div className="mt-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBuyClick('planner');
                  }}
                  className="inline-block w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg hover:scale-105 transition-all shadow-purple-500/20"
                >
                  Poruči Odmah
                </button>
              </div>
            </div>

            {/* AI Planner Benefits Slide */}
            <div className={`overflow-hidden transition-all duration-500 ${
              activeTab === 'planner' ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}>
              <div className="grid grid-cols-1 gap-3">
                {plannerBenefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="text-white font-medium">{benefit.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bonus Badge */}
        <ScrollReveal delay={200}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full shadow-lg shadow-green-500/30 text-sm font-bold animate-pulse">
              🎁 BONUS: Kupi E-Knjigu i dobij 1 mesec AI Plannera GRATIS!
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* PayPal Modal */}
      {showModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-900">Završite Kupovinu</h3>
                <button 
                  onClick={() => {
                    setShowModal(false);
                    setSelectedPlan(null);
                  }}
                  className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6 p-4 bg-orange-50 rounded-xl">
                <p className="text-gray-700 font-medium">{selectedPlan.name}</p>
                <p className="text-sm text-gray-500">{selectedPlan.description}</p>
              </div>
              
              <PayPalButton
                amount={selectedPlan.priceEUR}
                description={selectedPlan.name}
                onSuccess={handlePaymentSuccess}
              />
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p className="flex items-center justify-center gap-2">
                  <span>🔒</span>
                  Sigurna transakcija zaštićena SSL enkripcijom
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
