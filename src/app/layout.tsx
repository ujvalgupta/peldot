import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WhiteWhale — Custom Buying Signals for Every Account, Every Day",
  description:
    "Your reps get custom buying signals with verified sources, not black-box intent data. WhiteWhale monitors your accounts for custom signals so your team works the right accounts at the right time.",
  icons: {
    icon: "/seo/favicon.png",
    apple: "/seo/apple-touch-icon.png",
  },
  openGraph: {
    title: "WhiteWhale — Custom Buying Signals for Every Account, Every Day",
    description:
      "WhiteWhale monitors your accounts for custom signals so your team works the right accounts at the right time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        <div className="flex min-h-screen flex-col bg-white">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
