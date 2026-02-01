import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fresh N Fresh – The Bakery Shop",
  description: "Premium bakery, snacks, cakes & daily essentials. Freshness You Can Taste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased font-sans bg-cream text-charcoal`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
