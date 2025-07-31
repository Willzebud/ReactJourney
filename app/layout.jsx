import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Projet perso",
  description: "Exercice de Next.js avec Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={clsx(geistSans.variable, geistMono.variable, "antialiased h-full")}
      >
        {children}
      </body>
    </html>
  );
}
