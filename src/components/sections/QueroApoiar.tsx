"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Building2, Heart, HandHeart, UserPlus } from "lucide-react";

const options = [
  {
    icon: Building2,
    title: "Quero Patrocinar",
    description: "Associe sua empresa ao maior projeto social de Flag Football do Brasil. Retorno de visibilidade e impacto social comprovado.",
    cta: "Falar sobre patrocínio",
    href: "mailto:patrocinio@touchdowndobem.org.br",
    color: "bg-navy",
    textColor: "text-white",
    descColor: "text-white/70",
    btnClass: "bg-white text-navy hover:bg-gray-100",
  },
  {
    icon: Heart,
    title: "Quero Doar",
    description: "Qualquer valor, por menor que seja, ajuda a manter os treinos, comprar uniformes e garantir que nenhuma criança fique de fora.",
    cta: "Fazer uma doação",
    href: "mailto:doacao@touchdowndobem.org.br",
    color: "gradient-green",
    textColor: "text-white",
    descColor: "text-white/70",
    btnClass: "bg-white text-green-600 hover:bg-green-50",
  },
  {
    icon: HandHeart,
    title: "Quero ser Voluntário",
    description: "Você pode ser treinador, professor, fotógrafo, designer, contador ou simplesmente alguém que ama ajudar. Todo talento é bem-vindo.",
    cta: "Quero me voluntariar",
    href: "mailto:voluntario@touchdowndobem.org.br",
    color: "bg-yellow-500",
    textColor: "text-graphite",
    descColor: "text-graphite/70",
    btnClass: "bg-graphite text-white hover:bg-graphite-light",
  },
  {
    icon: UserPlus,
    title: "Quero Inscrever meu Filho",
    description: "Sua criança pode fazer parte desse time. As vagas são gratuitas e disponíveis em 6 polos. Venha fazer parte da família.",
    cta: "Inscrever minha criança",
    href: "mailto:inscricao@touchdowndobem.org.br",
    color: "bg-green-50 border-2 border-green-200",
    textColor: "text-graphite",
    descColor: "text-graphite-muted",
    btnClass: "bg-green-500 text-white hover:bg-green-600",
  },
];

export default function QueroApoiar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="apoiar" ref={ref} className="section-padding bg-surface">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
        >
          <span className="tag mb-4">Faça parte</span>
          <h2 className="heading-lg text-graphite mb-4 text-balance">
            Juntos somos{" "}
            <span className="text-green-500">mais fortes</span>
          </h2>
          <p className="body-md">
            Há muitas formas de apoiar o Touchdown do Bem. Cada contribuição, independente do tamanho, transforma vidas.
          </p>
        </motion.div>

        {/* Options grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {options.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className={`rounded-3xl md:rounded-4xl p-6 md:p-8 lg:p-10 ${opt.color}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                opt.color.includes("white") || opt.color.includes("50")
                  ? "bg-green-100"
                  : "bg-white/20"
              }`}>
                <opt.icon size={26} className={opt.textColor} />
              </div>
              <h3 className={`font-black text-xl md:text-2xl mb-3 ${opt.textColor}`}>{opt.title}</h3>
              <p className={`text-sm md:text-base leading-relaxed mb-6 md:mb-8 ${opt.descColor}`}>{opt.description}</p>
              <a
                href={opt.href}
                className={`inline-flex w-full sm:w-auto justify-center sm:justify-start items-center gap-2 font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 ${opt.btnClass}`}
              >
                {opt.cta} <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-center text-sm text-graphite-muted mt-12"
        >
          Projeto registrado, transparente e com prestação de contas pública.{" "}
          <a href="/transparencia" className="text-green-600 font-semibold hover:underline">
            Ver transparência
          </a>
        </motion.p>
      </div>
    </section>
  );
}
