"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Mãe do João, 10 anos — Polo Barreiro",
    text: "Quando meu filho entrou para o Touchdown do Bem, ele era tímido e não tinha amigos na escola. Hoje ele é o líder do time. O projeto não mudou só ele como atleta — mudou ele como pessoa.",
    avatar: "MS",
    color: "bg-green-500",
  },
  {
    name: "Carlos Oliveira",
    role: "Pai da Ana, 12 anos — Polo Pampulha",
    text: "A Ana chegou em casa dizendo que queria ir para as Olimpíadas. Eu quase chorei. Ela nunca tinha falado em sonhar com algo assim. O Touchdown do Bem abriu o mundo dela.",
    avatar: "CO",
    color: "bg-navy",
  },
  {
    name: "Pedro Mendes",
    role: "Atleta, 17 anos — ex-aluno, hoje monitor",
    text: "Entrei com 8 anos sem saber o que era Flag Football. Hoje, com 17, sou monitor de crianças que foram eu mesmo há alguns anos. O Touchdown do Bem me deu identidade.",
    avatar: "PM",
    color: "bg-yellow-500",
  },
  {
    name: "Dra. Luciana Freitas",
    role: "Parceira — UniCesumar",
    text: "O Touchdown do Bem é o que um projeto social deveria ser. Rigor pedagógico, cuidado com as famílias, resultados mensuráveis. Um modelo para o Brasil.",
    avatar: "LF",
    color: "bg-green-600",
  },
  {
    name: "Roberto Santos",
    role: "Voluntário treinador — Polo Pompeia",
    text: "Todo sábado eu acordo cedo e vou para o campo. Não porque alguém me paga — porque esses sorrisos valem mais do que qualquer salário. Aqui a gente transforma de verdade.",
    avatar: "RS",
    color: "bg-navy",
  },
];

export default function Historias() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section ref={ref} className="section-padding bg-white overflow-hidden">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="tag mb-4">Histórias reais</span>
          <h2 className="heading-lg text-graphite mb-4 text-balance">
            Histórias que{" "}
            <span className="text-green-500">inspiram</span>
          </h2>
          <p className="body-md">
            Cada depoimento aqui é uma prova de que o Touchdown do Bem muda vidas. Não de uma forma abstrata. De uma forma real, concreta e permanente.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-surface rounded-4xl p-8 md:p-12">
            <Quote size={56} className="text-green-100 absolute top-8 left-8" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p className="text-xl md:text-2xl font-medium text-graphite leading-relaxed mb-8 text-balance">
                  "{testimonials[current].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${testimonials[current].color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="font-bold text-graphite">{testimonials[current].name}</div>
                    <div className="text-sm text-graphite-muted">{testimonials[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-100">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      i === current ? "w-8 bg-green-500" : "w-2 bg-gray-200"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-gray-200 hover:border-green-500 hover:text-green-500 flex items-center justify-center transition-colors duration-200"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition-colors duration-200"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini testimonials row */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-4 mt-6">
          {testimonials.filter((_, i) => i !== current).slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
              onClick={() => setCurrent(testimonials.indexOf(t))}
              className="card p-5 cursor-pointer hover:scale-[1.02] transition-transform duration-200"
            >
              <p className="text-sm text-graphite-muted line-clamp-3 mb-3">"{t.text}"</p>
              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {t.avatar}
                </div>
                <span className="text-xs font-semibold text-graphite">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
