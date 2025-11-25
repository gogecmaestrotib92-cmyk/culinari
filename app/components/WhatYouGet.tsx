'use client';

import ScrollReveal from './ScrollReveal';

export default function WhatYouGet() {
  const bookFeatures = [
    { icon: "📖", title: "50+ Recepata", desc: "Kompletna kolekcija testiranih zdravih deserata", highlight: true },
    { icon: "📸", title: "HD Fotografije", desc: "Profesionalne slike svakog koraka pripreme", highlight: false },
    { icon: "🎥", title: "Video Tutoriali", desc: "Pristup video vodičima za složenije recepte", highlight: true },
    { icon: "📊", title: "Nutritivne Info", desc: "Kalorije, proteini, masti za svaki recept", highlight: false },
    { icon: "🛒", title: "Liste za Kupovinu", desc: "Spremne liste sastojaka za štampanje", highlight: false },
    { icon: "📱", title: "Mobilni Pristup", desc: "Čitajte na telefonu, tabletu ili računaru", highlight: false },
    { icon: "🔄", title: "Besplatna Ažuriranja", desc: "Novi recepti dodaju se redovno", highlight: true },
    { icon: "💬", title: "Email Podrška", desc: "Direktan kontakt sa Vanjom za pitanja", highlight: false },
  ];

  const plannerFeatures = [
    { icon: "🤖", title: "AI Personalizacija", desc: "AI generiše plan prilagođen vama", highlight: true },
    { icon: "🗓️", title: "Nedeljni Planovi", desc: "Novi plan svakog ponedeljka automatski", highlight: false },
    { icon: "🛒", title: "Smart Lista", desc: "Automatski generisana lista za kupovinu", highlight: false },
    { icon: "⏰", title: "Notifikacije", desc: "Podsećanja za obroke i pripremu", highlight: false },
    { icon: "📈", title: "Praćenje Progresa", desc: "Grafici i statistika vaše ishrane", highlight: true },
    { icon: "🔄", title: "Instant Zamene", desc: "Jedan klik za zamenu obroka", highlight: false },
    { icon: "👨‍👩‍👧‍👦", title: "Porodični Mod", desc: "Planirajte obroke za celu porodicu", highlight: true },
    { icon: "⭐", title: "VIP Pristup", desc: "Prioritetna podrška i ekskluzivni sadržaj", highlight: false },
  ];

  return (
    <section id="what-you-get" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-orange-50/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-lg shadow-orange-200">
              <span className="animate-pulse">📦</span> Šta je uključeno
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Sve što vam <br className="hidden sm:block" />
              <span className="relative">
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">treba na jednom mestu</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-300" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ovo nije samo PDF sa receptima. Dobijate <strong className="text-gray-900">kompletan sistem</strong> za zdravu ishranu koji zaista funkcioniše.
            </p>
          </div>
        </ScrollReveal>

        {/* E-Book Features - Premium Card Design */}
        <div className="mb-20">
          <ScrollReveal direction="left">
            <div className="relative mb-10">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent flex-1 max-w-32"></div>
                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-orange-100">
                  <span className="text-3xl">📚</span>
                  <div>
                    <h3 className="text-xl font-black text-gray-900">E-Knjiga Recepata</h3>
                    <p className="text-sm text-orange-600 font-medium">Jednokratna kupovina • €16.99</p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent flex-1 max-w-32"></div>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {bookFeatures.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 50} direction="up">
                <div className={`group relative h-full rounded-3xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer
                  ${feature.highlight 
                    ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-xl shadow-orange-200 hover:shadow-2xl hover:shadow-orange-300' 
                    : 'bg-white border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl'
                  }`}>
                  {feature.highlight && (
                    <div className="absolute -top-2 -right-2 bg-white text-orange-500 text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      ⭐ TOP
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3
                    ${feature.highlight ? 'bg-white/20' : 'bg-gradient-to-br from-orange-100 to-amber-50'}`}>
                    {feature.icon}
                  </div>
                  <h4 className={`font-bold text-lg mb-2 ${feature.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${feature.highlight ? 'text-orange-100' : 'text-gray-500'}`}>
                    {feature.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* AI Meal Planner Features - Futuristic Design */}
        <div className="mb-20">
          <ScrollReveal direction="right">
            <div className="relative mb-10">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1 max-w-32"></div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 rounded-full shadow-lg">
                  <span className="text-3xl">🤖</span>
                  <div>
                    <h3 className="text-xl font-black text-white">AI Meal Planner</h3>
                    <p className="text-sm text-purple-200 font-medium">Mesečna pretplata • €4.99/mes</p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1 max-w-32"></div>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {plannerFeatures.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 50} direction="up">
                <div className={`group relative h-full rounded-3xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer
                  ${feature.highlight 
                    ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-xl shadow-purple-200 hover:shadow-2xl hover:shadow-purple-300' 
                    : 'bg-white border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl'
                  }`}>
                  {feature.highlight && (
                    <div className="absolute -top-2 -right-2 bg-white text-purple-600 text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      🔥 HOT
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3
                    ${feature.highlight ? 'bg-white/20' : 'bg-gradient-to-br from-purple-100 to-indigo-50'}`}>
                    {feature.icon}
                  </div>
                  <h4 className={`font-bold text-lg mb-2 ${feature.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${feature.highlight ? 'text-purple-100' : 'text-gray-500'}`}>
                    {feature.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          {/* Bonus Badge */}
          <ScrollReveal delay={400}>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-2xl">🎁</span>
                <span className="font-bold">BONUS: Kupi E-Knjigu i dobij 1 mesec AI Plannera GRATIS!</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Comparison with ChatGPT */}
        <ScrollReveal direction="up">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Zašto Culinari umesto besplatnog ChatGPT-a?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* ChatGPT Column */}
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-red-400">❌ ChatGPT recepti</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-gray-300">Generički recepti bez testiranja</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-gray-300">Bez fotografija i video uputstava</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-gray-300">Ne zna gde kupiti sastojke u Srbiji</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-gray-300">Nema garancije da će ispasti dobro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-gray-300">Nema podršku ako nešto krene po zlu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span className="text-gray-300">Morate sami računati kalorije</span>
                  </li>
                </ul>
              </div>

              {/* Culinari Column */}
              <div className="bg-orange-500/20 rounded-2xl p-6 border border-orange-400/30">
                <h4 className="text-xl font-bold mb-4 text-orange-400">✅ Culinari recepti</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-100">Svaki recept testiran 10+ puta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-100">HD fotografije i video tutoriali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-100">Lokalni sastojci dostupni u Maksiju, Lidlu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-100">100% garancija uspeha ili povrat novca</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-100">Direktna podrška od Vanje</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-100">Sve nutritivne vrednosti uračunate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
