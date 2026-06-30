"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Medal, Star } from "lucide-react";
import Image from "next/image";

const championships = [
  {
    name: "Campeonato Brasileiro Sub-10",
    result: "🥇 Campeão Brasileiro",
    year: "2023",
    tier: "gold",
    description: "O maior título da história do projeto. Nossas crianças foram as melhores do Brasil na faixa Sub-10.",
  },
  {
    name: "Campeonato Brasileiro Sub-20 — Feminino",
    result: "🥈 Vice-Campeão",
    year: "2023",
    tier: "silver",
    description: "Nossas atletas chegaram ao pódio nacional e conquistaram o direito à Bolsa Atleta do Governo Federal.",
    bolsaAtleta: true,
  },
  {
    name: "Campeonato Brasileiro Sub-14",
    result: "🥉 3º Lugar",
    year: "2023",
    tier: "bronze",
    description: "Jovens atletas conquistando o pódio nacional e mostrando que o Touchdown do Bem forma para o alto rendimento.",
  },
  {
    name: "Campeonato Brasileiro Sub-12",
    result: "Participação",
    year: "2023",
    tier: "regular",
    description: "Representando Minas Gerais com excelência no cenário nacional.",
  },
  {
    name: "Campeonato Brasileiro Sub-17",
    result: "Participação",
    year: "2023",
    tier: "regular",
    description: "Atletas que cresceram no projeto chegando à elite do Flag Football brasileiro.",
  },
];

export default function FormandoCampeoes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="campeoes" ref={ref} className="section-padding bg-navy overflow-hidden">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="tag-navy mb-5 inline-flex border border-white/20"
            >
              Resultados
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="heading-lg text-white mb-5 text-balance"
            >
              Formamos cidadãos.{" "}
              <span className="text-yellow-500">Também formamos campeões.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/70 text-lg leading-relaxed mb-8"
            >
              O esporte ensina valores que acompanham nossas crianças por toda a vida. E, para muitos deles, também abre portas para competir em alto nível.
            </motion.p>

            {/* Campeonatos */}
            <div className="space-y-3">
              {championships.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className={`rounded-2xl p-4 flex items-start gap-4 ${
                    c.tier === "gold"
                      ? "bg-yellow-500/10 border border-yellow-500/30"
                      : c.tier === "silver"
                      ? "bg-gray-300/10 border border-gray-300/30"
                      : c.tier === "bronze"
                      ? "bg-orange-400/10 border border-orange-400/30"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    c.tier === "gold" ? "bg-yellow-500" :
                    c.tier === "silver" ? "bg-gray-400" :
                    c.tier === "bronze" ? "bg-orange-500" :
                    "bg-white/10"
                  }`}>
                    {c.tier === "gold" || c.tier === "silver" || c.tier === "bronze"
                      ? <Trophy size={18} className="text-white" />
                      : <Medal size={18} className="text-white/60" />
                    }
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`font-semibold text-sm ${c.tier !== "regular" ? "text-white" : "text-white/80"}`}>
                        {c.name}
                      </span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        c.tier === "gold" ? "bg-yellow-500 text-white" :
                        c.tier === "silver" ? "bg-gray-300 text-gray-800" :
                        c.tier === "bronze" ? "bg-orange-500 text-white" :
                        "bg-white/10 text-white/50"
                      }`}>
                        {c.result}
                      </span>
                    </div>
                    <p className="text-xs text-white/50 mt-1">{c.description}</p>
                    {c.bolsaAtleta && (
                      <div className="mt-2 inline-flex items-center gap-1.5 bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                        <Star size={10} className="fill-green-400" />
                        Bolsa Atleta — Governo Federal
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bolsa Atleta highlight box */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 bg-green-500/10 border border-green-500/30 rounded-2xl p-5"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">🏅</div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">Bolsa Atleta — Programa Federal</p>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Nossas atletas do feminino Sub-20, ao conquistarem o Vice-Campeonato Brasileiro, garantiram o direito à <strong className="text-white/80">Bolsa Atleta do Governo Federal</strong> — reconhecimento oficial do esporte de alto rendimento no Brasil.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — team photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-4xl overflow-hidden min-h-[320px] md:min-h-[480px]">
              <Image
                src="/images/foto-time-branco.jpg"
                alt="Time Touchdown do Bem em campeonato"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <div className="text-4xl mb-1">🥇</div>
                <div className="text-white font-black text-lg tracking-tight">Campeão Brasileiro</div>
                <div className="text-white/60 text-sm">Sub-10 · NFL Flag</div>
              </div>
            </div>

            {/* Pódio summary cards */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { emoji: "🥇", title: "Campeão", sub: "Sub-10" },
                { emoji: "🥈", title: "Vice", sub: "Sub-20 Fem." },
                { emoji: "🥉", title: "3º Lugar", sub: "Sub-14" },
              ].map((item) => (
                <div key={item.sub} className="bg-white/5 border border-white/10 rounded-2xl p-3 text-center">
                  <div className="text-2xl mb-1">{item.emoji}</div>
                  <div className="text-white font-bold text-xs">{item.title}</div>
                  <div className="text-white/40 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
