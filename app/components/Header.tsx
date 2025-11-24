'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Culinari
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#desserts" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Deserti
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Prednosti
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Proizvodi
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Kontakt
            </a>
            <a 
              href="#pricing" 
              className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all font-medium"
            >
              Poruči
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a 
              href="#desserts" 
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Deserti
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Prednosti
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Proizvodi
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
