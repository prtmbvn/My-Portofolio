'use client'

import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function ResponsiveNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [active, setActive] = useState('Home')

  /* ===============================
     SCROLL EFFECT (blur + hide)
  =============================== */
  useEffect(() => {
    let lastScrollY = window.scrollY

    const onScroll = () => {
      const currentScrollY = window.scrollY

      setScrolled(currentScrollY > 20)
      setHidden(currentScrollY > lastScrollY && currentScrollY > 120)

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ===============================
     ACTIVE SECTION OBSERVER
  =============================== */
  useEffect(() => {
    const sections = NAV_ITEMS.map(item =>
      document.querySelector(item.href)
    ).filter(Boolean)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(
              entry.target.id.charAt(0).toUpperCase() +
                entry.target.id.slice(1)
            )
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach(section => observer.observe(section))
    return () => sections.forEach(section => observer.unobserve(section))
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${hidden ? '-translate-y-full' : 'translate-y-0'}
        ${scrolled
          ? 'backdrop-blur-md bg-parchment/80 shadow-lg'
          : 'bg-transparent'}
      `}
    >
      <div className="flex items-center justify-between px-6 py-4 lg:px-20">

        {/* LOGO */}
        <div className="flex items-center gap-4 select-none">
          <div className="size-10 flex items-center justify-center rounded-full border-2 border-ink bg-parchment shadow-[2px_2px_0px_rgba(26,26,26,1)] hover:rotate-12 hover:scale-110 transition-all">
            <span className="material-symbols-outlined">shutter_speed</span>
          </div>
          <h2 className="font-brush text-2xl tracking-wide">
            Ren's Scroll
          </h2>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map(item => {
            const isActive = active === item.label

            return (
              <a
                key={item.label}
                href={item.href}
                className="group relative font-brush text-xl tracking-widest transition-all duration-300"
              >
                {/* Chakra Dot */}
                {isActive && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 size-2 rounded-full bg-primary animate-pulse" />
                )}

                <span
                  className={`
                    relative z-10
                    ${isActive ? 'text-primary' : 'text-ink'}
                    group-hover:text-primary
                  `}
                >
                  {item.label}
                </span>

                {/* Ink underline */}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-2 bg-primary/20 -skew-x-12
                    transition-all duration-300
                    ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}
                    group-hover:w-full group-hover:opacity-100
                  `}
                />
              </a>
            )
          })}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden z-50"
        >
          <span className="material-symbols-outlined text-3xl transition-transform duration-300">
            {open ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500
          ${open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <nav className="flex flex-col items-center gap-6 py-8 bg-parchment border-t border-ink/20">
          {NAV_ITEMS.map(item => {
            const isActive = active === item.label

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  font-brush text-2xl tracking-widest transition-all
                  ${isActive ? 'text-primary scale-110' : 'text-ink'}
                  hover:text-primary hover:scale-110
                `}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
