'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ReactIcon,
  NextjsIcon,
  TypescriptIcon,
  JavascriptIcon,
  TailwindIcon,
  LaravelIcon,
  PhpIcon,
  VueIcon,
  NodeIcon,
  MysqlIcon,
  PostgresIcon,
  OracleIcon,
  PythonIcon,
} from './icons/TechIcons'

const TECH_ITEMS = [
  { name: 'React.js', category: 'Frontend', icon: ReactIcon, glow: 'rgba(97, 218, 251, 0.25)', border: 'hover:border-cyan-500/50' },
  { name: 'Next.js', category: 'Fullstack', icon: NextjsIcon, glow: 'rgba(255, 255, 255, 0.2)', border: 'hover:border-gray-400/50' },
  { name: 'TypeScript', category: 'Language', icon: TypescriptIcon, glow: 'rgba(49, 120, 198, 0.25)', border: 'hover:border-blue-500/50' },
  { name: 'JavaScript', category: 'Language', icon: JavascriptIcon, glow: 'rgba(247, 223, 30, 0.25)', border: 'hover:border-yellow-500/50' },
  { name: 'Laravel', category: 'Backend', icon: LaravelIcon, glow: 'rgba(255, 45, 32, 0.25)', border: 'hover:border-red-500/50' },
  { name: 'PHP', category: 'Backend', icon: PhpIcon, glow: 'rgba(119, 123, 180, 0.25)', border: 'hover:border-indigo-500/50' },
  { name: 'Tailwind CSS', category: 'Styling', icon: TailwindIcon, glow: 'rgba(6, 182, 212, 0.25)', border: 'hover:border-sky-500/50' },
  { name: 'Vue.js', category: 'Frontend', icon: VueIcon, glow: 'rgba(65, 184, 131, 0.25)', border: 'hover:border-emerald-500/50' },
  { name: 'Node.js', category: 'Runtime', icon: NodeIcon, glow: 'rgba(51, 153, 51, 0.25)', border: 'hover:border-green-500/50' },
  { name: 'MySQL', category: 'Database', icon: MysqlIcon, glow: 'rgba(0, 117, 143, 0.25)', border: 'hover:border-amber-500/50' },
  { name: 'PostgreSQL', category: 'Database', icon: PostgresIcon, glow: 'rgba(51, 103, 145, 0.25)', border: 'hover:border-blue-600/50' },
  { name: 'Oracle DB', category: 'Database', icon: OracleIcon, glow: 'rgba(248, 0, 0, 0.25)', border: 'hover:border-red-600/50' },
  { name: 'Python', category: 'Language', icon: PythonIcon, glow: 'rgba(55, 118, 171, 0.25)', border: 'hover:border-blue-400/50' },
]

export default function TechStack3DSlider() {
  const [hoveredTech, setHoveredTech] = useState(null)

  // Double the array for seamless infinite looping
  const doubledTech = [...TECH_ITEMS, ...TECH_ITEMS]

  return (
    <div className="w-full relative py-8 overflow-hidden select-none bg-gray-100/50 dark:bg-[#0d1117]/80 border-y border-gray-200 dark:border-gray-800 backdrop-blur-md">
      {/* AMBIENT GRADIENT SHADOW FADES */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-gray-100 dark:from-[#0d1117] via-gray-100/80 dark:via-[#0d1117]/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-gray-100 dark:from-[#0d1117] via-gray-100/80 dark:via-[#0d1117]/80 to-transparent z-20 pointer-events-none" />

      {/* HEADER LABEL */}
      <div className="max-w-7xl mx-auto px-4 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
          <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Core Technologies & Tools</span>
        </div>

        {hoveredTech && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5"
          >
            <span>Focused:</span>
            <span className="font-bold text-gray-900 dark:text-white bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
              {hoveredTech.name} ({hoveredTech.category})
            </span>
          </motion.div>
        )}
      </div>

      {/* INFINITE 3D LOGO CAROUSEL TRACK */}
      <div className="flex overflow-hidden perspective-[1000px] py-4">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
          className="flex gap-5 shrink-0"
        >
          {doubledTech.map((tech, idx) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
                whileHover={{
                  scale: 1.12,
                  y: -6,
                  rotateX: 6,
                  rotateY: -6,
                  transition: { type: 'spring', stiffness: 400, damping: 20 },
                }}
                className={`
                  relative flex items-center gap-3 px-5 py-3.5 rounded-2xl
                  bg-white/80 dark:bg-[#161b22]/90 border border-gray-200/90 dark:border-gray-800/90
                  backdrop-blur-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group shrink-0 ${tech.border}
                `}
                style={{
                  boxShadow: hoveredTech?.name === tech.name ? `0 10px 30px -5px ${tech.glow}` : undefined,
                }}
              >
                {/* ICON CONTAINER WITH BRAND GLOW */}
                <div className="relative p-2 rounded-xl bg-gray-100 dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* TECH DETAILS */}
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold font-sans text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
