'use client';

import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    name: "Marija S.",
    location: "Beograd",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    rating: 5,
    text: "Konačno deserti koje mogu da jedem bez griže savesti! Moja deca obožavaju čokoladni mus, a ni ne znaju da je zdrav. Hvala Vanja! 💕",
    product: "E-Knjiga Recepata"
  },
  {
    name: "Ana P.",
    location: "Novi Sad",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    rating: 5,
    text: "Imam dijabetes i mislila sam da su deserti zauvek prošlost. Ovi recepti su mi vratili radost! Šećer mi je stabilan, a uživam u slatkišima.",
    product: "AI Meal Planner"
  },
  {
    name: "Nikola M.",
    location: "Niš",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    rating: 5,
    text: "Skeptičan sam bio, ali posle prvog recepta - oduševljen! Pana kota je identična originalnoj, a bez grama šećera. Preporučujem svima!",
    product: "E-Knjiga Recepata"
  },
  {
    name: "Jelena D.",
    location: "Kragujevac",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80",
    rating: 5,
    text: "Meal planner mi je promenio život! Svake nedelje imam plan, listu za kupovinu, i nove recepte. Smršala sam 8kg za 3 meseca bez muke.",
    product: "AI Meal Planner"
  },
  {
    name: "Stefan R.",
    location: "Subotica",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    rating: 5,
    text: "Kao fitness trener, stalno tražim zdrave opcije za klijente. Ova knjiga je postala moja biblija! Svaki recept ima nutritivne info.",
    product: "E-Knjiga Recepata"
  },
  {
    name: "Milica T.",
    location: "Zrenjanin",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80",
    rating: 5,
    text: "Video tutoriali su savršeni! Pratim korak po korak i svaki put ispadne odlično. Čak je i moja mama počela da pravi zdrave deserte! 😄",
    product: "E-Knjiga Recepata"
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ Utisci kupaca
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Šta kažu <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">naši kupci</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Preko 2000 zadovoljnih kupaca širom Srbije. Evo šta oni kažu o našim proizvodima.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 50} direction="up">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-orange-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">📍 {testimonial.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <StarRating rating={testimonial.rating} />

                {/* Text */}
                <p className="mt-4 text-gray-600 flex-grow">{testimonial.text}</p>

                {/* Product badge */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="inline-block bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">
                    ✓ Kupio/la: {testimonial.product}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust badges */}
        <ScrollReveal direction="up">
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-gray-500">
              <span className="text-2xl">🔒</span>
              <span className="text-sm font-medium">Sigurna kupovina</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <span className="text-2xl">💯</span>
              <span className="text-sm font-medium">Garancija povraćaja novca</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <span className="text-2xl">⚡</span>
              <span className="text-sm font-medium">Instant pristup</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <span className="text-2xl">🇷🇸</span>
              <span className="text-sm font-medium">Srpski jezik</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
