'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import PayPalButton from './PayPalButton';

interface PricingCardProps {
  name: string;
  price: string;
  priceEUR: string;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
  onBuyClick: () => void;
}

function PricingCard({ name, price, priceEUR, description, features, image, popular, onBuyClick }: PricingCardProps) {
  return (
    <div className={`relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
      popular ? 'border-4 border-orange-400' : 'border border-gray-200'
    }`}>
      {popular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Najpopularnije
          </span>
        </div>
      )}
      
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-6">{description}</p>
        <div className="mb-2">
          <span className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            {price} RSD
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-6">≈ €{priceEUR}</p>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-orange-500 mt-1 flex-shrink-0 text-lg">✓</span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <button 
          onClick={onBuyClick}
          className={`w-full py-4 rounded-full font-semibold text-lg transition-all ${
          popular
            ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:shadow-xl hover:scale-105'
            : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
        }`}>
          🛒 Kupite Sada
        </button>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<{name: string; priceEUR: string; description: string} | null>(null);
  const [showModal, setShowModal] = useState(false);

  const plans = [
    {
      name: "E-Knjiga Recepata",
      price: "1,990",
      priceEUR: "16.99",
      description: "Digitalna kolekcija zdravih deserata",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=600&fit=crop&q=85",
      features: [
        "50+ AI kreiranih recepata",
        "Nutritivne informacije za sve deserte",
        "PDF format za laku upotrebu",
        "Besplatna ažuriranja",
        "Kategorisano po tipu deserta",
        "Prilagodljive porcije"
      ]
    },
    {
      name: "AI Meal Planner",
      price: "490/mes",
      priceEUR: "4.99",
      description: "Personalizovani planer obroka",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop&q=85",
      features: [
        "AI personalizovani nedeljni planovi",
        "Prilagođeno vašim preferencijama",
        "Automatska lista za kupovinu",
        "Notifikacije za obroke",
        "Praćenje kalorija i nutrijenata",
        "Novi recepti svake nedelje",
        "Mobilna aplikacija"
      ],
      popular: true
    }
  ];

  const handleBuyClick = (plan: typeof plans[0]) => {
    setSelectedPlan({
      name: plan.name,
      priceEUR: plan.priceEUR,
      description: plan.description
    });
    setShowModal(true);
  };

  const handlePaymentSuccess = (details: any) => {
    console.log('Payment successful:', details);
    // Here you would typically:
    // 1. Send order to your backend
    // 2. Send confirmation email
    // 3. Provide download link for digital products
    setTimeout(() => {
      setShowModal(false);
      setSelectedPlan(null);
    }, 3000);
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Digitalni <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">Proizvodi</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pristupite našim AI-kreiranim resursima za zdravu ishranu. 
              Sve što vam je potrebno za vaše kulinarske avanture.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="zoom">
              <PricingCard {...plan} onBuyClick={() => handleBuyClick(plan)} />
            </ScrollReveal>
          ))}
        </div>

        {/* Satisfaction Guarantee */}
        <ScrollReveal direction="up">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Garancija Zadovoljstva</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Svi naši digitalni proizvodi dolaze sa 14-dnevnom garancijom povraćaja novca. 
              Ako niste zadovoljni, vratićemo vam novac bez postavljanja pitanja!
            </p>
          </div>
        </ScrollReveal>

        {/* Payment Methods */}
        <ScrollReveal direction="up">
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">Sigurno plaćanje putem</p>
            <div className="flex justify-center items-center gap-6">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <span className="text-2xl font-bold text-blue-600">Pay</span>
                <span className="text-2xl font-bold text-blue-800">Pal</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span>💳</span>
                <span className="text-sm">Visa, Mastercard, AmEx</span>
              </div>
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
