"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  domain: string;
  pcImage: string;
  mobileImage: string;
  tags: string[];
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      id: "jr-performance",
      title: "JF Performance",
      description: "Landing page de altíssimo padrão criada para assessoria esportiva e consultoria de treinamento de alta performance. Layout focado em conversão e apelo visual premium.",
      url: "https://jf-performance.vercel.app/",
      domain: "jr-performance.vercel.app",
      pcImage: "/jfpc.png",
      mobileImage: "/jfmobile.png",
      tags: ["Design Exclusivo", "Carregamento Rápido", "Alta Conversão", "SEO"]
    },
    {
      id: "futevolei-mourisco",
      title: "Futevôlei Mourisco",
      description: "Estrutura digital vibrante e dinâmica desenvolvida para uma das arenas de futevôlei mais tradicionais do Rio. Foco em expor horários, turmas e facilitar reservas.",
      url: "https://futevolei-mourisco.vercel.app/",
      domain: "futevolei-mourisco.vercel.app",
      pcImage: "/mouriscopc.png",
      mobileImage: "/mouriscomobile.png",
      tags: ["Esportes & Lazer", "Grade Otimizada", "Integração WhatsApp", "Mobile First"]
    },
    {
      id: "studio-freitas-fisio",
      title: "Studio Freitas Fisio",
      description: "Visual clean e sofisticado desenvolvido sob medida para um estúdio de fisioterapia, pilates e reabilitação física de elite. Transmite credibilidade e acolhimento imediato.",
      url: "https://studio-freitas-fisio.vercel.app/",
      domain: "studio-freitas-fisio.vercel.app",
      pcImage: "/fisiopc.png",
      mobileImage: "/fisiomobile.png",
      tags: ["Saúde & Bem-estar", "Visual Clean", "Galeria de Fotos", "Google Maps"]
    },
    {
      id: "tozza-pet",
      title: "Tozza Pet",
      description: "Plataforma amigável e moderna criada para clínica veterinária e petshop. Organização de serviços, especialidades médicas e agendamento rápido de consultas.",
      url: "https://tozzapet.vercel.app/",
      domain: "tozzapet.vercel.app",
      pcImage: "/tozzapc.png",
      mobileImage: "/tozzamobile.png",
      tags: ["Pet Care", "Agendamento Ágil", "Layout Amigável", "Acessibilidade"]
    }
  ];

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const projectVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="projetos" className="relative py-24 md:py-32 px-6 bg-[#f5f1ea] z-10 border-t border-black/5 w-full overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-glow/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-28"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] text-brand-glow bg-brand-glow/10 px-3.5 py-1 rounded-full border border-brand-glow/20 uppercase">
            Estudos de Caso
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mt-6">
            Projetos reais entregues com <span className="font-serif italic text-brand-glow font-normal">design exclusivo</span> e alta performance.
          </h2>
          <p className="font-sans text-foreground/70 text-base md:text-lg mt-4">
            Veja as estruturas de alto padrão que desenvolvemos para colocar marcas B2B e prestadores de serviços no topo do mercado.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-32 md:space-y-40 w-full">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Info Column */}
                <div className="w-full lg:w-5/12 flex flex-col items-start">
                  <span className="font-mono text-[10px] text-brand-glow/70 mb-3 tracking-[0.25em] uppercase">
                    CASO DE ESTUDO 0{index + 1}
                  </span>
                  <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-foreground/70 text-sm md:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium tracking-wider text-foreground/70 bg-black/[0.03] border border-black/5 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link CTA */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand-glow border-b border-black/10 hover:border-brand-glow/40 pb-0.5 transition-colors duration-300 group"
                  >
                    <span>Visitar site publicado</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Mockups Column */}
                <div className="w-full lg:w-7/12 flex items-center justify-center relative">
                  <div className="relative w-full max-w-[480px] md:max-w-[520px] aspect-[16/11]">
                    
                    {/* Mockup Desktop (Navegador) */}
                    <div className="absolute right-0 top-0 w-[85%] sm:w-[88%] aspect-[16/10] rounded-xl border border-black/5 bg-black/[0.04] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] z-0 group">
                      {/* Barra do navegador */}
                      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-black/[0.02] border-b border-black/5 relative z-10">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-black/10" />
                          <div className="w-2 h-2 rounded-full bg-black/10" />
                          <div className="w-2 h-2 rounded-full bg-black/10" />
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 text-[9px] font-mono text-foreground/40 tracking-wider truncate max-w-[180px] md:max-w-xs">
                          {project.domain}
                        </div>
                      </div>
                      
                      {/* Conteúdo do Site (Imagem estática encaixada) */}
                      <div className="relative w-full h-[calc(100%-35px)] overflow-hidden bg-black/[0.02]">
                        <Image
                          src={project.pcImage}
                          alt={`${project.title} Desktop`}
                          fill
                          unoptimized
                          className="object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* Mockup Mobile (Celular Slim Moderno) */}
                    <div className="absolute left-0 bottom-0 w-[26%] sm:w-[25%] aspect-[9/18.5] rounded-3xl border-4 border-black/10 bg-black/[0.04] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-10">
                      {/* Conteúdo do Site Mobile (Imagem estática encaixada) */}
                      <div className="relative w-full h-full overflow-hidden bg-black/[0.02] rounded-[1.4rem]">
                        <Image
                          src={project.mobileImage}
                          alt={`${project.title} Mobile`}
                          fill
                          unoptimized
                          className="object-cover object-top"
                        />
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
