import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'JopMatch — Profesionales cerca de ti',
    template: '%s | JopMatch',
  },
  description:
    'Conecta con profesionales, freelancers y proveedores de servicios cercanos al instante. Encuentra el mejor talento cerca de ti en Lima.',
  keywords: [
    'profesionales',
    'freelancers',
    'servicios',
    'Lima',
    'Perú',
    'marketplace',
    'empleo',
    'trabajo',
    'profesional',
  ],
  authors: [{ name: 'JopMatch' }],
  creator: 'JopMatch',
  metadataBase: new URL('https://jopmatch.com'),
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    alternateLocale: 'en_US',
    url: 'https://jopmatch.com',
    siteName: 'JopMatch',
    title: 'JopMatch — Profesionales cerca de ti',
    description:
      'Conecta con profesionales, freelancers y proveedores de servicios cercanos al instante.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JopMatch',
    description:
      'Conecta con profesionales, freelancers y proveedores de servicios cercanos al instante.',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'JopMatch',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0F0F10' },
    { media: '(prefers-color-scheme: light)', color: '#F5F5F7' },
  ],
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
