'use client'

import { useState, useEffect } from 'react'
import Threads from '../Threads'
import ShinyText from '../animations/shiny-text'
import FoldText from '../animations/FoldText'
import TextType from '../animations/TextType'
import { Terminal, Play, FileCode2, ArrowRight } from 'lucide-react'

const ROLES = ['Fullstack Developer', 'Software Engineer', 'Data Enthusiast']

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <main
      id="hero"
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-6 pt-20 bg-gray-50 dark:bg-[#0d1117] font-mono overflow-hidden transition-colors duration-300"
    >
      {/* --- BACKGROUND: THREADS ANIMATION & IDE GRID --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Threads
          color={[0.23, 0.51, 0.96]}
          amplitude={1.2}
          distance={0}
          enableMouseInteraction={true}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),dark:linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 dark:opacity-15 transition-all duration-300"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[120px] transition-all"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/20 dark:bg-yellow-500/10 rounded-full blur-[120px] transition-all"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-col w-full max-w-4xl gap-6">
        {/* Status indicator / Path */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Terminal size={16} className="text-green-600 dark:text-green-400" />
          <span>~/portfolio/src/components/Hero.jsx</span>
        </div>

        {/* Main Title */}
        <div className="flex flex-col gap-2">
          <span className="text-blue-600 dark:text-blue-400 text-lg md:text-xl font-semibold">
            const <span className="text-blue-500 dark:text-blue-300">developer</span> = &#123;
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-gray-100 tracking-tight pl-8 md:pl-12 py-2 transition-colors duration-300">
            name: "
            <span className="text-amber-600 dark:text-yellow-300 inline-block">
              <ShinyText text="Pratama Bevan" color="currentColor" shineColor="#ffffff" speed={3} />
            </span>
            ",
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-400 pl-8 md:pl-12 py-1 flex items-center gap-1 transition-colors duration-300">
            <span>role: "</span>
            <span className="inline-block text-green-600 dark:text-green-400 font-mono">
              <FoldText
                key={roleIndex}
                text={ROLES[roleIndex]}
                duration={0.4}
                stagger={0.03}
                hinge="top"
                fontSize="inherit"
                fontWeight={700}
                color="currentColor"
              />
            </span>
            <span>"</span>
          </h2>
          <span className="text-blue-600 dark:text-blue-400 text-lg md:text-xl font-semibold">
            &#125;;
          </span>
        </div>

        {/* Subtitle (JSDoc) */}
        <div className="mt-6 p-4 md:p-5 rounded-lg bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-xl max-w-3xl transition-colors duration-300">
          <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed font-mono">
            <div className="text-gray-400 dark:text-gray-500">/**</div>
            <div className="flex items-start gap-2 my-1.5 pl-2 min-h-[52px]">
              <span className="text-gray-400 dark:text-gray-500 select-none">*</span>
              <TextType
                text={[
                  'Architecting high-performance full-stack web solutions with modern frameworks, data-driven systems & elegant UI design.',
                  'Specializing in building robust administrative dashboards, seamless API integrations & scalable database architectures.',
                  'Delivering clean, maintainable code engineered for speed, security, and exceptional user experience.',
                ]}
                typingSpeed={32}
                deletingSpeed={16}
                pauseDuration={3000}
                loop={true}
                showCursor={true}
                cursorCharacter="▋"
                cursorClassName="text-blue-500 dark:text-blue-400 font-bold animate-pulse"
                className="text-gray-700 dark:text-gray-300 font-medium"
              />
            </div>
            <div className="pl-2 text-gray-500 dark:text-gray-400 my-1">
              <span className="text-gray-400 dark:text-gray-500">* </span>
            </div>
            <div className="text-gray-400 dark:text-gray-500"> */</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group relative flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            <Play size={18} fill="currentColor" />
            <span>Execute: viewProjects()</span>
          </button>

          <a
            href="https://drive.google.com/file/d/1JKfn7Gz2lqiI7SDQ6FOl4P9qUfgMRHHE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-6 py-3 bg-white dark:bg-[#161b22] text-gray-700 dark:text-gray-300 font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all border border-gray-300 dark:border-gray-700"
          >
            <FileCode2 size={18} />
            <span>Download My CV </span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Scroll Hint */}
        <div className="mt-16 flex items-center gap-2 text-xs font-mono text-gray-500">
          <span className="animate-pulse text-green-500">█</span>
          <span>Process exited with code 0. Scroll down to inspect modules...</span>
        </div>
      </div>
    </main>
  )
}

export default Hero
