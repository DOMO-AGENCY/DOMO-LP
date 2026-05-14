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
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Mail,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import svgPaths from '../imports/svg-mu7l7uo8e2';
import domoLogo from '../assets/domo.svg';
import imgVicoSerrano from '../assets/c4f11933230ef64f90a8fcd8dd98cf2aee33f2c4.png';
import imgRicardoMerces from '../assets/cc5aa673779d878eaa018e1064d0fbd437c925a7.png';
import caseVertexEducacaoLogo from '../assets/case-vertex-educacao.svg';
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
  <span className={`text-accent text-glow ${className}`}>{children}</span>
);

const GradientButton = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    className={`bg-brand text-brand-foreground font-semibold rounded-full px-6 py-3 text-base active:scale-95 flex items-center gap-2 glow-brand-btn button-shine hover:bg-brand-hover transition-colors ${className}`}
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
    className={`border border-foreground/20 text-foreground font-medium rounded-full px-6 py-3 text-base hover:bg-foreground/5 active:scale-95 transition-all flex items-center gap-2 ${className}`}
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
    <div className="flex flex-col lg:flex-row lg:items-start gap-3 lg:gap-4 items-stretch">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <button
            key={item.id}
            type="button"
            aria-expanded={open}
            onClick={() => onToggle(item.id)}
            className={`group relative flex flex-1 flex-col text-left rounded-[1.75rem] md:rounded-[2rem] border bg-gradient-to-b from-white/[0.08] to-[#0C0A09] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden transition-[min-height,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9EA08F]/50 ${
              open
                ? 'min-h-[300px] sm:min-h-[340px] lg:min-h-[400px] border-[#9EA08F]/45 shadow-[0_0_48px_rgba(158,160,143,0.18)]'
                : `min-h-[190px] sm:min-h-[210px] lg:min-h-[230px] ${item.accentBorder ?? 'border-white/10'}`
            }`}
          >
            <div
              className="pointer-events-none absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-hover shadow-[0_0_20px_rgba(212,242,104,0.35)] ring-2 ring-[#0C0A09]"
              aria-hidden
            >
              {open ? (
                <Minus className="text-brand-foreground" size={22} strokeWidth={2.2} />
              ) : (
                <Plus className="text-brand-foreground" size={22} strokeWidth={2.2} />
              )}
            </div>

            <div
              className={`grid min-h-0 transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? 'flex-1 grid-rows-[1fr]' : 'flex-none grid-rows-[0fr]'
              }`}
            >
              <div className="min-h-0 overflow-hidden px-5 pt-16">
                <div className="flex items-center gap-2 pb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-white/45">
                  <span>{item.id}</span>
                  <span className="text-white/70">{item.title}</span>
                </div>
                <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/55">
                  {item.expandedDetail}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-[#D4F268]">
                  Saiba mais <ArrowRight size={12} />
                </div>
              </div>
            </div>

            <div className="mt-auto flex items-end justify-between gap-3 border-t border-white/10 px-5 py-5">
              <span className="text-base font-bold lowercase leading-tight tracking-tight text-white md:text-lg">
                {item.label}
              </span>
              <span className="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#9EA08F]/35 bg-[#9EA08F]/15 text-[#D4F268]">
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
    <div className="rounded-3xl border border-white/10 bg-[#0C0A09] glow-card p-5 md:p-8 lg:p-10 text-white">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        <motion.div
          className="lg:col-span-8 flex flex-col min-h-0 md:min-h-[260px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">Performance hub</p>
            <p className="text-sm font-semibold text-white">Receita atribuída · últimos 30 dias</p>
          </div>

          <div className="flex-1 rounded-2xl border border-white/10 bg-[#0C0A09] p-4 md:p-5 flex flex-col">
            <div className="relative h-32 md:h-36 mb-4">
              <svg
                className="absolute inset-0 w-full h-full text-accent/25"
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
                    <stop offset="0%" stopColor="#9EA08F" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#D4F268" stopOpacity="1" />
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

            <div className="mt-3 flex flex-wrap gap-4 text-[11px] font-mono text-white/45">
              <span>Sem 1</span>
              <span>Sem 2</span>
              <span>Sem 3</span>
              <span>Sem 4</span>
              <span className="text-[#D4F268]">Projeção</span>
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
          <div className="rounded-2xl border border-white/10 bg-[#0C0A09] p-4 flex flex-col gap-4 flex-1">
            {funnelSteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
              >
                <div className="flex justify-between items-baseline gap-2 mb-1.5">
                  <span className="text-sm text-white font-medium">{step.label}</span>
                  <span className="text-sm font-semibold text-[#9EA08F] tabular-nums">{step.value}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent/50 to-brand"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${step.widthPct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <p className="text-[11px] text-white/45 mt-1">{step.hint}</p>
                {i < funnelSteps.length - 1 && (
                  <div className="flex justify-center py-1 text-white/25">
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
            className="rounded-2xl border border-white/10 bg-[#0C0A09] px-4 py-4"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * i, duration: 0.4 }}
          >
            <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1">{k.label}</p>
            <p className="text-xl md:text-2xl font-bold text-white tabular-nums">{k.val}</p>
            <p className="text-[11px] text-white/45 mt-1 leading-snug">{k.sub}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 rounded-2xl border border-white/10 bg-[#0C0A09] overflow-hidden"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-white/10 bg-[#0C0A09]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#9EA08F]" />
            <span className="text-sm font-medium text-white">Relatório transparente</span>
          </div>
          <span className="text-[11px] font-mono text-white/45">Export · PDF · Sheets</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm min-w-[520px]">
            <thead>
              <tr className="text-[10px] uppercase tracking-wider text-white/50 border-b border-white/10">
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
                  className="border-b border-white/[0.08] last:border-0 text-white/60"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.35 }}
                >
                  <td className="px-4 py-3.5 font-medium text-white">{row.camp}</td>
                  <td className="px-4 py-3.5 tabular-nums">{row.spend}</td>
                  <td className="px-4 py-3.5 tabular-nums">{row.cpa}</td>
                  <td className="px-4 py-3.5 tabular-nums text-[#D4F268]">{row.conv}</td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                        row.status === 'No alvo'
                          ? 'bg-[#9EA08F]/20 text-[#E6E3D6] border border-[#9EA08F]/35'
                          : 'bg-[#D4F268]/25 text-[#0C0A09] border border-[#D4F268]/40'
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

      <p className="mt-6 text-center text-xs text-white/45 max-w-2xl mx-auto leading-relaxed">
        Métricas e confiança — dados reais, relatórios transparentes. Visualização ilustrativa do tipo de
        painéis que a DOMO estrutura para growth e operações.
      </p>
    </div>
  );
}

