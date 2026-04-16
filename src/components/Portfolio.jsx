import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    tag: 'Landing Page',
    description: 'Estrutura digital orientada a performance e conversão.',
    featured: true,
  },
  {
    tag: 'Infoproduto',
    description: 'Plataforma de curso online com área de membros.',
    featured: false,
  },
  {
    tag: 'Branding',
    description: 'Identidade visual completa para marca digital.',
    featured: false,
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="portfolio"
      ref={ref}
      className="bg-[#f4f4f4] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-green-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Portfólio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Projetos que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              geram resultado
            </span>
          </h2>
        </motion.div>

        {/* Featured brand */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0a] p-16 md:p-24 flex flex-col items-center justify-center min-h-[320px] shadow-2xl">
            {/* Background texture */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            {/* Purple corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl bg-purple-700/20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl bg-green-500/10" />

            <div className="relative z-10 text-center">
              {/* DOMO logo */}
              <h3
                className="text-7xl md:text-9xl font-bold tracking-tighter text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                DOMO
              </h3>
              <div className="mt-4 w-24 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto" />
              <p className="mt-4 text-gray-500 text-sm tracking-widest uppercase">
                Digital Performance Studio
              </p>
            </div>

            {/* Tag */}
            <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10">
              <span className="text-xs text-green-400 font-medium">
                Projeto em destaque
              </span>
            </div>

            {/* Arrow */}
            <button className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300">
              <ArrowUpRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Other projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                  {project.tag}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-gray-400 group-hover:text-purple-500 transition-colors"
                />
              </div>

              <div className="w-full h-32 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-xs">Preview</span>
              </div>

              <p className="text-gray-600 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
