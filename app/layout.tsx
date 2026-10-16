import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'СОНИТА МАСАЖА | Сертифициран тим Даниел & Софија',
  description: 'Професионален салон СОНИТА МАСАЖА со сертифициран тим Даниел & Софија: Длабоко-ткивна масажа, тригер точки, релакс масажа, кавитација. Видео од Даниел (danielVideo.mp4). Телефон: 078 377 387, Instagram: @sonitamassage.',
  openGraph: {
    title: 'СОНИТА МАСАЖА | Сертифициран тим Даниел & Софија',
    description: 'Салон за масажа СОНИТА МАСАЖА. Сертифициран тим Даниел & Софија. Телефон: 078 377 387, Instagram: @sonitamassage.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'СОНИТА МАСАЖА | Сертифициран тим Даниел & Софија',
    description: 'Салон за масажа СОНИТА МАСАЖА. Телефон: 078 377 387.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0c0a09',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mk" className="scroll-smooth">
      <body className="bg-stone-950 text-stone-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
