"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "+600", label: "Crianças atendidas" },
  { value: "6", label: "Polos ativos" },
  { value: "1.000+", label: "Vidas impactadas" },
  { value: "🥇", label: "Campeão Sub-10" },
];

const badges = [
  { text: "NFL Flag Brasil", color: "bg-navy text-white" },
  { text: "Flag Football Olímpico LA28", color: "bg-yellow-500 text-graphite" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-navy-50 opacity-60" />
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A651' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Right side — action photo, desktop only */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-white/10 z-10" />
          <Image
            src="/images/foto-acao.jpg"
            alt="Criança do Touchdown do Bem em ação com a bola"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-14 pb-14 md:pt-20 lg:pt-24 w-full">
        <div className="max-w-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            className="flex flex-col gap-5 md:gap-6"
          >
            {/* Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b.text}
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${b.color}`}
                >
                  {b.text}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="heading-xl text-graphite text-balance">
              Onde o esporte{" "}
              <span className="text-green-500 relative inline-block">
                transforma vidas
                {/* Yellow underline — positioned relative to this inline span */}
                <svg
                  className="absolute left-0 w-full pointer-events-none"
                  style={{ bottom: "-6px", height: "6px" }}
                  viewBox="0 0 300 6"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q150 0 300 5" stroke="#FFD100" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={itemVariants} className="body-lg max-w-xl">
              Mais de 600 crianças encontram no Touchdown do Bem oportunidades para aprender, crescer, sonhar e construir um futuro melhor através do Flag Football.
            </motion.p>

            {/* Buttons — stacked on mobile, side-by-side from sm */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link href="#quem-somos" className="btn-primary justify-center sm:justify-start">
                Conheça o Projeto <ArrowRight size={16} />
              </Link>
              <Link href="#apoiar" className="btn-secondary justify-center sm:justify-start">
                Quero Apoiar
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 md:pt-8 border-t border-gray-100 mt-2"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-sans font-black text-xl md:text-2xl lg:text-3xl text-graphite leading-none tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-graphite-muted mt-1 leading-tight">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown size={22} className="text-graphite-muted" />
      </motion.div>
    </section>
  );
}
