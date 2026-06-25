"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5521997411009?text=Oi%20Caio%2C%20gostaria%20de%20uma%20an%C3%A1lise%20estrat%C3%A9gica%20para%20minha%20empresa";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-black/30 backdrop-blur-sm py-4 border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-36 h-10 transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="/logo.svg"
              alt="Campos Web & IA"
              fill
              priority
              className="object-contain"
            />
          </div>
        </a>

        {/* Desktop Navigation - Glassmorphism Pill */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/70 bg-white/[0.03] backdrop-blur-lg border border-white/10 px-8 py-2.5 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
          <a href="#servicos" className="hover:text-brand-glow transition-colors">Serviços</a>
          <a href="#solucoes" className="hover:text-brand-glow transition-colors">Soluções</a>
          <a href="#planos" className="hover:text-brand-glow transition-colors">Planos</a>
          <a href="#contato" className="hover:text-brand-glow transition-colors">Contato</a>
        </nav>

        {/* Desktop CTA Button - Semi-transparent Green WhatsApp style */}
        <div className="hidden lg:block">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-glow-button inline-flex items-center justify-center bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-black font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) - Visible below 1024px */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex items-center justify-center p-2 text-white/85 hover:text-white focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown - Visible below 1024px */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 transition-all duration-300 w-full ${
          isMobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 text-base font-medium">
          <a
            href="#servicos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
          >
            Serviços
          </a>
          <a
            href="#solucoes"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
          >
            Soluções
          </a>
          <a
            href="#planos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
          >
            Planos
          </a>
          <a
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
          >
            Contato
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-glow-button flex items-center justify-center bg-brand-glow text-black font-bold py-3 rounded-full text-center mt-2 w-full"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </header>
  );
}
