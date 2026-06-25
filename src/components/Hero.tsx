"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const whatsappUrl = "https://wa.me/5521997411009?text=Oi%20Caio%2C%20quero%20uma%20an%C3%A1lise%20estrat%C3%A9gica%20do%20meu%20neg%C3%B3cio";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-radial-glow w-full">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

      {/* Background Glows (Green theme) */}
      <div className="absolute top-1/3 left-1/3 w-[260px] h-[260px] md:w-[500px] md:h-[500px] bg-brand-glow/5 rounded-full blur-[110px] pointer-events-none z-0" />

      {/* Decorative vertical brand text on side (Luxury details) */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10 text-[9px] font-mono tracking-[0.3em] text-white/20 uppercase select-none [writing-mode:vertical-lr]">
        <span>EST. 2026</span>
        <div className="w-[1px] h-12 bg-white/10" />
        <span>CAMPOS WEB & IA</span>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Coluna Esquerda: Conteúdo de Texto e CTAs (Alinhamento editorial esquerdo) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left w-full">
          {/* Headline (Editorial style combining Display & Serif Italic font) */}
          <h1
            className={`font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6 transition-all duration-1000 delay-200 transform ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Coloque sua empresa na internet com o{" "}
            <span className="font-serif italic font-normal text-brand-glow">visual</span> que ela merece e nunca mais perca oportunidades.
          </h1>

          {/* Subheadline */}
          <p
            className={`font-sans text-sm sm:text-base md:text-lg text-white/70 max-w-2xl leading-relaxed mb-10 transition-all duration-1000 delay-400 transform ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Construímos sites rápidos e sistemas de atendimento automatizado no WhatsApp. O posicionamento de credibilidade que seu negócio precisa para atrair e qualificar clientes todos os dias.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto transition-all duration-1000 delay-600 transform ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-glow-button w-full sm:w-auto px-8 py-4 bg-brand-glow text-black font-bold rounded-full text-sm transition-transform duration-300 hover:scale-[1.02] text-center"
            >
              Conversar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 text-white font-medium rounded-full text-sm transition-all duration-300 hover:bg-white/10 text-center"
            >
              Ver Serviços
            </a>
          </div>
        </div>

        {/* Coluna Direita: Dashboard de Métricas Assimétrico & Selo de Luxo */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full h-full min-h-[350px] lg:min-h-[420px]">
          
          {/* Selo Circular Rotativo Premium (Garantia de Design Editorial) */}
          <div
            className={`absolute top-0 right-4 lg:-top-12 lg:-right-4 w-28 h-28 md:w-32 md:h-32 transition-all duration-1000 delay-800 z-20 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="relative w-full h-full flex items-center justify-center select-none">
              {/* SVG Texto Rotativo */}
              <svg className="w-full h-full animate-spin-slow text-white/30" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="font-mono text-[6.5px] font-bold uppercase tracking-[0.15em] fill-current">
                  <textPath href="#circlePath">
                    · CAMPOS WEB & IA · DESIGN EXCLUSIVO B2B ·
                  </textPath>
                </text>
              </svg>
              {/* Ícone central no selo */}
              <div className="absolute w-12 h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-sm">
                <svg className="w-5 h-5 text-brand-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Painel Flutuante de Informações (Solid Premium Card) */}
          <div
            className={`glow-card p-6 md:p-8 rounded-3xl w-full max-w-[360px] relative transition-all duration-1000 delay-500 transform ${
              mounted ? "opacity-100 translate-y-0 rotate-1" : "opacity-0 translate-y-12 rotate-0"
            }`}
          >
            {/* Linha decorativa verde sutil */}
            <div className="h-[2px] w-12 bg-brand-glow/40 rounded-full mb-6" />
            
            <h3 className="font-display text-lg font-bold text-white mb-6 border-b border-white/5 pb-3">
              Diferenciais das Soluções
            </h3>
            
            <div className="space-y-4 text-left">
              <div className="border-b border-white/5 pb-3 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-white/60 uppercase tracking-widest block mb-0.5">Tempo de Atendimento</span>
                  <span className="text-sm font-semibold text-white/95">Respostas imediatas</span>
                </div>
                <span className="text-[11px] font-mono font-semibold text-brand-glow bg-brand-glow/10 px-2 py-0.5 rounded border border-brand-glow/20">Tempo real</span>
              </div>
              
              <div className="border-b border-white/5 pb-3">
                <span className="text-[10px] text-white/60 uppercase tracking-widest block mb-0.5">Disponibilidade</span>
                <span className="text-sm font-semibold text-white/90">24 horas, todos os dias</span>
              </div>
              
              <div className="border-b border-white/5 pb-3">
                <span className="text-[10px] text-white/60 uppercase tracking-widest block mb-0.5">Segurança</span>
                <span className="text-sm font-semibold text-white/90">Total privacidade de dados</span>
              </div>
              
              <div>
                <span className="text-[10px] text-white/60 uppercase tracking-widest block mb-0.5">Design do Site</span>
                <span className="text-sm font-semibold text-brand-glow">100% autoral e sob medida</span>
              </div>
            </div>

            {/* Decorador gráfico sutil no canto do painel */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b border-r border-white/10 rounded-br-2xl pointer-events-none" />
          </div>

          {/* Elemento de fundo geométrico sutil atrás do painel */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-brand-glow/[0.015] border border-brand-glow/5 rounded-full pointer-events-none z-0" />
        </div>

      </div>

      {/* Scroll indicator - Responsive */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-[10px] font-mono tracking-widest transition-opacity duration-1000 delay-1000 z-10 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="animate-bounce">ROLE PARA DESCUBRIR</span>
      </div>
    </section>
  );
}
