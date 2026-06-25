"use client";

import { useState } from "react";
import Image from "next/image";

export default function CTASection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    nicho: "",
    mensagem: "",
  });

  const whatsappDirectUrl = "https://wa.me/5521997411009?text=Oi%20Caio%2C%20gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20estrat%C3%A9gica";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.mensagem) {
      alert("Por favor, preencha pelo menos o seu nome e a sua mensagem ou dúvida.");
      return;
    }

    const formattedMessage = `Oi Caio, preenchi o formulário de contato do site com uma dúvida!\n\n👤 *Nome:* ${formData.nome}\n✉️ *E-mail:* ${formData.email || "Não informado"}\n💼 *Ramo/Setor da Empresa:* ${formData.nicho || "Não informado"}\n\n💬 *Mensagem / Dúvida:* \n${formData.mensagem}`;
    
    const whatsappUrl = `https://wa.me/5521997411009?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contato" className="relative py-24 md:py-32 px-6 bg-black z-10 border-t border-white/5 w-full overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-glow/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Coluna Esquerda: Contato Direto Centralizado */}
        <div className="glow-card lg:col-span-2 p-8 rounded-3xl flex flex-col justify-center items-center text-center overflow-hidden relative min-h-[380px] group">

          {/* Informações de Contato */}
          <div className="flex flex-col items-center justify-center gap-6 w-full my-auto">
            <div>
              <span className="text-white/40 text-[11px] font-mono uppercase tracking-widest block mb-1">
                WhatsApp
              </span>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-lg font-bold text-white hover:text-brand-glow transition-colors"
              >
                +55 (21) 99741-1009
              </a>
            </div>

            <div>
              <span className="text-white/40 text-[11px] font-mono uppercase tracking-widest block mb-1">
                E-mail
              </span>
              <a
                href="mailto:caiobusines22@gmail.com"
                className="font-display text-lg font-bold text-white hover:text-brand-glow transition-colors"
              >
                caiobusines22@gmail.com
              </a>
            </div>

            {/* WhatsApp direct button */}
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs py-3 px-6 rounded-xl font-bold bg-[#0c0c0c] border border-white/5 hover:border-brand-glow/20 hover:bg-white/5 text-white flex items-center justify-center gap-2.5 transition-all duration-300 text-sm mt-2"
            >
              <svg className="w-4 h-4 text-brand-glow" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.424 5.429 0 12.088 0c3.225.001 6.258 1.258 8.54 3.541 2.283 2.283 3.54 5.316 3.541 8.542-.003 6.662-5.429 12.087-12.088 12.087-1.996-.001-3.957-.495-5.71-1.436L0 24zm6.59-4.846c1.6.95 3.197 1.489 4.806 1.49 5.348 0 9.7-4.35 9.703-9.704a9.638 9.638 0 0 0-2.83-6.863A9.621 9.621 0 0 0 11.56 1.3c-5.351 0-9.704 4.353-9.707 9.708-.001 1.793.481 3.543 1.393 5.097L2.23 21.758l5.417-1.42.001-.001-.001-.001zM17.435 14c-.32-.16-1.89-.93-2.185-1.04-.294-.11-.508-.16-.723.16-.214.32-.83 1.04-1.016 1.25-.187.21-.375.24-.694.08-.32-.16-1.349-.5-2.57-1.588-.95-.848-1.59-1.895-1.777-2.214-.187-.32-.02-.49.14-.65.144-.144.32-.375.48-.56.16-.188.214-.32.32-.53.11-.21.054-.4-.027-.56-.08-.16-.723-1.74-.99-2.385-.26-.625-.526-.54-.723-.55-.187-.01-.401-.01-.615-.01s-.56.08-.854.4c-.294.32-1.123 1.1-1.123 2.68s1.15 3.11 1.31 3.32c.16.21 2.26 3.45 5.48 4.84.764.33 1.36.527 1.824.674.77.244 1.47.21 2.023.128.614-.092 1.89-.77 2.157-1.48.267-.71.267-1.32.187-1.45-.08-.13-.294-.21-.613-.37z"/>
              </svg>
              <span>WhatsApp Direto</span>
            </a>
          </div>

        </div>

        <div className="glow-card lg:col-span-3 p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between">

          <div>
            {/* Header Form */}
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              Tem alguma dúvida? Mande uma mensagem
            </h3>
            <p className="font-sans text-white/75 text-sm mb-8 leading-relaxed">
              Preencha os campos abaixo para enviar suas dúvidas direto para o meu WhatsApp e conversarmos.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nome */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="nome" className="text-xs font-semibold text-white/80 font-sans">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Seu nome completo"
                    className="w-full bg-black border border-white/10 focus:border-brand-glow focus:ring-1 focus:ring-brand-glow rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 transition-all outline-none font-sans"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-white/80 font-sans">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Seu e-mail"
                    className="w-full bg-black border border-white/10 focus:border-brand-glow focus:ring-1 focus:ring-brand-glow rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 transition-all outline-none font-sans"
                  />
                </div>
              </div>

              {/* Nicho */}
              <div className="flex flex-col gap-2">
                <label htmlFor="nicho" className="text-xs font-semibold text-white/80 font-sans">
                  Ramo do seu Negócio
                </label>
                <input
                  type="text"
                  id="nicho"
                  value={formData.nicho}
                  onChange={(e) => setFormData({ ...formData, nicho: e.target.value })}
                  placeholder="Qual a área de atuação da empresa? (ex: Construção, Clínica, Pet Shop)"
                  className="w-full bg-black border border-white/10 focus:border-brand-glow focus:ring-1 focus:ring-brand-glow rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 transition-all outline-none font-sans"
                />
              </div>

              {/* Mensagem */}
              <div className="flex flex-col gap-2">
                <label htmlFor="mensagem" className="text-xs font-semibold text-white/80 font-sans">
                  Mensagem ou Dúvida
                </label>
                <textarea
                  id="mensagem"
                  required
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  placeholder="Escreva aqui sua dúvida ou mensagem"
                  className="w-full bg-black border border-white/10 focus:border-brand-glow focus:ring-1 focus:ring-brand-glow rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 transition-all outline-none resize-none font-sans"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-brand-glow text-black font-bold rounded-xl text-sm transition-all duration-300 hover:bg-brand-glow/90 whatsapp-glow-button text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enviar para o WhatsApp</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
