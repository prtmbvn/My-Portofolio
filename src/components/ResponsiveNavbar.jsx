'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#project', label: 'Project' },
  { href: '#contact', label: 'Contact' },
];

export default function ResponsiveNavbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const closeBtnRef = useRef(null);

  const linkRefs = useMemo(() => new Map(), []);

  // Lock scroll saat menu mobile terbuka
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      closeBtnRef.current?.focus?.();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const sectionIds = LINKS.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { root: null, rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.1, 0.5, 1] }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e, href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  // Indicator underline desktop
  const [indicator, setIndicator] = useState(null);
  useEffect(() => {
    const el = linkRefs.get(activeId);
    const container = document.getElementById('desktop-nav');
    if (!el || !container) return setIndicator(null);
    const elRect = el.getBoundingClientRect();
    const ctRect = container.getBoundingClientRect();
    setIndicator({ left: elRect.left - ctRect.left, width: elRect.width });
  }, [activeId, linkRefs]);

  useEffect(() => {
    const onResize = () => {
      const el = linkRefs.get(activeId);
      const container = document.getElementById('desktop-nav');
      if (!el || !container) return setIndicator(null);
      const elRect = el.getBoundingClientRect();
      const ctRect = container.getBoundingClientRect();
      setIndicator({ left: elRect.left - ctRect.left, width: elRect.width });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [activeId, linkRefs]);

  return (
    <header
      role="banner"
      className={[
        'relative',
        'sticky inset-x-0 top-0 z-50',
        'transition-[background,box-shadow,border-color] duration-300',
        'bg-slate-950/20 supports-[backdrop-filter]:bg-slate-950/40 backdrop-blur-xl',
        scrolled ? 'border-b border-white/10 shadow-[0_4px_30px_rgba(2,6,23,0.35)]' : 'border-b border-transparent',
      ].join(' ')}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-cyan-400/0" />

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] rounded-lg bg-white/10 px-3 py-2 text-white backdrop-blur"
      >
        Skip to content
      </a>

      <motion.div
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        className="flex h-16 w-full items-center justify-between px-4 md:px-6 md:max-w-[1200px] md:mx-auto"
      >
        <div className="flex items-center gap-3 text-white">
          <a href="#home" className="flex items-center gap-2" onClick={(e) => handleLinkClick(e, '#home')}>
            <span
              className="inline-grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-tr from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_28px_rgba(56,189,248,0.35)]"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white/95">
                <path d="M12 2l8 4v6c0 5-3.5 8-8 10C7.5 20 4 17 4 12V6l8-4Z" />
              </svg>
            </span>
            <span className="text-sm font-semibold tracking-wide">Pratama.dev</span>
          </a>
        </div>

        {/* DESKTOP NAV */}
        <nav id="desktop-nav" className="relative hidden md:block" aria-label="Primary">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <AnimatePresence>
              {indicator && (
                <motion.span
                  key={activeId}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 30 }}
                  style={{ left: indicator.left, width: indicator.width }}
                  className="pointer-events-none absolute bottom-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
                />
              )}
            </AnimatePresence>

            <ul className="flex items-center gap-1 text-[0.925rem] text-white/85">
              {LINKS.map((link) => {
                const isActive = activeId === link.href.replace('#', '');
                return (
                  <li key={link.href} className="relative">
                    <a
                      ref={(el) => linkRefs.set(link.href.replace('#', ''), el)}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={[
                        'group relative block rounded-xl px-3 py-2 outline-none',
                        'transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-400',
                        isActive ? 'text-white' : 'text-white/85',
                      ].join(' ')}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <span
                        aria-hidden
                        className={[
                          'absolute inset-0 rounded-xl transition-opacity',
                          'bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]',
                          'opacity-0 group-hover:opacity-100',
                          isActive ? 'opacity-100' : '',
                        ].join(' ')}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-3 text-xs font-medium text-white/80">
          <a
            href="tel:+628882030708"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/85 transition hover:bg-white/10 hover:text-white"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.89.37 1.75.72 2.56a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.61-1.27a2 2 0 0 1 2.11-.45c.81.35 1.67.6 2.56.72A2 2 0 0 1 22 16.92Z" />
            </svg>
            +62 888 2030 708
          </a>
          <a
            href="https://wa.me/628882030708"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-3 py-2 font-semibold text-slate-900 shadow-[0_0_24px_rgba(56,189,248,0.35)] transition hover:opacity-90"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12.04 2A10 10 0 0 0 2 12a9.86 9.86 0 0 0 1.48 5.22L2 22l4.9-1.43A10.05 10.05 0 0 0 12 22 10 10 0 0 0 12.04 2Zm5.82 14.59c-.26.74-1.51 1.35-2.09 1.37-.56.02-1.27.18-4.32-1.42-3.63-1.83-5.96-5.3-6.14-5.55-.18-.25-1.46-1.95-1.46-3.73 0-1.78.92-2.65 1.24-3 .32-.35.7-.44.93-.44.24 0 .46 0 .66.01.21.01.5-.08.78.6.28.68.95 2.34 1.04 2.51.08.17.13.37.02.6-.1.23-.15.37-.31.57-.16.2-.33.45-.47.6-.16.16-.33.33-.14.65.19.32.84 1.38 1.8 2.24 1.24 1.1 2.29 1.44 2.62 1.61.33.17.52.15.72-.09.2-.24.83-.97 1.05-1.3.22-.33.46-.28.78-.16.32.12 2.04.96 2.39 1.13.35.17.58.26.66.41.08.15.08.88-.18 1.62Z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* BURGER BUTTON (MOBILE) */}
        <button
          className="group relative grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg_WHITE/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="sr-only">{open ? 'Close' : 'Open'} menu</span>
          <div className="relative h-5 w-5">
            <span
              className={[
                'absolute left-0 top-0 h-[2px] w-full rounded bg-white transition-transform',
                open ? 'translate-y-[8px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-0 top-[8px] h-[2px] w-full rounded bg-white transition-opacity',
                open ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-0 top-[16px] h-[2px] w-full rounded bg-white transition-transform',
                open ? '-translate-y-[8px] -rotate-45' : '',
              ].join(' ')}
            />
          </div>
        </button>
      </motion.div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden absolute inset-x-0 top-16 z-40"
            aria-label="Mobile"
          >
            <div className="mx-4 rounded-2xl border border_WHITE/10 bg-slate-900/95 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2 text-white">
                  <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-tr from-cyan-400 via-sky-400 to-blue-500">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white/90" aria-hidden>
                      <path d="M12 2l8 4v6c0 5-3.5 8-8 10C7.5 20 4 17 4 12V6l8-4Z" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold">Pratama.dev</span>
                </div>
                <button
                  ref={closeBtnRef}
                  onClick={() => setOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-xl border border_WHITE/10 bg-white/5 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="px-3 pb-3 pt-1">
                <ul className="space-y-1">
                  {LINKS.map((link) => {
                    const isActive = activeId === link.href.replace('#', '');
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.href)}
                          className={[
                            'group relative flex items-center justify-between rounded-xl px-3 py-3',
                            'text-white/90 hover:text-white',
                            'bg-white/0 hover:bg-white/[0.06] transition-colors',
                            isActive ? 'ring-1 ring-cyan-400/50 bg_WHITE/[0.03]' : '',
                          ].join(' ')}
                        >
                          <span className="text-sm">{link.label}</span>
                          <span
                            className="ml-2 h-1.5 w-12 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 opacity-70"
                            aria-hidden
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a
                    href="tel:+628882030708"
                    className="rounded-xl border border_WHITE/10 bg-white/5 px-3 py-2 text-center text-sm text-white/90 transition hover:bg_WHITE/10"
                  >
                    Call
                  </a>
                  <a
                    href="https://wa.me/628882030708"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-3 py-2 text-center text-sm font-semibold text-slate-900"
                  >
                    WhatsApp
                  </a>
                </div>

                <p className="pt-4 text-[11px] leading-5 text-white/60">
                  Crafted with <span className="text-white">Tailwind</span> +{' '}
                  <span className="text-white">Framer Motion</span>. Smooth scroll & scroll-spy enabled.
                </p>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
