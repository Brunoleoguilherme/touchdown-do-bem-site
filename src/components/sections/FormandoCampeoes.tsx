"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Medal } from "lucide-react";
import Image from "next/image";

const championships = [
  {
    name: "Campeonato Brasileiro Sub-10",
    result: "🥇 Campeão Brasileiro",
    year: "2023",
    highlight: true,
    description: "O maior título da história do projeto. Nossas crianças foram as melhores do Brasil na faixa Sub-10.",
  },
  {
    name: "Campeonato Brasileiro Sub-12",
    result: "Participação",
    year: "2023",
    highlight: false,
    description: "Representando Minas Gerais com excelência no cenário nacional.",
  },
  {
    name: "Campeonato Brasileiro Sub-14",
    result: "🥉 3º Lugar",
    year: "2023",
    highlight: false,
    description: "Jovens atletas conquistando o pódio nacional e mostrando que o Touchdown do Bem forma para o alto rendimento.",
  },
  {
    name: "Campeonato Brasileiro Sub-17",
    result: "Participação",
    year: "2023",
    highlight: false,
    description: "Atletas que cresceram no projeto chegando à elite do Flag Football brasileiro.",
  },
  {
    name: "Campeonato Brasileiro Sub-20",
    result: "🥈 Vice-Campeão",
    year: "2023",
    highlight: false,
    description: "A prova de que nosso programa de desenvolvimento funciona: atletas de alto nível chegando ao pódio nacional.",
  },
];

export default function FormandoCampeoes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="campeoes" ref={ref} className="section-padding bg-navy overflow-hidden">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                    c.highlight
                      ? "bg-yellow-500/10 border border-yellow-500/30"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    c.highlight ? "bg-yellow-500" : "bg-white/10"
                  }`}>
                    {c.highlight
                      ? <Trophy size={18} className="text-white" />
                      : <Medal size={18} className="text-white/60" />
                    }
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`font-semibold text-sm ${c.highlight ? "text-white" : "text-white/80"}`}>
                        {c.name}
                      </span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        c.highlight
                          ? "bg-yellow-500 text-white"
                          : "bg-white/10 text-white/50"
                      }`}>
                        {c.result}
                      </span>
                    </div>
                    <p className="text-xs text-white/50 mt-1">{c.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              {/* Trophy overlay */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <div className="text-4xl mb-1">🥇</div>
                <div className="text-white font-black text-lg tracking-tight">Campeão Brasileiro</div>
                <div className="text-white/60 text-sm">Sub-10 · NFL Flag</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
