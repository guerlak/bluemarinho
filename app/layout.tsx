import type { Metadata } from "next";
import { Rock_Salt, Inter } from "next/font/google";
import "./globals.css";

const rock = Rock_Salt({ weight: "400", subsets: ["latin"] });
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
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html >
  );
}
