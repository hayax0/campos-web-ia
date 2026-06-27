"use client";

import { motion, Variants } from "framer-motion";

interface PlanItem {
  name: string;
  price: string;
  period: string;
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
      name: "Plano Site Profissional",
      price: "R$ 540,90",
      period: "Pagamento único",
      paymentTerms: "50% de sinal e 50% na entrega",
      deliveryTime: "2 semanas",
      description: "Ideal para profissionais e empresas que precisam de um site de alta credibilidade para atrair clientes das pesquisas na internet.",
      features: [
        "Site exclusivo e rápido (zero modelos prontos)",
        "Endereço do site (.com.br) registrado e configurado",
        "Segurança e privacidade de acordo com a lei",
        "Botão de contato direto para o seu WhatsApp",
        "Funcionamento perfeito em qualquer celular",
        "Velocidade máxima de carregamento"
      ],
      ctaText: "Garantir Meu Site",
      whatsappMessage: "Oi Caio, quero contratar o Plano Site Profissional por R$ 540,90",
      popular: false
    },
    {
      name: "Plano Completo com Atendimento",
      price: "R$ 1.150,90",
      period: "+ mensalidade de infraestrutura",
      paymentTerms: "50% de sinal e 50% na entrega",
      deliveryTime: "9 a 14 semanas",
      description: "A solução comercial definitiva. Seu site profissional funcionando integrado ao atendimento por mensagens no WhatsApp.",
      features: [
        "Tudo incluso no Plano Site Profissional",
        "Atendimento automático configurado no seu WhatsApp",
        "Respostas imediatas para dúvidas comuns 24h por dia",
        "Organização automática de novos contatos",
        "Simplificação das fases do seu atendimento",
        "Suporte completo para manter tudo funcionando"
      ],
      ctaText: "Garantir Atendimento Automático",
      whatsappMessage: "Oi Caio, quero automatizar meu negócio com o Plano Completo por R$ 1.150,90",
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
            Soluções criadas para trazer mais <span className="font-serif italic text-brand-glow font-normal">clientes</span> para você.
          </h2>
          <p className="font-sans text-foreground/70 text-base md:text-lg mt-4">
            Escolha o modelo ideal para o momento atual do seu negócio. Projetos focados em facilidade de uso e atendimento rápido.
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
                  <span className="font-display text-4xl md:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <p className="font-sans text-xs text-foreground/45 mt-1">
                    {plan.period}
                  </p>
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
                <p className="font-sans text-foreground/80 text-sm md:text-base leading-relaxed italic mb-8 z-10 pt-4">
                  {t.text}
                </p>
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
