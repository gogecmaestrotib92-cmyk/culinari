'use client';

import { useState } from 'react';
import PayPalButton from './PayPalButton';

interface DessertPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  items: string[];
}

const packages: DessertPackage[] = [
  {
    id: 'basic',
    name: 'Osnovni Paket',
    price: '29.99',
    description: 'Probni paket zdrave hrane',
    items: ['2 Panna Cotta', '2 Čokoladni Mus', '1 Kokos Parfe'],
  },
  {
    id: 'premium',
    name: 'Premium Paket',
    price: '49.99',
    description: 'Premium paket za posebne prilike',
    items: ['4 Panna Cotta', '4 Čokoladni Mus', '2 Kokos Parfe', '2 Voćna Torta'],
  },
  {
    id: 'deluxe',
    name: 'Deluxe Paket',
    price: '79.99',
    description: 'Kompletna kolekcija deserata',
    items: ['6 Panna Cotta', '6 Čokoladni Mus', '4 Kokos Parfe', '4 Voćna Torta', 'Besplatna dostava'],
  },
];

export default function PayPalCheckout() {
  const [selectedPackage, setSelectedPackage] = useState<DessertPackage | null>(null);
  const [showPayment, setShowPayment] = useState(false);

  const handleSuccess = (details: any) => {
    console.log('Payment details:', details);
    alert(`Hvala ${details.payer.name.given_name}! Vaša porudžbina je primljena.`);
    // Here you would typically:
    // 1. Save order to database
    // 2. Send confirmation email
    // 3. Notify admin
  };

  if (showPayment && selectedPackage) {
    return (
      <div className="container mx-auto px-4 py-16">
        <button
          onClick={() => {
            setShowPayment(false);
            setSelectedPackage(null);
          }}
          className="mb-8 text-orange-600 hover:text-orange-700 font-medium flex items-center gap-2"
        >
          ← Nazad na pakete
        </button>
        
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Plaćanje: {selectedPackage.name}
        </h2>
        
        <PayPalButton
          amount={selectedPackage.price}
          description={selectedPackage.description}
          onSuccess={handleSuccess}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
        Izaberite Vaš Paket
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Odaberite paket koji vam odgovara i platite sigurno preko PayPal-a
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-orange-100 hover:border-orange-300 transition-all hover:shadow-2xl"
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-4xl font-extrabold mb-2">€{pkg.price}</div>
              <p className="text-orange-100 text-sm">{pkg.description}</p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                {pkg.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => {
                  setSelectedPackage(pkg);
                  setShowPayment(true);
                }}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-all hover:shadow-lg"
              >
                Kupi Sada
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          🔒 Sigurno Plaćanje
        </h3>
        <p className="text-gray-700 mb-4">
          Koristimo PayPal za sigurna online plaćanja. Vaši podaci su zaštićeni najvišim standardima sigurnosti.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            Prihvatamo PayPal, kreditne i debitne kartice
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            SSL enkripcija svih transakcija
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            Besplatna dostava za Deluxe paket
          </li>
        </ul>
      </div>
    </div>
  );
}
