'use client'

import { useEffect, useState } from 'react'
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
} from 'lucide-react'

const NAV_ITEMS = [
  { label: 'index.jsx', href: '#hero', icon: Code2, color: 'text-blue-500 dark:text-blue-400' },
  {
    label: 'projects.json',
    href: '#projects',
    icon: FolderGit2,
    color: 'text-yellow-600 dark:text-yellow-400',
  },
  { label: 'about.md', href: '#about', icon: User, color: 'text-green-600 dark:text-green-400' },
  { label: 'contact.env', href: '#contact', icon: Mail, color: 'text-gray-500 dark:text-gray-400' },
]

export default function WorkspaceNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('index.jsx')

  // State untuk tema (Default: dark)
  const [isDark, setIsDark] = useState(true)

  /* ===============================
     THEME INITIALIZATION
  =============================== */
  useEffect(() => {
    // Cek preferensi user saat web pertama dimuat
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
    <header
      className={`
        fixed top-0 left-0 w-full z-50 font-mono text-sm
        transition-all duration-300 border-b
        ${
          scrolled
            ? 'bg-white/90 dark:bg-[#0d1117]/90 backdrop-blur-md border-gray-200 dark:border-gray-800 shadow-sm'
            : 'bg-gray-50 dark:bg-[#0d1117] border-gray-200 dark:border-gray-900'
        }
      `}
    >
      <div className="flex items-center justify-between mx-24 h-14">
        {/* LOGO */}
        <div className="flex items-center gap-2 select-none group cursor-pointer">
          <div className="text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">&lt;</span>
            <span className="text-gray-900 dark:text-gray-100 font-bold tracking-tight">
              PratamaBevan
            </span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> /&gt;</span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-end h-full pt-2">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.label
            const Icon = item.icon

            return (
              <a
                key={item.label}
                href={item.href}
                className={`
                  relative flex items-center gap-2 px-5 py-2.5 
                  border-t-2 border-r border-l border-b-0 rounded-t-md
                  transition-all duration-200 group
                  ${
                    isActive
                      ? 'bg-white dark:bg-[#161b22] border-t-blue-500 border-x-gray-200 dark:border-x-gray-800 text-gray-900 dark:text-gray-100 z-10'
                      : 'bg-transparent border-t-transparent border-x-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#161b22]/50 hover:text-gray-900 dark:hover:text-gray-200'
                  }
                `}
              >
                <Icon
                  size={16}
                  className={`${isActive ? item.color : 'text-gray-400 dark:text-gray-500'} group-hover:${item.color}`}
                />
                <span>{item.label}</span>
                <span
                  className={`ml-2 size-4 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                >
                  <X size={12} className="text-gray-500 dark:text-gray-400" />
                </span>
              </a>
            )
          })}
        </nav>

        {/* RIGHT ACTION BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          {/* THEME TOGGLE BUTTON */}
          <button
            onClick={toggleTheme}
            className="p-1.5 text-gray-500 hover:text-amber-500 dark:text-gray-400 dark:hover:text-blue-400 bg-gray-100 dark:bg-gray-800 rounded-md transition-colors"
            title="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="https://github.com/prtmbvn"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white rounded-md transition-colors flex items-center gap-2 font-sans font-medium text-sm">
            <Terminal size={16} />
            <span>Hire Me</span>
          </button>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-1.5 text-gray-500 hover:text-amber-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="z-50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 dark:bg-[#0d1117] border-b border-gray-200 dark:border-gray-800
          ${open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="p-4 flex flex-col gap-1">
          <div className="text-xs text-gray-500 dark:text-gray-500 font-bold mb-2 uppercase tracking-widest px-2">
            Explorer : Portfolio
          </div>
          <nav className="flex flex-col">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.label
              const Icon = item.icon

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    flex items-center gap-3 px-2 py-2 rounded-md transition-all
                    ${isActive ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#161b22] hover:text-gray-900 dark:hover:text-gray-200'}
                  `}
                >
                  <ChevronRight
                    size={16}
                    className={`transition-transform ${isActive ? 'rotate-90 text-blue-600 dark:text-blue-400' : 'text-transparent'}`}
                  />
                  <Icon size={18} className={item.color} />
                  <span>{item.label}</span>
                </a>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
