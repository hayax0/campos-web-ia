"use client";

import { motion, Variants } from "framer-motion";

interface Service {
  id: string;
  badge: string;
  title: string;
  description: string;
  roleName: string;
  features: string[];
}

export default function Services() {
  const services: Service[] = [
    {
      id: "vitrine",
      badge: "PRESENÇA & CREDIBILIDADE",
      roleName: "Site Exclusivo",
      title: "Sites Exclusivos de Alta Velocidade",
      description: "Sites construídos do zero para aumentar a confiança do seu cliente, destacar sua marca e transformar visitantes em contatos reais.",
      features: [
        "Design personalizado para o seu negócio (zero modelos prontos)",
        "Carregamento imediato que retém a atenção do visitante",
        "Estruturado para ser encontrado em pesquisas no Google",
        "Botão que direciona o cliente direto para o seu WhatsApp"
      ]
    },
    {
      id: "automacao",
      badge: "ATENDIMENTO & EFICIÊNCIA",
      roleName: "Atendimento Automático",
      title: "Atendimento Comercial Automatizado",
      description: "Um sistema que atende seus clientes imediatamente no WhatsApp, responde dúvidas comuns e organiza seus contatos sem parar.",
      features: [
        "Atendimento automático 24 horas por dia, 7 dias por semana",
        "Triagem automática para separar curiosos de compradores",
        "Organização simples dos contatos e oportunidades recebidas",
        "Redução drástica de tempo digitando as mesmas mensagens"
      ]
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
      <section id="servicos" className="relative py-24 md:py-32 px-6 bg-background z-10 border-t border-black/5 w-full overflow-hidden scroll-mt-24">
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
              Construímos o <span className="font-serif italic text-brand-glow font-normal">posicionamento</span> e o atendimento que sua empresa precisa.
            </h2>
            <p className="font-sans text-foreground/70 text-base md:text-lg mt-4 max-w-2xl">
              Unimos design exclusivo com atendimento automatizado para acelerar as vendas do seu negócio.
            </p>
          </motion.div>

          {/* Services Layout Alternado (Zebra Style) */}
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
                  {/* Coluna Texto (Card de Posicionamento) */}
                  <div className={`w-full lg:col-span-6 p-8 md:p-10 rounded-3xl bg-[#f5f1ea] border border-black/[0.02] border-l-4 border-l-brand-glow/20 hover:border-l-brand-glow hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(20,160,100,0.08)] transition-all duration-300 flex flex-col items-start ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    {/* Badge and Role */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="text-[10px] font-bold tracking-wider text-brand-glow bg-brand-glow/10 px-3 py-1 rounded-full border border-brand-glow/20">
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
                        <span>Prazo: {idx === 0 ? "2 semanas" : "9-14 semanas"}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-foreground/70 text-sm md:text-base leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-4 mb-8 w-full">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
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
                        </li>
                      ))}
                    </ul>

                    {/* Action Link */}
                    <div className="pt-6 border-t border-black/5 w-full">
                      <a
                        href={`https://wa.me/5521997411009?text=Oi%20Caio%2C%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20${encodeURIComponent(service.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand-glow transition-colors duration-300 group group-hover:text-brand-glow"
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

                  {/* Coluna Decorativa / Espaço Negativo Sofisticado (Entrega Máxima) */}
                  <div className={`w-full lg:col-span-6 min-h-[220px] rounded-3xl bg-black/[0.01] border border-black/[0.03] p-8 md:p-12 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="border-l-2 border-brand-glow/30 pl-6 py-2">
                      <span className="font-mono text-[10px] text-foreground/35 uppercase tracking-[0.25em]">ENTREGA MÁXIMA</span>
                      <p className="font-serif italic text-xl md:text-2xl text-foreground/80 mt-2 font-normal">
                        {idx === 0 
                          ? "Design sob medida de alta velocidade, criado sem amarras de templates prontos."
                          : "Sistemas de conversação ágeis no WhatsApp, estruturados para qualificar leads reais."}
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
