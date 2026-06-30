"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Languages, GraduationCap, Music, Rocket, Brain, Crown, Users } from "lucide-react";

const extras = [
  {
    icon: BookOpen,
    title: "Reforço Escolar",
    description: "Apoio educacional integrado ao programa de treinos. Porque o melhor atleta é aquele que também vai bem na escola.",
    highlight: true,
  },
  {
    icon: Languages,
    title: "Aulas de Inglês",
    description: "Acesso ao idioma global, abrindo portas que antes pareciam fechadas. A NFL fala inglês. Nossas crianças também aprendem.",
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: "Bolsas de Estudo",
    description: "Parcerias com instituições de ensino para que o futuro das nossas crianças seja construído com base sólida.",
    highlight: false,
  },
  {
    icon: Music,
    title: "Eventos Culturais",
    description: "Teatro, música, visitas culturais. Experiências que ampliam o horizonte e alimentam o espírito.",
    highlight: false,
  },
  {
    icon: Rocket,
    title: "Grandes Experiências",
    description: "Visitas a jogos profissionais, eventos da NFL, viagens para campeonatos. Momentos que ficam para sempre.",
    highlight: true,
  },
  {
    icon: Brain,
    title: "Desenvolvimento Humano",
    description: "Psicólogos, assistentes sociais e mentores constroem com nossas crianças não só atletas, mas seres humanos plenos.",
    highlight: false,
  },
  {
    icon: Crown,
    title: "Formação de Líderes",
    description: "Os melhores atletas do projeto viram monitores e treinadores. A liderança começa cedo e dura para sempre.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Apoio às Famílias",
    description: "O projeto vai além das crianças. Acompanhamos as famílias, orientamos pais e criamos uma rede de suporte real.",
    highlight: false,
  },
];

export default function AlemDoEsporte() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="alem-do-esporte" ref={ref} className="section-padding bg-white">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10 md:mb-16"
        >
          <span className="tag mb-4">Muito além do esporte</span>
          <h2 className="heading-lg text-graphite mb-4 text-balance">
            Um treino.{" "}
            <span className="text-green-500">Mil possibilidades.</span>
          </h2>
          <p className="body-md">
            O Touchdown do Bem não é uma escolinha de esporte. É um programa completo de desenvolvimento humano. O campo é onde tudo começa — mas o que oferecemos vai muito mais longe.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {extras.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`rounded-3xl p-6 ${
                item.highlight
                  ? "gradient-green text-white"
                  : "bg-surface hover:bg-white hover:shadow-card transition-all duration-300 border border-gray-50"
              }`}
            >
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 ${
                item.highlight ? "bg-white/20" : "bg-white shadow-sm"
              }`}>
                <item.icon size={20} className={item.highlight ? "text-white" : "text-green-500"} />
              </div>
              <h3 className={`font-bold text-base mb-2 ${item.highlight ? "text-white" : "text-graphite"}`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed ${item.highlight ? "text-white/80" : "text-graphite-muted"}`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
