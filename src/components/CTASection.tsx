"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    nicho: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.mensagem) {
      alert("Por favor, preencha o seu nome e o principal desafio da sua empresa.");
      return;
    }

    const formattedMessage = `Olá, preenchi o formulário de diagnóstico da Campos Web IA!\n\n👤 *Nome:* ${formData.nome}\n✉️ *E-mail:* ${formData.email || "Não informado"}\n💼 *Ramo da Empresa:* ${formData.nicho || "Não informado"}\n\n💬 *Desafio / Dúvida:* \n${formData.mensagem}`;
    
    const whatsappUrl = `https://wa.me/5521997411009?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contato" className="relative py-24 md:py-32 px-6 bg-background z-10 border-t border-black/5 w-full overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-glow/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-3xl mx-auto w-full relative z-10">
        
        {/* Formulário de Dúvidas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glow-card p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(37,211,102,0.02)]"
        >
          <div>
            {/* Header Form */}
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight text-center">
              Pronto para descobrir o quanto sua empresa pode crescer?
            </h3>
            <p className="font-sans text-foreground/75 text-sm mb-8 leading-relaxed text-center">
              Solicite seu diagnóstico comercial gratuito. Vamos analisar suas oportunidades comerciais digitais e desenhar as soluções sob medida para sua empresa.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nome */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="nome" className="text-xs font-semibold text-foreground/80 font-sans">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Seu nome completo"
                    className="w-full bg-background border border-black/10 focus:border-brand-glow focus:ring-1 focus:ring-brand-glow rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/45 transition-all outline-none font-sans"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-foreground/80 font-sans">
                    E-mail corporativo
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Seu e-mail"
                    className="w-full bg-background border border-black/10 focus:border-brand-glow focus:ring-1 focus:ring-brand-glow rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/45 transition-all outline-none font-sans"
                  />
                </div>
              </div>

              {/* Nicho */}
              <div className="flex flex-col gap-2">
                <label htmlFor="nicho" className="text-xs font-semibold text-foreground/80 font-sans">
                  Segmento da sua Empresa
                </label>
                <input
                  type="text"
                  id="nicho"
                  value={formData.nicho}
                  onChange={(e) => setFormData({ ...formData, nicho: e.target.value })}
                  placeholder="Qual o ramo da empresa? (ex: Advocacia, Clínica de Estética, Pet Shop)"
                  className="w-full bg-background border border-black/10 focus:border-brand-glow focus:ring-1 focus:ring-brand-glow rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/45 transition-all outline-none font-sans"
                />
              </div>

              {/* Mensagem */}
              <div className="flex flex-col gap-2">
                <label htmlFor="mensagem" className="text-xs font-semibold text-foreground/80 font-sans">
                  Qual o principal desafio de vendas ou atendimento da sua empresa hoje?
                </label>
                <textarea
                  id="mensagem"
                  required
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  placeholder="Ex: Perdemos leads por demora na resposta no WhatsApp ou nosso site atual não traz visitas qualificadas."
                  className="w-full bg-background border border-black/10 focus:border-brand-glow focus:ring-1 focus:ring-brand-glow rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/45 transition-all outline-none resize-none font-sans"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-brand-glow text-white font-semibold rounded-xl text-sm transition-all duration-300 hover:bg-brand-glow/90 shadow-[0_4px_14px_rgba(20,160,100,0.15)] hover:shadow-[0_6px_20px_rgba(20,160,100,0.25)] whatsapp-glow-button text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Solicitar Diagnóstico Gratuito</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}




