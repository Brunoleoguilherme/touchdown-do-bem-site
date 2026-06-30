"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "Quem Somos", href: "#quem-somos" },
  {
    label: "O Projeto",
    href: "#",
    children: [
      { label: "Nossos Polos", href: "#nossos-polos" },
      { label: "Muito Além do Esporte", href: "#alem-do-esporte" },
      { label: "Formando Campeões", href: "#campeoes" },
      { label: "Los Angeles 2028", href: "#la2028" },
    ],
  },
  { label: "Na Mídia", href: "#na-midia" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Transparência", href: "/transparencia" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = ""; // reset on mount
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={clsx(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
        scrolled
          ? "shadow-[0_1px_20px_rgba(0,0,0,0.07)] backdrop-blur-md"
          : ""
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Touchdown do Bem"
              width={80}
              height={80}
              className="object-contain h-16 w-auto drop-shadow-sm"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-graphite hover:text-green-500 rounded-full transition-colors duration-200">
                    {link.label}
                    <ChevronDown size={14} className={clsx("transition-transform duration-200", openDropdown === link.label && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-3 text-sm font-medium text-graphite hover:bg-green-50 hover:text-green-600 transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-graphite hover:text-green-500 rounded-full transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="#apoiar" className="btn-primary text-sm py-3 px-6">
              Quero Apoiar
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-xl text-graphite hover:bg-surface transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-graphite-muted">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2.5 text-base font-medium text-graphite hover:text-green-500 pl-6"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 text-base font-semibold text-graphite hover:text-green-500"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4 border-t border-gray-100 mt-2">
                <Link href="#apoiar" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
                  Quero Apoiar
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
