'use client';

import { useState } from 'react';

interface DessertCardProps {
  emoji: string;
  name: string;
  description: string;
  calories: string;
  protein: string;
  recipe: string;
  image: string;
  isFree?: boolean;
}

function DessertCard({ emoji, name, description, calories, protein, recipe, image, isFree }: DessertCardProps) {
  const [showRecipe, setShowRecipe] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="absolute top-4 right-4 text-5xl drop-shadow-lg">{emoji}</span>
        {isFree && (
          <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            Besplatno
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="text-orange-500">🔥</span>
            <span className="font-semibold">{calories}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-orange-500">💪</span>
            <span className="font-semibold">{protein}</span>
          </div>
        </div>
        <button 
          onClick={() => setShowRecipe(!showRecipe)}
          className="mt-4 w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all font-semibold"
        >
          {showRecipe ? '✕ Zatvori Recept' : isFree ? '📖 Pogledaj Recept (Besplatno)' : '📖 Pogledaj Recept'}
        </button>
        
        {showRecipe && (
          <div className="mt-6 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border-2 border-orange-200 shadow-inner">
            <h4 className="text-xl font-bold text-orange-600 mb-4 flex items-center gap-2">
              <span className="text-2xl">👨‍🍳</span>
              <span>Recept</span>
            </h4>
            <div className="space-y-4 text-gray-800 leading-relaxed">
              {recipe.split('\n\n').map((section, idx) => {
                const lines = section.split('\n');
                const title = lines[0];
                const items = lines.slice(1);
                
                return (
                  <div key={idx}>
                    <h5 className="font-bold text-lg text-orange-700 mb-2">{title}</h5>
                    <ul className="space-y-1.5 ml-2">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1 flex-shrink-0">
                            {item.startsWith('-') ? '•' : ''}
                          </span>
                          <span className="text-gray-700">{item.replace(/^-\s*/, '')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function FeaturedDesserts() {
  const desserts = [
    {
      emoji: "🍮",
      name: "Pana Kota sa Vanilom",
      description: "Svilenkasto glatka, prirodno zaslađena urma i ekstraktom vanile",
      calories: "120 kal",
      protein: "8g proteina",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&h=600&fit=crop&q=85",
      recipe: "Sastojci:\n- 2 šolje kokosovog mleka\n- 10 urmi (bez koštice)\n- 1 kašika ekstrakta vanile\n- 2 kašičice agar agara\n\nPriprema:\n1. Potopite urme u toploj vodi 10 minuta\n2. Izmikšajte urme sa kokosovim mlekom i vanilom\n3. Zagrejte mešavinu i dodajte agar agar\n4. Kuvajte 2 minuta uz mešanje\n5. Sipajte u kalupe i ohladite 2 sata",
      isFree: true
    },
    {
      emoji: "🍫",
      name: "Mus od Tamne Čokolade",
      description: "Bogat kakao mus sa bazom od avokada i kokosovim kremom",
      calories: "150 kal",
      protein: "6g proteina",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop&q=85",
      recipe: "Sastojci:\n- 2 zrela avokada\n- 1/2 šolje kakao praha\n- 1/4 šolje javor sirupa\n- 1/2 šolje kokosovog krema\n- 1 kašičica ekstrakta vanile\n\nPriprema:\n1. Izmikšajte sve sastojke u blenderu\n2. Miksirajte dok ne dobijete glatku teksturu\n3. Ohladite 1 sat pre serviranja\n4. Ukrašavajte voćem po želji",
      isFree: true
    },
    {
      emoji: "🥥",
      name: "Kokos-Bobica Parfe",
      description: "Slojevi kokosovog jogurta, svežeg voća i badema",
      calories: "110 kal",
      protein: "7g proteina",
      image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=800&h=600&fit=crop&q=85",
      recipe: "Sastojci:\n- 2 šolje kokosovog jogurta\n- 1 šolja mešanog bobicaštog voća\n- 1/2 šolje mrvljenih badema\n- 2 kašike meda\n\nPriprema:\n1. Promuti jogurt sa medom\n2. U čaše naložite sloj jogurta\n3. Dodajte sloj voća\n4. Dodajte sloj badema\n5. Ponovite slojeve i servirajte odmah"
    },
    {
      emoji: "🍰",
      name: "Limon-Ind Kašu Torta",
      description: "Kremasti ind kašu fil sa bademovom korom i limonovom korom",
      calories: "180 kal",
      protein: "9g proteina",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=600&fit=crop&q=85",
      recipe: "Sastojci za fil:\n- 2 šolje ind kašua (potopljenih)\n- 1/2 šolje limonovog soka\n- 1/3 šolje kokosovog ulja\n- 1/4 šolje javor sirupa\n\nZa koru:\n- 1 šolja mlevenih badema\n- 10 urmi\n\nPriprema:\n1. Izmikšajte bademove mrvice i urme za koru\n2. Pritisnite u kalup\n3. Blendajte sve sastojke za fil\n4. Sipajte preko kore\n5. Zamrznite 4 sata"
    },
    {
      emoji: "🍪",
      name: "Bademovi Kolačići",
      description: "Mekani kolačići napravljeni sa bademovim puterom i zobenim brašnom",
      calories: "95 kal",
      protein: "5g proteina",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=600&fit=crop&q=85",
      recipe: "Sastojci:\n- 1 šolja bademovog putera\n- 1/2 šolje zobenog brašna\n- 1/4 šolje javor sirupa\n- 1 jaje\n- 1 kašičica ekstrakta vanile\n\nPriprema:\n1. Zagrejte rernu na 180°C\n2. Promešajte sve sastojke\n3. Oblikujte kuglice i spljoštite ih\n4. Pecite 12-15 minuta\n5. Ohladite na rešetki"
    },
    {
      emoji: "🍨",
      name: "Mango Sladoled",
      description: "Smrznuta mango mešavina sa bananom i kokosovim mlekom",
      calories: "130 kal",
      protein: "4g proteina",
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&h=600&fit=crop&q=85",
      recipe: "Sastojci:\n- 2 smrznuta mango voća\n- 2 smrznute banane\n- 1/2 šolje kokosovog mleka\n- 1 kašika limunov soka\n\nPriprema:\n1. Stavite sve sastojke u blender\n2. Miksirajte dok ne postane kremasto\n3. Servirajte odmah kao 'soft serve'\n4. Ili zamrznite 2 sata za tvrdi sladoled\n5. Ukrašavajte svežim voćem"
    }
  ];

  return (
    <section id="desserts" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Izdvojeni <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">Deserti</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Svaki desert je napravljen od strane AI-a kako bi maksimizovao ukus uz optimizovanu ishranu. 
            Bez rafinisanog šećera, bez veštačkih aditiva – samo zdravi sastojci.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {desserts.map((dessert, index) => (
            <DessertCard key={index} {...dessert} />
          ))}
        </div>
      </div>
    </section>
  );
}
