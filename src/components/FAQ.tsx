"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqData: FAQItem[] = [
    {
      question: "A automação funciona no meu WhatsApp atual?",
      answer: "Sim, configuramos o atendimento automático direto no seu número atual. Você não perde nenhum contato já existente e não precisa trocar de chip."
    },
    {
      question: "Preciso entender de tecnologia para usar?",
      answer: "Nenhuma. Eu cuido de todo o trabalho técnico e coloco seu site e seu atendimento automático no ar. Você só precisa receber as mensagens dos clientes prontos para fechar negócio."
    },
    {
      question: "Quanto tempo leva para ficar pronto?",
      answer: "O Site Profissional é entregue em até 7 dias úteis após a etapa de planejamento. O ecossistema completo com o atendimento automático no WhatsApp leva de 10 a 15 dias úteis para ficar pronto e testado."
    },
    {
      question: "Como o site é criado?",
      answer: "Desenvolvo cada site do zero, de forma exclusiva. Isso garante que seu site seja muito mais rápido e seguro do que sites comuns feitos em plataformas prontas e lentas."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 px-6 bg-black z-10 border-t border-white/5 w-full overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-glow/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="font-sans text-white/70 text-base md:text-lg mt-4">
            Respostas diretas e transparentes sobre o funcionamento e o processo.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 w-full">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glow-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 md:py-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base md:text-lg font-bold text-white pr-4">
                    {item.question}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/60 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-brand-glow/15 text-brand-glow" : ""
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Content Container */}
                <div
                  className={`accordion-content ${isOpen ? "open border-t border-white/5" : ""}`}
                >
                  <div className="p-6 md:p-8 font-sans text-sm md:text-base text-white/80 leading-relaxed bg-transparent">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link for further questions */}
        <div className="text-center mt-12 text-sm text-white/50">
          Ainda tem dúvidas sobre o processo?{" "}
          <a
            href="https://wa.me/5521997411009?text=Oi%20Caio%2C%20tenho%20uma%20duvida%20sobre%20o%20funcionamento"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-glow hover:underline font-semibold"
          >
            Falar diretamente comigo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
