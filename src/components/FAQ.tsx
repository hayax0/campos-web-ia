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
      question: "A automação funciona no meu WhatsApp atual?",
      answer: "Sim, configuramos o atendimento automático direto no seu número atual. Você não perde nenhum contato já existente e não precisa trocar de chip."
    },
    {
      question: "Preciso entender de tecnologia para usar?",
      answer: "Nenhuma. Eu cuido de todo o trabalho técnico e coloco seu site e seu atendimento automático no ar. Você só precisa receber as mensagens dos clientes prontos para fechar negócio."
    },
    {
      question: "Quanto tempo leva para ficar pronto?",
      answer: "O Site Profissional é entregue em até 2 semanas após a etapa de planejamento. O ecossistema completo com o atendimento automático no WhatsApp leva de 9 a 14 semanas para ficar pronto e testado."
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

        {/* Action Link for further questions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12 text-sm text-foreground/50"
        >
          Ainda tem dúvidas sobre o processo?{" "}
          <a
            href="https://wa.me/5521997411009?text=Oi%20Caio%2C%20tenho%20uma%20duvida%20sobre%20o%20funcionamento"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-glow hover:underline font-semibold"
          >
            Falar diretamente comigo no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
