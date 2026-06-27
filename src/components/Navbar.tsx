"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      let currentSection = "";
      const scrollPosition = window.scrollY + 120; // header offset

      const elServicos = document.getElementById("servicos");
      const elProjetos = document.getElementById("projetos");
      const elPlanos = document.getElementById("planos");
      const elContato = document.getElementById("contato");

      const getAbsoluteTop = (el: HTMLElement) => {
        return el.getBoundingClientRect().top + window.scrollY;
      };

      if (elServicos && elProjetos && elPlanos && elContato) {
        const topServicos = getAbsoluteTop(elServicos);
        const topProjetos = getAbsoluteTop(elProjetos);
        const topPlanos = getAbsoluteTop(elPlanos);
        const topContato = getAbsoluteTop(elContato);

        const elSolucoes = document.getElementById("solucoes");
        const topSolucoes = elSolucoes ? getAbsoluteTop(elSolucoes) : topServicos + 500;
        
        if (scrollPosition >= topServicos && scrollPosition < topSolucoes) {
          currentSection = "servicos";
        } else if (scrollPosition >= topSolucoes && scrollPosition < topProjetos) {
          currentSection = "solucoes";
        } else if (scrollPosition >= topProjetos && scrollPosition < topPlanos) {
          currentSection = "projetos";
        } else if (scrollPosition >= topPlanos && scrollPosition < topContato) {
          currentSection = "planos";
        } else if (scrollPosition >= topContato) {
          currentSection = "contato";
        }
      }

      if (window.scrollY < 80) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        window.scrollTo({
          top: absoluteTop - 80,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  const whatsappUrl = "https://wa.me/5521997411009?text=Oi%20Caio%2C%20gostaria%20de%20uma%20an%C3%A1lise%20estrat%C3%A9gica%20para%20minha%20empresa";

  return (
    <>
      <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/90 backdrop-blur-xl py-4 border-b border-black/5"
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
              className="object-contain invert opacity-90 group-hover:opacity-100 transition-all"
            />
          </div>
        </a>

        {/* Desktop Navigation - Glassmorphism Pill */}
        <nav className="hidden lg:flex items-center gap-2 text-sm font-medium text-foreground/80 bg-black/[0.02] backdrop-blur-lg border border-black/5 px-3 py-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          {[
            { id: "servicos", label: "Serviços" },
            { id: "solucoes", label: "Soluções" },
            { id: "projetos", label: "Projetos" },
            { id: "planos", label: "Planos" },
            { id: "contato", label: "Contato" }
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-4 py-1.5 rounded-full hover:text-foreground transition-all duration-300 ${
                  isActive ? "text-foreground font-semibold" : "text-foreground/75"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 border border-[oklch(0.25_0.06_160)] bg-[#f5f1ea] rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  >
                    {/* Dark green accent bar at the top */}
                    <div className="w-4 h-0.5 bg-[oklch(0.25_0.06_160)] rounded-b-sm absolute top-0 left-1/2 -translate-x-1/2" />
                  </motion.div>
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-glow-button inline-flex items-center justify-center bg-brand-glow/10 text-brand-glow border border-brand-glow/30 hover:bg-brand-glow hover:text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_4px_12px_rgba(20,160,100,0.15)]"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) - Visible below 1024px */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex items-center justify-center p-2 text-foreground/80 hover:text-foreground focus:outline-none z-50"
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
    </motion.header>

      {/* Mobile Menu Dropdown - Visible below 1024px */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed top-[73px] left-0 right-0 bg-background/90 backdrop-blur-xl border-b border-black/5 w-full overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] z-40"
          >
            <div className="px-6 py-6 flex flex-col text-sm font-semibold">
              <a
                href="#servicos"
                onClick={(e) => handleMobileClick(e, "servicos")}
                className="text-foreground/80 hover:text-foreground py-3.5 border-b border-black/[0.04] transition-colors"
              >
                Serviços
              </a>
              <a
                href="#solucoes"
                onClick={(e) => handleMobileClick(e, "solucoes")}
                className="text-foreground/80 hover:text-foreground py-3.5 border-b border-black/[0.04] transition-colors"
              >
                Soluções
              </a>
              <a
                href="#projetos"
                onClick={(e) => handleMobileClick(e, "projetos")}
                className="text-foreground/80 hover:text-foreground py-3.5 border-b border-black/[0.04] transition-colors"
              >
                Projetos
              </a>
              <a
                href="#planos"
                onClick={(e) => handleMobileClick(e, "planos")}
                className="text-foreground/80 hover:text-foreground py-3.5 border-b border-black/[0.04] transition-colors"
              >
                Planos
              </a>
              <a
                href="#contato"
                onClick={(e) => handleMobileClick(e, "contato")}
                className="text-foreground/80 hover:text-foreground py-3.5 pb-2 transition-colors"
              >
                Contato
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
