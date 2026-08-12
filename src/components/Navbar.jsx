'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Terminal,
  FolderGit2,
  Code2,
  User,
  Mail,
  Menu,
  X,
  ChevronRight,
  Github,
  Sun,
  Moon,
  Sparkles,
} from 'lucide-react'

const NAV_ITEMS = [
  {
    label: 'index.jsx',
    href: '#hero',
    icon: Code2,
    color: 'text-blue-500 dark:text-blue-400',
    glow: 'rgba(59, 130, 246, 0.4)',
    badgeBg: 'bg-blue-500/10 dark:bg-blue-400/15',
  },
  {
    label: 'projects.json',
    href: '#projects',
    icon: FolderGit2,
    color: 'text-amber-500 dark:text-yellow-400',
    glow: 'rgba(234, 179, 8, 0.4)',
    badgeBg: 'bg-amber-500/10 dark:bg-yellow-400/15',
  },
  {
    label: 'about.md',
    href: '#about',
    icon: User,
    color: 'text-emerald-500 dark:text-green-400',
    glow: 'rgba(34, 197, 94, 0.4)',
    badgeBg: 'bg-emerald-500/10 dark:bg-green-400/15',
  },
  {
    label: 'contact.env',
    href: '#contact',
    icon: Mail,
    color: 'text-purple-500 dark:text-purple-400',
    glow: 'rgba(168, 85, 247, 0.4)',
    badgeBg: 'bg-purple-500/10 dark:bg-purple-400/15',
  },
]

