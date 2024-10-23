import './globals.css';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import { Mukta, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';

// Font-Optimierungen
const mukta = Mukta({ 
  subsets: ['latin', 'devanagari'],
  weight: ['300', '400', '700'],
  variable: '--font-mukta',
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Mode aus Krefeld | est1373.de',
  description: 'Ein Projekt in der Tradtion dieser Stadt.',
  keywords: 'Krefeld, Samt und Seide, nachhaltige Mode, Mode, Kleidung, Kleidung aus Krefeld',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
  colorScheme: 'light',
  robots: 'index, follow',
  openGraph: {
    title: 'Mode aus Krefeld | est1373.de',
    description: 'Ein Projekt in der Tradtion dieser Stadt.',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de' className={`${mukta.variable} ${playfair.variable}`}>
      <head>
        <link 
          rel="preload" 
          href="/bilder/MobilHauptbild.webp" 
          as="image"
          fetchPriority="high"
        />
        <link 
          rel="preload" 
          href="/estLogo.svg" 
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body className="font-sans">
        <Suspense fallback={
          <div className="h-20 bg-white border-b-4 border-tangerine" /> // Navbar height placeholder
        }>
          <Navbar />
        </Suspense>
        <Suspense fallback={
          <div className="min-h-screen bg-cream-100" /> // Content placeholder
        }>
          {children}
        </Suspense>
      </body>
    </html>
  );
}