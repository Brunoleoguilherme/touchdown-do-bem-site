"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  { emoji: "🎯", title: "Disciplina", desc: "Foco, comprometimento e responsabilidade dentro e fora do campo." },
  { emoji: "🤝", title: "Respeito", desc: "Pelo time, pelo adversário, pelo árbitro e por si mesmo." },
  { emoji: "📚", title: "Educação", desc: "O esporte como extensão da sala de aula, formando mentes e caracteres." },
  { emoji: "🫂", title: "Amizade", desc: "Laços criados no campo que duram a vida toda." },
  { emoji: "👨‍👩‍👧‍👦", title: "Família", desc: "As famílias fazem parte do time. Juntos somos mais fortes." },
  { emoji: "⭐", title: "Liderança", desc: "Crianças que aprendem a liderar pelo exemplo e pela ação." },
  { emoji: "💪", title: "Saúde", desc: "Corpo ativo, mente saudável, futuro mais longo." },
  { emoji: "🏆", title: "Autoestima", desc: "Cada touchdown marca uma vitória que vai muito além do placar." },
  { emoji: "🌈", title: "Diversidade", desc: "Meninos e meninas, de origens diversas, unidos pelo mesmo objetivo." },
  { emoji: "♿", title: "Inclusão", desc: "O campo é de todos. Sem exceções, sem rótulos, sem limites." },
];

export default function EsporteMudaVidas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding bg-white overflow-hidden">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
        >
          <span className="tag mb-4">Valores</span>
          <h2 className="heading-lg text-graphite mb-4 text-balance">
            O esporte muda{" "}
            <span className="text-green-500">muito mais que o corpo</span>
          </h2>
          <p className="body-md">
            Um treino de Flag Football é, ao mesmo tempo, uma aula de vida. Cada exercício, cada jogada, cada derrota e cada vitória ensinam algo que dura para sempre.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.055, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-white border border-gray-100 hover:border-green-200 hover:bg-green-50/50 rounded-3xl p-5 cursor-default transition-colors duration-200"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200 inline-block">
                {v.emoji}
              </div>
              <h3 className="font-bold text-graphite text-sm mb-1.5">{v.title}</h3>
              <p className="text-xs text-graphite-muted leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 gradient-green rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <p className="font-black text-2xl md:text-3xl leading-tight max-w-3xl mx-auto tracking-tight">
            "O Flag Football é o meio. A transformação de vida é o objetivo."
          </p>
          <p className="mt-3 text-white/70 text-sm">— Touchdown do Bem</p>
        </motion.div>
      </div>
    </section>
  );
}
