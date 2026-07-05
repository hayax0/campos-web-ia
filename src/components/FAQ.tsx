"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqData: FAQItem[] = [
    {
      question: "Quanto custa um projeto?",
      answer: "Cada projeto é planejado e desenvolvido de forma totalmente exclusiva para as necessidades comerciais do seu negócio. Após realizarmos nosso diagnóstico gratuito, apresentamos uma proposta sob medida com escopo, etapas e investimentos claros."
    },
    {
      question: "Existe mensalidade?",
      answer: "Não cobramos mensalidades obrigatórias pelo desenvolvimento do site ou da automação comercial. Você investe apenas pelo escopo do projeto fechado. Caso necessite de suporte contínuo, manutenção preventiva ou atualizações recorrentes, oferecemos planos de assessoria mensal opcionais."
    },
    {
      question: "Em quanto tempo fica pronto?",
      answer: "O prazo varia conforme a complexidade da solução. Sites e landing pages otimizadas para conversão costumam ficar prontos em até 2 semanas após o planejamento inicial. Já os ecossistemas completos com automação de atendimento no WhatsApp levam de 9 a 14 semanas para serem totalmente configurados, integrados e validados."
    },
    {
      question: "Vocês fazem alterações depois que o site é entregue?",
      answer: "Sim! Após a conclusão e publicação do projeto, oferecemos um período de garantia com suporte técnico incluso para pequenos ajustes e garantia de funcionamento. Além disso, fornecemos treinamento básico para que você possa alterar textos simples ou, se preferir, oferecemos pacotes de manutenção."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Nosso suporte é ágil, humanizado e feito diretamente através de WhatsApp e e-mail. Se houver qualquer dúvida técnica ou necessidade de ajuste no funcionamento do site ou da automação, nossa equipe estará pronta para resolver com prioridade."
    },
    {
      question: "Preciso fornecer todo o conteúdo (textos, imagens, etc.)?",
      answer: "Nós estruturamos toda a copy profissional com foco em vendas e selecionamos ou criamos os recursos de design para o seu site. Se você já possuir fotos reais da sua empresa, equipe ou produtos, nós as utilizaremos para aumentar ainda mais a autenticidade e a credibilidade."
    },
    {
      question: "Vocês hospedam o site?",
      answer: "Nós auxiliamos na contratação e configuração da hospedagem mais adequada e veloz para o seu projeto, além do registro do domínio (.com.br). Todo o registro é feito em nome e com os dados da sua empresa, garantindo que o seu site e domínio sejam 100% de sua propriedade."
    },
    {
      question: "Posso parcelar o valor do projeto?",
      answer: "Sim. Facilitamos o pagamento do seu projeto comercial. Normalmente, trabalhamos com uma entrada de 50% para início dos trabalhos e 50% na entrega final, ou oferecemos parcelamento em condições especiais que podem ser acordadas na apresentação do orçamento."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 px-6 bg-background z-10 border-t border-black/5 w-full overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-glow/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="font-sans text-foreground/70 text-base md:text-lg mt-4">
            Respostas diretas e transparentes sobre o funcionamento e o processo.
          </p>
        </motion.div>

        {/* Accordions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full border-t border-black/5 divide-y divide-black/5"
        >
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base md:text-lg font-bold text-foreground pr-4 group-hover:text-brand-glow transition-colors duration-300">
                    {item.question}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full bg-black/5 flex items-center justify-center text-foreground/60 transition-all duration-300 ${
                      isOpen ? "rotate-180 bg-brand-glow/10 text-brand-glow" : "group-hover:bg-black/10"
                    }`}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Content Container with AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 font-sans text-sm md:text-base text-foreground/70 leading-relaxed bg-transparent">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>


      </div>
    </section>
  );
}
