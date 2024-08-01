import type { Metadata } from "next";
import "./globals.css";
import {Navigation} from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/contact';
import { siteConfig } from '@/config/site';
import Banner from '@/components/Banner';


export const metadata: Metadata = {
  title: {
    template: "%s - Syncware Technologies, Inc.",
    default: "Syncware Technologies Inc",
  },
  description: "We are a digital product design &amp; solutions agency focused on creating award-winning products using human-centered design and cutting-edge technology.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Banner />
        <Navigation />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
