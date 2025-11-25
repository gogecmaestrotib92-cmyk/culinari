'use client';

import ScrollReveal from './ScrollReveal';

export default function WhatYouGet() {
  const bookFeatures = [
    { icon: "📖", title: "50+ Recepata", desc: "Kompletna kolekcija testiranih zdravih deserata" },
    { icon: "📸", title: "HD Fotografije", desc: "Profesionalne slike svakog koraka pripreme" },
    { icon: "🎥", title: "Video Tutoriali", desc: "Pristup video vodičima za složenije recepte" },
    { icon: "📊", title: "Nutritivne Info", desc: "Kalorije, proteini, masti za svaki recept" },
    { icon: "🛒", title: "Liste za Kupovinu", desc: "Spremne liste sastojaka za štampanje" },
    { icon: "📱", title: "Mobilni Pristup", desc: "Čitajte na telefonu, tabletu ili računaru" },
    { icon: "🔄", title: "Besplatna Ažuriranja", desc: "Novi recepti dodaju se redovno" },
    { icon: "💬", title: "Email Podrška", desc: "Direktan kontakt sa Vanjom za pitanja" },
  ];

  const plannerFeatures = [
    { icon: "🗓️", title: "Nedeljni Planovi", desc: "AI generiše personalizovan plan svakog ponedeljka" },
    { icon: "🎯", title: "Personalizacija", desc: "Prilagođeno vašim ciljevima i ukusu" },
    { icon: "🛒", title: "Auto Shopping Lista", desc: "Automatski generisana lista za kupovinu" },
    { icon: "⏰", title: "Notifikacije", desc: "Podsećanja za obroke i pripremu" },
    { icon: "📈", title: "Praćenje Progresa", desc: "Grafici i statistika vaše ishrane" },
    { icon: "🔄", title: "Zamene Obroka", desc: "Ne sviđa vam se nešto? Jedan klik za zamenu" },
    { icon: "👨‍👩‍👧‍👦", title: "Porodični Mod", desc: "Planirajte obroke za celu porodicu" },
    { icon: "💬", title: "VIP Podrška", desc: "Prioritetna podrška i pristup Vanja grupi" },
  ];

  return (
    <section id="what-you-get" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📦 Šta dobijate
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Sve što vam <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">treba na jednom mestu</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ovo nije samo PDF sa receptima. Dobijate kompletan sistem za zdravu ishranu.
            </p>
          </div>
        </ScrollReveal>

        {/* E-Book Features */}
        <div className="mb-16">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              📚 E-Knjiga Recepata uključuje:
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bookFeatures.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 30} direction="zoom">
                <div className="bg-gradient-to-br from-orange-50 to-white p-5 rounded-2xl border border-orange-100 hover:shadow-lg hover:border-orange-200 transition-all text-center h-full">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">{feature.title}</h4>
                  <p className="text-gray-500 text-xs">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Meal Planner Features */}
        <div className="mb-16">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              🗓️ AI Meal Planner uključuje:
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {plannerFeatures.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 30} direction="zoom">
                <div className="bg-gradient-to-br from-orange-50 to-white p-5 rounded-2xl border border-orange-100 hover:shadow-lg hover:border-orange-200 transition-all text-center h-full">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">{feature.title}</h4>
                  <p className="text-gray-500 text-xs">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
