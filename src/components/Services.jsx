import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Plus, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Brand Strategy',
    description: 'Posicionamento e identidade de marca que comunicam autoridade e geram reconhecimento no mercado.',
    highlight: false,
  },
  {
    title: 'Digital Marketing',
    description: 'Tráfego pago e orgânico integrados a funis de conversão otimizados para máximo ROI.',
    highlight: false,
  },
  {
    title: 'Content Development',
    description: 'Copy e conteúdo estratégico que conecta com sua audiência e impulsiona ação.',
    highlight: false,
  },
  {
    title: 'Graphic Design',
    description: 'Design visual que reforça a mensagem da marca e cria impacto imediato.',
    highlight: false,
  },
  {
    title: 'Web Design',
    description: 'Interfaces modernas de alta conversão — da landing page ao produto digital completo.',
    highlight: true,
  },
]

const floatingTags = [
  'Tráfego Pago & Direct Response',
  'Branding & Growth Strategic',
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="services"
      ref={ref}
      className="bg-[#080808] py-24 md:py-32"
      style={{ borderBottom: '1px solid rgba(139, 92, 246, 0.2)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Serviços
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-lg leading-tight">
              Porque nosso serviço{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                é diferencial
              </span>
            </h2>

            {/* Floating tags */}
            <div className="flex flex-wrap gap-3">
              {floatingTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-2xl p-7 border transition-all duration-300 cursor-pointer
                ${
                  service.highlight
                    ? 'border-purple-500/50 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-purple-900/20 col-span-1 sm:col-span-2 lg:col-span-1'
                    : 'border-white/10 bg-[#0f0f0f] hover:border-purple-500/40'
                }
              `}
              style={
                !service.highlight
                  ? {
                      boxShadow: '0 0 0 0 rgba(139, 92, 246, 0)',
                      transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                    }
                  : {}
              }
              onMouseEnter={(e) => {
                if (!service.highlight) {
                  e.currentTarget.style.boxShadow =
                    '0 0 30px rgba(139, 92, 246, 0.15)'
                }
              }}
              onMouseLeave={(e) => {
                if (!service.highlight) {
                  e.currentTarget.style.boxShadow =
                    '0 0 0 0 rgba(139, 92, 246, 0)'
                }
              }}
            >
              {/* Plus icon top-right */}
              <div
                className={`absolute top-5 right-5 w-7 h-7 rounded-full flex items-center justify-center border transition-colors duration-300
                  ${
                    service.highlight
                      ? 'border-purple-400/50 text-purple-400'
                      : 'border-white/20 text-white/40 group-hover:border-purple-400/50 group-hover:text-purple-400'
                  }
                `}
              >
                <Plus size={14} />
              </div>

              <div className="mb-6">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-lg font-bold
                    ${
                      service.highlight
                        ? 'bg-purple-500/20 text-purple-300'
                        : 'bg-white/5 text-white/50 group-hover:bg-purple-500/10 group-hover:text-purple-300'
                    }
                  `}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                <h3
                  className={`text-xl font-bold mb-3
                    ${service.highlight ? 'text-white' : 'text-white/90'}
                  `}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed
                    ${service.highlight ? 'text-purple-200/70' : 'text-gray-500'}
                  `}
                >
                  {service.description}
                </p>
              </div>

              <div
                className={`flex items-center gap-1.5 text-xs font-medium transition-colors duration-300
                  ${
                    service.highlight
                      ? 'text-purple-400'
                      : 'text-white/30 group-hover:text-green-400'
                  }
                `}
              >
                Saiba mais <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-lg shadow-green-500/20"
          >
            Quero começar meu projeto
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
