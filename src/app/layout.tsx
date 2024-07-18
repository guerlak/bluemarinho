import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Marinho",
  description: "Banda Blue Marinho - O Rock nunca soou tão autentico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Menu />
        <main className="mx-auto text-center flex-col items-center justify-center h-ldh">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
