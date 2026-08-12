'use client'

import { FolderGit2, Sparkles } from 'lucide-react'

import ProjectCarousel from '../ProjectCarousel'
import TechStack3DSlider from '../TechStack3DSlider'
import ShinyText from '../animations/shiny-text'
import { projectsData } from '../../data/projectData'

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="relative w-full pt-24 pb-0 bg-gray-50 dark:bg-[#0d1117] overflow-hidden font-mono border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
    >
      {/* DECORATIVE GRID PATTERN */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-16 space-y-10">
        {/* HEADER BAR */}
        <div className="border-b border-gray-200 dark:border-gray-800/80 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 mb-2">
              <FolderGit2 size={22} className="animate-bounce" />
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase">
                ~/workspace/projects
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-gray-100 tracking-tight flex items-center gap-3">
              <span>Deployed</span>
              <span className="text-blue-600 dark:text-blue-400">
                <ShinyText text="Modules" color="currentColor" shineColor="#ffffff" speed={3} />
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500 font-mono bg-white/80 dark:bg-[#161b22]/80 px-3.5 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 backdrop-blur-md self-start md:self-auto shadow-sm">
            <Sparkles size={14} className="text-blue-500" />
            <span>Interactive 3D Coverflow Deck</span>
          </div>
        </div>

        {/* CREATIVE 3D PROJECT CAROUSEL SHOWCASE */}
        <ProjectCarousel projects={projectsData} />
      </div>

      {/* 3D TECH STACK LOGO CAROUSEL SLIDER */}
      <TechStack3DSlider />
    </section>
  )
}
