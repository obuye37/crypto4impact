import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Template from "./template";
import styles from '@/app/page.module.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crypto for Impact",
  description: "Touching Lifes with Crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Navigation />
      <div className={styles.page}>
        <Template>
          <main className={styles.main}>
            {children} 
          </main>
          <footer className={styles.footer}>
            <div>C4I-Crypto for Humanity</div>
            <div>&copy; c4i-2025</div>
          </footer>
        </Template>
      </div>
      </body>
    </html>
  );
}
