"use client";

import { useRef } from "react";
import { motion, useScroll, Variants } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const steps: Step[] = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Mapeamos os gargalos do seu negócio: onde você perde oportunidades, quanto tempo sua equipe gasta em tarefas repetitivas e como podemos otimizar sua operação com tecnologia.",
    },
    {
      number: "02",
      title: "Planejamento",
      description: "Desenhamos a solução ideal seja um site com Agente de IA, um software personalizado ou a automação dos seus processos internos com escopo, prazos e investimento claros.",
    },
    {
      number: "03",
      title: "Desenvolvimento",
      description: "Construímos cada detalhe do zero: design exclusivo, código otimizado, inteligência artificial integrada e todos os recursos planejados para gerar resultados reais.",
    },
    {
      number: "04",
      title: "Implantação",
      description: "Colocamos tudo no ar: publicação do site, ativação do Agente de IA, configuração dos softwares e automações. Sua empresa começa a operar com a nova estrutura.",
    },
    {
      number: "05",
      title: "Acompanhamento",
      description: "Monitoramos os resultados, sugerimos melhorias contínuas e garantimos que cada solução entregue continue gerando oportunidades e economia para seu negócio.",
    },
  ];

  // Variants for each step's opacity on scroll
  const stepVariants: Variants = {
    inactive: {
      opacity: 0.3,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    active: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  const dotVariants: Variants = {
    inactive: {
      scale: 1,
      borderColor: "rgba(0, 0, 0, 0.1)",
      backgroundColor: "rgb(252, 253, 252)"
    },
    active: {
      scale: 1.3,
      borderColor: "hsl(156, 78%, 31%)",
      backgroundColor: "hsl(156, 78%, 31%)",
      boxShadow: "0 0 12px rgba(37, 211, 102, 0.3)"
    },
  };

  const textVariants: Variants = {
    inactive: {
      color: "rgba(28, 31, 30, 0.5)"
    },
    active: {
      color: "hsl(156, 78%, 31%)"
    },
  };

  return (
    <section id="como-funciona" className="relative py-28 md:py-36 px-6 bg-background z-10 border-t border-black/5 w-full overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 w-[250px] h-[250px] bg-brand-glow/[0.01] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-28"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Como <span className="font-serif italic text-brand-glow font-normal">funciona</span> o nosso trabalho.
          </h2>
          <p className="font-sans text-foreground/70 text-base md:text-lg mt-4">
            Metodologia transparente e estruturada para entregar soluções que geram resultados reais para sua empresa.
          </p>
        </motion.div>

        {/* Timeline Vertical */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto pl-8 lg:pl-16">

          {/* Trilho Estático */}
          <div className="absolute left-[5px] lg:left-[21px] top-4 bottom-4 w-[2px] bg-black/5 rounded-full pointer-events-none" />

          {/* Linha Dinâmica de Progresso */}
          <motion.div
            style={{
              scaleY: scrollYProgress,
              transformOrigin: "top"
            }}
            className="absolute left-[5px] lg:left-[21px] top-4 bottom-4 w-[2px] bg-brand-glow rounded-full pointer-events-none"
          />

          {/* Steps */}
          <div className="flex flex-col gap-12 md:gap-16 w-full">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                initial="inactive"
                whileInView="active"
                viewport={{ once: false, margin: "-30% 0px -40% 0px" }}
                variants={stepVariants}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start group"
              >
                {/* Dot indicator */}
                <motion.div
                  variants={dotVariants}
                  className="absolute left-[-32px] lg:left-[-48px] top-1.5 md:top-2 w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 pointer-events-none z-20"
                />

                {/* Phase number */}
                <div className="md:col-span-2 pt-0.5">
                  <motion.span
                    variants={textVariants}
                    className="font-mono text-xs font-bold tracking-widest block transition-colors duration-300"
                  >
                    FASE {step.number}
                  </motion.span>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                  <p className="font-sans text-foreground/85 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
