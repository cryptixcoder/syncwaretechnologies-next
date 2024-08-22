import type { Metadata } from "next";
import "./globals.css";
import {Navigation} from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/contact';
import { siteConfig } from '@/config/site';
import Banner from '@/components/Banner';
import { usePathname } from 'next/navigation';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: {
    template: "%s - Syncware Technologies, Inc.",
    default: "Syncware Technologies Inc | Philly based product design and solutions agency",
  },
  description: "Philly based product design and solutions agency, partnering with companies to build great products.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  openGraph: {
    images: ['/preview.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Banner /> */}
        <Navigation />
        {children}
        <Contact />
        <Footer />
        <GoogleAnalytics gaId="G-RM6WNXTDP7" />
      </body>
    </html>
  );
}
