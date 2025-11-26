'use client';

import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    name: "Marija S.",
    location: "Beograd",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80",
    rating: 5,
    text: "Konačno deserti koje mogu da jedem bez griže savesti! Moja deca obožavaju čokoladni mus, a ni ne znaju da je zdrav. Hvala Vanja! 💕",
    product: "E-Knjiga Recepata"
  },
  {
    name: "Ana P.",
    location: "Novi Sad",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80",
    rating: 5,
    text: "Imam dijabetes i mislila sam da su deserti zauvek prošlost. Ovi recepti su mi vratili radost! Šećer mi je stabilan, a uživam u slatkišima.",
    product: "AI Meal Planner"
  },
  {
    name: "Nikola M.",
    location: "Niš",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80",
    rating: 5,
    text: "Skeptičan sam bio, ali posle prvog recepta - oduševljen! Pana kota je identična originalnoj, a bez grama šećera. Preporučujem svima!",
    product: "E-Knjiga Recepata"
  },
  {
    name: "Jelena D.",
    location: "Kragujevac",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&q=80",
    rating: 5,
    text: "Meal planner mi je promenio život! Svake nedelje imam plan, listu za kupovinu, i nove recepte. Smršala sam 8kg za 3 meseca bez muke.",
    product: "AI Meal Planner"
  },
  {
    name: "Stefan R.",
    location: "Subotica",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
    rating: 5,
    text: "Kao fitness trener, stalno tražim zdrave opcije za klijente. Ova knjiga je postala moja biblija! Svaki recept ima nutritivne info.",
    product: "E-Knjiga Recepata"
  },
  {
    name: "Milica T.",
    location: "Zrenjanin",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&q=80",
    rating: 5,
    text: "Video tutoriali su savršeni! Pratim korak po korak i svaki put ispadne odlično. Čak je i moja mama počela da pravi zdrave deserte! 😄",
    product: "E-Knjiga Recepata"
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="utisci" className="py-16 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-orange-200">
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
              </span>
              2000+ zadovoljnih kupaca
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Šta kažu <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">naši kupci</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Main Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-orange-500 shadow-lg transition-all hover:scale-110"
            aria-label="Prethodni"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-orange-500 shadow-lg transition-all hover:scale-110"
            aria-label="Sledeći"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="relative h-[280px] md:h-[220px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : index < activeIndex 
                      ? 'opacity-0 -translate-x-full scale-95' 
                      : 'opacity-0 translate-x-full scale-95'
                }`}
              >
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-orange-100 shadow-xl h-full">
                  <div className="flex flex-col md:flex-row gap-6 h-full">
                    {/* Left: Avatar & Info */}
                    <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 md:min-w-[140px]">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-3 border-orange-400 shadow-lg shadow-orange-500/20"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-left md:text-left">
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">📍 {testimonial.location}</p>
                        <div className="mt-1">
                          <StarRating rating={testimonial.rating} />
                        </div>
                      </div>
                    </div>

                    {/* Right: Quote */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="relative">
                        <span className="absolute -top-2 -left-2 text-4xl text-orange-500/30">"</span>
                        <p className="text-gray-200 text-lg md:text-xl leading-relaxed pl-4">
                          {testimonial.text}
                        </p>
                        <span className="absolute -bottom-4 right-0 text-4xl text-orange-500/30">"</span>
                      </div>
                      <div className="mt-4">
                        <span className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30">
                          ✓ Kupio/la: {testimonial.product}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex 
                    ? 'w-8 h-2 bg-orange-500' 
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Idi na utisak ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <button 
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-gray-500 hover:text-gray-300 flex items-center gap-1 transition-colors"
            >
              {isAutoPlaying ? (
                <>
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Auto-play uključen
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  Auto-play isključen
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mini avatars showing other reviewers */}
        <ScrollReveal delay={200}>
          <div className="flex justify-center items-center gap-3 mt-8">
            <div className="flex -space-x-3">
              {testimonials.map((t, i) => (
                <img 
                  key={i}
                  src={t.image} 
                  alt=""
                  className={`w-10 h-10 rounded-full border-2 border-gray-800 transition-all cursor-pointer hover:scale-110 hover:z-10 ${
                    i === activeIndex ? 'ring-2 ring-orange-500 scale-110 z-10' : 'opacity-60 hover:opacity-100'
                  }`}
                  onClick={() => goToSlide(i)}
                />
              ))}
            </div>
            <span className="text-gray-400 text-sm ml-2">+1994 drugih</span>
          </div>
        </ScrollReveal>

        {/* Trust badges */}
        <ScrollReveal direction="up">
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full">
              <span className="text-xl">🔒</span>
              <span className="text-sm font-medium">Sigurna kupovina</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full">
              <span className="text-xl">💯</span>
              <span className="text-sm font-medium">Garancija povraćaja</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full">
              <span className="text-xl">⚡</span>
              <span className="text-sm font-medium">Instant pristup</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full">
              <span className="text-xl">🇷🇸</span>
              <span className="text-sm font-medium">Srpski jezik</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
