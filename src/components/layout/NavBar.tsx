import { useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import * as types from './NavBar.types'

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  const navLinks: types.NavLinkItem[] = [
    { to: '/projects', label: 'Projects' },
    { to: '/articels', label: 'Articels' },
    { to: '/Contact', label: 'Contact' },
  ]

  const animations: types.AnimationVariants = {
    sidebar: {
      closed: {
        x: '100%',
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      },
      open: {
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 40,
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    },
    overlay: {
      closed: {
        opacity: 0,
        transition: {
          duration: 0.2,
        },
      },
      open: {
        opacity: 1,
        transition: {
          duration: 0.2,
        },
      },
    },
    link: {
      closed: {
        x: 50,
        opacity: 0,
      },
      open: {
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 24,
        },
      },
    },
  }

  return (
    <>
      {/* Main Navbar */}
      <nav className="flex items-center justify-between border-b-2 border-gray-500 px-4 py-2 sm:px-6 md:justify-end md:space-x-4 md:px-8">
        {/* Logo */}
        <span className="font-cardo text-[#FFFFFF] my-0 text-3xl sm:text-4xl md:mr-auto md:text-5xl">
          MKPJ
        </span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          {navLinks.map((link: types.NavLinkItem) => {
            const isActive = location.pathname === link.to
            return (
              <NavLink
                key={link.to}
                className={({
                  isActive: linkActive,
                }: types.NavLinkClassProps) =>
                  `hover:text-primary text-white relative px-1 py-2 transition-colors ${
                    linkActive ? 'text-primary' : ''
                  }`
                }
                to={link.to}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="bg-primary absolute right-0 bottom-0 left-0 h-0.5"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </NavLink>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isSidebarOpen ? (
              <motion.path
                key="close"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <motion.path
                key="menu"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </motion.button>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={animations.overlay}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              variants={animations.sidebar}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
                <span className="font-cardo text-primary text-2xl">MKPJ</span>
                <motion.button
                  onClick={() => setIsSidebarOpen(false)}
                  className="rounded-lg p-2 transition-colors hover:bg-gray-100"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              <div className="flex flex-col space-y-2 px-4 py-6">
                {navLinks.map((link: types.NavLinkItem) => (
                  <motion.div key={link.to} variants={animations.link}>
                    <NavLink
                      className={({ isActive }: types.NavLinkClassProps) =>
                        `block rounded-lg px-4 py-3 text-lg transition-colors hover:bg-gray-100 ${
                          isActive ? 'text-primary bg-gray-50 font-medium' : ''
                        }`
                      }
                      to={link.to}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar
