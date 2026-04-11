import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import ChatWrapper from '@/components/ui/chat-wrapper';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Staffable — Run your whole crew from one WhatsApp number',
  description: 'The WhatsApp-native operations platform for cleaning, landscaping, and field service businesses. Scheduling, invoicing, reminders, and supply ordering — all from one conversation.',
  openGraph: {
    title: 'Staffable — Run your whole crew from one WhatsApp number',
    description: 'Scheduling, invoicing, reminders, and supply ordering for field service businesses — all through WhatsApp.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body>
        {children}
        <ChatWrapper />
      </body>
    </html>
  );
}
