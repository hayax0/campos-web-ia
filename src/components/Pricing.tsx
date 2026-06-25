"use client";

interface PlanItem {
  name: string;
  price: string;
  period: string;
  paymentTerms: string;
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

  return (
    <section id="planos" className="relative py-24 md:py-32 px-6 bg-black z-10 border-t border-white/5 w-full overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-glow/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Soluções criadas para trazer mais <span className="font-serif italic text-brand-glow font-normal">clientes</span> para você.
          </h2>
          <p className="font-sans text-white/70 text-base md:text-lg mt-4">
            Escolha o modelo ideal para o momento atual do seu negócio. Projetos focados em facilidade de uso e atendimento rápido.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-28 w-full">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glow-card relative p-8 md:p-12 rounded-3xl flex flex-col justify-between overflow-hidden ${
                plan.popular
                  ? "border-2 border-brand-glow shadow-[0_0_35px_rgba(37,211,102,0.15)] scale-100 md:scale-[1.03] z-10"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-glow text-black text-[10px] font-black tracking-wider uppercase px-4 py-1.5 rounded-bl-2xl">
                  Recomendado
                </div>
              )}

              <div>
                {/* Plan Name */}
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="font-sans text-xs text-white/75 mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Plan Price */}
                <div className="mb-6">
                  <span className="font-display text-4xl md:text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <p className="font-sans text-xs text-white/60 mt-1">
                    {plan.period}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-brand-glow font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{plan.paymentTerms}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-white/5 mb-8" />

                {/* Plan Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/90">
                      <svg
                        className="w-5 h-5 text-brand-glow flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="font-sans">{feature}</span>
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
                  className={`w-full py-4 px-6 rounded-full font-bold text-center block text-sm transition-all duration-300 ${
                    plan.popular
                      ? "bg-brand-glow text-black hover:bg-brand-glow/90 whatsapp-glow-button"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Sub-section */}
        <div id="depoimentos" className="border-t border-white/5 pt-24 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              O que dizem os clientes parceiros
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="glow-card p-8 rounded-2xl flex flex-col justify-between relative"
              >
                <span className="absolute top-6 right-8 text-5xl font-serif text-white/5 select-none pointer-events-none">
                  “
                </span>
                <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed italic mb-8 z-10">
                  {t.text}
                </p>
                <div>
                  <div className="font-display text-sm font-bold text-white">
                    {t.name}
                  </div>
                  <div className="font-sans text-xs text-white/50 mt-0.5">
                    {t.role} · <span className="text-brand-glow">{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
