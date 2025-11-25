'use client';

import ScrollReveal from './ScrollReveal';

export default function AboutVanja() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-orange-400 to-orange-300 rounded-3xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=700&fit=crop&q=90"
                    alt="Vanja u kuhinji"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-orange-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">5+</div>
                    <div className="text-sm text-gray-600">Godina iskustva</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal direction="right">
              <div>
                <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  👩‍🍳 Upoznajte Vanju
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Strast za <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">zdravim slatkišima</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Zdravo! Ja sam <strong className="text-gray-900">Vanja</strong>, i moja priča počinje pre 5 godina kada sam odlučila da potpuno promenim način ishrane. Kao neko ko je obožavao slatkiše, najtežii deo je bio - odreći se deserta.
                  </p>
                  <p>
                    Ali zašto bih se odricala? Umesto toga, počela sam da eksperimentišem sa zdravim alternativama. Stotine neuspelih pokušaja, tone bačenih sastojaka, i bezbroj sati u kuhinji - dok nisam pronašla <strong className="text-gray-900">savršene formule</strong>.
                  </p>
                  <p>
                    Danas, uz pomoć AI tehnologije, svaki moj recept je optimizovan za <strong className="text-gray-900">maksimalan ukus i nutritivnu vrednost</strong>. Ono što delim sa vama nije samo recept - to je rezultat godina istraživanja i testiranja.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">500+</div>
                    <div className="text-sm text-gray-500">Testiranih recepata</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">50+</div>
                    <div className="text-sm text-gray-500">Savršenih formula</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">2000+</div>
                    <div className="text-sm text-gray-500">Zadovoljnih kupaca</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-8 bg-orange-50 rounded-2xl p-6 border-l-4 border-orange-400">
                  <p className="italic text-gray-700">
                    "Moja misija je da dokažem da zdravo MOŽE biti ukusno. Svaki recept koji delim je nešto što ja lično pravim za svoju porodicu."
                  </p>
                  <p className="mt-2 font-semibold text-orange-600">— Vanja</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
