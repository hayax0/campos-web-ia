import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Campos Web & IA — Agentes de IA, Sites Premium e Softwares Inteligentes",
  description:
    "Desenvolvemos sites de alta performance, Agentes de IA Web e softwares inteligentes que ajudam sua empresa a vender mais, automatizar processos e operar melhor.",
  icons: {
    icon: "/icon.png",
  },
  keywords: [
    "agente de IA web",
    "sites de alta conversão",
    "softwares personalizados",
    "automação de processos",
    "desenvolvimento web premium",
    "landing page B2B",
    "inteligência artificial para empresas",
    "Campos Web e IA",
    "Caio Campos",
    "eficiência operacional B2B"
  ],
  authors: [{ name: "Caio Campos" }],
  openGraph: {
    title: "Campos Web & IA — Agentes de IA, Sites Premium e Softwares Inteligentes",
    description:
      "Desenvolvemos sites de alta performance, Agentes de IA Web e softwares inteligentes que ajudam sua empresa a vender mais, automatizar processos e operar melhor.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-black text-white selection:bg-brand-glow selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
