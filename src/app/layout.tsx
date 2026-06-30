import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Touchdown do Bem | Onde o esporte transforma vidas",
  description:
    "Mais de 600 crianças encontram no Touchdown do Bem oportunidades para aprender, crescer, sonhar e construir um futuro melhor através do Flag Football. 6 polos em Minas Gerais. Campeão Brasileiro Sub-10.",
  keywords: [
    "Flag Football",
    "projeto social",
    "esporte",
    "crianças",
    "Minas Gerais",
    "Belo Horizonte",
    "NFL",
    "Touchdown do Bem",
    "transformação social",
  ],
  openGraph: {
    title: "Touchdown do Bem | Onde o esporte transforma vidas",
    description:
      "Mais de 600 crianças encontram no Touchdown do Bem oportunidades para aprender, crescer, sonhar e construir um futuro melhor através do Flag Football.",
    url: "https://touchdowndobem.org.br",
    siteName: "Touchdown do Bem",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Touchdown do Bem | Onde o esporte transforma vidas",
    description: "Projeto social de Flag Football em Minas Gerais. +600 crianças. 6 polos. Campeão Brasileiro.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://touchdowndobem.org.br" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
