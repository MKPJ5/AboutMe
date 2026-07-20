import { motion } from 'framer-motion'
import { Link } from 'react-router'

interface LinksTypes {
  name: string
  to: string
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks: LinksTypes[] = [
    { name: 'Home', to: '/' },
    { name: 'Projects', to: '/projects' },
    { name: 'Articels', to: '/articels' },
    { name: 'Contact', to: '/contact' },
  ]

  const socialLinks: LinksTypes[] = [
    { name: 'GitHub', to: 'https://github.com/MKPJ5' },
    { name: 'LinkedIn', to: 'https://linkedin.com/in/mkpj' },
    { name: 'Telegram', to: 'https://t.me/MichaelKpj' },
    { name: 'Medium', to: 'https://medium.com/@MKPJ' },
  ]

  return (
    <footer className="border-t border-gray-300 mt-2">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2
              className="text-3xl font-bold font-cardo tracking-tight"
              style={{
                color: 'white',
              }}
            >
              MKPJ
            </h2>
            <p className="max-w-xs text-sm text-gray-400">
              Self-taught developer. Discipline and hard work — that's the
              secret of getting better.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-200 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-[#c7522a]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-200 uppercase">
              Connect
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.to}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-[#c7522a]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              © {currentYear} MKPJ. All rights reserved.
            </p>
            <motion.button
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm text-gray-500 hover:cursor-pointer transition-colors duration-200 hover:text-[#c7522a]"
            >
              <span>Back to top</span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
