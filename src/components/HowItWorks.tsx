"use client";

import { motion, Variants } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Planejamento",
      description: "Entendemos o seu negócio, identificando onde você perde contatos e como podemos otimizar sua rotina.",
    },
    {
      number: "02",
      title: "Definição",
      description: "Desenhamos a melhor estrutura de site e fluxo de mensagens automático sob medida para sua empresa.",
    },
    {
      number: "03",
      title: "Criação",
      description: "Construímos e colocamos todo o seu site e atendimento automático no ar, prontos para receber clientes.",
    },
    {
      number: "04",
      title: "Acompanhamento",
      description: "Acompanhamos o andamento e sugerimos melhorias para aumentar as suas oportunidades de vendas.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { delay: 0.5, duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <section id="como-funciona" className="relative py-24 md:py-32 px-6 bg-black z-10 border-t border-white/5 w-full overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 w-[250px] h-[250px] bg-brand-glow/[0.01] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Como <span className="font-serif italic text-brand-glow font-normal">funciona</span> o nosso trabalho.
          </h2>
          <p className="font-sans text-white/70 text-base md:text-lg mt-4">
            Etapas simples e transparentes para posicionar sua marca e facilitar o contato dos seus clientes.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative w-full"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              className="glow-card relative p-8 rounded-2xl group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(37,211,102,0.05)] h-full"
            >
              {/* Connector line (Visible on large screens, except for the last step) */}
              {idx < steps.length - 1 && (
                <motion.div
                  variants={lineVariants}
                  style={{ originX: 0 }}
                  className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-brand-glow/40 to-transparent z-0 pointer-events-none"
                />
              )}

              <div>
                {/* Number */}
                <div className="font-display text-5xl md:text-6xl font-black text-white/5 group-hover:text-brand-glow/15 transition-colors duration-300 mb-6">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand-glow transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Dot decorator */}
              <div className="mt-8 flex items-center gap-1.5 text-brand-glow/30 group-hover:text-brand-glow transition-colors duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span className="text-[10px] uppercase font-mono tracking-widest font-semibold">Etapa {step.number}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
