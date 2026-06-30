"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, MapPin, Star, BookOpen, Globe, Award } from "lucide-react";

const impacts = [
  {
    icon: Users,
    value: "+600",
    label: "Crianças atendidas",
    description: "Meninos e meninas treinando juntos, sem distinção.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: Globe,
    value: "1.000+",
    label: "Vidas impactadas",
    description: "Famílias transformadas pelo poder do esporte.",
    color: "text-navy",
    bg: "bg-navy-50",
  },
  {
    icon: MapPin,
    value: "6",
    label: "Polos ativos",
    description: "Presença em toda a Grande BH e região metropolitana.",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    icon: BookOpen,
    value: "100%",
    label: "Aulas gratuitas",
    description: "O esporte como direito de toda criança, sempre.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: Award,
    value: "🥇",
    label: "Campeão Brasileiro Sub-10",
    description: "Reconhecimento nacional de excelência técnica.",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    icon: Star,
    value: "LA28",
    label: "Olímpico em 2028",
    description: "Flag Football no programa olímpico de Los Angeles.",
    color: "text-navy",
    bg: "bg-navy-50",
  },
];

export default function ImpactNumbers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
        >
          <span className="tag mb-4">Nosso Impacto</span>
          <h2 className="heading-lg text-graphite mb-4 text-balance">
            Números que representam{" "}
            <span className="text-green-500">histórias reais</span>
          </h2>
          <p className="body-md">
            Cada número aqui é uma criança que sorriu, uma família que acreditou, uma vida que mudou de direção.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="card p-8 group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-5`}>
                <item.icon size={22} className={item.color} />
              </div>
              <div className={`font-sans font-black text-4xl leading-none mb-2 ${item.color}`}>
                {item.value}
              </div>
              <div className="font-semibold text-graphite text-base mb-2">{item.label}</div>
              <p className="text-sm text-graphite-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
