import type { Metadata } from "next";
import { Rubik } from "next/font/google";

// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
  style: "normal",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Nachliel Pokroy's Portfolio",
  description: "Nachliel Pokroy's Portfolio",
  icons: {
    icon: "/NP.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} page-background`}>{children}</body>
    </html>
  );
}
