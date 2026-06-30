"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, TrendingUp, Heart, FileText, Building2, Leaf } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: FileText,
    title: "Lei Federal de Incentivo ao Esporte",
    description: "Empresas podem direcionar até 1% do Imposto de Renda devido para o Touchdown do Bem, com dedução integral da Lei nº 11.438/2006.",
    highlight: false,
  },
  {
    icon: Building2,
    title: "Patrocínio Direto",
    description: "Visibilidade de marca em uniformes, eventos, redes sociais e material de comunicação. Associe sua empresa a um projeto que inspira.",
    highlight: false,
  },
  {
    icon: Leaf,
    title: "ESG & Responsabilidade Social",
    description: "Fortaleça as metas ESG da sua empresa com um projeto real, mensurável e com histórico comprovado de impacto social.",
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: "Impacto Mensurável",
    description: "Relatórios detalhados de impacto, histórias reais de transformação e dados que comprovam o retorno social do investimento.",
    highlight: false,
  },
  {
    icon: Heart,
    title: "Engajamento de Equipes",
    description: "Seus colaboradores podem participar como voluntários, criando conexão emocional com a causa e fortalecendo a cultura interna.",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Projeto Aprovado e Transparente",
    description: "Com prestação de contas pública, projetos aprovados por lei e documentação disponível para consulta.",
    highlight: false,
  },
];

const impactNumbers = [
  { value: "+600", label: "crianças beneficiadas" },
  { value: "6", label: "polos ativos" },
  { value: "1.000+", label: "famílias impactadas" },
  { value: "100%", label: "gratuito para as crianças" },
];

export default function Patrocinadores() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="patrocinadores" ref={ref} className="section-padding bg-white">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <span className="tag mb-4">Para patrocinadores</span>
          <h2 className="heading-lg text-graphite mb-5 text-balance">
            Invista onde o impacto é{" "}
            <span className="text-green-500">real e mensurável</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            O Touchdown do Bem oferece às empresas a oportunidade de associar sua marca a uma história de transformação social genuína, com transparência total e impacto comprovado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="gradient-navy rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {impactNumbers.map((n) => (
              <div key={n.label} className="text-center">
                <div className="font-black text-white leading-none mb-2 text-3xl md:text-5xl">
                  {n.value}
                </div>
                <div className="text-white/60 text-xs md:text-sm">{n.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 md:mb-14">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              className={`rounded-3xl p-6 md:p-7 ${b.highlight ? "gradient-green text-white" : "bg-surface border border-gray-100 hover:border-green-100 hover:bg-green-50/30 transition-colors duration-200"}`}
            >
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 ${b.highlight ? "bg-white/20" : "bg-white shadow-sm"}`}>
                <b.icon size={20} className={b.highlight ? "text-white" : "text-green-500"} />
              </div>
              <h3 className={`font-bold text-base mb-2 ${b.highlight ? "text-white" : "text-graphite"}`}>
                {b.title}
              </h3>
              <p className={`text-sm leading-relaxed ${b.highlight ? "text-white/80" : "text-graphite-muted"}`}>
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Lei de Incentivo ao Esporte banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="gradient-navy rounded-3xl p-6 md:p-8 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">🇧🇷</span>
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-sm mb-0.5">Projeto aprovado pela Lei Federal de Incentivo ao Esporte</p>
            <p className="text-white/60 text-xs leading-relaxed">
              Lei nº 11.438/2006 — Ministério do Esporte. Empresas podem investir no Touchdown do Bem com <strong className="text-white/80">dedução integral no Imposto de Renda</strong>, sem custo adicional para o patrocinador.
            </p>
          </div>
          <div className="flex-shrink-0 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-center">
            <div className="text-white/40 text-xs uppercase tracking-widest font-bold">Ministério</div>
            <div className="text-white font-black text-sm">do Esporte</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="bg-green-50 border border-green-100 rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="heading-sm text-graphite mb-2">Pronto para fazer a diferença?</h3>
            <p className="text-graphite-muted text-sm md:text-base">
              Entre em contato e descubra como sua empresa pode apoiar o Touchdown do Bem.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
            <a href="mailto:patrocinio@touchdowndobem.org.br" className="btn-primary justify-center sm:justify-start whitespace-nowrap">
              Falar com o time
            </a>
            <Link href="/transparencia" className="btn-secondary justify-center sm:justify-start whitespace-nowrap">
              Ver transparência
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
