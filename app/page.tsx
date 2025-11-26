import Script from 'next/script';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutVanja from './components/AboutVanja';
import FeaturedDesserts from './components/FeaturedDesserts';
import VideoPreview from './components/VideoPreview';
import WhatYouGet from './components/WhatYouGet';
import Testimonials from './components/Testimonials';
import FreeSample from './components/FreeSample';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Culinari - AI Kulinarstvo uz Vanju',
    description: 'AI kulinarstvo uz Vanju donosi zdrave deserte bez šećera i aditiva. 100% prirodni sastojci.',
    url: 'https://culinari.rs',
    telephone: '+381 11 123-4567',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Slatka Ulica 123',
      addressLocality: 'Beograd',
      postalCode: '11000',
      addressCountry: 'RS',
    },
    servesCuisine: 'Zdravi Deserti',
    priceRange: '$$',
    menu: 'https://culinari.rs/#desserts',
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <AboutVanja />
          <FeaturedDesserts />
          <VideoPreview />
          <WhatYouGet />
          <Testimonials />
          <FreeSample />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
