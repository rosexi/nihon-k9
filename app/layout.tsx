import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nihon K9 | Specialized Training for Japanese Dog Breeds",
    template: "%s | Nihon K9",
  },
  description:
    "Professional dog training specialized in Nihon Ken - Shiba Inu, Akita, Kai Ken, Shikoku, and other Japanese breeds. Relationship-based training that works with their independent nature.",
  keywords: [
    "Nihon Ken training",
    "Japanese dog training",
    "Shiba Inu training",
    "Akita training",
    "Kai Ken training",
    "Shikoku training",
    "dog training",
    "service dog training",
    "puppy training",
  ],
  authors: [{ name: "Nihon K9" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nihon K9",
    title: "Nihon K9 | Specialized Training for Japanese Dog Breeds",
    description:
      "Professional dog training specialized in Nihon Ken. Relationship-based training that works with their independent nature.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nihon K9 | Specialized Training for Japanese Dog Breeds",
    description:
      "Professional dog training specialized in Nihon Ken. Relationship-based training that works with their independent nature.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