/* ── Success cases ── */
const successCases: {
  company: string;
  niche: string;
  metric: string;
  metricLabel: string;
  quote: string;
  stripLogo?: string;
}[] = [
  {
    company: 'Vertex Educação',
    niche: 'Infoprodutos',
    stripLogo: caseVertexEducacaoLogo,
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
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Perguntas frequentes</h2>
      </div>
      <div>
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-border">
            <button
              className="w-full text-left font-medium text-lg md:text-xl flex justify-between items-center py-6 text-muted-foreground hover:text-foreground focus:outline-none transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <ChevronDown
                className={`flex-shrink-0 ml-6 text-muted-foreground transform transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                size={18}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 pb-6' : 'max-h-0'}`}
            >
              <p className="text-muted-foreground pr-10 text-base leading-relaxed">{faq.a}</p>
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
      accentBorder: 'border-[#9EA08F]/25',
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
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-accent/25 selection:text-foreground relative">
      <div className="ambient-light pointer-events-none" aria-hidden />
      <div className="ambient-light-2 pointer-events-none" aria-hidden />
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
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <img
            src={domoLogo}
            alt="DOMO"
            className="h-8 object-contain justify-self-start opacity-90"
          />

          <div className="hidden md:flex items-center justify-center gap-8">
            {['Serviços', 'Resultados', 'Time', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
              className="md:hidden text-muted-foreground hover:text-foreground p-1 transition-colors"
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
        <div className="fixed top-[65px] left-0 right-0 z-40 bg-background/95 border-b border-border px-6 py-6 flex flex-col gap-1 md:hidden backdrop-blur-xl">
          {['Serviços', 'Resultados', 'Time', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-foreground py-3 text-lg border-b border-border/80 last:border-0"
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
          {/* Textura nnnoise + iluminação sage (Green Museum) */}
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
                    lightingColor="#9EA08F"
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
              <rect width="700" height="700" fill="#9EA08F" filter="url(#hero-nnnoise-filter)" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold leading-[1.02] tracking-tight mb-8 max-w-5xl">
            Estrutura que
            <br />
            <GradientText>gera resultados.</GradientText>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12 font-light">
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
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">
              Produto orientado a dados
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight">
              Design impulsiona crescimento com{' '}
              <GradientText>dashboards</GradientText> que o time usa todos os dias.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
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
                  className="flex items-start gap-3 text-muted-foreground text-sm md:text-base"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 * i, duration: 0.4 }}
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl icon-glow text-accent">
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
            <div className="rounded-[32px] p-[2px] electric-card overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
              <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[30px] bg-[#0C0A09] p-6 ring-1 ring-white/10 md:p-8 text-white">
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/45">
                    Domo / Overview
                  </span>
                </div>

                <div className="mb-6 w-full">
                  <div className="mb-2 flex items-center justify-between text-[10px] text-white/50">
                    <span className="font-medium uppercase tracking-wider">Receita atribuída</span>
                    <span className="font-mono text-[#D4F268]">+24% vs. período</span>
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
                          <stop offset="0%" stopColor="#9EA08F" stopOpacity="0.5" />
                          <stop offset="50%" stopColor="#D4F268" stopOpacity="1" />
                          <stop offset="100%" stopColor="#9EA08F" stopOpacity="0.45" />
                        </linearGradient>
                        <linearGradient id="domo-dash-area" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#9EA08F" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#9EA08F" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {[12, 24, 36, 48].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          y1={y}
                          x2="280"
                          y2={y}
                          stroke="rgba(255,255,255,0.08)"
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
                  <div className="mt-2 flex justify-between font-mono text-[10px] text-white/45">
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
                      className="rounded-xl border border-white/10 bg-[#0C0A09] px-3 py-3 glow-border md:px-4 md:py-4"
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: k.delay, duration: 0.35 }}
                    >
                      <p className="mb-1 text-[10px] uppercase tracking-wider text-white/50">{k.label}</p>
                      <p className="text-lg font-semibold tabular-nums text-white md:text-xl">{k.val}</p>
                    </motion.div>
                  ))}
                </div>

                <p className="mt-2 text-center font-mono text-[11px] text-white/45">
                  Últimos 7 dias · atualizado em tempo real
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full border-t border-stone-300/50 pt-12">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Cases com marcas reais
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-5 md:gap-x-12 md:gap-y-6">
            {successCases.map((c) =>
              c.stripLogo ? (
                <img
                  key={c.company}
                  src={c.stripLogo}
                  alt={c.company}
                  className="h-9 w-auto max-w-[min(200px,42vw)] object-contain object-center opacity-90 md:h-10"
                />
              ) : (
                <span
                  key={c.company}
                  className="text-sm md:text-[15px] font-medium text-foreground/45 tracking-tight md:tracking-wide"
                >
                  {c.company}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Cases carousel */}
        <motion.div
          id="cases"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3">
                Cases
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-xl">
                Aprovado por diversos <GradientText>cases de sucesso</GradientText>
              </h2>
            </div>
            <p className="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
              Marcas reais, métricas reais. Cada projeto reforça o mesmo sistema: estratégia, design
              e performance falando a mesma língua.
            </p>
          </div>

          <div className="relative rounded-2xl bg-[#0C0A09] border border-white/10 glow-card overflow-hidden min-h-[280px] md:min-h-[240px] text-white">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#9EA08F]/[0.12] via-transparent to-transparent" />
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
                  <span className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/60 glow-border backdrop-glow tag-hover">
                    {successCases[caseIndex].niche}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-6 mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-[#D4F268] text-glow tabular-nums">
                    {successCases[caseIndex].metric}
                  </span>
                  <span className="text-white/55 text-sm pb-1 max-w-xs">
                    {successCases[caseIndex].metricLabel}
                  </span>
                </div>
                <div className="flex gap-3 max-w-2xl">
                  <Quote className="shrink-0 text-[#9EA08F]/70 mt-1" size={22} />
                  <p className="text-white/65 text-base md:text-lg leading-relaxed italic">
                    {successCases[caseIndex].quote}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
              <button
                type="button"
                className="h-10 w-10 rounded-full border border-white/15 bg-[#141210] text-white/60 hover:text-[#D4F268] hover:border-[#9EA08F]/40 flex items-center justify-center transition-colors glow-border backdrop-glow"
                aria-label="Case anterior"
                onClick={() => setCaseIndex((i) => (i - 1 + successCases.length) % successCases.length)}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="h-10 w-10 rounded-full border border-white/15 bg-[#141210] text-white/60 hover:text-[#D4F268] hover:border-[#9EA08F]/40 flex items-center justify-center transition-colors glow-border backdrop-glow"
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
                  className={`h-1.5 rounded-full transition-all ${i === caseIndex ? 'w-8 bg-brand shadow-[0_0_12px_rgba(212,242,104,0.55)]' : 'w-1.5 bg-white/20 hover:bg-white/35'}`}
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
          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            Cada pilar é independente mas conectado. Juntos, formam o sistema completo da DOMO.
          </p>
        </div>

        <motion.div
          className="pillars-glass-panel px-5 py-10 md:px-10 md:py-12"
          style={
            {
              '--pillars-border-gradient':
                'linear-gradient(45deg, rgba(255,255,255,0), rgba(158,160,143,0.4), rgba(255,255,255,0))',
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
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-brand-foreground shadow-lg transition-[transform,opacity] hover:opacity-95 active:scale-[0.98] bg-gradient-to-r from-brand to-brand-hover glow-brand-btn"
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

      {/* ── Time: Vico (destaque) + Ricardo, lado a lado · logos de fundo ── */}
      <section
        id="time"
        className="relative py-24 md:py-32 overflow-hidden w-full z-10 bg-background-alt/40 border-t border-border/50"
      >
        <div
          className="founders-logo-field mix-blend-multiply"
          style={
            {
              backgroundImage: `url(${domoLogo})`,
              backgroundSize: 'min(38vw, 280px) auto',
            } as React.CSSProperties
          }
          aria-hidden
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">
              Quem está por trás
              <br />
              da DOMO
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Fundador e time de produto — tráfego, criativo e experiência no mesmo sistema.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Vico — coluna maior, hierarquia visual */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="group relative flex-1 min-h-[min(78vh,760px)] lg:min-h-[680px] rounded-3xl overflow-hidden bg-card border border-accent/25 shadow-[0_24px_80px_-20px_rgba(158,160,143,0.35)] ring-1 ring-accent/20">
                <img
                  src={imgVicoSerrano}
                  alt="Vico Serrano — fundador e gestor de tráfego da DOMO"
                  className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"
                  aria-hidden
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 bg-gradient-to-t from-black/95 via-black/55 to-transparent">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand mb-2">
                    Fundador · Tráfego & performance
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">Vico Serrano</h3>
                  <div className="space-y-1.5">
                    {['Gestor de tráfego pago', 'Direct response marketing', 'Creative performance'].map((role) => (
                      <p key={role} className="text-white/90 text-sm md:text-base">
                        {role}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Ricardo — coluna menor */}
            <div className="lg:col-span-5 flex flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3 lg:pt-1">
                Produto & experiência
              </p>
              <div className="group relative flex-1 min-h-[min(62vh,560px)] lg:min-h-[620px] rounded-3xl overflow-hidden bg-card border border-border glow-card">
                <img
                  src={imgRicardoMerces}
                  alt="Ricardo Mercês — UX Engineer na DOMO"
                  className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"
                  aria-hidden
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/95 via-black/55 to-transparent">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-2">
                    UX Engineer
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Ricardo Mercês</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Landing pages e plataformas de infoproduto com foco em conversão, performance técnica e
                    UX/UI — com o tráfego e as métricas do dia a dia.
                  </p>
                </div>
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
          className="rounded-3xl border border-border p-8 md:p-12 glow-border backdrop-glow bg-gradient-to-br from-card via-background-alt to-card"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                Pronto para escalar
                <br />
                <GradientText>seu negócio?</GradientText>
              </h2>
              <p className="text-muted-foreground text-base max-w-md leading-relaxed">
                Fale com nosso time e descubra como a DOMO pode transformar seus resultados.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <GradientButton className="text-base px-8 py-4">
                Fale com a DOMO <ArrowRight size={16} />
              </GradientButton>
              <a
                href="#serviços"
                className="px-5 py-4 rounded-full border border-border text-foreground hover:bg-foreground/5 font-semibold glow-border button-shine transition-all text-base"
              >
                Ver serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter (fundo stone-950 / #0C0A09) ── */}
      <section
        className="relative z-10 py-24 px-6 md:px-12 border-t border-white/10 bg-[#0C0A09]"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(158,160,143,0.12), transparent 55%)',
          }}
        />
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E6E3D6]/45 mb-5">
            Newsletter
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-light text-[#E6E3D6] leading-[1.15] tracking-tight mb-6">
            A carta DOMO
          </h2>
          <p className="text-[#E6E3D6]/75 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
            Receba insights semanais sobre aquisição, criativos, landing pages e métricas — e avisos de
            materiais exclusivos para quem acompanha o nosso trabalho.
          </p>
          <form
            className="flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:items-stretch"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email para newsletter
            </label>
            <div className="relative flex-1">
              <Mail
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#E6E3D6]/35"
                aria-hidden
              />
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="O seu email"
                className="h-12 w-full rounded-full border border-white/15 bg-white/[0.06] pl-11 pr-4 text-sm text-[#E6E3D6] placeholder:text-[#E6E3D6]/35 outline-none ring-brand/30 transition-[border,box-shadow] focus:border-brand/50 focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="h-12 shrink-0 rounded-full bg-brand px-8 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-95 active:scale-[0.98] glow-brand-btn"
            >
              Inscrever-me
            </button>
          </form>
          <p className="mt-16 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E6E3D6]/35">
            Apoio de parceiros e comunidade
          </p>
          <p className="mt-3 max-w-md text-xs text-[#E6E3D6]/45 leading-relaxed">
            Marcas e profissionais com os quais cruzamos caminho em projetos, eventos e conteúdo.
          </p>
        </div>
      </section>

      {/* ── Footer (layout museum / multi-coluna) ── */}
      <footer className="bg-stone-950 text-stone-400 relative overflow-hidden font-sans border-t border-stone-900">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(158,160,143,0.12), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(212,242,104,0.06), transparent 50%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 py-14 md:py-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between pb-12 border-b border-stone-800/90">
            <div className="max-w-md">
              <img src={domoLogo} alt="DOMO" className="h-8 object-contain brightness-0 invert opacity-90" />
              <p className="mt-4 text-sm text-stone-500 leading-relaxed">
                Sistema de growth que alinha estratégia, design e performance — com dados no centro
                de cada decisão.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { href: '#', label: 'Instagram', icon: Instagram },
                { href: '#', label: 'X (Twitter)', icon: Twitter },
                { href: '#', label: 'YouTube', icon: Youtube },
                { href: '#', label: 'Facebook', icon: Facebook },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-800 bg-stone-900/80 text-stone-400 transition-colors hover:border-stone-600 hover:bg-stone-800 hover:text-stone-100"
                >
                  <Icon size={18} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-stone-500">
            <span>© {new Date().getFullYear()} DOMO. Todos os direitos reservados.</span>
            <span className="text-stone-600">Brasil · Growth & performance</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
