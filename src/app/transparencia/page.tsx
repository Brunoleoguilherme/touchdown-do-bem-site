import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Download, CheckCircle, Shield, ExternalLink, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Transparência | Touchdown do Bem",
  description: "Documentos institucionais, prestações de contas, relatórios anuais e projetos aprovados do Touchdown do Bem.",
};

const docCategories = [
  {
    title: "Documentos Institucionais",
    icon: Shield,
    color: "text-navy",
    bg: "bg-navy-50",
    docs: [
      { name: "Estatuto Social", description: "Documento constitutivo da associação", type: "PDF", available: false },
      { name: "Ata de Fundação", description: "Ata da assembleia de fundação", type: "PDF", available: false },
      { name: "Ata de Eleição da Diretoria", description: "Última eleição da diretoria vigente", type: "PDF", available: false },
      { name: "CNPJ", description: "Cartão do CNPJ da associação", type: "PDF", available: false },
    ],
  },
  {
    title: "Certidões e Habilitações",
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-50",
    docs: [
      { name: "Certidão Negativa Federal", description: "Débitos federais — Receita Federal", type: "PDF", available: false },
      { name: "Certidão Negativa Estadual", description: "Débitos com a Fazenda Estadual", type: "PDF", available: false },
      { name: "Certidão Negativa Municipal", description: "Débitos com a Prefeitura de BH", type: "PDF", available: false },
      { name: "Certidão de Regularidade FGTS", description: "Certidão junto à Caixa Econômica Federal", type: "PDF", available: false },
    ],
  },
  {
    title: "Prestações de Contas",
    icon: FileText,
    color: "text-yellow-700",
    bg: "bg-yellow-50",
    docs: [
      { name: "Prestação de Contas 2024", description: "Relatório financeiro e de atividades 2024", type: "PDF", available: false },
      { name: "Prestação de Contas 2023", description: "Relatório financeiro e de atividades 2023", type: "PDF", available: false },
      { name: "Prestação de Contas — Prefeitura BH", description: "Convênios e contratos municipais", type: "PDF", available: false },
      { name: "Prestação de Contas — Festival de Flag Football", description: "Evento anual — detalhamento financeiro", type: "PDF", available: false },
    ],
  },
  {
    title: "Projetos Aprovados",
    icon: CheckCircle,
    color: "text-navy",
    bg: "bg-navy-50",
    docs: [
      { name: "Projeto — Lei Federal de Incentivo ao Esporte", description: "Lei nº 11.438/2006 — Ministério do Esporte", type: "PDF", available: false },
      { name: "Projeto — Prefeitura de Belo Horizonte", description: "Convênios e parcerias municipais", type: "PDF", available: false },
      { name: "Projeto Pedagógico 2024–2025", description: "Metodologia e objetivos do programa", type: "PDF", available: false },
      { name: "Relatório de Impacto Social 2023", description: "Números, histórias e resultados do projeto", type: "PDF", available: false },
    ],
  },
];

const keyNumbers = [
  { value: "+600", label: "Crianças atendidas" },
  { value: "6", label: "Polos ativos" },
  { value: "100%", label: "Gratuito para as crianças" },
  { value: "0", label: "Irregularidades" },
];

export default function TransparenciaPage() {
  return (
    <main className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="section-padding bg-navy text-white">
        <div className="container-tight">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            Voltar para o início
          </Link>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 bg-white/10 px-3 py-1.5 rounded-full mb-6">
              <Shield size={12} />
              Transparência Total
            </span>

            <h1 className="heading-lg text-white mb-5 text-balance">
              Gestão responsável,{" "}
              <span className="text-green-400">contas abertas</span>
            </h1>

            <p className="text-white/70 text-xl leading-relaxed max-w-2xl">
              O Touchdown do Bem tem o compromisso com a transparência como princípio inegociável. Aqui você encontra todos os documentos institucionais, prestações de contas e projetos aprovados.
            </p>
          </div>

          {/* Key numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-white/10">
            {keyNumbers.map((n) => (
              <div key={n.label}>
                <div className="font-black text-white text-3xl mb-1">{n.value}</div>
                <div className="text-white/50 text-sm">{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="space-y-12">
            {docCategories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${category.bg} flex items-center justify-center`}>
                    <category.icon size={18} className={category.color} />
                  </div>
                  <h2 className="font-bold text-graphite text-xl">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.docs.map((doc) => (
                    <div
                      key={doc.name}
                      className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:border-gray-200 bg-white hover:bg-surface transition-all duration-200 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FileText size={16} className="text-graphite-muted" />
                        </div>
                        <div>
                          <div className="font-semibold text-graphite text-sm">{doc.name}</div>
                          <div className="text-xs text-graphite-muted mt-0.5">{doc.description}</div>
                        </div>
                      </div>

                      <div className="flex-shrink-0 ml-4">
                        {doc.available ? (
                          <button className="flex items-center gap-1.5 text-xs font-semibold bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-full transition-colors duration-200">
                            <Download size={12} />
                            {doc.type}
                          </button>
                        ) : (
                          <a
                            href={`mailto:transparencia@touchdowndobem.org.br?subject=Solicitação de Documento: ${doc.name}`}
                            className="flex items-center gap-1.5 text-xs font-semibold text-graphite-muted hover:text-green-600 border border-gray-200 hover:border-green-200 px-3 py-1.5 rounded-full transition-all duration-200"
                          >
                            Solicitar
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact for docs */}
          <div className="mt-16 bg-navy rounded-3xl p-8 md:p-12 text-white text-center">
            <Shield size={40} className="text-green-400 mx-auto mb-4" />
            <h3 className="font-black text-2xl mb-3">Solicite qualquer documento</h3>
            <p className="text-white/70 text-base mb-6 max-w-lg mx-auto">
              É só solicitar — envie um e-mail com o documento desejado e nossa equipe irá analisar e enviar para você o mais breve possível.
            </p>
            <a
              href="mailto:transparencia@touchdowndobem.org.br"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-4 rounded-full transition-colors duration-200"
            >
              <ExternalLink size={16} />
              transparencia@touchdowndobem.org.br
            </a>
          </div>

          {/* Law reference */}
          <div className="mt-8 p-6 bg-surface rounded-2xl border border-gray-100">
            <h4 className="font-semibold text-graphite text-sm mb-2">Base legal</h4>
            <p className="text-sm text-graphite-muted leading-relaxed">
              O Touchdown do Bem opera em conformidade com a Lei nº 11.438/2006 (Lei de Incentivo ao Esporte), a Lei nº 13.019/2014 (Marco Regulatório das OSCs), e todas as normativas municipais e estaduais aplicáveis. A prestação de contas é realizada regularmente junto aos órgãos competentes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
