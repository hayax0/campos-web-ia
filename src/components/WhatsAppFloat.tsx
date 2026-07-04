"use client";

import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/5521997411009?text=Oi%20Caio%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-white/45 backdrop-blur-md text-brand-glow pl-2 pr-5 py-2 rounded-xl border border-brand-glow/20 shadow-[0_10px_35px_rgba(20,160,100,0.06)] hover:shadow-[0_15px_40px_rgba(20,160,100,0.12)] transition-all duration-300 group hover:-translate-y-1 hover:border-brand-glow/45"
      >
        {/* Brand green-glow glass box with brand green arrow icon */}
        <div className="flex items-center justify-center w-8 h-8 bg-brand-glow/10 rounded-lg transition-colors duration-300 group-hover:bg-brand-glow/20">
          <svg
            className="w-4 h-4 text-brand-glow transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>

        {/* Text colored with brand green */}
        <span className="font-sans text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase text-brand-glow select-none">
          Faça seu orçamento
        </span>
      </a>
    </motion.div>
  );
}
