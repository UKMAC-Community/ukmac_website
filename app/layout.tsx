import type { Metadata } from "next";
import {
  JetBrains_Mono,
  Outfit,
  Plus_Jakarta_Sans,
} from "next/font/google";
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
  title: "UKMAC | Modern Agricultural Community",
  description:
    "The Union of Kampuchea Modern Agricultural Community advances sustainable, modern, and commercially competitive agriculture across Cambodia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} ${jetBrainsMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
