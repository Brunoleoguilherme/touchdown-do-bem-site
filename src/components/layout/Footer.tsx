import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Facebook, MapPin, Phone, Mail, Heart } from "lucide-react";

const polos = [
  "Barreiro", "Pampulha", "Pindorama (CIAME)", "Pompeia", "CEFET-MG", "Cidade dos Meninos"
];

const menuLinks = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Nossos Polos", href: "#nossos-polos" },
  { label: "Muito Além do Esporte", href: "#alem-do-esporte" },
  { label: "Formando Campeões", href: "#campeoes" },
  { label: "Los Angeles 2028", href: "#la2028" },
  { label: "Na Mídia", href: "#na-midia" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Patrocinadores", href: "#patrocinadores" },
  { label: "Transparência", href: "/transparencia" },
  { label: "Quero Apoiar", href: "#apoiar" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Touchdown do Bem"
                width={96}
                height={96}
                className="object-contain h-20 w-auto"
              />
            </div>
            <p className="text-navy-100/70 text-sm leading-relaxed mb-6">
              Transformando vidas através do Flag Football desde 2017. O maior projeto social de Flag Football do Brasil.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/touchdowndobem", label: "Instagram" },
                { icon: Youtube, href: "https://youtube.com/@touchdowndobem", label: "YouTube" },
                { icon: Facebook, href: "https://facebook.com/touchdowndobem", label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-green-500 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Navegação</h3>
            <ul className="space-y-2.5">
              {menuLinks.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Mais</h3>
            <ul className="space-y-2.5">
              {menuLinks.slice(5).map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Polos */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Contato</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <a href="mailto:contato@touchdowndobem.org.br" className="flex items-start gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200 break-all">
                  <Mail size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                  contato@touchdowndobem.org.br
                </a>
              </li>
              <li>
                <a href="tel:+5531999999999" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200">
                  <Phone size={14} className="text-green-500 flex-shrink-0" />
                  (31) 9 9999-9999
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                Belo Horizonte, Minas Gerais
              </li>
            </ul>

            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Nossos Polos</h3>
            <div className="flex flex-wrap gap-1.5">
              {polos.map((polo) => (
                <span key={polo} className="text-xs bg-white/10 text-white/70 px-2.5 py-1 rounded-full">
                  {polo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Touchdown do Bem. CNPJ: XX.XXX.XXX/0001-XX. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/transparencia" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200">
                Transparência
              </Link>
              <Link href="/privacidade" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200">
                Política de Privacidade
              </Link>
              <Link href="/lgpd" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200">
                LGPD
              </Link>
            </div>
            <p className="text-xs text-white/30 flex items-center gap-1">
              Feito com <Heart size={10} className="text-green-500 fill-green-500" /> para transformar vidas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
