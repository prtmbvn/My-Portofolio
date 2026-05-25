'use client'

import { FolderGit2, ExternalLink, Github, Activity } from 'lucide-react'

// Import data yang sudah dipisah
// Sesuaikan path import dengan struktur folder kamu
import { projectsData, techStackData } from '../../data/projectData'

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="relative w-full pt-24 pb-0 bg-white dark:bg-[#0d1117] overflow-hidden font-mono border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
    >
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-20">
        <div className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-4">
          <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 mb-2">
            <FolderGit2 size={24} />
            <span className="text-sm font-bold tracking-widest uppercase">
              ~/workspace/projects
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-gray-100 tracking-tight transition-colors duration-300">
            Deployed <span className="text-blue-600 dark:text-blue-500">Modules</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projectsData.map((proj, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-gray-50 dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-md dark:shadow-none"
            >
              <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-[#0d1117] border-b border-gray-200 dark:border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/20 border border-green-500/50"></div>
                </div>
                <span className="text-xs text-gray-500 font-medium">{proj.id}.jsx</span>
              </div>

              <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-200 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#161b22] via-transparent to-transparent opacity-80"></div>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 font-sans">
                  {proj.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                  <span className="text-gray-400 dark:text-gray-600 select-none">/* </span>
                  {proj.desc}
                  <span className="text-gray-400 dark:text-gray-600 select-none"> */</span>
                </p>
                <div className="mb-6">
                  <div className="inline-flex flex-wrap gap-2">
                    {proj.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold text-amber-700 dark:text-yellow-300 bg-amber-100 dark:bg-yellow-400/10 px-2 py-0.5 rounded border border-amber-200 dark:border-yellow-400/20"
                      >
                        '{t}'
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-800 mt-auto">
                  <a
                    href={proj.live}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-50 dark:bg-blue-600/10 hover:bg-blue-600 text-blue-600 dark:text-blue-400 hover:text-white border border-blue-200 dark:border-blue-600/50 rounded transition-colors text-sm font-semibold"
                  >
                    <ExternalLink size={16} /> <span>Project</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full bg-gray-100 dark:bg-[#0d1117] py-4 border-y border-gray-200 dark:border-gray-800 overflow-hidden flex items-center transition-colors">
        <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center px-4 bg-gradient-to-r from-gray-100 dark:from-[#0d1117] to-transparent">
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-400/10 px-3 py-1 rounded-full border border-green-200 dark:border-green-400/20 text-xs font-bold shadow-sm">
            <Activity size={14} className="animate-pulse" />
            <span>SYSTEM_ACTIVE</span>
          </div>
        </div>
        <div className="flex whitespace-nowrap animate-marquee pl-32">
          <div className="flex items-center text-sm font-semibold text-gray-500">
            {techStackData.map((item, i) => (
              <span key={i} className="mx-6 flex items-center gap-6">
                <span>{item}</span>
                <span className="text-gray-300 dark:text-gray-800 select-none">||</span>
              </span>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-100 dark:from-[#0d1117] to-transparent z-20"></div>
      </div>
    </section>
  )
}
