'use client';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-orange-50 via-amber-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-orange-600 font-semibold text-sm shadow-lg border border-orange-200/50 hover:shadow-xl transition-all">
              <span className="text-xl">✨</span>
              <span>Budućnost Zdravih Deserata</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
              <span className="block mb-2">AI Kulinarstvo</span>
              <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">uz Vanju</span>
            </h1>
            <p className="text-2xl sm:text-3xl font-light text-gray-800 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Kada tehnologija susretne ukus
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Svaki zalogaj je pažljivo kreiran pomoću napredne AI tehnologije. 
              <span className="block mt-2 font-medium text-gray-700">Prirodno zaslađeno. Bez aditiva. Savršeno balansirano.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-16">
              <a 
                href="#desserts" 
                className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500 text-white px-12 py-5 rounded-full hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3"
              >
                <span>Istražite Deserte</span>
                <span className="group-hover:translate-x-1 transition-transform text-xl">→</span>
              </a>
              <a 
                href="#benefits" 
                className="bg-white/80 backdrop-blur-sm border-2 border-orange-300 text-orange-600 px-12 py-5 rounded-full hover:bg-orange-50 hover:border-orange-400 hover:shadow-xl transition-all duration-300 font-semibold text-lg"
              >
                Saznajte Više
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">Prirodno</div>
              </div>
              <div className="text-center lg:text-left border-x border-orange-200">
                <div className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent mb-2">0g</div>
                <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">Šećera</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent mb-2">AI</div>
                <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">Kreiran</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute -top-8 -left-8 w-80 h-80 bg-gradient-to-br from-orange-300 to-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-6 w-80 h-80 bg-gradient-to-br from-amber-300 to-amber-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Main visual - real dessert image */}
              <div className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-orange-100 hover:shadow-orange-200/50 hover:scale-105 transition-all duration-500 group">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&h=800&fit=crop&q=90"
                    alt="Zdravi deserti"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white">
                    <p className="text-3xl font-bold mb-2 drop-shadow-lg">Ukusno & Zdravo</p>
                    <p className="text-lg font-semibold drop-shadow-md">100% Prirodno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
