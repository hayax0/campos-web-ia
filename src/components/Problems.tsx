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
            Sua empresa está <span className="font-serif italic text-brand-glow font-normal">perdendo dinheiro</span> e oportunidades agora mesmo.
          </h2>
          <p className="font-sans text-foreground/70 text-base md:text-lg mt-4 max-w-2xl">
            Seu posicionamento digital e a velocidade de resposta determinam se o cliente escolhe você ou o seu concorrente. No mercado atual, a lentidão custa caro.
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
                Seu cliente pesquisa sua empresa antes de entrar em contato
              </h3>
            </div>
            <div className="lg:col-span-6">
              <p className="font-sans text-foreground/70 text-sm md:text-base leading-relaxed">
                A imensa maioria dos consumidores pesquisa negócios online antes de fechar uma compra. Se eles encontrarem um site lento, desatualizado ou com cara de amador, a sua credibilidade é destruída e eles fecham com o concorrente.
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
                Seu concorrente responde mais rápido que você
              </h3>
            </div>
            <div className="lg:col-span-6">
              <p className="font-sans text-foreground/70 text-sm md:text-base leading-relaxed">
                Se um lead qualificado mandar mensagem fora do expediente ou durante o dia corrido e você demorar para responder, a venda é perdida. O cliente digital não espera: ele compra de quem responder primeiro.
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
                Sua equipe perde horas valiosas com tarefas repetitivas
              </h3>
            </div>
            <div className="lg:col-span-6">
              <p className="font-sans text-foreground/70 text-sm md:text-base leading-relaxed">
                Gastar tempo digitando as mesmas mensagens, enviando apresentações manuais e filtrando curiosos drena a produtividade e o faturamento. O tempo da sua empresa deveria ser focado em fechar negócios prontos e gerar lucro.
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
