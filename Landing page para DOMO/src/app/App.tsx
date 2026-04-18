import React, { useEffect, useState } from 'react';
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Zap,
  Target,
  Layers,
  Palette,
  Globe,
  LayoutDashboard,
  TrendingUp,
  BarChart3,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  ArrowDownRight,
  Plus,
  Minus,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import svgPaths from '../imports/svg-mu7l7uo8e2';
import domoLogo from '../assets/domo.svg';
import img537132Eaab5Edb5D62233Cb3C786D98EPng from 'figma:asset/019e47aa7772ec51ecb2ec54df665c769e86ef9a.png';
import imgE67Ff3524Df65706353633F092Ab2421Png from 'figma:asset/0c73e0c69ae8827040270d16403aa279184fc2bc.png';
import {
  imgFrame,
  imgVector,
  imgFrame1,
  imgVector1,
  imgFrame2,
  imgVector2,
  imgFrame3,
  imgVector3,
  imgBackground,
  imgBackground1,
} from '../imports/svg-mmmmg';

/* ── Design tokens ── */
const GradientText = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span className={`text-[#04F6C2] text-glow ${className}`}>{children}</span>
);

const GradientButton = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    className={`bg-[#04F6C2] text-[#08090d] font-semibold rounded-full px-6 py-3 text-base active:scale-95 flex items-center gap-2 glow-teal-btn button-shine ${className}`}
  >
    {children}
  </button>
);

const OutlineButton = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    className={`border border-white/20 text-white font-medium rounded-full px-6 py-3 text-base hover:bg-white/5 active:scale-95 transition-all flex items-center gap-2 ${className}`}
  >
    {children}
  </button>
);

type PillarItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  expandedDetail: string;
  icon: React.ReactNode;
  accentBorder?: string;
};