export default function WorkspaceNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('index.jsx')
  const [hoveredTab, setHoveredTab] = useState(null)
  const [isDark, setIsDark] = useState(true)

  /* ===============================
     THEME INITIALIZATION
  =============================== */
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  /* ===============================
     SCROLL & OBSERVER EFFECT
  =============================== */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = `#${entry.target.id}`
            const activeItem = NAV_ITEMS.find((item) => item.href === targetId)
            if (activeItem) setActive(activeItem.label)
          }
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* FLOATING PILL NAVBAR CONTAINER */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className={`
          pointer-events-auto w-full max-w-5xl rounded-full p-1.5 md:p-2
          backdrop-blur-xl transition-all duration-300 font-mono text-sm
          border shadow-lg
          ${
            scrolled
              ? 'bg-white/85 dark:bg-[#0d1117]/85 border-blue-500/30 dark:border-blue-400/20 shadow-[0_12px_40px_-10px_rgba(59,130,246,0.15)] dark:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.6)]'
              : 'bg-white/70 dark:bg-[#0d1117]/70 border-gray-200/80 dark:border-gray-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)]'
          }
        `}
      >
        <div className="flex items-center justify-between px-2 md:px-4 h-11">
          {/* BRAND LOGO */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 select-none cursor-pointer group py-1 px-2.5 rounded-full hover:bg-gray-100/60 dark:hover:bg-[#161b22]/60 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <div className="text-gray-600 dark:text-gray-300 text-xs md:text-sm font-semibold tracking-tight">
              <span className="text-blue-600 dark:text-blue-400 font-bold">&lt;</span>
              <span className="text-gray-900 dark:text-gray-100 font-bold">PratamaBevan</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold"> /&gt;</span>
            </div>
          </motion.a>

          {/* DESKTOP NAV DOCK WITH GLIDING SPRING HOVER PILL */}
          <nav
            onMouseLeave={() => setHoveredTab(null)}
            className="hidden md:flex items-center gap-1 bg-gray-100/70 dark:bg-[#161b22]/80 p-1 rounded-full border border-gray-200/60 dark:border-white/5 relative"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.label
              const isHovered = hoveredTab === item.label
              const Icon = item.icon

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredTab(item.label)}
                  className={`
                    relative flex items-center gap-2 px-3.5 py-1.5 rounded-full
                    text-xs font-mono font-medium transition-colors select-none z-10
                    ${
                      isActive
                        ? 'text-gray-900 dark:text-gray-100 font-semibold'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }
                  `}
                >
                  {/* GLIDING HOVER BACKGROUND PILL */}
                  {isHovered && (
                    <motion.div
                      layoutId="hover-pill"
                      className="absolute inset-0 rounded-full bg-white dark:bg-[#21262d] shadow-md border border-gray-200/80 dark:border-gray-700/60 -z-10"
                      style={{
                        boxShadow: `0 0 20px ${item.glow}`,
                      }}
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}

                  {/* ACTIVE TAB BACKDROP (WHEN NOT HOVERING OTHER TABS) */}
                  {isActive && !hoveredTab && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-white dark:bg-[#21262d] shadow-sm border border-gray-200 dark:border-gray-700 -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}

                  {/* ICON WITH MICRO ELEVATION ON HOVER */}
                  <motion.div
                    animate={{
                      y: isHovered ? -2 : 0,
                      scale: isHovered ? 1.15 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <Icon
                      size={15}
                      className={`${
                        isActive || isHovered ? item.color : 'text-gray-400 dark:text-gray-500'
                      } transition-colors duration-200`}
                    />
                  </motion.div>

                  <span>{item.label}</span>

                  {/* ACTIVE PULSING DOT BEAM */}
                  {isActive && (
                    <motion.span
                      layoutId="active-dot"
                      className="size-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.9)] ml-0.5"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden md:flex items-center gap-2">
            {/* THEME TOGGLE BUTTON */}
            <motion.button
              whileHover={{ scale: 1.08, rotate: 15 }}
              whileTap={{ scale: 0.92 }}
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-blue-400 bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 rounded-full border border-gray-200/60 dark:border-white/10 transition-colors shadow-sm"
              title="Toggle Theme"
            >
              <motion.div
                key={isDark ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.div>
            </motion.button>

            {/* GITHUB LINK */}
            <motion.a
              whileHover={{ scale: 1.08, y: -1 }}
              whileTap={{ scale: 0.92 }}
              href="https://github.com/prtmbvn"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 rounded-full border border-gray-200/60 dark:border-white/10 transition-colors shadow-sm"
              title="GitHub Profile"
            >
              <Github size={16} />
            </motion.a>

            {/* HIRE ME CTA BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="relative group overflow-hidden px-4 py-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-600 text-white rounded-full transition-all duration-300 flex items-center gap-1.5 font-sans font-medium text-xs shadow-md shadow-blue-500/20 border border-blue-400/30"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out pointer-events-none rounded-full" />
              <Terminal size={14} className="text-blue-100 group-hover:rotate-12 transition-transform duration-300" />
              <span className="tracking-wide">Hire Me</span>
            </motion.button>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 bg-gray-100/80 dark:bg-gray-800/80 rounded-full border border-gray-200/60 dark:border-white/10"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(!open)}
              className="p-2 text-gray-600 dark:text-gray-300 bg-gray-100/80 dark:bg-gray-800/80 rounded-full border border-gray-200/60 dark:border-white/10 z-50"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN DOCK */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0, scale: 0.95 }}
              animate={{ height: 'auto', opacity: 1, scale: 1 }}
              exit={{ height: 0, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden mt-2 border-t border-gray-200/60 dark:border-gray-800/80 pt-3 pb-2 px-2"
            >
              <div className="flex flex-col gap-1.5">
                <div className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest px-3 py-1 flex items-center gap-1.5">
                  <Sparkles size={12} className="text-blue-500" />
                  <span>Workspace Explorer</span>
                </div>

                <nav className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item, idx) => {
                    const isActive = active === item.label
                    const Icon = item.icon

                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => setOpen(false)}
                        className={`
                          flex items-center justify-between px-3 py-2 rounded-xl transition-all font-mono text-xs
                          ${
                            isActive
                              ? 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/20'
                              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#161b22]'
                          }
                        `}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon size={16} className={item.color} />
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight
                          size={14}
                          className={`transition-transform ${
                            isActive ? 'rotate-90 text-blue-500' : 'text-gray-400 opacity-50'
                          }`}
                        />
                      </motion.a>
                    )
                  })}
                </nav>

                <div className="pt-2 flex items-center justify-between border-t border-gray-200/40 dark:border-gray-800/40 px-2 mt-1">
                  <a
                    href="https://github.com/prtmbvn"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>

                  <button
                    onClick={() => {
                      setOpen(false)
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-sans font-medium flex items-center gap-1 shadow-sm"
                  >
                    <Terminal size={12} />
                    <span>Hire Me</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}

