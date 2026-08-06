"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import AccordionGallery from "./AccordionGallery";

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
      description: "Desenvolvimento de landing page de altíssimo padrão para assessoria de treinamento de alta performance. Layout focado em conversão e apelo visual premium, gerando novos contatos comerciais qualificados.",
      url: "https://jf-performance.vercel.app/",
      domain: "jr-performance.vercel.app",
      pcImage: "/jfpc.png",
      mobileImage: "/jfmobile.png",
      tags: ["Design Exclusivo", "Carregamento Rápido", "Alta Conversão", "SEO"]
    },
    {
      id: "futevolei-mourisco",
      title: "Futevôlei Mourisco",
      description: "Estrutura digital vibrante e dinâmica desenvolvida para uma das arenas de futevôlei mais tradicionais do Rio de Janeiro. Otimizado para exposição da grade de aulas, facilidade de contato e presença digital de alto impacto.",
      url: "https://futevolei-mourisco.vercel.app/",
      domain: "futevolei-mourisco.vercel.app",
      pcImage: "/mouriscopc.png",
      mobileImage: "/mouriscomobile.png",
      tags: ["Grade Otimizada", "Agendamento Ágil", "Mobile First", "Esportes"]
    },
    {
      id: "studio-freitas-fisio",
      title: "Studio Freitas Fisio",
      description: "Site institucional clean e sofisticado desenvolvido sob medida para estúdio de fisioterapia de elite. Criado para transmitir autoridade clínica e facilitar o agendamento de avaliações de novos pacientes.",
      url: "https://studio-freitas-fisio.vercel.app/",
      domain: "studio-freitas-fisio.vercel.app",
      pcImage: "/fisiopc.png",
      mobileImage: "/fisiomobile.png",
      tags: ["Saúde & Bem-estar", "Visual Clean", "Galeria de Fotos", "Google Maps"]
    },
    {
      id: "tozza-pet",
      title: "Tozza Pet",
      description: "Plataforma amigável e moderna desenvolvida para clínica veterinária de alto padrão. Otimização da jornada do cliente para facilidade de agendamento de consultas e exibição de especialidades.",
      url: "https://tozza-boutique.vercel.app/",
      domain: "tozza-boutique.vercel.app",
      pcImage: "/tozzapc.png",
      mobileImage: "/tozzamobile.png",
      tags: ["Pet Care", "Agendamento Ágil", "Layout Amigável", "Acessibilidade"]
    },
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
    <section id="projetos" className="relative py-28 md:py-36 px-6 bg-[#f5f1ea] z-10 border-t border-black/5 w-full overflow-hidden">
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
            Cases de sucesso que combinam <span className="font-serif italic text-brand-glow font-normal">design exclusivo</span> e conversão real.
          </h2>
          <p className="font-sans text-foreground/70 text-base md:text-lg mt-4">
            Confira as soluções comerciais e de presença digital de alto padrão que desenvolvemos para destacar marcas e gerar resultados financeiros reais.
          </p>
        </motion.div>

        {/* Projects Gallery */}
        <div className="w-full mt-12 md:mt-20 max-w-6xl mx-auto px-4 md:px-0">
          <AccordionGallery 
            items={projects.map((p) => ({
              image: p.pcImage || p.mobileImage,
              label: p.title,
              link: p.url,
            }))}
            expandRatio={0.6}
            height={500}
            className="w-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}