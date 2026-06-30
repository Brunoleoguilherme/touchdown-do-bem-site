"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partners = [
  { name: "Rede Itaú", emoji: "🏦", category: "Financeiro" },
  { name: "UniCesumar", emoji: "🎓", category: "Educação" },
  { name: "Auto Truck", emoji: "🚛", category: "Transporte" },
  { name: "AVP", emoji: "⚡", category: "Parceiro" },
  { name: "Satélite", emoji: "📡", category: "Tecnologia" },
  { name: "BRS", emoji: "🤝", category: "Parceiro" },
  { name: "Brasil Sports Business", emoji: "📊", category: "Esporte" },
  { name: "NFL Flag Brasil", emoji: "🏈", category: "Esporte" },
];

export default function Parceiros() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="parceiros" ref={ref} className="section-padding bg-surface">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10 md:mb-16"
        >
          <span className="tag mb-4">Parceiros</span>
          <h2 className="heading-md text-graphite mb-4 text-balance">
            Quem acredita no{" "}
            <span className="text-green-500">poder do esporte</span>
          </h2>
          <p className="body-md">
            Empresas e instituições que entendem que investir nas nossas crianças é investir no futuro do Brasil.
          </p>
        </motion.div>

        {/* Logo cloud */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="text-3xl group-hover:scale-110 transition-transform duration-200">{partner.emoji}</div>
              <div className="text-center">
                <div className="font-bold text-graphite text-sm">{partner.name}</div>
                <div className="text-xs text-graphite-muted">{partner.category}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to become partner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-graphite-muted text-base mb-4">Sua empresa também pode fazer parte dessa história.</p>
          <a href="#patrocinadores" className="btn-primary">
            Quero ser parceiro
          </a>
        </motion.div>
      </div>
    </section>
  );
}
