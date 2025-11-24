interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
}

function PricingCard({ name, price, description, features, image, popular }: PricingCardProps) {
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
        <div className="mb-6">
          <span className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            {price} RSD
          </span>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-orange-500 mt-1 flex-shrink-0 text-lg">✓</span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <button className={`w-full py-4 rounded-full font-semibold text-lg transition-all ${
          popular
            ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:shadow-xl hover:scale-105'
            : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
        }`}>
          Kupite Sada
        </button>
      </div>
    </div>
  );
}

export default function Pricing() {
  const plans = [
    {
      name: "E-Knjiga Recepata",
      price: "1,990",
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

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Digitalni <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">Proizvodi</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pristupite našim AI-kreiranim resursima za zdravu ishranu. 
            Sve što vam je potrebno za vaše kulinarske avanture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        {/* Satisfaction Guarantee */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">✨</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Garancija Zadovoljstva</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Svi naši digitalni proizvodi dolaze sa 14-dnevnom garancijom povraćaja novca. 
            Ako niste zadovoljni, vratićemo vam novac bez postavljanja pitanja!
          </p>
        </div>
      </div>
    </section>
  );
}
