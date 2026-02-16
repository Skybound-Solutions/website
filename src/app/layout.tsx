import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Skybound Solutions | AI Consulting & Custom Development',
  description:
    'AI-powered consulting, custom development, and intelligent automation for businesses ready to deploy AI. Based in Michigan.',
  keywords: ['AI consulting', 'custom AI development', 'workflow automation', 'Michigan', 'AI agents', 'business intelligence'],
  authors: [{ name: 'Skybound Solutions' }],
  openGraph: {
    title: 'Skybound Solutions | AI-Powered Innovation',
    description: 'Custom AI tools and consulting for businesses ready to deploy AI solutions.',
    url: 'https://skyboundmi.com',
    siteName: 'Skybound Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skybound Solutions',
    description: 'AI-powered consulting and custom development.',
  },
  icons: {
    icon: [
      { url: '/brand/favicon.ico' },
      { url: '/brand/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/brand/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: { url: '/brand/favicon-180.png', sizes: '180x180' },
  },
  metadataBase: new URL('https://skyboundmi.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Skybound Solutions, LLC',
              description: 'AI consulting, custom development, and workflow automation for businesses.',
              url: 'https://skyboundmi.com',
              telephone: '+1-810-378-0620',
              email: 'info@skyboundmi.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Peck',
                addressRegion: 'MI',
                postalCode: '48466',
                addressCountry: 'US',
              },
              priceRange: '$$-$$$$',
              areaServed: 'US',
              serviceType: ['AI Consulting', 'Custom Software Development', 'Workflow Automation'],
              founder: {
                '@type': 'Person',
                name: 'Brian Anklam',
                jobTitle: 'Founder & Chief Architect',
              },
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
