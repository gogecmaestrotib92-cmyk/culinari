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
  title: "Culinari - AI Kulinarstvo uz Vanju | Zdravi Deserti Bez Šećera",
  description: "AI kulinarstvo uz Vanju donosi zdrave deserte bez šećera i aditiva. 100% prirodni sastojci, AI-optimizovana ishrana, ukusni recepti. Pana kota, čokoladni mus, kokos parfe i više!",
  keywords: "AI deserti, zdravi deserti, bez šećera, prirodni deserti, Culinari, AI kulinarstvo, Vanja, recepti bez aditiva, zdravo slatko, kokosovi deserti",
  authors: [{ name: "Vanja - AI Kulinarstvo" }],
  creator: "Culinari - AI Kulinarstvo uz Vanju",
  publisher: "Culinari",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://culinari.rs",
    siteName: "Culinari - AI Kulinarstvo uz Vanju",
    title: "AI Kulinarstvo uz Vanju | Zdravi Deserti Bez Šećera",
    description: "Otkrijte svet zdravih deserata kreiran AI tehnologijom. Bez šećera, bez aditiva - samo ukusna i zdrava hrana.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Culinari - AI Zdravi Deserti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Culinari - AI Kulinarstvo uz Vanju",
    description: "Zdravi deserti bez šećera, kreirani AI tehnologijom. 100% prirodno!",
    images: ["/twitter-image.jpg"],
    creator: "@culinari",
  },
  alternates: {
    canonical: "https://culinari.rs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FF6E00" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
