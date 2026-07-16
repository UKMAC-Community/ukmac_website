import type { Metadata } from "next";
import {
  JetBrains_Mono,
  Outfit,
  Plus_Jakarta_Sans,
} from "next/font/google";
import LanguageProvider from "@/components/LanguageProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { translations } from "@/lib/translations";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: translations.en.metadata.title,
  description: translations.en.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${outfit.variable} ${jetBrainsMono.variable} antialiased`}
    >
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
