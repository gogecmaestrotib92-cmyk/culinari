'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Stupite u <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">Kontakt</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Imate pitanja? Voleli bismo da čujemo od vas. Pošaljite nam poruku i odgovoriti ćemo što je pre moguće.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-orange-50 to-peach-50 rounded-3xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Vaše Ime
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                  placeholder="Marko Marković"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Adresa
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                  placeholder="marko@primer.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Poruka
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white resize-none"
                  placeholder="Recite nam šta vam je na umu..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-4 rounded-xl hover:shadow-xl transition-all font-semibold text-lg"
              >
                {submitted ? '✓ Poruka Poslata!' : 'Pošalji Poruku'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontakt Informacije</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-orange-100 to-peach-100 p-4 rounded-xl">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">pozdrav@culinari.rs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-orange-100 to-peach-100 p-4 rounded-xl">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                    <p className="text-gray-600">+381 11 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-orange-100 to-peach-100 p-4 rounded-xl">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresa</h4>
                    <p className="text-gray-600">Slatka Ulica 123<br />Beograd, 11000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-orange-100 to-peach-100 p-4 rounded-xl">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Radno Vreme</h4>
                    <p className="text-gray-600">Pon - Pet: 9h - 18h<br />Sub - Ned: 10h - 16h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Pratite Nas</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-gradient-to-br from-orange-100 to-peach-100 p-3 rounded-xl hover:shadow-lg transition-all">
                  <span className="text-2xl">📘</span>
                </a>
                <a href="#" className="bg-gradient-to-br from-orange-100 to-peach-100 p-3 rounded-xl hover:shadow-lg transition-all">
                  <span className="text-2xl">📸</span>
                </a>
                <a href="#" className="bg-gradient-to-br from-orange-100 to-peach-100 p-3 rounded-xl hover:shadow-lg transition-all">
                  <span className="text-2xl">🐦</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
