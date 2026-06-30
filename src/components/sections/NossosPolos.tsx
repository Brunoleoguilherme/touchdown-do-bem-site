"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";

const polos = [
  {
    id: "barreiro",
    name: "Barreiro",
    district: "Barreiro, BH",
    schedule: "Ter e Qui — 16h às 18h",
    coach: "A confirmar",
    address: "Barreiro, Belo Horizonte - MG",
    story: "Um dos polos mais antigos do projeto, o Barreiro reúne uma das comunidades mais engajadas do Touchdown do Bem. As crianças aqui já viram colegas virarem treinadores.",
    mapUrl: "https://maps.google.com/?q=Barreiro,Belo+Horizonte",
    color: "from-green-400 to-green-600",
    accent: "bg-green-50 text-green-600",
  },
  {
    id: "pampulha",
    name: "Pampulha",
    district: "Pampulha, BH",
    schedule: "Seg e Qua — 16h às 18h",
    coach: "A confirmar",
    address: "Pampulha, Belo Horizonte - MG",
    story: "Na orla da Lagoa da Pampulha, as crianças treinam com o pôr do sol ao fundo. Um dos polos mais recentes e um dos que mais cresce.",
    mapUrl: "https://maps.google.com/?q=Pampulha,Belo+Horizonte",
    color: "from-navy to-navy-700",
    accent: "bg-navy-50 text-navy",
  },
  {
    id: "pindorama",
    name: "Pindorama (CIAME)",
    district: "Pindorama, BH",
    schedule: "Sex — 14h às 17h",
    coach: "A confirmar",
    address: "CIAME Pindorama, Belo Horizonte - MG",
    story: "Em parceria com o CIAME, o polo Pindorama é exemplo de como institucional e social podem caminhar juntos para ampliar o impacto.",
    mapUrl: "https://maps.google.com/?q=Pindorama,Belo+Horizonte",
    color: "from-yellow-400 to-yellow-600",
    accent: "bg-yellow-50 text-yellow-700",
  },
  {
    id: "pompeia",
    name: "Pompeia",
    district: "Pompeia, BH",
    schedule: "Sáb — 08h às 11h",
    coach: "A confirmar",
    address: "Pompeia, Belo Horizonte - MG",
    story: "O polo das manhãs de sábado. Famílias inteiras chegam juntas, e muitos pais aproveitam para treinar também. Uma comunidade vibrante.",
    mapUrl: "https://maps.google.com/?q=Pompeia,Belo+Horizonte",
    color: "from-green-500 to-navy",
    accent: "bg-green-50 text-green-600",
  },
  {
    id: "cefet",
    name: "CEFET-MG",
    district: "Contagem, MG",
    schedule: "Qua — 17h às 19h",
    coach: "A confirmar",
    address: "CEFET-MG, Contagem - MG",
    story: "Em parceria com o CEFET-MG, este polo une esporte e tecnologia. Os alunos da instituição convivem com as crianças do projeto, gerando trocas únicas.",
    mapUrl: "https://maps.google.com/?q=CEFET-MG,Contagem",
    color: "from-navy-700 to-navy",
    accent: "bg-navy-50 text-navy",
  },
  {
    id: "cidade-meninos",
    name: "Cidade dos Meninos",
    district: "Ribeirão das Neves, MG",
    schedule: "Ter e Qui — 14h às 16h",
    coach: "A confirmar",
    address: "Ribeirão das Neves - MG",
    story: "O polo mais distante do centro, mas não de coração. A Cidade dos Meninos representa a expansão do projeto para além da capital, levando o Flag Football a quem mais precisa.",
    mapUrl: "https://maps.google.com/?q=Ribeirao+das+Neves,MG",
    color: "from-yellow-500 to-green-500",
    accent: "bg-yellow-50 text-yellow-700",
  },
];

export default function NossosPolos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="nossos-polos" ref={ref} className="section-padding bg-surface">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="tag mb-4">Onde estamos</span>
          <h2 className="heading-lg text-graphite mb-4 text-balance">
            6 polos.{" "}
            <span className="text-green-500">1 missão.</span>
          </h2>
          <p className="body-md">
            De Belo Horizonte a Ribeirão das Neves, levamos o Flag Football a crianças de toda a região metropolitana.
          </p>
        </motion.div>

        {/* Polos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {polos.map((polo, i) => (
            <motion.div
              key={polo.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card overflow-hidden group"
            >
              {/* Color band */}
              <div className={`h-2 bg-gradient-to-r ${polo.color}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-graphite text-lg">{polo.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <MapPin size={12} className="text-graphite-muted" />
                      <span className="text-xs text-graphite-muted">{polo.district}</span>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${polo.accent}`}>
                    Ativo
                  </span>
                </div>

                <p className="text-sm text-graphite-muted leading-relaxed mb-5 line-clamp-2">
                  {polo.story}
                </p>

                <div className="space-y-2 border-t border-gray-50 pt-4">
                  <div className="flex items-center gap-2 text-xs text-graphite-light">
                    <Clock size={12} className="text-green-500" />
                    {polo.schedule}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-graphite-light">
                    <User size={12} className="text-green-500" />
                    {polo.coach}
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <a
                    href={polo.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 text-center text-xs font-semibold text-graphite-muted hover:text-graphite border border-gray-100 hover:border-gray-200 py-2 rounded-xl transition-colors duration-200"
                  >
                    Ver no mapa
                  </a>
                  <Link
                    href="#apoiar"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 text-center text-xs font-semibold bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl transition-colors duration-200"
                  >
                    Quero participar
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-center"
        >
          <Link href="#apoiar" className="btn-primary">
            Quero inscrever meu filho <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
