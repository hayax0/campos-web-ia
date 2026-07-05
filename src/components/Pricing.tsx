"use client";

import { motion, Variants } from "framer-motion";

interface PlanItem {
  name: string;
  paymentTerms: string;
  deliveryTime: string;
  description: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
  popular: boolean;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
}

export default function Pricing() {
  const plans: PlanItem[] = [
    {
      name: "Presença Digital Otimizada",
      paymentTerms: "50% de sinal e 50% na entrega",
      deliveryTime: "2 semanas",
      description: "Ideal para empresas que querem dominar as buscas do Google, gerar credibilidade instantânea e converter visitantes em contatos reais.",
      features: [
        "Site exclusivo planejado para sua taxa de conversão",
        "Carregamento imediato que evita a perda de clientes",
        "Configuração completa de domínio e e-mails profissionais",
        "Pontos de contato estratégicos integrados ao WhatsApp",
        "Design moderno e otimizado para celulares e computadores",
        "Código limpo que posiciona sua marca no topo do Google"
      ],
      ctaText: "Agendar diagnóstico gratuito",
      whatsappMessage: "Olá! Gostaria de agendar um diagnóstico gratuito para estruturar nossa Presença Digital Otimizada.",
      popular: false
    },
    {
      name: "Máquina de Atração & Automação Comercial",
      paymentTerms: "50% de sinal e 50% na entrega",
      deliveryTime: "9 a 14 semanas",
      description: "A solução comercial definitiva. Sua empresa com posicionamento de alto padrão e atendimento comercial rodando de forma automática 24/7.",
      features: [
        "Tudo incluso na solução de Presença Digital Otimizada",
        "Atendimento automático configurado no seu WhatsApp comercial",
        "Respostas imediatas para qualificar e converter novos leads",
        "Filtro de contatos para economizar horas de digitação manual",
        "Organização inteligente das oportunidades de vendas",
        "Suporte completo para manter sua operação vendendo sem parar"
      ],
      ctaText: "Agendar diagnóstico gratuito",
      whatsappMessage: "Olá! Gostaria de agendar um diagnóstico gratuito para a solução de Máquina de Atração e Automação Comercial.",
      popular: true
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Rodrigo Almeida",
      role: "Sócio Diretor",
      company: "Almeida Advocacia",
      text: "O site exclusivo desenvolvido pelo Caio mudou a apresentação da nossa empresa. Em menos de 10 dias após o lançamento, passamos a receber contatos qualificados vindos de pesquisas no Google."
    },
    {
      name: "Mariana Costa",
      role: "Fundadora",
      company: "Vita Estética",
      text: "O atendimento automático no WhatsApp salvou nossa recepção. Ele atende, tira dúvidas comuns e direciona os contatos na hora, mesmo de madrugada. Excelente solução."
    },
    {
      name: "Bruno Martins",
      role: "Head de Vendas",
      company: "Martins Logística",
      text: "Contratamos o Plano Completo. Nosso novo site exclusivo integrado ao atendimento por mensagens reduziu nosso tempo de resposta para imediato e facilitou muito nossas vendas."
    }
  ];

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
    <section id="planos" className="relative py-24 md:py-32 px-6 bg-background z-10 border-t border-black/5 w-full overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-glow/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Soluções planejadas para multiplicar seus <span className="font-serif italic text-brand-glow font-normal">clientes</span> e faturamento.
          </h2>
          <p className="font-sans text-foreground/70 text-base md:text-lg mt-4">
            Escolha a estrutura ideal para a sua empresa crescer. Desenvolvemos cada detalhe com foco em conversão de vendas e agilidade de atendimento.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-28 w-full items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`glow-card relative p-8 md:p-12 rounded-3xl flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border border-brand-glow/40 bg-black/[0.02] z-10"
                  : "bg-transparent border border-black/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-6 bg-brand-glow/10 text-brand-glow text-[9px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border border-brand-glow/20">
                  Recomendado
                </div>
              )}

              <div>
                {/* Plan Name */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="font-sans text-xs text-foreground/60 mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Plan Price */}
                <div className="mb-6">
                  <div className="font-display text-3xl font-bold text-foreground tracking-tight">
                    Sob consulta
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-brand-glow/90 font-medium">
                      <svg className="w-4 h-4 text-brand-glow/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{plan.paymentTerms}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-foreground/50 font-medium">
                      <svg className="w-4 h-4 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Prazo de entrega: {plan.deliveryTime}</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-black/5 mb-8" />

                {/* Plan Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                      <svg
                        className="w-4 h-4 text-brand-glow flex-shrink-0 mt-1"
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
              </div>

              {/* Plan CTA */}
              <div className="pt-6">
                <a
                  href={`https://wa.me/5521997411009?text=${encodeURIComponent(plan.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-full font-semibold text-center block text-sm transition-all duration-300 ${
                    plan.popular
                      ? "bg-brand-glow text-white hover:bg-brand-glow/90 shadow-[0_4px_14px_rgba(20,160,100,0.15)] hover:shadow-[0_6px_20px_rgba(20,160,100,0.25)] whatsapp-glow-button"
                      : "bg-transparent border border-foreground/15 text-foreground hover:bg-foreground/[0.03] hover:border-foreground/25 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.03)]"
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Sub-section */}
        <div id="depoimentos" className="border-t border-black/5 pt-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
              O que dizem os clientes parceiros
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full divide-y md:divide-y-0 md:divide-x divide-black/5"
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`flex flex-col justify-between relative h-full ${idx > 0 ? "md:pl-12" : ""}`}
              >
                <span className="absolute -top-4 left-0 text-6xl font-serif text-brand-glow/10 select-none pointer-events-none">
                  “
                </span>
                <div className="pt-4 z-10">
                  {/* Evaluation Stars */}
                  <div className="flex items-center gap-1 mb-3 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-sans text-foreground/80 text-sm md:text-base leading-relaxed italic mb-8">
                    {t.text}
                  </p>
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-foreground">
                    {t.name}
                  </div>
                  <div className="font-sans text-xs text-foreground/40 mt-0.5">
                    {t.role} · <span className="text-brand-glow/90">{t.company}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
