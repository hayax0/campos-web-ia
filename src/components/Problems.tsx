"use client";

export default function Problems() {
  return (
    <section id="problemas" className="relative py-24 md:py-32 px-6 bg-black z-10 border-t border-white/5 w-full overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-brand-glow/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Seu negócio está <span className="font-serif italic text-brand-glow font-normal">perdendo</span> clientes silenciosamente todos os dias.
          </h2>
          <p className="font-sans text-white/70 text-base md:text-lg mt-4 max-w-2xl">
            Seu site e seu atendimento são a porta de entrada da sua empresa. Se eles não funcionarem de forma excelente, os potenciais clientes acabam fechando com quem responder mais rápido ou parecer mais profissional.
          </p>
        </div>

        {/* Bento Grid layout (Asymmetric & Premium) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          {/* Card Principal - Ocupa 2 colunas */}
          <div className="glow-card group p-8 md:p-10 rounded-3xl md:col-span-2 flex flex-col justify-between min-h-[340px] md:min-h-[380px] relative overflow-hidden">
            <div className="flex flex-col justify-between h-full z-10 w-full">
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-brand-glow transition-colors duration-300">
                  Site lento ou de aparência amadora
                </h3>
                <p className="font-sans text-white/70 text-sm md:text-base leading-relaxed max-w-xl">
                  As pessoas pesquisam sua empresa antes de fechar negócio. Se elas encontrarem um site confuso, lento ou com cara de amador, a sua credibilidade cai na hora. Concorrentes com um visual melhor acabam levando o cliente.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between z-10 text-white/40 text-xs group-hover:text-brand-glow/60 transition-colors duration-300">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white/30 group-hover:text-brand-glow/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Aparência profissional gera confiança imediata</span>
              </span>
            </div>
          </div>

          {/* Card 2 (Atendimento limitado) - Coluna 1 */}
          <div className="glow-card group p-8 md:p-10 rounded-3xl flex flex-col justify-between min-h-[300px]">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-brand-glow transition-colors duration-300">
                Contatos sem resposta rápida
              </h3>
              <p className="font-sans text-white/70 text-sm leading-relaxed">
                Se um interessado mandar mensagem fora do expediente e você demorar para responder, ele simplesmente manda mensagem para o seu concorrente. Sem um atendimento automático, você perde vendas toda noite.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-white/40 text-xs group-hover:text-brand-glow/60 transition-colors duration-300">
              <svg className="w-4 h-4 text-white/30 group-hover:text-brand-glow/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Quem responde primeiro fecha a venda</span>
            </div>
          </div>

          {/* Card 3 (Processos manuais) - Coluna 1 */}
          <div className="glow-card group p-8 md:p-10 rounded-3xl flex flex-col justify-between min-h-[300px]">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-brand-glow transition-colors duration-300">
                Perda de tempo digitando as mesmas mensagens
              </h3>
              <p className="font-sans text-white/70 text-sm leading-relaxed">
                Ficar respondendo às mesmas dúvidas comuns e fazendo anotações manuais gasta horas preciosas do seu dia. Esse tempo deveria ser focado em conversar apenas com clientes reais e prontos para comprar.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-white/40 text-xs group-hover:text-brand-glow/60 transition-colors duration-300">
              <svg className="w-4 h-4 text-white/30 group-hover:text-brand-glow/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>Foque o seu tempo no que realmente dá lucro</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
