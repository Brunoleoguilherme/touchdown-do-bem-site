"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const team = [
  { name: "Bruno Guilherme", role: "Fundador", emoji: "🏈" },
  { name: "Sanders Maciel", role: "Fundador", emoji: "🎯" },
  { name: "Dayene Nogueira", role: "Fundadora", emoji: "⭐" },
  { name: "Famílias & Voluntários", role: "O coração do projeto", emoji: "❤️" },
];

export default function QuemSomos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="quem-somos" ref={ref} className="section-padding bg-surface">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="tag mb-5 inline-flex"
            >
              Nossa história
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="heading-lg text-graphite mb-6 text-balance"
            >
              Nasceu de um sonho.{" "}
              <span className="text-green-500">Cresceu com amor.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5 body-lg"
            >
              <p>
                Em 2017, Bruno Guilherme, Sanders Maciel e Dayene Nogueira tinham uma ideia simples: levar o Flag Football para crianças que nunca tinham ouvido falar no esporte. Não havia patrocinadores. Não havia estrutura. Havia vontade, um campo e uma bola.
              </p>
              <p>
                O que começou em um polo virou movimento. As crianças voltavam. As famílias chegavam. Os pais perguntavam se podiam ajudar. Os jovens viravam treinadores. O projeto foi crescendo porque o esporte, quando bem feito, transforma de dentro para fora.
              </p>
              <p>
                Hoje, o Touchdown do Bem é o maior projeto social de Flag Football do Brasil. Seis polos. Mais de 600 crianças. Reconhecimento nacional. E a mesma essência de sempre: a crença de que todo menino e toda menina merece uma oportunidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <Link href="#nossos-polos" className="btn-primary">
                Conheça nossos polos <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Story pull quote */}
            <div className="bg-navy rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="text-5xl mb-4">"</div>
                <p className="text-lg font-medium leading-relaxed text-white/90 mb-4">
                  A gente não entrega esporte. A gente entrega futuro. O esporte é o caminho, mas o destino é uma vida melhor.
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold text-white text-xs border-2 border-navy">BG</div>
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-white text-xs border-2 border-navy">SM</div>
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white text-xs border-2 border-navy">DN</div>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Bruno, Sanders & Dayene</p>
                    <p className="text-white/50 text-xs">Fundadores, Touchdown do Bem</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team photo */}
            <div className="relative rounded-3xl overflow-hidden h-48 sm:h-56 mb-4">
              <Image
                src="/images/foto-time-verde.jpg"
                alt="Time Touchdown do Bem com treinadores"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-3 left-4 text-white text-sm font-semibold">Time & Fundadores</div>
            </div>

            {/* Team grid */}
            <div className="grid grid-cols-2 gap-4">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                  className="card p-5"
                >
                  <div className="text-2xl mb-2">{member.emoji}</div>
                  <div className="font-semibold text-graphite text-sm">{member.name}</div>
                  <div className="text-xs text-graphite-muted mt-0.5">{member.role}</div>
                </motion.div>
              ))}
            </div>

            {/* Value statement */}
            <div className="bg-green-500 rounded-3xl p-6 flex items-center gap-4">
              <Heart size={28} className="text-white flex-shrink-0 fill-white/30" />
              <p className="text-white font-semibold text-sm leading-relaxed">
                Não tratamos crianças como coitadas. Elas são protagonistas, líderes em formação, campeãs em construção.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
