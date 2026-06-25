import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Campos Web & IA — Consultoria B2B de Transformação Digital",
  description:
    "Construímos estruturas digitais premium e automações inteligentes que ajudam empresas a conquistar clientes, melhorar processos e vender todos os dias.",
  keywords: [
    "landing page B2B",
    "vitrine digital premium",
    "automação comercial",
    "automação de atendimento",
    "consultoria de transformação digital",
    "chatbot inteligência artificial",
    "Campos Web e IA",
    "Caio Campos",
    "eficiência operacional B2B"
  ],
  authors: [{ name: "Caio Campos" }],
  openGraph: {
    title: "Campos Web & IA — Consultoria B2B de Transformação Digital",
    description:
      "Construímos estruturas digitais premium e automações inteligentes que ajudam empresas a conquistar clientes, melhorar processos e vender todos os dias.",
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
