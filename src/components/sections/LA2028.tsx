"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const timeline = [
  {
    year: "NFL",
    label: "A liga mais popular do mundo",
    desc: "O Flag Football nasce na cultura da NFL e chega ao Brasil trazendo com ela toda a energia e profissionalismo do esporte americano.",
    icon: "🏈",
    color: "bg-navy",
  },
  {
    year: "2017",
    label: "Touchdown do Bem",
    desc: "O projeto nasce em Belo Horizonte com uma missão: democratizar o Flag Football e transformar vidas na periferia.",
    icon: "❤️",
    color: "bg-green-500",
  },
  {
    year: "2023",
    label: "Campeonatos Nacionais",
    desc: "Nossas crianças chegam ao topo do podium nacional. Campeões Brasileiros Sub-10. O projeto ganha visibilidade nacional.",
    icon: "🏆",
    color: "bg-yellow-500",
  },
  {
    year: "2024",
    label: "Seleção Brasileira",
    desc: "Atletas formados no projeto integram a seleção e representam o Brasil em competições internacionais da NFL Flag.",
    icon: "🇧🇷",
    color: "bg-green-600",
  },
  {
    year: "2028",
    label: "Los Angeles — Jogos Olímpicos",
    desc: "O Flag Football é esporte olímpico. Nossas crianças de hoje podem ser os atletas olímpicos do Brasil em Los Angeles.",
    icon: "🥇",
    color: "bg-yellow-500",
    highlight: true,
  },
];

export default function LA2028() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="la2028" ref={ref} className="section-padding bg-white overflow-hidden">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="tag mb-5 inline-flex"
            >
              Los Angeles 2028
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="heading-lg text-graphite mb-5 text-balance"
            >
              De Belo Horizonte{" "}
              <span className="text-green-500">para os Jogos Olímpicos</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 body-lg mb-8"
            >
              <p>
                Em 2028, Los Angeles vai receber os Jogos Olímpicos. E pela primeira vez na história, o Flag Football vai estar no programa olímpico.
              </p>
              <p>
                As crianças que hoje treinam nos nossos seis polos têm tempo, talento e o melhor programa de desenvolvimento do Brasil. Elas podem representar o Brasil em LA28.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {[
                { value: "2028", label: "Jogos Olímpicos" },
                { value: "LA", label: "Los Angeles" },
                { value: "🇧🇷", label: "Represente o Brasil" },
              ].map((s) => (
                <div key={s.label} className="bg-surface rounded-2xl p-4 text-center">
                  <div className="font-black text-2xl text-navy mb-1">{s.value}</div>
                  <div className="text-xs text-graphite-muted">{s.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="https://olympics.com/en/sports/flag-football/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Saiba mais sobre o Flag Football Olímpico <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy via-green-500 to-yellow-500" />

              <div className="space-y-6">
                {timeline.map((step, i) => (
                  <motion.div
                    key={step.year}
                    initial={{ opacity: 0, x: 16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className={`relative ${step.highlight ? "scale-[1.02]" : ""}`}
                  >
                    {/* Dot */}
                    <div className={`absolute -left-8 w-8 h-8 rounded-full ${step.color} flex items-center justify-center text-sm border-2 border-white shadow-sm`}>
                      {step.icon}
                    </div>

                    <div className={`rounded-2xl p-5 ml-2 ${
                      step.highlight
                        ? "bg-yellow-50 border-2 border-yellow-300"
                        : "bg-surface border border-gray-100"
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-black text-sm ${step.highlight ? "text-yellow-600" : "text-graphite-muted"}`}>
                          {step.year}
                        </span>
                        {step.highlight && (
                          <span className="text-xs font-bold bg-yellow-500 text-white px-2 py-0.5 rounded-full">
                            🎯 Objetivo
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-graphite text-base mb-1">{step.label}</h3>
                      <p className="text-sm text-graphite-muted leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
