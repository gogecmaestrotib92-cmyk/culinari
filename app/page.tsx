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
  // Main Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://culinari.rs/#organization',
    name: 'Culinari - AI Kulinarstvo uz Vanju',
    alternateName: 'Culinari Srbija',
    url: 'https://culinari.rs',
    logo: {
      '@type': 'ImageObject',
      url: 'https://culinari.rs/logo.png',
      width: 600,
      height: 60
    },
    description: 'E-knjiga sa AI receptima za zdrave deserte bez šećera. 50+ recepata za kolače, torte i slatka jela.',
    foundingDate: '2024',
    areaServed: {
      '@type': 'Country',
      name: 'Serbia'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+381-11-123-4567',
      contactType: 'customer service',
      availableLanguage: ['Serbian', 'English'],
      areaServed: 'RS'
    },
    sameAs: [
      'https://www.facebook.com/culinari',
      'https://www.instagram.com/culinari_rs',
      'https://www.tiktok.com/@culinari'
    ]
  };

  // Product Schema for E-Book
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'E-Knjiga: 50+ Zdravih Deserata Bez Šećera',
    description: 'Kompletna e-knjiga sa preko 50 recepata za zdrave deserte bez šećera i aditiva. Uključuje pana kotu, čokoladni mus, voćne torte i više.',
    image: 'https://culinari.rs/ebook-cover.jpg',
    brand: {
      '@type': 'Brand',
      name: 'Culinari'
    },
    offers: {
      '@type': 'Offer',
      url: 'https://culinari.rs/#pricing',
      priceCurrency: 'EUR',
      price: '27',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Culinari'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Milica'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5'
        },
        reviewBody: 'Fantastična knjiga! Moja porodica obožava ove zdrave deserte.'
      }
    ]
  };

  // FAQ Schema for Serbian market
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Šta su zdravi deserti bez šećera?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zdravi deserti bez šećera su slatka jela pripremljena sa prirodnim zaslađivačima poput stevije, eritritola ili voća, bez rafinisanog šećera i veštačkih aditiva.'
        }
      },
      {
        '@type': 'Question',
        name: 'Da li su recepti pogodni za dijabetičare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Da, svi naši recepti su prilagođeni osobama koje paze na unos šećera, uključujući dijabetičare. Koristimo sastojke sa niskim glikemijskim indeksom.'
        }
      },
      {
        '@type': 'Question',
        name: 'Kako da naručim e-knjigu u Srbiji?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'E-knjigu možete naručiti direktno na našem sajtu. Plaćanje je moguće PayPal-om. Odmah nakon kupovine dobijate pristup svim receptima.'
        }
      },
      {
        '@type': 'Question',
        name: 'Koliko recepata sadrži e-knjiga?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'E-knjiga sadrži preko 50 detaljnih recepata za zdrave deserte, uključujući pana kotu, čokoladni mus, voćne torte, kokosove kuglice i mnoge druge.'
        }
      }
    ]
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://culinari.rs/#website',
    url: 'https://culinari.rs',
    name: 'Culinari - Zdravi Deserti Bez Šećera',
    description: 'E-knjiga sa AI receptima za zdrave deserte. 50+ recepata bez šećera za srpsko tržište.',
    publisher: {
      '@id': 'https://culinari.rs/#organization'
    },
    inLanguage: 'sr-RS'
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Početna',
        item: 'https://culinari.rs'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Deserti',
        item: 'https://culinari.rs/#desserts'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Cene',
        item: 'https://culinari.rs/#pricing'
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
