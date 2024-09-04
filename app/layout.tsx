import './globals.css';
import Navbar from '@/components/Navbar';
import { Mukta, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mode aus Krefeld | est1373.de',
  description: 'A Next.js project with TypeScript and TailwindCSS.',
  keywords: 'Next.js, Typescript, TailwindCSS',
};
const mukta = Mukta({ 
  subsets: ['latin', 'devanagari'],
  weight: ['300', '400', '700'],
  variable: '--font-mukta',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de'>
      <body className={`${mukta.variable} ${playfair.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}