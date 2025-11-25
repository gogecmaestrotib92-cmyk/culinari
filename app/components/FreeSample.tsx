'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function FreeSample() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In real app, send email to backend
  };

  const freeRecipe = {
    name: "Čokoladni Avokado Mus",
    time: "10 min",
    servings: "4 porcije",
    calories: "145 kal",
    ingredients: [
      "2 zrela avokada",
      "1/3 šolje kakao praha",
      "1/4 šolje meda ili javor sirupa",
      "1/4 šolje bademovog mleka",
      "1 kašičica ekstrakta vanile",
      "Prstohvat soli"
    ],
    steps: [
      "Isecite avokado na pola i izvadite meso u blender.",
      "Dodajte kakao prah, med, bademovo mleko, vanilu i so.",
      "Blendajte 2-3 minuta dok ne postane potpuno glatko.",
      "Probajte i dodajte više meda ako želite slađe.",
      "Rasporedite u 4 činije i ohladite 30 min.",
      "Ukrasite sa svežim voćem ili orasima. Uživajte!"
    ]
  };

  return (
    <section id="free-sample" className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🎁 POKLON ZA VAS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Probajte <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">besplatno</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Niste sigurni? Isprobajte jedan od naših najpopularnijih recepata potpuno besplatno!
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Image side */}
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&h=600&fit=crop&q=90"
                    alt="Čokoladni mus"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r"></div>
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      100% BESPLATNO
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 drop-shadow-lg">
                      {freeRecipe.name}
                    </h3>
                    <div className="flex gap-4 mt-2 text-white/90 text-sm">
                      <span>⏱️ {freeRecipe.time}</span>
                      <span>🍽️ {freeRecipe.servings}</span>
                      <span>🔥 {freeRecipe.calories}</span>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="p-6 md:p-8">
                  {!showRecipe ? (
                    <>
                      {!submitted ? (
                        <>
                          <h4 className="text-xl font-bold text-gray-900 mb-4">
                            Otkrijte zašto su naši recepti posebni
                          </h4>
                          <ul className="space-y-3 mb-6">
                            <li className="flex items-start gap-2 text-gray-600">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>Samo 5 sastojaka</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-600">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>Gotovo za 10 minuta</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-600">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>Bez šećera, bez krivice</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-600">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>Deca ga obožavaju!</span>
                            </li>
                          </ul>
                          
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Unesite vaš email"
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <button
                              type="submit"
                              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all"
                            >
                              🎁 POŠALJI MI BESPLATAN RECEPT
                            </button>
                          </form>
                          <p className="text-xs text-gray-400 mt-3 text-center">
                            Nema spam-a. Odjava u bilo kom trenutku.
                          </p>
                        </>
                      ) : (
                        <div className="text-center py-8">
                          <div className="text-5xl mb-4">🎉</div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            Hvala vam!
                          </h4>
                          <p className="text-gray-600 mb-6">
                            Recept je poslat na {email}
                          </p>
                          <button
                            onClick={() => setShowRecipe(true)}
                            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                          >
                            📖 Pogledaj recept odmah
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="max-h-[400px] overflow-y-auto pr-2">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        📖 {freeRecipe.name}
                      </h4>
                      
                      <div className="mb-4">
                        <h5 className="font-bold text-green-600 mb-2">Sastojci:</h5>
                        <ul className="space-y-1">
                          {freeRecipe.ingredients.map((ing, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                              {ing}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-bold text-green-600 mb-2">Priprema:</h5>
                        <ol className="space-y-2">
                          {freeRecipe.steps.map((step, i) => (
                            <li key={i} className="flex gap-3 text-gray-600 text-sm">
                              <span className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="mt-6 p-4 bg-orange-50 rounded-xl">
                        <p className="text-sm text-gray-700">
                          <strong>💡 Želite još 49 ovakvih recepata?</strong><br/>
                          Pogledajte našu kompletnu e-knjigu sa video tutorijalima!
                        </p>
                        <a 
                          href="#pricing"
                          className="inline-block mt-3 bg-orange-500 text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-orange-600 transition-colors"
                        >
                          Pogledaj celu kolekciju →
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
