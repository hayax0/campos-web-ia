"use client";

import { motion, Variants } from "framer-motion";

interface Service {
  id: string;
  badge: string;
  title: string;
  description: string;
  roleName: string;
  features: string[];
  highlightQuote: string;
}

export default function Services() {
  const services: Service[] = [
    {
      id: "plataformas-web",
      badge: "CONVERSÃO & IA",
      roleName: "Plataformas Web Inteligentes",
      title: "Sites Premium com Agente de IA Web Integrado",
      description: "Sua empresa merece uma presença digital que trabalhe por você 24 horas por dia. Desenvolvemos sites de altíssima performance, rápidos, otimizados para SEO e preparados para receber um Agente de IA que atua como a primeira linha comercial do seu negócio.",
      features: [
        "Design exclusivo e sob medida, sem modelos prontos",
        "Velocidade máxima de carregamento e SEO estrutural",
        "Agente de IA Web integrado: atende, qualifica e captura leads automaticamente",
        "Encaminhamento inteligente de oportunidades reais para sua equipe comercial",
        "Zero dependência de plataformas de terceiros para funcionar"
      ],
      highlightQuote: "O Agente de IA Web funciona como um vendedor digital que nunca dorme, nunca tira folga e está pronto para converter visitantes em clientes a qualquer hora do dia ou da noite."
    },
    {
      id: "softwares-inteligentes",
      badge: "PRODUTIVIDADE & AUTOMAÇÃO",
      roleName: "Softwares Inteligentes",
      title: "Sistemas Personalizados com Inteligência Artificial",
      description: "Sua equipe perde horas com tarefas manuais que poderiam ser automatizadas. Desenvolvemos softwares sob medida que eliminam o trabalho repetitivo, reduzem erros operacionais e liberam seu time para focar no que realmente importa: fazer o negócio crescer.",
      features: [
        "Extração automática de informações de PDFs e contratos",
        "Reconhecimento óptico de caracteres (OCR) para digitalizar documentos físicos",
        "Preenchimento e consolidação automática de planilhas",
        "Importação e sincronização inteligente entre sistemas",
        "Geração automatizada de relatórios e dashboards internos",
        "Organização e classificação automática de documentos"
      ],
      highlightQuote: "Empresas que automatizam seus processos com IA reduzem em até 70% o tempo gasto em tarefas operacionais e praticamente eliminam erros de digitação e retrabalho."
    }
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative">
      <section id="servicos" className="relative py-28 md:py-36 px-6 bg-background z-10 border-t border-black/5 w-full overflow-hidden scroll-mt-24">
        {/* Background Glow */}
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-brand-glow/[0.01] rounded-full blur-[100px] pointer-events-none" />

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
              Soluções inteligentes focadas em <span className="font-serif italic text-brand-glow font-normal">vendas</span> e eficiência operacional.
            </h2>
            <p className="font-sans text-foreground/70 text-base md:text-lg mt-4 max-w-2xl">
              Combinamos desenvolvimento web premium, Agentes de IA e softwares personalizados para criar ecossistemas digitais que fazem sua empresa vender mais e operar melhor.
            </p>
          </motion.div>

          {/* Services Layout Alternado */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-24 lg:gap-32 w-full lg:pb-16"
          >
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  id={idx === 1 ? "solucoes" : undefined}
                  variants={itemVariants}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full scroll-mt-28"
                >
                  {/* Coluna Texto */}
                  <div className={`w-full lg:col-span-6 p-8 md:p-10 rounded-3xl bg-[#f5f1ea] border border-black/[0.02] border-l-4 border-l-brand-glow/20 hover:border-l-brand-glow hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(20,160,100,0.08)] transition-all duration-300 flex flex-col items-start ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    {/* Badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="badge-premium">
                        {service.badge}
                      </span>
                      <span className="text-xs font-mono text-foreground/45">
                        {service.roleName}
                      </span>
                      {/* Delivery Time Badge */}
                      <span className="text-[10px] font-mono font-medium text-foreground/60 bg-black/[0.04] border border-black/5 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Prazo: {idx === 0 ? "2 a 4 semanas" : "8 a 14 semanas"}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-foreground/85 text-sm md:text-base leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-4 mb-8 w-full">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-3 text-sm md:text-base text-foreground/90 group"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                          <svg
                            className="w-4 h-4 text-brand-glow flex-shrink-0 mt-1.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="font-sans text-foreground/80">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Action Link */}
                    <div className="pt-6 border-t border-black/5 w-full">
                      <a
                        href="#contato"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand-glow transition-colors duration-300 group"
                      >
                        <span>Solicitar esta solução</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Coluna Decorativa - Citação de Destaque */}
                  <div className={`w-full lg:col-span-6 min-h-[220px] rounded-3xl bg-black/[0.01] border border-black/[0.03] p-8 md:p-12 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="border-l-2 border-brand-glow/30 pl-6 py-2">
                      <span className="font-mono text-[10px] text-foreground/35 uppercase tracking-[0.25em]">DIFERENCIAL</span>
                      <p className="font-serif italic text-xl md:text-2xl text-foreground/80 mt-2 font-normal leading-relaxed">
                        {service.highlightQuote}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
