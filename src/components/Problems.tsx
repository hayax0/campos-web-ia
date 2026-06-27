"use client";

import { motion, Variants } from "framer-motion";

export default function Problems() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="problemas" className="relative py-24 md:py-32 px-6 bg-background z-10 border-t border-black/5 w-full overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-brand-glow/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Seu negócio está <span className="font-serif italic text-brand-glow font-normal">perdendo</span> clientes silenciosamente todos os dias.
          </h2>
          <p className="font-sans text-foreground/70 text-base md:text-lg mt-4 max-w-2xl">
            Seu site e seu atendimento são a porta de entrada da sua empresa. Se eles não funcionarem de forma excelente, os potenciais clientes acabam fechando com quem responder mais rápido ou parecer mais profissional.
          </p>
        </motion.div>

        {/* Editorial list of problems */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col w-full"
        >
          {/* Linha Divisória Animada */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="h-[1px] w-full bg-foreground/10"
          />

          {/* Problema 1 */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-12 md:py-16 items-start"
          >
            <div className="lg:col-span-2 font-mono text-xs text-brand-glow/80 uppercase tracking-widest pt-1">
              01 // PRESENÇA
            </div>
            <div className="lg:col-span-4">
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                Site lento ou de aparência amadora
              </h3>
            </div>
            <div className="lg:col-span-6">
              <p className="font-sans text-foreground/70 text-sm md:text-base leading-relaxed">
                As pessoas pesquisam sua empresa antes de fechar negócio. Se elas encontrarem um site confuso, lento ou com cara de amador, a sua credibilidade cai na hora. Concorrentes com um posicionamento visual melhor acabam levando o cliente.
              </p>
            </div>
          </motion.div>

          {/* Linha Divisória Animada */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="h-[1px] w-full bg-foreground/10"
          />

          {/* Problema 2 */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-12 md:py-16 items-start"
          >
            <div className="lg:col-span-2 font-mono text-xs text-brand-glow/80 uppercase tracking-widest pt-1">
              02 // COMERCIAL
            </div>
            <div className="lg:col-span-4">
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                Contatos sem resposta rápida
              </h3>
            </div>
            <div className="lg:col-span-6">
              <p className="font-sans text-foreground/70 text-sm md:text-base leading-relaxed">
                Se um interessado mandar mensagem fora do expediente e você demorar para responder, ele simplesmente manda mensagem para o seu concorrente. Sem um atendimento automático, você perde vendas valiosas toda noite.
              </p>
            </div>
          </motion.div>

          {/* Linha Divisória Animada */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="h-[1px] w-full bg-foreground/10"
          />

          {/* Problema 3 */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-12 md:py-16 items-start"
          >
            <div className="lg:col-span-2 font-mono text-xs text-brand-glow/80 uppercase tracking-widest pt-1">
              03 // OPERAÇÃO
            </div>
            <div className="lg:col-span-4">
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                Desperdício de tempo em mensagens manuais
              </h3>
            </div>
            <div className="lg:col-span-6">
              <p className="font-sans text-foreground/70 text-sm md:text-base leading-relaxed">
                Ficar respondendo às mesmas dúvidas comuns e fazendo anotações manuais gasta horas preciosas do seu dia. Esse tempo deveria ser focado em conversar apenas com leads qualificados e fechar contratos de alto valor.
              </p>
            </div>
          </motion.div>

          {/* Linha Divisória Animada */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="h-[1px] w-full bg-foreground/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
