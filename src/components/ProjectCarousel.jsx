'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Terminal,
  Sparkles,
  Layers,
  Globe,
  Play,
  Pause,
  Maximize2,
  Code2,
} from 'lucide-react'

import SpotlightCard from './SpotlightCard'
import ShinyText from './animations/shiny-text'

export default function ProjectCarousel({ projects = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [direction, setDirection] = useState(1) // 1 for next, -1 for prev

  const totalProjects = projects.length

  const handleNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % totalProjects)
  }, [totalProjects])

  const handlePrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects)
  }, [totalProjects])

  // AUTO PLAY TIMER
  useEffect(() => {
    if (!isAutoPlay || totalProjects === 0) return

    const timer = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay, handleNext, totalProjects])

  if (!projects || projects.length === 0) return null

  const activeProject = projects[currentIndex]

  // Calculate 3D offset indices for coverflow (-2, -1, 0, 1, 2)
  const getCardOffset = (index) => {
    const diff = (index - currentIndex + totalProjects) % totalProjects
    if (diff === 0) return 0
    if (diff === 1 || diff === -(totalProjects - 1)) return 1
    if (diff === totalProjects - 1 || diff === -1) return -1
    if (diff === 2 || diff === -(totalProjects - 2)) return 2
    if (diff === totalProjects - 2 || diff === -2) return -2
    return diff > totalProjects / 2 ? diff - totalProjects : diff
  }

  return (
    <div className="w-full flex flex-col gap-10 select-none">
      {/* ============================================================ */}
      {/* 1. 3D COVERFLOW STAGE CONTAINER                              */}
      {/* ============================================================ */}
      <div className="relative w-full h-[340px] sm:h-[420px] md:h-[480px] flex items-center justify-center perspective-[1200px] overflow-hidden py-4">
        {/* CAROUSEL CARDS */}
        {projects.map((project, index) => {
          const offset = getCardOffset(index)
          const isActive = offset === 0
          const isVisible = Math.abs(offset) <= 2

          if (!isVisible) return null

          // Calculate 3D transforms based on offset
          const rotateY = offset * -25 // -25deg, 0deg, 25deg
          const translateX = offset * 280 // position offsets
          const translateZ = isActive ? 0 : -180
          const scale = isActive ? 1 : Math.abs(offset) === 1 ? 0.82 : 0.68
          const opacity = isActive ? 1 : Math.abs(offset) === 1 ? 0.6 : 0.25

          return (
            <motion.div
              key={project.id}
              onClick={() => {
                if (!isActive) {
                  setDirection(offset > 0 ? 1 : -1)
                  setCurrentIndex(index)
                }
              }}
              initial={false}
              animate={{
                x: translateX,
                z: translateZ,
                rotateY: rotateY,
                scale: scale,
                opacity: opacity,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 28,
              }}
              style={{
                zIndex: isActive ? 30 : 20 - Math.abs(offset) * 5,
                transformStyle: 'preserve-3d',
              }}
              className={`
                absolute w-[85%] max-w-[560px] cursor-pointer transition-shadow duration-300
                ${isActive ? 'cursor-default' : 'hover:opacity-90'}
              `}
            >
              <SpotlightCard
                spotlightColor={
                  isActive ? 'rgba(59, 130, 246, 0.35)' : 'rgba(255, 255, 255, 0.1)'
                }
                className={`
                  p-0 rounded-2xl overflow-hidden backdrop-blur-xl border transition-all duration-300 shadow-2xl
                  ${
                    isActive
                      ? 'bg-white/90 dark:bg-[#161b22]/95 border-blue-500/50 shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]'
                      : 'bg-white/60 dark:bg-[#0d1117]/80 border-gray-200/60 dark:border-gray-800/80 grayscale opacity-80'
                  }
                `}
              >
                {/* VS CODE HEADER BAR */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-gray-100/90 dark:bg-[#0d1117]/90 border-b border-gray-200/80 dark:border-gray-800/80">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="size-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="size-3 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-[11px] text-gray-500 font-mono ml-2 truncate max-w-[140px] sm:max-w-none">
                      {project.id}.jsx
                    </span>
                  </div>

                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                    MODULE 0{index + 1}
                  </span>
                </div>

                {/* PROJECT IMAGE STAGE */}
                <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-gray-900 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />

                  {/* ACTIVE OVERLAY GLOW */}
                  {isActive && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-gray-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-blue-500/30 text-blue-400 text-[10px] font-bold shadow-lg">
                      <Sparkles size={12} className="animate-spin" />
                      <span>ACTIVE MODULE</span>
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          )
        })}
      </div>

      {/* ============================================================ */}
      {/* 2. DYNAMIC PROJECT DETAILS INSPECTOR PANEL                    */}
      {/* ============================================================ */}
      <div className="max-w-4xl mx-auto w-full">
        <SpotlightCard
          spotlightColor="rgba(59, 130, 246, 0.2)"
          className="bg-white/80 dark:bg-[#161b22]/90 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-5"
            >
              {/* HEADER META ROW */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200/80 dark:border-gray-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs font-bold text-gray-400 font-mono uppercase tracking-widest">
                    PROJECT 0{currentIndex + 1} OF 0{totalProjects}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* TITLE & DESCRIPTION */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight font-sans">
                  <ShinyText text={activeProject.title} color="currentColor" shineColor="#3b82f6" speed={3} />
                </h3>
                <p className="font-sans text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  {activeProject.desc}
                </p>
              </div>

              {/* ACTION BUTTONS & CONTROLS BAR */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200/80 dark:border-gray-800/80">
                {/* LIVE DEMO LINK */}
                <div className="flex items-center gap-3">
                  {activeProject.live && activeProject.live !== '#' ? (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={activeProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-xs sm:text-sm font-sans flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all"
                    >
                      <Globe size={16} />
                      <span>Launch Live Demo</span>
                      <ExternalLink size={14} />
                    </motion.a>
                  ) : (
                    <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-500 rounded-full text-xs font-mono">
                      Internal KAI System / Private Demo
                    </span>
                  )}
                </div>

                {/* SLIDER NAVIGATION BUTTONS */}
                <div className="flex items-center gap-3">
                  {/* AUTOPLAY TOGGLE */}
                  <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className={`p-2 rounded-full border transition-colors ${
                      isAutoPlay
                        ? 'bg-blue-500/10 text-blue-500 border-blue-500/30'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-400 border-gray-200 dark:border-gray-700'
                    }`}
                    title={isAutoPlay ? 'Pause Auto-Play' : 'Start Auto-Play'}
                  >
                    {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
                  </button>

                  <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-900 p-1 rounded-full border border-gray-200 dark:border-gray-800">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePrev}
                      className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
                      title="Previous Project"
                    >
                      <ChevronLeft size={18} />
                    </motion.button>

                    <div className="px-3 text-xs font-mono font-bold text-gray-500">
                      0{currentIndex + 1} / 0{totalProjects}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleNext}
                      className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
                      title="Next Project"
                    >
                      <ChevronRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </SpotlightCard>

        {/* INDEX DOTS NAVIGATION */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1)
                setCurrentIndex(idx)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-blue-600 dark:bg-blue-500 shadow-md shadow-blue-500/40'
                  : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
              }`}
              title={`Go to Project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
