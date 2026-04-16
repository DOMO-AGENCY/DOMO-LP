import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Zap } from 'lucide-react'

const tags = [
  { icon: <Code2 size={14} />, label: 'React & Next.js' },
  { icon: <Palette size={14} />, label: 'UX & UI Design' },
  { icon: <Zap size={14} />, label: 'Alta Conversão' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#080808] py-24 md:py-32"
      style={{ borderBottom: '1px solid rgba(139, 92, 246, 0.2)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Purple left border accent */}
              <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />

              <div className="ml-6 relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 aspect-[3/4]">
                {/* Photo placeholder — replace with <img> */}
                <svg
                  viewBox="0 0 300 400"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="300" height="400" fill="#111" />
                  <ellipse cx="150" cy="130" rx="48" ry="52" fill="#1f1f1f" />
                  <path
                    d="M50 400 Q70 270 150 260 Q230 270 250 400Z"
                    fill="#1a1a1a"
                  />
                  <rect width="300" height="400" fill="url(#g2)" />
                  <defs>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#080808" stopOpacity="0" />
                      <stop offset="100%" stopColor="#080808" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Replace the svg above with:
                    <img src="/photo-about.jpg" alt="About DOMO" className="w-full h-full object-cover grayscale" />
                */}
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 md:order-2"
          >
            <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Sobre
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Desenvolvedor &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                UX Designer
              </span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
              Faço landing pages e plataformas de infoproduto com foco em
              conversão e UX & UI. Cada pixel tem uma razão de existir — e essa
              razão é fazer você vender mais.
            </p>

            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Combino estratégia de negócios com design orientado a dados para
              criar experiências digitais que transformam visitantes em clientes.
              Mais de 50 projetos entregues com resultados mensuráveis.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium"
                >
                  {tag.icon}
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
