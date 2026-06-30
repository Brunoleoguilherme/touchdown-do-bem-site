"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const media = [
  {
    outlet: "TV Globo",
    show: "Esporte Espetacular",
    title: "Projeto social de Flag Football transforma crianças em BH",
    description: "O Esporte Espetacular visitou os polos do Touchdown do Bem e mostrou como o projeto impacta a vida de centenas de crianças em Minas Gerais.",
    type: "tv",
    color: "bg-[#E8000D]",
    logo: "🔴",
    youtubeId: null,
    url: "#",
  },
  {
    outlet: "TV Globo",
    show: "Rolê nas Gerais",
    title: "Flag Football chega às periferias de BH com o Touchdown do Bem",
    description: "O Rolê nas Gerais acompanhou um dia de treino e mostrou a força da comunidade que se formou ao redor do projeto.",
    type: "tv",
    color: "bg-[#E8000D]",
    logo: "🔴",
    youtubeId: null,
    url: "#",
  },
  {
    outlet: "Band",
    show: "Band Levanta",
    title: "Crianças de Belo Horizonte sonham com Olimpíadas através do Flag Football",
    description: "A Band Levanta produziu uma matéria especial mostrando o potencial olímpico das crianças do Touchdown do Bem.",
    type: "tv",
    color: "bg-[#FF6B00]",
    logo: "🟠",
    youtubeId: null,
    url: "#",
  },
  {
    outlet: "NFL Flag Brasil",
    show: "Canal Oficial",
    title: "Touchdown do Bem: o maior projeto social de Flag Football do Brasil",
    description: "A NFL Flag Brasil destacou o projeto como referência nacional de como o esporte pode transformar comunidades.",
    type: "digital",
    color: "bg-[#013369]",
    logo: "🏈",
    youtubeId: null,
    url: "#",
  },
  {
    outlet: "Diário NFL",
    show: "Portal",
    title: "Campeão Brasileiro Sub-10: a história por trás do título",
    description: "O Diário NFL contou em detalhes a jornada do Touchdown do Bem até o título nacional na categoria Sub-10.",
    type: "digital",
    color: "bg-navy",
    logo: "📰",
    youtubeId: null,
    url: "#",
  },
  {
    outlet: "Outras coberturas",
    show: "Imprensa local e nacional",
    title: "Mais de 20 reportagens em veículos nacionais e regionais",
    description: "Rádios, portais, revistas e canais digitais de todo o Brasil já contaram a história do Touchdown do Bem.",
    type: "digital",
    color: "bg-green-500",
    logo: "📡",
    youtubeId: null,
    url: "#",
  },
];

export default function NaMidia() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="na-midia" ref={ref} className="section-padding bg-surface">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
        >
          <span className="tag mb-4">Na mídia</span>
          <h2 className="heading-lg text-graphite mb-4 text-balance">
            O Brasil inteiro{" "}
            <span className="text-green-500">conhece nossa história</span>
          </h2>
          <p className="body-md">
            TV Globo, Band, NFL Flag Brasil e dezenas de veículos já cobriram o impacto do Touchdown do Bem nas comunidades de Minas Gerais.
          </p>
        </motion.div>

        {/* Media grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {media.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card group overflow-hidden cursor-pointer block"
            >
              {/* Thumbnail area */}
              <div className={`${item.color} h-44 flex items-center justify-center relative overflow-hidden`}>
                <div className="text-5xl">{item.logo}</div>
                {item.youtubeId && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Play size={22} className="text-white fill-white ml-1" />
                    </div>
                  </div>
                )}
                {/* Outlet badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-bold text-graphite">{item.outlet}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-2">{item.show}</div>
                <h3 className="font-bold text-graphite text-base mb-2 line-clamp-2 group-hover:text-green-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-graphite-muted leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-green-600">
                  <ExternalLink size={12} />
                  Ver cobertura completa
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
