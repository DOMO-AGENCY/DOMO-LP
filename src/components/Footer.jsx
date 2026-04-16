import { ArrowUpRight, Instagram, Linkedin, Github, Mail } from 'lucide-react'

const links = {
  nav: [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Portfólio', href: '#portfolio' },
  ],
  social: [
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <Github size={18} />, href: '#', label: 'GitHub' },
    { icon: <Mail size={18} />, href: 'mailto:contato@domo.com', label: 'E-mail' },
  ],
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#080808] border-t border-white/5"
    >
      {/* CTA banner */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Pronto para{' '}
              <span className="text-green-400">alavancar</span>?
            </h3>
            <p className="text-gray-500">
              Vamos construir juntos sua presença digital de alta performance.
            </p>
          </div>
          <a
            href="mailto:contato@domo.com"
            className="group inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold px-7 py-4 rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap shadow-lg shadow-green-500/20"
          >
            Falar com DOMO
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <span className="text-2xl font-bold text-white tracking-tight">DOMO</span>
          <p className="text-xs text-gray-600 mt-1">Digital Performance Studio</p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {links.nav.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social */}
        <div className="flex items-center gap-3">
          {links.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 py-5">
        <p className="text-center text-xs text-gray-700">
          © {new Date().getFullYear()} DOMO. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
