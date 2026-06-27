"use client";
 
import Image from "next/image";

export default function Footer() {
  const whatsappUrl = "https://wa.me/5521997411009?text=Oi%20Caio%2C%20gostaria%20de%20conversar%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Campos%20Web%20%26%20IA";

  return (
    <footer className="relative bg-[#0b1310] z-10 border-t border-white/[0.06] pt-20 pb-12 px-6 bg-radial-bottom-glow w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Bloco Superior: Chamada de Display Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 items-start">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs text-brand-glow/90 uppercase tracking-[0.25em] block mb-4">
              PROJETO EXCLUSIVO
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-[-0.03em] leading-none mb-6">
              Vamos construir a presença digital que sua empresa merece?
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end lg:pt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-glow text-white font-semibold rounded-full text-sm text-center shadow-[0_4px_14px_rgba(20,160,100,0.15)] hover:shadow-[0_6px_20px_rgba(20,160,100,0.25)] transition-all duration-300 hover:bg-brand-glow/90 whatsapp-glow-button"
            >
              Iniciar Análise Estratégica
            </a>
          </div>
        </div>

        {/* Linha Divisória Fina */}
        <div className="h-[1px] w-full bg-white/10 mb-12" />

        {/* Bloco Inferior: Dados, Links e Direitos Autorais */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start w-full text-xs text-white/60">
          {/* Logo e Tagline */}
          <div className="md:col-span-4 space-y-4">
            <div className="relative w-28 h-8 opacity-90">
              <Image
                src="/logo.svg"
                alt="Campos Web & IA"
                fill
                className="object-contain invert opacity-95"
              />
            </div>
            <p className="font-sans text-xs text-white/50 leading-relaxed max-w-sm">
              Soluções digitais e design autoral sob medida para posicionar marcas de destaque no ecossistema B2B.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2.5">
              <a href="#servicos" className="hover:text-white transition-colors text-white/70">Serviços</a>
              <a href="#solucoes" className="hover:text-white transition-colors text-white/70">Soluções</a>
              <a href="#projetos" className="hover:text-white transition-colors text-white/70">Projetos</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <a href="#planos" className="hover:text-white transition-colors text-white/70">Planos</a>
              <a href="#como-funciona" className="hover:text-white transition-colors text-white/70">Processo</a>
              <a href="#faq" className="hover:text-white transition-colors text-white/70">FAQ</a>
            </div>
          </div>

          {/* Contatos e Autoria */}
          <div className="md:col-span-4 space-y-4 md:text-right">
            <div className="space-y-2">
              <a href="mailto:caiobusines22@gmail.com" className="block hover:text-brand-glow transition-colors font-sans text-white/70">
                caiobusines22@gmail.com
              </a>
              <a 
                href="https://www.instagram.com/caio.devfullstack/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-brand-glow transition-colors text-white/70"
              >
                <span>@caio.devfullstack</span>
              </a>
            </div>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-1 md:items-end">
              <span className="font-sans text-[11px] text-white/30">
                &copy; {new Date().getFullYear()} Campos Web & IA.
              </span>
              <span className="font-sans text-[9px] text-white/20">
                Direção Criativa por Caio Campos
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
