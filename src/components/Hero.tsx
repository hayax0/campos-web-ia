"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const whatsappUrl = "https://wa.me/5521997411009?text=Oi%20Caio%2C%20quero%20uma%20an%C3%A1lise%20estrat%C3%A9gica%20do%20meu%20neg%C3%B3cio";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-radial-glow w-full">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

      {/* Background Glows (Green theme) */}
      <div className="absolute top-1/3 left-1/3 w-[260px] h-[260px] md:w-[500px] md:h-[500px] bg-brand-glow/5 rounded-full blur-[110px] pointer-events-none z-0" />

      {/* Decorative vertical brand text on side (Luxury details) */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10 text-[9px] font-mono tracking-[0.3em] text-foreground/20 uppercase select-none [writing-mode:vertical-lr]">
        <span>EST. 2026</span>
        <div className="w-[1px] h-12 bg-foreground/10" />
        <span>CAMPOS WEB & IA</span>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Coluna Esquerda: Conteúdo de Texto e CTAs (Alinhamento editorial esquerdo) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left w-full">
          {/* Headline (Editorial style combining Display & Serif Italic font) */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-[-0.03em] text-foreground leading-[1.05] mb-6 text-balance"
          >
            Coloque sua empresa na internet com o{" "}
            <span className="font-serif italic font-normal text-brand-glow">visual</span> que ela merece e nunca mais perca oportunidades.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm sm:text-base md:text-lg text-foreground/70 max-w-[60ch] leading-relaxed mb-10 text-pretty"
          >
            Construímos sites rápidos e sistemas de atendimento automatizado no WhatsApp. O posicionamento de credibilidade que seu negócio precisa para atrair e qualificar clientes todos os dias.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-glow-button w-full sm:w-auto px-8 py-4 bg-brand-glow text-white font-semibold rounded-full text-sm text-center shadow-[0_4px_14px_rgba(20,160,100,0.15)] hover:shadow-[0_6px_20px_rgba(20,160,100,0.25)] transition-all duration-300 hover:bg-brand-glow/90"
            >
              Conversar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-foreground/15 text-foreground font-semibold rounded-full text-sm transition-all duration-300 hover:bg-foreground/[0.03] hover:border-foreground/25 text-center shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.03)]"
            >
              Ver Serviços
            </a>
          </motion.div>
        </div>

        {/* Coluna Direita: Posicionamento Editorial B2B (Premium & Minimalista) */}
        <div className="lg:col-span-5 flex flex-col items-start justify-center relative w-full h-full min-h-[300px] lg:pl-12 lg:border-l border-black/5">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 w-full"
          >
            <div>
              <span className="font-mono text-xs text-brand-glow/80 uppercase tracking-[0.2em] block mb-3">POSICIONAMENTO</span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Design proprietário, soluções digitais sob medida.
              </h2>
            </div>
            
            <p className="font-sans text-sm md:text-base text-foreground/60 leading-relaxed">
              Não utilizamos templates pré-prontos ou scaffolds genéricos. Cada projeto comercial é pensado exclusivamente para transmitir a máxima autoridade e credibilidade ao seu negócio.
            </p>

            <div className="pt-8 border-t border-black/5 grid grid-cols-2 gap-6 w-full">
              <div>
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground block">100%</span>
                <span className="font-sans text-[10px] text-foreground/40 uppercase tracking-widest mt-2 block">Código Autoral</span>
              </div>
              <div>
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground block">&lt; 1.2s</span>
                <span className="font-sans text-[10px] text-foreground/40 uppercase tracking-widest mt-2 block">Tempo de Resposta</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator - Responsive */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30 text-[10px] font-mono tracking-widest z-10"
      >
        <span className="animate-bounce">ROLE PARA DESCUBRIR</span>
      </motion.div>
    </section>
  );
}
