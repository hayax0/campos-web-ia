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
      question: "Como funciona o Agente de IA Web?",
      answer: "O Agente de IA Web atua diretamente dentro do seu site para atender os visitantes em tempo real. Ele tira dúvidas frequentes sobre seus produtos e serviços, qualifica a intenção de compra do visitante e encaminha os leads aquecidos diretamente para o WhatsApp da sua equipe comercial, 24 horas por dia."
    },
    {
      question: "Que tipos de processos repetitivos minha empresa pode automatizar?",
      answer: "Desenvolvemos softwares sob medida e automações de processos para eliminar tarefas manuais exaustivas da sua equipe. Isso inclui leitura automática de PDFs e contratos (OCR), preenchimento e consolidação de planilhas, importação e sincronização de dados entre sistemas e geração automatizada de relatórios internos. Com isso, sua empresa reduz erros operacionais e ganha tempo produtivo."
    },
    {
      question: "Como as automações e sistemas se integram ao meu negócio?",
      answer: "Criamos soluções que se conectam à rotina operacional da sua empresa e às ferramentas que você já utiliza (como CRMs, planilhas ou sistemas de gestão). As automações funcionam em segundo plano realizando a transferência de dados e execução de fluxos sem necessidade de alterar toda a sua infraestrutura atual."
    },
    {
      question: "Quanto custa um projeto?",
      answer: "Cada projeto é planejado e dimensionado sob medida para a necessidade específica do seu negócio — seja um site com Agente de IA Web ou um software de automação de processos. Após realizarmos um diagnóstico gratuito, apresentamos uma proposta transparente com escopo, etapas e investimentos claros."
    },
    {
      question: "Em quanto tempo os projetos ficam prontos?",
      answer: "O prazo varia conforme a complexidade. Sites e landing pages com Agente de IA Web costumam ficar prontos em 2 a 4 semanas. Já automações de processos mais robustas e softwares inteligentes sob medida levam de 8 a 14 semanas para serem desenvolvidos, integrados e validados na sua empresa."
    },
    {
      question: "Meu Agente de IA no site aprende sozinho?",
      answer: "Sim. Ele é treinado especificamente com as informações, produtos e diretrizes do seu negócio e aprimora suas respostas com base nas interações com os visitantes. Também realizamos ajustes periódicos para garantir que o atendimento esteja sempre 100% alinhado com a sua estratégia comercial."
    },
    {
      question: "Como funciona o suporte e manutenção após a entrega?",
      answer: "Oferecemos garantia pós-entrega com suporte técnico ágil e humanizado diretamente via WhatsApp e e-mail. Garantimos o perfeito funcionamento de todas as automações, sites e Agentes de IA, além de fornecer treinamento para sua equipe operar a solução com tranquilidade."
    },
    {
      question: "Preciso fornecer todo o conteúdo e informações das automações?",
      answer: "Nós fazemos um diagnóstico detalhado dos seus processos manuais para desenhar a lógica da automação ou criar a copy comercial do seu site. Sua empresa só precisa nos passar os materiais base e regras de negócio para que possamos construir a solução sob medida."
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
    <section id="faq" className="relative py-28 md:py-36 px-6 bg-background z-10 border-t border-black/5 w-full overflow-hidden">
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
            Respostas diretas e transparentes sobre nossas soluções e processo.
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
