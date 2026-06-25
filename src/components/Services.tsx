"use client";

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

  return (
    <div className="relative">
      {/* Anchors for navigation links */}
      <div id="solucoes" className="absolute -top-24" />
      
      <section id="servicos" className="relative py-24 md:py-32 px-6 bg-black z-10 border-t border-white/5 w-full overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-brand-glow/[0.01] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="max-w-3xl mb-16 md:mb-24">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Construímos o <span className="font-serif italic text-brand-glow font-normal">posicionamento</span> e o atendimento que sua empresa precisa.
            </h2>
            <p className="font-sans text-white/70 text-base md:text-lg mt-4 max-w-2xl">
              Unimos design exclusivo com atendimento automatizado para acelerar as vendas do seu negócio.
            </p>
          </div>

          {/* Services Grid with Editorial Offset */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full lg:pb-16">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={`glow-card relative p-8 md:p-12 rounded-3xl flex flex-col justify-between overflow-hidden group ${
                  idx === 1 ? "lg:translate-y-12" : ""
                }`}
              >

                <div>
                  {/* Badge and Role */}
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-[10px] font-bold tracking-wider text-brand-glow bg-brand-glow/10 px-3 py-1 rounded-full border border-brand-glow/20">
                      {service.badge}
                    </span>
                    <span className="text-sm font-mono text-white/40">
                      {service.roleName}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-white/75 text-base leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
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

                {/* Action Link inside Service Card */}
                <div className="pt-6 border-t border-white/5">
                  <a
                    href={`https://wa.me/5521997411009?text=Oi%20Caio%2C%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-brand-glow transition-colors duration-300"
                  >
                    <span>Falar com especialista sobre isso</span>
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
