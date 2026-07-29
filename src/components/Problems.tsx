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
    <section id="problemas" className="relative py-28 md:py-36 px-6 bg-background z-10 border-t border-black/5 w-full overflow-hidden">
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
          <p className="font-sans text-foreground/85 text-base md:text-lg mt-4 max-w-2xl">
            Três problemas silenciosos que estão drenando seus resultados todos os dias e como resolvemos cada um deles.
          </p>
        </motion.div>

        {/* Problems list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col w-full"
        >
          {/* Divider */}
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
              01 // CONVERSÃO
            </div>
            <div className="lg:col-span-4">
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                Um site bonito que não gera oportunidades
              </h3>
            </div>
            <div className="lg:col-span-6 space-y-4">
              <p className="font-sans text-foreground/85 text-sm md:text-base leading-relaxed">
                Ter um site apenas para &ldquo;marcar presença&rdquo; não paga as contas. Se suas páginas não são encontradas no Google, não carregam em segundos e não conduzem o visitante ao próximo passo, você está pagando por um custo fixo que não traz retorno.
              </p>
              <p className="font-sans text-brand-glow text-sm md:text-base font-medium">
                Solução: sites de alta performance, preparados para SEO, com design focado em conversão e estrutura pronta para receber Agentes de IA.
              </p>
            </div>
          </motion.div>

          {/* Divider */}
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
              02 // ABANDONO
            </div>
            <div className="lg:col-span-4">
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                Visitantes entram no seu site e vão embora sem falar com ninguém
              </h3>
            </div>
            <div className="lg:col-span-6 space-y-4">
              <p className="font-sans text-foreground/85 text-sm md:text-base leading-relaxed">
                Mais de 70% dos visitantes deixam um site sem interagir. Sem um atendimento imediato e inteligente, cada lead que chega tem grandes chances de ir embora e comprar do concorrente que respondeu primeiro.
              </p>
              <p className="font-sans text-brand-glow text-sm md:text-base font-medium">
                Solução: um Agente de IA Web que atende, qualifica e captura oportunidades 24 horas por dia, como um vendedor digital que nunca dorme.
              </p>
            </div>
          </motion.div>

          {/* Divider */}
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
                Sua equipe desperdiça horas preciosas com tarefas repetitivas
              </h3>
            </div>
            <div className="lg:col-span-6 space-y-4">
              <p className="font-sans text-foreground/85 text-sm md:text-base leading-relaxed">
                Preencher planilhas manualmente, extrair dados de documentos um por um, gerar relatórios que consomem o dia inteiro. Horas que poderiam ser dedicadas a estratégia, vendas e crescimento viram custo operacional puro.
              </p>
              <p className="font-sans text-brand-glow text-sm md:text-base font-medium">
                Solução: softwares inteligentes que automatizam leitura de documentos, OCR, consolidação de dados e geração de relatórios, sua equipe focando no que realmente importa.
              </p>
            </div>
          </motion.div>

          {/* Divider */}
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
