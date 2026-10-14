import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://selectiontextiles.com'),
  title: 'Selection Textiles | Bengaluru Est. 1979 • Premium Fabrics & Tailoring',
  description:
    'Selection Textiles Bengaluru. Since 1979, crafting modern made-to-measure tailoring, ceremonial couture, fine global fabrics, and corporate uniform solutions.',
  keywords: [
    'Selection Textiles',
    'Selection Textiles Bengaluru',
    'B.V.K. Iyengar Road Textiles',
    'Bespoke Tailoring Bengaluru',
    'Wholesale Textiles Bengaluru',
    'Suiting and Shirting Bangalore',
    'Sherwanis',
    'Modi Coats',
    'Made-to-Measure Suits',
    'Corporate Uniforms India',
    'Workplace Uniform Supplier',
  ],
  icons: {
    icon: [
      { url: '/images/Logo/favicon.png', sizes: 'any' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/images/Logo/favicon.png',
    apple: '/images/Logo/favicon.png',
  },
  authors: [{ name: 'Selection Textiles' }],
  openGraph: {
    title: 'Selection Textiles | Bengaluru Est. 1979',
    description:
      'Textile retail, textile wholesale, suiting & shirting, made-to-measure tailoring, and corporate uniforms.',
    siteName: 'Selection Textiles',
    images: [
      {
        url: '/images/Logo/Logo.png',
        width: 2067,
        height: 761,
        alt: 'Selection Textiles Bengaluru',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F1E8' },
    { media: '(prefers-color-scheme: dark)', color: '#0F2D26' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col selection:bg-accent selection:text-accent-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
