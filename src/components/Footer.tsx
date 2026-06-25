"use client";

import Image from "next/image";

export default function Footer() {
  const whatsappUrl = "https://wa.me/5521997411009?text=Oi%20Caio%2C%20gostaria%20de%20conversar%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Campos%20Web%20%26%20IA";

  return (
    <footer className="relative bg-black z-10 border-t border-white/5 py-12 md:py-16 px-6 bg-radial-bottom-glow w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="relative w-28 h-8 opacity-75 hover:opacity-100 transition-opacity">
            <Image
              src="/logo.svg"
              alt="Campos Web & IA"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="font-sans text-xs text-white/45">
              Tecnologia e automação B2B de alto padrão para alavancar negócios.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a 
                href="mailto:caiobusines22@gmail.com" 
                className="font-sans text-xs text-white/60 hover:text-brand-glow transition-colors"
              >
                caiobusines22@gmail.com
              </a>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <a 
                href="https://www.instagram.com/caio.devfullstack/" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-white/60 hover:text-brand-glow transition-colors flex items-center gap-1.5"
              >
                <svg 
                  className="w-3.5 h-3.5 text-white/60 hover:text-brand-glow" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs text-white/50">
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="#solucoes" className="hover:text-white transition-colors">Soluções</a>
          <a href="#projetos" className="hover:text-white transition-colors">Projetos</a>
          <a href="#planos" className="hover:text-white transition-colors">Planos</a>
          <a href="#como-funciona" className="hover:text-white transition-colors">Processo</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-glow hover:underline font-semibold"
          >
            Contato
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right flex flex-col gap-1">
          <span className="font-sans text-xs text-white/40">
            &copy; {new Date().getFullYear()} Campos Web & IA. Todos os direitos reservados.
          </span>
          <span className="font-sans text-[10px] text-white/20">
            Desenvolvido por Caio Campos
          </span>
        </div>

      </div>
    </footer>
  );
}
