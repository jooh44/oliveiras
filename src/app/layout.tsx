import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Oliveiras Doces e Salgados",
  description: "Kits Festa Premium com Personalização IA em Piên-PR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("antialiased", outfit.variable)}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
