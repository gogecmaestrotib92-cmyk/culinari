import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://culinari.rs'),
  title: {
    default: "Zdravi Deserti Bez Šećera | AI Recepti za Kolače - Culinari Srbija",
    template: "%s | Culinari - Zdravi Deserti Srbija"
  },
  description: "Naučite da pravite zdrave deserte bez šećera sa AI receptima. E-knjiga sa 50+ recepata za kolače, torte i slatka jela bez aditiva. Dostava širom Srbije. Pana kota, čokoladni mus, voćne torte.",
  keywords: [
    "zdravi deserti",
    "deserti bez šećera",
    "recepti bez šećera Srbija",
    "zdravi kolači recepti",
    "fit deserti",
    "dijabetes recepti slatko",
    "torte bez šećera",
    "zdravo sladko",
    "AI recepti",
    "e-knjiga recepti",
    "kuvar zdravi deserti",
    "pana kota recept",
    "čokoladni mus bez šećera",
    "kokosovi deserti",
    "voćne torte",
    "keto deserti Srbija",
    "veganski deserti",
    "deserti za dijabetičare",
    "prirodni zaslađivači recepti",
    "Beograd zdravi deserti"
  ],
  authors: [{ name: "Vanja - AI Kulinarstvo", url: "https://culinari.rs" }],
  creator: "Culinari - AI Kulinarstvo uz Vanju",
  publisher: "Culinari Srbija",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://culinari.rs",
    siteName: "Culinari - Zdravi Deserti Srbija",
    title: "Zdravi Deserti Bez Šećera | 50+ AI Recepata - Culinari",
    description: "E-knjiga sa 50+ recepata za zdrave deserte bez šećera i aditiva. Naučite da pravite ukusne kolače, torte i slatka jela sa 100% prirodnim sastojcima. Dostava širom Srbije.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Culinari - Zdravi Deserti Bez Šećera Srbija",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zdravi Deserti Bez Šećera | Culinari Srbija",
    description: "50+ AI recepata za zdrave deserte. Bez šećera, 100% prirodno! Naručite e-knjigu.",
    images: ["/twitter-image.jpg"],
    creator: "@culinari",
    site: "@culinari",
  },
  alternates: {
    canonical: "https://culinari.rs",
    languages: {
      'sr-RS': 'https://culinari.rs',
    },
  },
  category: 'food',
  classification: 'Healthy Desserts, Recipes, E-Book',
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'RS',
    'geo.placename': 'Beograd',
    'geo.position': '44.7866;20.4489',
    'ICBM': '44.7866, 20.4489',
    'distribution': 'Serbia',
    'rating': 'General',
    'revisit-after': '7 days',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-RS">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#FF6E00" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="content-language" content="sr-RS" />
        <meta name="google" content="notranslate" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