function ExpandingPillarsRail({
  items,
  openId,
  onToggle,
}: {
  items: PillarItem[];
  openId: string | null;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-stretch">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <button
            key={item.id}
            type="button"
            aria-expanded={open}
            onClick={() => onToggle(item.id)}
            className={`group relative flex flex-1 flex-col text-left rounded-[1.75rem] md:rounded-[2rem] border bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden transition-[min-height,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50 ${
              open
                ? 'min-h-[300px] sm:min-h-[340px] lg:min-h-[400px] border-fuchsia-500/40 shadow-[0_0_48px_rgba(168,85,247,0.15)]'
                : `min-h-[190px] sm:min-h-[210px] lg:min-h-[230px] ${item.accentBorder ?? 'border-white/[0.08]'}`
            }`}
          >
            <div
              className="pointer-events-none absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-600 shadow-lg ring-2 ring-black/40"
              aria-hidden
            >
              {open ? (
                <Minus className="text-white" size={22} strokeWidth={2.2} />
              ) : (
                <Plus className="text-white" size={22} strokeWidth={2.2} />
              )}
            </div>

            <div
              className={`grid min-h-0 flex-1 transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="min-h-0 overflow-hidden px-5 pt-16">
                <div className="flex items-center gap-2 pb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-white/30">
                  <span>{item.id}</span>
                  <span className="text-white/45">{item.title}</span>
                </div>
                <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
                <p className="mt-4 border-t border-white/[0.06] pt-4 text-sm leading-relaxed text-white/45">
                  {item.expandedDetail}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-fuchsia-300/90">
                  Saiba mais <ArrowRight size={12} />
                </div>
              </div>
            </div>

            <div className="mt-auto flex items-end justify-between gap-3 border-t border-white/[0.05] px-5 py-5">
              <span className="text-base font-bold lowercase leading-tight tracking-tight text-white md:text-lg">
                {item.label}
              </span>
              <span className="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-teal-300/70">
                {item.icon}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ── Resultados: painel visual (substitui imagem estática) ── */
function ResultsMetricsVisual() {
  const linePath = 'M 4 96 C 72 88 120 32 176 48 S 280 12 340 36 S 440 8 516 24';
  const funnelSteps = [
    { label: 'Tráfego qualificado', value: '1,02M', widthPct: 100, hint: 'Impressões + cliques' },
    { label: 'Sessões na LP', value: '284k', widthPct: 62, hint: 'Taxa de interesse' },
    { label: 'Vendas atribuídas', value: '19,2k', widthPct: 34, hint: 'Meta + Google' },
  ];
  const kpiStrip = [
    { label: 'ROAS', val: '5,1', sub: 'vs. mês anterior +18%' },
    { label: 'CPA médio', val: 'R$ 38', sub: 'campanhas DR' },
    { label: 'Conv. LP', val: '6,8%', sub: 'teste A/B ativo' },
    { label: 'LTV / CAC', val: '4,2×', sub: 'payback 2,1 m' },
  ];
  const reportRows = [
    { camp: 'Meta · Advantage+', spend: 'R$ 24.800', cpa: 'R$ 41', conv: '4,2%', status: 'No alvo' },
    { camp: 'Google · PMax', spend: 'R$ 18.200', cpa: 'R$ 36', conv: '5,1%', status: 'Otimizar' },
    { camp: 'YouTube · DR', spend: 'R$ 9.400', cpa: 'R$ 52', conv: '3,6%', status: 'No alvo' },
  ];

  return (
    <div className="rounded-3xl border border-white/[0.08] bg-[#111111] glow-card p-5 md:p-8 lg:p-10">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <motion.div
          className="lg:col-span-8 flex flex-col min-h-0 md:min-h-[260px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/35">Performance hub</p>
            <p className="text-sm font-semibold text-white">Receita atribuída · últimos 30 dias</p>
          </div>

          <div className="flex-1 rounded-2xl border border-white/[0.06] bg-black/50 p-4 md:p-5 flex flex-col">
            <div className="relative h-32 md:h-36 mb-4">
              <svg
                className="absolute inset-0 w-full h-full text-[#04F6C2]/25"
                viewBox="0 0 520 120"
                preserveAspectRatio="none"
                aria-hidden
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={24 + i * 22}
                    x2="520"
                    y2={24 + i * 22}
                    stroke="currentColor"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>
              <svg className="relative w-full h-full" viewBox="0 0 520 120" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <linearGradient id="results-line-grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#04F6C2" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#04F6C2" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={linePath}
                  fill="none"
                  stroke="url(#results-line-grad2)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ pathLength: { duration: 1.35, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.3 } }}
                />
              </svg>
            </div>

            <div className="mt-3 flex flex-wrap gap-4 text-[11px] font-mono text-white/30">
              <span>Sem 1</span>
              <span>Sem 2</span>
              <span>Sem 3</span>
              <span>Sem 4</span>
              <span className="text-[#04F6C2]/70">Projeção</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-4 flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="text-white/50 text-xs font-semibold uppercase tracking-wider">Funil integrado</div>
          <div className="rounded-2xl border border-white/[0.06] bg-black/50 p-4 flex flex-col gap-4 flex-1">
            {funnelSteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
              >
                <div className="flex justify-between items-baseline gap-2 mb-1.5">
                  <span className="text-sm text-white/80 font-medium">{step.label}</span>
                  <span className="text-sm font-semibold text-[#04F6C2] tabular-nums">{step.value}</span>
                </div>
                <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#04F6C2]/40 to-[#04F6C2]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${step.widthPct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <p className="text-[11px] text-white/30 mt-1">{step.hint}</p>
                {i < funnelSteps.length - 1 && (
                  <div className="flex justify-center py-1 text-white/20">
                    <ArrowDownRight size={14} className="rotate-90" aria-hidden />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
        {kpiStrip.map((k, i) => (
          <motion.div
            key={k.label}
            className="rounded-2xl border border-white/[0.06] bg-black/40 px-4 py-4"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * i, duration: 0.4 }}
          >
            <p className="text-[10px] uppercase tracking-wider text-white/35 mb-1">{k.label}</p>
            <p className="text-xl md:text-2xl font-bold text-white tabular-nums">{k.val}</p>
            <p className="text-[11px] text-white/35 mt-1 leading-snug">{k.sub}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 rounded-2xl border border-white/[0.06] bg-black/40 overflow-hidden"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#04F6C2]/80" />
            <span className="text-sm font-medium text-white/80">Relatório transparente</span>
          </div>
          <span className="text-[11px] font-mono text-white/35">Export · PDF · Sheets</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm min-w-[520px]">
            <thead>
              <tr className="text-[10px] uppercase tracking-wider text-white/35 border-b border-white/[0.05]">
                <th className="px-4 py-3 font-medium">Campanha</th>
                <th className="px-4 py-3 font-medium">Investimento</th>
                <th className="px-4 py-3 font-medium">CPA</th>
                <th className="px-4 py-3 font-medium">Conv.</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {reportRows.map((row, i) => (
                <motion.tr
                  key={row.camp}
                  className="border-b border-white/[0.04] last:border-0 text-white/70"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.35 }}
                >
                  <td className="px-4 py-3.5 font-medium text-white/85">{row.camp}</td>
                  <td className="px-4 py-3.5 tabular-nums">{row.spend}</td>
                  <td className="px-4 py-3.5 tabular-nums">{row.cpa}</td>
                  <td className="px-4 py-3.5 tabular-nums text-[#04F6C2]/90">{row.conv}</td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                        row.status === 'No alvo'
                          ? 'bg-emerald-500/15 text-emerald-300/90 border border-emerald-500/25'
                          : 'bg-amber-500/12 text-amber-200/90 border border-amber-500/25'
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <p className="mt-6 text-center text-xs text-white/30 max-w-2xl mx-auto leading-relaxed">
        Métricas e confiança — dados reais, relatórios transparentes. Visualização ilustrativa do tipo de
        painéis que a DOMO estrutura para growth e operações.
      </p>
    </div>
  );
}

/* ── Success cases ── */
const successCases = [
  {
    company: 'Vertex Educação',
    niche: 'Infoprodutos',
    metric: '+212%',
    metricLabel: 'receita atribuída a campanhas',
    quote:
      'Passamos a enxergar cada criativo e página no mesmo painel. Decisões em dias, não em meses.',
  },
  {
    company: 'Nord Labs',
    niche: 'B2B SaaS',
    metric: '3,1×',
    metricLabel: 'mais demos qualificadas',
    quote:
      'O design do funil e os dashboards alinharam marketing e produto. Finalmente dá para escalar com previsibilidade.',
  },
  {
    company: 'Aura Beauty',
    niche: 'E-commerce',
    metric: '−41%',
    metricLabel: 'CAC com mesmo budget',
    quote:
      'Unimos narrativa de marca com métricas semanais. O time compra a estratégia porque os números estão lá.',
  },
  {
    company: 'Pulse Podcast Network',
    niche: 'Mídia & audiência',
    metric: '+89%',
    metricLabel: 'assinantes pagos em 6 meses',
    quote:
      'Cases reais, relatórios claros. A DOMO virou nosso braço de crescimento, não só de tráfego.',
  },
];

/* ── FAQ ── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: 'Como a DOMO garante o crescimento previsível?',
      a: 'Utilizamos uma abordagem orientada por dados, otimizando cada campanha com base em métricas reais, sem achismos.',
    },
    {
      q: 'Quais são os serviços inclusos no sistema?',
      a: 'Nosso sistema integra tráfego pago, desenvolvimento de conteúdo, design gráfico, web design e estratégia de marca.',
    },
    {
      q: 'Vocês trabalham com quais nichos?',
      a: 'Temos vasta experiência em setores de ponta, focados especialmente em empreendedores digitais e infoprodutores.',
    },
    {
      q: 'Como funciona a entrega de relatórios?',
      a: 'Fornecemos relatórios transparentes periodicamente, sem taxas ocultas, focados nos KPIs que importam para o seu negócio.',
    },
  ];
  return (
    <section id="faq" className="py-32 px-6 max-w-4xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Perguntas frequentes</h2>
      </div>
      <div>
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-white/[0.08]">
            <button
              className="w-full text-left font-medium text-lg md:text-xl flex justify-between items-center py-6 text-white/70 hover:text-white focus:outline-none transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <ChevronDown
                className={`flex-shrink-0 ml-6 text-white/30 transform transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                size={18}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 pb-6' : 'max-h-0'}`}
            >
              <p className="text-white/40 pr-10 text-base leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── App ── */
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [caseIndex, setCaseIndex] = useState(0);
  const [openPillar, setOpenPillar] = useState<string | null>(null);

  useEffect(() => {
    const t = window.setInterval(() => {
      setCaseIndex((i) => (i + 1) % successCases.length);
    }, 6000);
    return () => window.clearInterval(t);
  }, []);

  const pillarItems: PillarItem[] = [
    {
      id: '01',
      label: 'brand strategy',
      title: 'Brand Strategy',
      description:
        'Construímos identidades que posicionam marcas com autoridade no mercado digital.',
      expandedDetail:
        'Arquitetura de mensagem, posicionamento e tom de voz alinhados a canais e produto — para o mercado te reconhecer antes mesmo do anúncio.',
      icon: <Target size={14} />,
    },
    {
      id: '02',
      label: 'digital marketing',
      title: 'Digital Marketing',
      description: 'Tráfego pago com foco em performance e crescimento mensurável a cada ciclo.',
      expandedDetail:
        'Campanhas com leitura semanal de dados, criativos em teste contínuo e orçamento deslocado para o que provadamente converte.',
      icon: <Zap size={14} />,
    },
    {
      id: '03',
      label: 'content development',
      title: 'Content Development',
      description: 'Conteúdo estratégico que educa, engaja e converte em cada etapa do funil.',
      expandedDetail:
        'Roteiros e peças pensados para cada etapa do funil — topo, meio e fundo — com métricas de retenção e clareza de oferta.',
      icon: <Layers size={14} />,
    },
    {
      id: '04',
      label: 'graphic design',
      title: 'Graphic Design',
      description: 'Design visual que comunica a essência da sua marca com precisão e impacto.',
      expandedDetail:
        'Identidade aplicada a anúncios, páginas e materiais de apoio, com consistência visual que reforça confiança e conversão.',
      icon: <Palette size={14} />,
      accentBorder: 'border-pink-500/25',
    },
    {
      id: '05',
      label: 'web design',
      title: 'Web Design',
      description: 'Plataformas e landing pages desenvolvidas com foco em conversão e UX.',
      expandedDetail:
        'Fluxos, hierarquia visual e performance técnica para transformar clique em lead — e lead em cliente — com clareza e velocidade.',
      icon: <Globe size={14} />,
    },
  ];

  const togglePillar = (id: string) => {
    setOpenPillar((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-black font-['Inter',sans-serif] text-white overflow-x-hidden selection:bg-[#04F6C2]/30 selection:text-white">
      {/* Hidden imports */}
      <div className="hidden" aria-hidden="true">
        <img src={imgFrame} alt="" />
        <img src={imgVector} alt="" />
        <img src={imgFrame1} alt="" />
        <img src={imgVector1} alt="" />
        <img src={imgFrame2} alt="" />
        <img src={imgVector2} alt="" />
        <img src={imgFrame3} alt="" />
        <img src={imgVector3} alt="" />
        <img src={imgBackground} alt="" />
        <img src={imgBackground1} alt="" />
        <svg>
          <path d={svgPaths.p30b65a00} />
        </svg>
      </div>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-black/80 backdrop-blur-xl backdrop-glow">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <img
            src={domoLogo}
            alt="DOMO"
            className="h-8 object-contain brightness-0 invert justify-self-start"
          />

          <div className="hidden md:flex items-center justify-center gap-8">
            {['Serviços', 'Resultados', 'Time', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-end gap-3 justify-self-end">
            <GradientButton className="text-sm hidden md:flex px-5 py-2.5">
              Fale com a DOMO <ArrowRight size={14} />
            </GradientButton>
            <button
              className="md:hidden text-white/50 hover:text-white p-1 transition-colors"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[65px] left-0 right-0 z-40 bg-black border-b border-white/[0.06] px-6 py-6 flex flex-col gap-1 md:hidden backdrop-glow backdrop-blur-xl">
          {['Serviços', 'Resultados', 'Time', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/60 hover:text-white py-3 text-lg border-b border-white/[0.05] last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-4">
            <GradientButton className="w-full justify-center">
              Fale com a DOMO <ArrowRight size={14} />
            </GradientButton>
          </div>
        </div>
      )}

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Textura nnnoise + iluminação especular (#7957A8) */}
          <div
            className="absolute inset-0 opacity-[0.42] mix-blend-soft-light [mask-image:radial-gradient(ellipse_88%_72%_at_50%_38%,black_18%,transparent_78%)]"
            aria-hidden
          >
            <svg
              className="absolute min-h-full min-w-full w-[140%] h-[140%] -left-[20%] -top-[20%]"
              viewBox="0 0 700 700"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter
                  id="hero-nnnoise-filter"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                  filterUnits="objectBoundingBox"
                  primitiveUnits="userSpaceOnUse"
                  colorInterpolationFilters="linearRGB"
                >
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.063"
                    numOctaves="4"
                    seed="15"
                    stitchTiles="stitch"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    result="turbulence"
                  />
                  <feSpecularLighting
                    surfaceScale="15"
                    specularConstant="0.7"
                    specularExponent="20"
                    lightingColor="#7957A8"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    in="turbulence"
                    result="specularLighting"
                  >
                    <feDistantLight azimuth="3" elevation="140" />
                  </feSpecularLighting>
                </filter>
              </defs>
              <rect width="700" height="700" fill="transparent" />
              <rect width="700" height="700" fill="#7957a8" filter="url(#hero-nnnoise-filter)" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold leading-[1.02] tracking-tight mb-8 max-w-5xl">
            Estrutura que
            <br />
            <GradientText>gera resultados.</GradientText>
          </h1>

          <p className="text-lg md:text-xl text-white/45 max-w-2xl leading-relaxed mb-12 font-light">
            A DOMO é um sistema orientado por dados que une tráfego pago, estratégia e design de
            produto. Criando crescimento previsível para empreendedores e infoprodutores.
          </p>

          <div className="flex flex-wrap gap-4">
            <GradientButton className="text-base px-8 py-4">
              Começar agora <ArrowRight size={16} />
            </GradientButton>
            <OutlineButton className="text-base px-8 py-4">Ver como funciona</OutlineButton>
          </div>
        </div>
      </section>

      {/* ── Design, dashboards & cases ── */}
      <section className="px-6 max-w-7xl mx-auto mb-32 flex flex-col gap-24 md:gap-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#04F6C2]/80">
              Produto orientado a dados
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight">
              Design impulsiona crescimento com{' '}
              <GradientText>dashboards</GradientText> que o time usa todos os dias.
            </h2>
            <p className="text-white/45 text-lg leading-relaxed max-w-xl">
              Interfaces claras e relatórios acionáveis traduzem estratégia em ritmo de execução.
              Você vê o funil inteiro — criativo, página, campanha — e ajusta com base em evidência,
              não em achismo.
            </p>
            <ul className="flex flex-col gap-4 mt-2">
              {[
                {
                  icon: <LayoutDashboard size={18} />,
                  text: 'Painéis sob medida para squads de growth e produto',
                },
                {
                  icon: <BarChart3 size={18} />,
                  text: 'KPIs compartilhados: aquisição, conversão e retenção no mesmo lugar',
                },
                {
                  icon: <TrendingUp size={18} />,
                  text: 'Iteração contínua: design e mídia respondendo aos mesmos números',
                },
              ].map((item, i) => (
                <motion.li
                  key={item.text}
                  className="flex items-start gap-3 text-white/55 text-sm md:text-base"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 * i, duration: 0.4 }}
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-600/20 border border-teal-500/40 text-teal-300 glow-border backdrop-glow">
                    {item.icon}
                  </span>
                  <span className="leading-relaxed pt-1">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Dashboard mockup — moldura electric-card + sparkline SVG */}
          <motion.div
            className="relative w-full max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-[32px] p-[2px] electric-card overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
              <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[30px] bg-[#0A0A0A] p-6 ring-1 ring-white/[0.06] md:p-8">
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/25">
                    Domo / Overview
                  </span>
                </div>

                <div className="mb-6 w-full">
                  <div className="mb-2 flex items-center justify-between text-[10px] text-white/35">
                    <span className="font-medium uppercase tracking-wider">Receita atribuída</span>
                    <span className="font-mono text-[#04F6C2]/80">+24% vs. período</span>
                  </div>
                  <div className="relative mt-1 h-16 w-full md:h-[4.25rem]">
                    <svg
                      className="h-full w-full overflow-visible"
                      viewBox="0 0 280 60"
                      preserveAspectRatio="none"
                      aria-hidden
                    >
                      <defs>
                        <linearGradient id="domo-dash-spark" x1="0" y1="0" x2="280" y2="0">
                          <stop offset="0%" stopColor="#04F6C2" stopOpacity="0.35" />
                          <stop offset="50%" stopColor="#04F6C2" stopOpacity="1" />
                          <stop offset="100%" stopColor="#04F6C2" stopOpacity="0.45" />
                        </linearGradient>
                        <linearGradient id="domo-dash-area" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#04F6C2" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#04F6C2" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {[12, 24, 36, 48].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          y1={y}
                          x2="280"
                          y2={y}
                          stroke="rgba(255,255,255,0.06)"
                          strokeWidth="1"
                          vectorEffect="non-scaling-stroke"
                        />
                      ))}
                      <path
                        d="M 0 48 C 36 44 52 28 88 32 C 124 36 140 18 176 24 C 212 30 232 10 280 14 L 280 60 L 0 60 Z"
                        fill="url(#domo-dash-area)"
                      />
                      <motion.path
                        d="M 0 48 C 36 44 52 28 88 32 C 124 36 140 18 176 24 C 212 30 232 10 280 14"
                        fill="none"
                        stroke="url(#domo-dash-spark)"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          pathLength: { duration: 1.25, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.25 },
                        }}
                      />
                    </svg>
                  </div>
                  <div className="mt-2 flex justify-between font-mono text-[10px] text-white/25">
                    <span>Seg</span>
                    <span>Ter</span>
                    <span>Qua</span>
                    <span>Qui</span>
                    <span>Sex</span>
                    <span>Sáb</span>
                    <span>Dom</span>
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-3 gap-3">
                  {[
                    { label: 'ROAS', val: '4,2', delay: 0.1 },
                    { label: 'Conv. LP', val: '6,8%', delay: 0.2 },
                    { label: 'CAC', val: '−22%', delay: 0.3 },
                  ].map((k) => (
                    <motion.div
                      key={k.label}
                      className="rounded-xl border border-teal-500/20 bg-black px-3 py-3 glow-border md:px-4 md:py-4"
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: k.delay, duration: 0.35 }}
                    >
                      <p className="mb-1 text-[10px] uppercase tracking-wider text-white/30">{k.label}</p>
                      <p className="text-lg font-semibold tabular-nums text-white md:text-xl">{k.val}</p>
                    </motion.div>
                  ))}
                </div>

                <p className="mt-2 text-center font-mono text-[11px] text-white/25">
                  Últimos 7 dias · atualizado em tempo real
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cases carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/25 mb-3">
                Cases
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-xl">
                Aprovado por diversos <GradientText>cases de sucesso</GradientText>
              </h2>
            </div>
            <p className="text-white/40 text-sm md:text-base max-w-md leading-relaxed">
              Marcas reais, métricas reais. Cada projeto reforça o mesmo sistema: estratégia, design
              e performance falando a mesma língua.
            </p>
          </div>

          <div className="relative rounded-2xl bg-[#111111] glow-card overflow-hidden min-h-[280px] md:min-h-[240px]">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#04F6C2]/[0.05] via-transparent to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={caseIndex}
                className="relative z-10 p-8 md:p-10 md:pr-24"
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-sm font-semibold text-white">
                    {successCases[caseIndex].company}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full border border-slate-500/50 text-slate-200 glow-border backdrop-glow tag-hover">
                    {successCases[caseIndex].niche}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-6 mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-[#04F6C2] text-glow tabular-nums">
                    {successCases[caseIndex].metric}
                  </span>
                  <span className="text-white/40 text-sm pb-1 max-w-xs">
                    {successCases[caseIndex].metricLabel}
                  </span>
                </div>
                <div className="flex gap-3 max-w-2xl">
                  <Quote className="shrink-0 text-[#04F6C2]/40 mt-1" size={22} />
                  <p className="text-white/55 text-base md:text-lg leading-relaxed italic">
                    {successCases[caseIndex].quote}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
              <button
                type="button"
                className="h-10 w-10 rounded-full border border-slate-600/50 bg-black/80 text-white/60 hover:text-teal-300 hover:border-teal-500/40 flex items-center justify-center transition-colors glow-border backdrop-glow"
                aria-label="Case anterior"
                onClick={() => setCaseIndex((i) => (i - 1 + successCases.length) % successCases.length)}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="h-10 w-10 rounded-full border border-slate-600/50 bg-black/80 text-white/60 hover:text-teal-300 hover:border-teal-500/40 flex items-center justify-center transition-colors glow-border backdrop-glow"
                aria-label="Próximo case"
                onClick={() => setCaseIndex((i) => (i + 1) % successCases.length)}
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="flex justify-center gap-2 pb-6 relative z-20">
              {successCases.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir para case ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === caseIndex ? 'w-8 bg-[#04F6C2] shadow-[0_0_8px_rgba(4,246,194,0.6)]' : 'w-1.5 bg-white/20 hover:bg-white/35'}`}
                  onClick={() => setCaseIndex(i)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Services / Pillars (cartões expansíveis) ── */}
      <section
        id="serviços"
        className="relative z-10 mx-2.5 mt-24 mb-24 max-w-7xl px-6 py-16 md:py-24 lg:mx-auto lg:px-6"
      >
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-[52px] lg:text-[56px] font-bold mb-5 max-w-3xl leading-[1.08] lowercase tracking-tight">
            pilares que movem
            <br />
            o seu crescimento.
          </h2>
          <p className="text-white/40 text-lg max-w-lg leading-relaxed">
            Cada pilar é independente mas conectado. Juntos, formam o sistema completo da DOMO.
          </p>
        </div>

        <motion.div
          className="pillars-glass-panel px-5 py-10 md:px-10 md:py-12"
          style={
            {
              '--pillars-border-gradient':
                'linear-gradient(45deg, rgba(255,255,255,0), rgba(255,255,255,0.1), rgba(255,255,255,0))',
            } as React.CSSProperties
          }
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative z-10">
            <ExpandingPillarsRail items={pillarItems} openId={openPillar} onToggle={togglePillar} />

            <div className="mt-12 flex justify-center md:mt-14">
              <a
                href="#resultados"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg transition-[transform,opacity] hover:opacity-95 active:scale-[0.98] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-violet-600"
              >
                Conheça o sistema completo
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Trust / Metrics ── */}
      <section id="resultados" className="px-6 max-w-[1400px] mx-auto py-24 relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold max-w-lg leading-tight">
            Resultados que
            <br />falam por si
          </h2>
        </div>
        <ResultsMetricsVisual />
      </section>

      {/* ── Team / Founders ── */}
      <section id="time" className="relative py-32 overflow-hidden w-full z-10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">
              Quem está por trás
              <br />
              da DOMO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="group relative rounded-3xl overflow-hidden bg-[#111111] glow-card">
              <img src={img537132Eaab5Edb5D62233Cb3C786D98EPng} alt="Founder 1 — DOMO" className="w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                <h3 className="text-3xl font-bold mb-3">Founder</h3>
                <div className="space-y-1">
                  {['Gestor de Tráfego pago', 'Direct Response Marketing', 'Creative Performance'].map(
                    (role) => (
                      <p key={role} className="text-white/55 text-sm">
                        {role}
                      </p>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden bg-[#111111] glow-card md:mt-20">
              <img
                src={imgE67Ff3524Df65706353633F092Ab2421Png}
                alt="Founder 2 — DOMO"
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                <h3 className="text-2xl font-bold leading-tight mb-4">
                  Design que converte.
                  <br />
                  Em parceria com quem entende
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Desenvolvedor & UX Designer. Faço landing pages e plataformas de infoproduto com
                  foco em conversão e UX & UI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <div className="relative z-10">
        <FAQ />
      </div>

      {/* ── CTA Final ── */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div
          className="rounded-3xl border border-teal-500/40 p-8 md:p-12 glow-border backdrop-glow"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02), rgba(255,255,255,0.04))',
          }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                Pronto para escalar
                <br />
                <GradientText>seu negócio?</GradientText>
              </h2>
              <p className="text-slate-300 text-base max-w-md leading-relaxed">
                Fale com nosso time e descubra como a DOMO pode transformar seus resultados.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <GradientButton className="text-base px-8 py-4">
                Fale com a DOMO <ArrowRight size={16} />
              </GradientButton>
              <a
                href="#serviços"
                className="px-5 py-4 rounded-full border border-slate-600/60 text-slate-200 hover:bg-slate-800/60 font-semibold glow-border button-shine transition-all text-base"
              >
                Ver serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.05] text-white/30 py-8 px-6 md:px-12 text-sm flex flex-col md:flex-row justify-between items-center gap-4 mt-8 relative z-10">
        <img
          src={domoLogo}
          alt="DOMO"
          className="h-6 object-contain brightness-0 invert opacity-30"
        />
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <a href="#" className="hover:text-white/60 transition-colors">
            Condições e suporte
          </a>
          <a href="#" className="hover:text-white/60 transition-colors">
            Política de Privacidade
          </a>
        </div>
        <span className="font-light">© 2024 DOMO. Todos os direitos reservados.</span>
      </footer>
    </div>
  );
}
