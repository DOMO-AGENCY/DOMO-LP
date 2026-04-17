import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Menu, X, Zap, Target, Layers, Palette, Globe } from 'lucide-react';

import svgPaths from "../imports/svg-mu7l7uo8e2";
import imgFc78C296A14299F1Ce43E4D870864467Png from "figma:asset/17e3af49d4dca2c2e6ae67f7b8dcaac544b07fbd.png";
import img744Ba6E72Fd5A53240F88Bc56E408F37Png from "figma:asset/57b8573c382df4f3fbd9e5d942f46543e4a6c2df.png";
import img19C6320C2C32015E83422648F5B2Ea45Png from "figma:asset/52a025ce1982197d4382fee1f8ac7d0174e62a5d.png";
import imgA8A61A4B49781705Ba0C8D439Ac7A76APng from "figma:asset/8e2c77f8aa9847c01c55188355660174262fc09a.png";
import img537132Eaab5Edb5D62233Cb3C786D98EPng from "figma:asset/019e47aa7772ec51ecb2ec54df665c769e86ef9a.png";
import img17F0E4Acbc2683D495817279Ce27266FPng from "figma:asset/c4f11933230ef64f90a8fcd8dd98cf2aee33f2c4.png";
import img2896Ee2403Bedeb94466403562C28AbePng from "figma:asset/cc5aa673779d878eaa018e1064d0fbd437c925a7.png";
import imgE67Ff3524Df65706353633F092Ab2421Png from "figma:asset/0c73e0c69ae8827040270d16403aa279184fc2bc.png";
import { imgFrame, imgVector, imgFrame1, imgVector1, imgFrame2, imgVector2, imgFrame3, imgVector3, imgBackground, imgBackground1 } from "../imports/svg-mmmmg";

const GradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`text-[#04F6C2] ${className}`}>
    {children}
  </span>
);

const GradientButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <button className={`bg-[#04F6C2] text-[#08090d] font-semibold rounded-full px-6 py-3 text-base hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 ${className}`}>
    {children}
  </button>
);

const OutlineButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <button className={`border border-white/20 text-white font-medium rounded-full px-6 py-3 text-base hover:bg-white/5 active:scale-95 transition-all flex items-center gap-2 ${className}`}>
    {children}
  </button>
);

