import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#080808] flex items-center overflow-hidden"
      style={{ borderBottom: '1px solid rgba(139, 92, 246, 0.3)' }}
    >
      {/* Background grid subtle */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Purple glow top-left */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl bg-purple-600 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-purple-300 font-medium tracking-widest uppercase">
                Disponível para projetos
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              Estrutura digital{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                orientada
              </span>{' '}
              a performance
            </h1>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-10 max-w-md">
              Landing pages e plataformas de infoproduto com foco em conversão,
              UX & UI. Do conceito ao deploy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold px-7 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-lg shadow-green-500/20"
              >
                Quero alavancar meus resultados!
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 flex gap-10">
              {[
                { value: '50+', label: 'Projetos entregues' },
                { value: '3x', label: 'Média de aumento em conversão' },
                { value: '100%', label: 'Satisfação garantida' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-green-400">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-96 md:w-80 md:h-[480px]">
              {/* Decorative border */}
              <div className="absolute -inset-px rounded-2xl border border-purple-500/30" />
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border border-purple-500/15" />

              {/* Photo area */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden flex items-end justify-center">
                {/* Silhouette placeholder — replace with <img> when you have the photo */}
                <svg
                  viewBox="0 0 320 480"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="480" fill="#111" />
                  {/* Body silhouette */}
                  <ellipse cx="160" cy="145" rx="52" ry="56" fill="#1f1f1f" />
                  <path
                    d="M60 480 Q80 310 160 300 Q240 310 260 480Z"
                    fill="#1a1a1a"
                  />
                  {/* Grayscale overlay */}
                  <rect width="320" height="480" fill="url(#g)" />
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#080808" stopOpacity="0" />
                      <stop offset="100%" stopColor="#080808" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Replace the svg above with:
                    <img src="/photo.jpg" alt="DOMO" className="w-full h-full object-cover object-top grayscale" />
                */}
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#111] border border-purple-500/30 rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs text-gray-400">Stack</p>
                <p className="text-sm font-semibold text-white">React · Tailwind · Framer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
