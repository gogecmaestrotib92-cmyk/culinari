import ScrollReveal from './ScrollReveal';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
}

function BenefitCard({ icon, title, description, image }: BenefitCardProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden group h-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl min-h-[400px]">
      {/* Background Image - FULL VISIBILITY */}
      <div className="absolute inset-0 transition-all duration-300 group-hover:scale-110">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover brightness-100"
        />
      </div>
      
      {/* Dark Gradient Overlay at Bottom for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      
      {/* Content at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg tracking-normal">{title}</h3>
        <p className="text-white/90 leading-relaxed drop-shadow-md text-base">{description}</p>
      </div>
    </div>
  );
}

export default function HealthBenefits() {
  const benefits = [
    {
      icon: "🚫",
      title: "Nula Dodanog Šećera",
      description: "Svi naši deserti su prirodno zaslađeni voćem, urmom i prirodnim alternativama. Bez rafinisanog šećera znači stabilnu energiju bez pada.",
      image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=800&h=600&fit=crop&q=85"
    },
    {
      icon: "🌿",
      title: "100% Prirodni Sastojci",
      description: "Svaki sastojak dolazi iz prirode. Bez veštačkih aroma, boja ili konzervansa – samo čista, zdrava dobrota.",
      image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=800&h=600&fit=crop&q=85"
    },
    {
      icon: "💚",
      title: "Bogato Nutrientima",
      description: "Prepuno vitamina, minerala i antioksidanata. Naši deserti hrane vaše telo dok zadovoljavaju vašu potrebu za slatkim.",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&h=600&fit=crop&q=85"
    },
    {
      icon: "⚡",
      title: "Trajna Energija",
      description: "Kompleksni ugljeni hidratu i zdrave masti obezbeđuju dugotrajnu energiju. Bez skokova šećera, samo stabilno gorivo za vaš dan.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=85"
    },
    {
      icon: "🧠",
      title: "AI-Optimizovana Ishrana",
      description: "Napredni algoritmi analiziraju nutrivne profile kako bi stvorili savršenu ravnotežu ukusa i zdravstvenih prednosti.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=85"
    },
    {
      icon: "🌱",
      title: "Prijateljski za Creva",
      description: "Bogato vlaknima i probioticima za podršku zdravlja sistema za varenje. Osećajte se lako i energično posle svakog zalogaja.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&q=80"
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Zdravstvene <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">Prednosti</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Otkrijte zašto su Culinari deserti savršen izbor za ljubitelje zdrave hrane
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <BenefitCard {...benefit} />
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Info Section */}
        <ScrollReveal direction="up">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <ScrollReveal direction="left" className="flex-1">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Nauka Iza Naših Deserata
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Naš AI analizira hiljade nutritivnih studija i profila ukusa kako bi kreirao 
                    deserte koji su istovremeno ukusni i neverovatno dobri za vas. Svaki recept je 
                    optimizovan za:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-gray-600"><strong>Glikemijsku ravnotežu</strong> – održava stabilan šećer u krvi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-gray-600"><strong>Sadržaj proteina</strong> – podržava zdravlje mišića</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-gray-600"><strong>Gustinu mikronutrijenata</strong> – maksimalni vitamini i minerali</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span className="text-gray-600"><strong>Zadovoljstvo ukusom</strong> – jer zdravo treba da bude ukusno</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="flex-1">
                <div className="rounded-2xl overflow-hidden shadow-lg h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop&q=85" 
                    alt="Knjiga o kulinarstvu"
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