const ServiceCard = ({
  number,
  title,
  description,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="group border border-white/[0.08] rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300 cursor-default flex flex-col">
    <div className="flex justify-between items-start mb-8">
      <span className="text-xs font-mono text-white/20 tracking-[0.2em]">{number}</span>
      <div className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-white/30 group-hover:border-white/20 group-hover:text-white/50 transition-all">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-white/40 text-sm leading-relaxed flex-1">{description}</p>
    <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-white/30 group-hover:text-white/60 transition-colors">
      Saiba mais <ArrowRight size={12} />
    </div>
  </div>
);

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "Como a DOMO garante o crescimento previsível?",
      a: "Utilizamos uma abordagem orientada por dados, otimizando cada campanha com base em métricas reais, sem achismos.",
    },
    {
      q: "Quais são os serviços inclusos no sistema?",
      a: "Nosso sistema integra tráfego pago, desenvolvimento de conteúdo, design gráfico, web design e estratégia de marca.",
    },
    {
      q: "Vocês trabalham com quais nichos?",
      a: "Temos vasta experiência em setores de ponta, focados especialmente em empreendedores digitais e infoprodutores.",
    },
    {
      q: "Como funciona a entrega de relatórios?",
      a: "Fornecemos relatórios transparentes periodicamente, sem taxas ocultas, focados nos KPIs que importam para o seu negócio.",
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
            <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
              <p className="text-white/40 pr-10 text-base leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      number: "01",
      title: "Brand Strategy",
      description: "Construímos identidades que posicionam marcas com autoridade no mercado digital.",
      icon: <Target size={14} />,
    },
    {
      number: "02",
      title: "Digital Marketing",
      description: "Tráfego pago com foco em performance e crescimento mensurável a cada ciclo.",
      icon: <Zap size={14} />,
    },
    {
      number: "03",
      title: "Content Development",
      description: "Conteúdo estratégico que educa, engaja e converte em cada etapa do funil.",
      icon: <Layers size={14} />,
    },
    {
      number: "04",
      title: "Graphic Design",
      description: "Design visual que comunica a essência da sua marca com precisão e impacto.",
      icon: <Palette size={14} />,
    },
    {
      number: "05",
      title: "Web Design",
      description: "Plataformas e landing pages desenvolvidas com foco em conversão e UX.",
      icon: <Globe size={14} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#08090d] font-['Inter',sans-serif] text-white overflow-x-hidden selection:bg-[#04F6C2]/30 selection:text-white">
      {/* Required imports (hidden) */}
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
        <svg><path d={svgPaths.p30b65a00} /></svg>
      </div>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05] bg-[#08090d]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <img
            src={imgFc78C296A14299F1Ce43E4D870864467Png}
            alt="DOMO"
            className="h-8 object-contain brightness-0 invert justify-self-start"
          />

          <div className="hidden md:flex items-center justify-center gap-8">
            {["Serviços", "Resultados", "Time", "FAQ"].map((item) => (
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
              className="md:hidden text-white/50 hover:text-white p-1"
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
        <div className="fixed top-[65px] left-0 right-0 z-40 bg-[#08090d] border-b border-white/[0.08] px-6 py-6 flex flex-col gap-1 md:hidden">
          {["Serviços", "Resultados", "Time", "FAQ"].map((item) => (
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
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[900px] h-[700px] rounded-full bg-[#04F6C2]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08090d] to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold leading-[1.02] tracking-tight mb-8 max-w-5xl">
            Estrutura que<br />
            <GradientText>gera resultados.</GradientText>
          </h1>

          <p className="text-lg md:text-xl text-white/45 max-w-2xl leading-relaxed mb-12 font-light">
            A DOMO é um sistema orientado por dados que une tráfego pago, estratégia e design de produto.
            Criando crescimento previsível para empreendedores e infoprodutores.
          </p>

          <div className="flex flex-wrap gap-4">
            <GradientButton className="text-base px-8 py-4">
              Começar agora <ArrowRight size={16} />
            </GradientButton>
            <OutlineButton className="text-base px-8 py-4">
              Ver como funciona
            </OutlineButton>
          </div>
        </div>
      </section>

      {/* ── Bento + Logos ── */}
      <section className="px-6 max-w-7xl mx-auto mb-32 flex flex-col gap-10">
        <img
          src={img744Ba6E72Fd5A53240F88Bc56E408F37Png}
          alt="Funcionalidades e diferenciais DOMO"
          className="w-full object-contain rounded-2xl"
        />
        <div className="flex items-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#04F6C2]/25" />
          <img
            src={img19C6320C2C32015E83422648F5B2Ea45Png}
            alt="Clientes e parceiros"
            className="max-w-3xl w-full object-contain opacity-40"
          />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#04F6C2]/25" />
        </div>
      </section>

      {/* ── Services / Pillars ── */}
      <section id="serviços" className="px-6 max-w-7xl mx-auto py-32">
        <div className="mb-16">
          <h2 className="text-4xl md:text-[56px] font-bold mb-5 max-w-xl leading-tight">
            Pilares que movem<br />o seu crescimento
          </h2>
          <p className="text-white/40 text-lg max-w-lg leading-relaxed">
            Cada pilar é independente mas conectado. Juntos, formam o sistema completo da DOMO.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <ServiceCard key={s.number} {...s} />
          ))}
        </div>

        <div className="mt-14">
          <GradientButton className="text-base px-8 py-4">
            Conheça o sistema completo <ArrowRight size={16} />
          </GradientButton>
        </div>
      </section>

      {/* ── Trust / Metrics ── */}
      <section id="resultados" className="px-6 max-w-[1400px] mx-auto py-24">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold max-w-lg leading-tight">
            Resultados que<br />falam por si
          </h2>
        </div>
        <img
          src={imgA8A61A4B49781705Ba0C8D439Ac7A76APng}
          alt="Métricas e confiança — dados reais, relatórios transparentes"
          className="w-full object-cover rounded-3xl"
        />
      </section>

      {/* ── Journey / Motto ── */}
      <section className="px-6 py-32 max-w-5xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/25 mb-6">
          Metodologia
        </p>
        <h2 className="text-4xl md:text-[64px] font-bold tracking-tight mb-6 leading-[1.05]">
          Do diagnóstico<br />
          <GradientText>à escala.</GradientText>
        </h2>
        <p className="text-white/40 text-xl max-w-xl mx-auto leading-relaxed mb-14">
          União do design e estratégia — o lema da DOMO.
        </p>
        <div className="flex justify-center">
          <GradientButton className="text-base px-8 py-4">
            Fale com nosso time <ArrowRight size={16} />
          </GradientButton>
        </div>
      </section>

      {/* ── Team / Founders ── */}
      <section id="time" className="relative py-32 overflow-hidden w-full">
        {/* Subtle texture layers */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.04]">
          <img src={img17F0E4Acbc2683D495817279Ce27266FPng} alt="" className="w-full object-cover scale-110" />
          <img src={img2896Ee2403Bedeb94466403562C28AbePng} alt="" className="w-full object-cover scale-110 -mt-48" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">
              Quem está por trás<br />da DOMO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Founder 1 */}
            <div className="group relative border border-white/[0.08] rounded-3xl overflow-hidden bg-white/[0.02]">
              <img
                src={img537132Eaab5Edb5D62233Cb3C786D98EPng}
                alt="Founder 1 — DOMO"
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                <h3 className="text-3xl font-bold mb-3">Founder</h3>
                <div className="space-y-1">
                  {["Gestor de Tráfego pago", "Direct Response Marketing", "Creative Performance"].map((role) => (
                    <p key={role} className="text-white/55 text-sm">{role}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="group relative border border-white/[0.08] rounded-3xl overflow-hidden bg-white/[0.02] md:mt-20">
              <img
                src={imgE67Ff3524Df65706353633F092Ab2421Png}
                alt="Founder 2 — DOMO"
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                <h3 className="text-2xl font-bold leading-tight mb-4">
                  Design que converte.<br />Em parceria com quem entende
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Desenvolvedor & UX Designer. Faço landing pages e plataformas de infoproduto com foco em conversão e UX & UI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── CTA Final ── */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="relative border border-white/[0.08] rounded-3xl p-12 md:p-20 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[#04F6C2]/[0.06] pointer-events-none" />
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-64 h-px bg-[#04F6C2]/60" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Pronto para escalar<br />
              <GradientText>seu negócio?</GradientText>
            </h2>
            <p className="text-white/40 text-lg mb-10 max-w-md mx-auto">
              Fale com nosso time e descubra como a DOMO pode transformar seus resultados.
            </p>
            <div className="flex justify-center">
              <GradientButton className="text-base px-10 py-4">
                Fale com a DOMO <ArrowRight size={16} />
              </GradientButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.05] text-white/30 py-8 px-6 md:px-12 text-sm flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
        <img
          src={imgFc78C296A14299F1Ce43E4D870864467Png}
          alt="DOMO"
          className="h-6 object-contain brightness-0 invert opacity-30"
        />
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <a href="#" className="hover:text-white/60 transition-colors">Condições e suporte</a>
          <a href="#" className="hover:text-white/60 transition-colors">Política de Privacidade</a>
        </div>
        <span className="font-light">© 2024 DOMO. Todos os direitos reservados.</span>
      </footer>
    </div>
  );
}
