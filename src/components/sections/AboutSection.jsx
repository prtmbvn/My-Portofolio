'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GitCommit,
  FileJson,
  MapPin,
  Terminal,
  CheckCircle2,
  Trophy,
  Briefcase,
  GraduationCap,
  Sparkles,
  Award,
  Code2,
  ShieldCheck,
  Zap,
} from 'lucide-react'

import TiltedCard from '../TiltedCard'
import SpotlightCard from '../SpotlightCard'
import TrueFocus from '../TrueFocus'
import StarBorder from '../StarBorder'
import { experiencesData, educationData, achievementsData } from '../../data/aboutData'

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('experience.js')

  const tabs = [
    {
      id: 'experience.js',
      label: 'experience.js',
      icon: GitCommit,
      color: 'text-blue-500 dark:text-blue-400',
    },
    {
      id: 'education.json',
      label: 'education.json',
      icon: FileJson,
      color: 'text-amber-500 dark:text-yellow-400',
    },
  ]

  return (
    <section
      id="about"
      className="relative w-full py-24 px-4 bg-gray-50 dark:bg-[#0d1117] overflow-hidden font-mono text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
    >
      {/* BACKGROUND DECORATIVE GRID */}
      <div className="absolute inset-0 opacity-15 dark:opacity-20 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* SECTION HEADER WITH TRUE FOCUS ON DEVELOPER PROFILE */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Terminal size={18} className="animate-pulse" />
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase">
              ~/portfolio/src/components/AboutSection.jsx
            </span>
          </div>

          <div className="py-2">
            <TrueFocus
              sentence="DEVELOPER PROFILE"
              manualMode={false}
              blurAmount={4}
              borderColor="#3b82f6"
              glowColor="rgba(59, 130, 246, 0.6)"
              animationDuration={0.4}
              pauseBetweenAnimations={1.8}
            />
          </div>
        </div>

        {/* ELEGANT 2-COLUMN MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: 3D PARALLAX PROFILE CARD + STATS (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* 3D TILT AVATAR CARD */}
            <div className="w-full relative group">
              <TiltedCard
                imageSrc="/asset/About.jpg"
                altText="Pratama Bevan"
                captionText="Pratama Bevan — Software Engineer"
                containerHeight="380px"
                containerWidth="100%"
                imageHeight="360px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.03}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="p-4 flex flex-col justify-between h-full pointer-events-none">
                    <div className="flex justify-between items-start">
                      <span className="bg-blue-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md shadow-md">
                        Full-Stack Engineer
                      </span>
                      <span className="flex items-center gap-1.5 bg-gray-900/80 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                        <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
                        Open to Work
                      </span>
                    </div>
                  </div>
                }
              />
            </div>

            {/* PROFILE CARD FOOTER INFO */}
            <div className="w-full flex items-center justify-between p-4 bg-white/80 dark:bg-[#161b22]/90 border border-gray-200 dark:border-gray-800 rounded-xl backdrop-blur-md shadow-lg">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg flex items-center gap-1.5">
                  <span>Pratama Bevan</span>
                  <ShieldCheck size={18} className="text-blue-500" />
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1 mt-0.5">
                  <Code2 size={13} />
                  <span>Software Engineer</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                  <MapPin size={13} className="text-red-500" />
                  <span>Bandung, Indonesia</span>
                </p>
              </div>

              <StarBorder color="#3b82f6" speed="4s" className="scale-90">
                <a
                  href="#contact"
                  className="text-xs font-bold font-sans text-blue-400 flex items-center gap-1"
                >
                  <Zap size={14} />
                  <span>Connect</span>
                </a>
              </StarBorder>
            </div>

            {/* SPACIOUS STATS BENTO ROW (2x2 GRID) */}
            <div className="grid grid-cols-2 gap-4">
              <SpotlightCard
                spotlightColor="rgba(59, 130, 246, 0.25)"
                className="bg-white/80 dark:bg-[#161b22]/90 border border-gray-200 dark:border-gray-800 p-4 rounded-xl text-center shadow-md"
              >
                <div className="text-2xl md:text-3xl font-black text-blue-600 dark:text-blue-400 mb-1">
                  2+
                </div>
                <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Years Exp
                </div>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(234, 179, 8, 0.25)"
                className="bg-white/80 dark:bg-[#161b22]/90 border border-gray-200 dark:border-gray-800 p-4 rounded-xl text-center shadow-md"
              >
                <div className="text-2xl md:text-3xl font-black text-amber-500 dark:text-yellow-400 mb-1">
                  10+
                </div>
                <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Projects
                </div>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(34, 197, 94, 0.25)"
                className="bg-white/80 dark:bg-[#161b22]/90 border border-gray-200 dark:border-gray-800 p-4 rounded-xl text-center shadow-md"
              >
                <div className="text-2xl md:text-3xl font-black text-emerald-500 dark:text-green-400 mb-1">
                  100%
                </div>
                <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Commitment
                </div>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(168, 85, 247, 0.25)"
                className="bg-white/80 dark:bg-[#161b22]/90 border border-gray-200 dark:border-gray-800 p-4 rounded-xl text-center shadow-md"
              >
                <div className="text-2xl md:text-3xl font-black text-purple-500 dark:text-purple-400 mb-1">
                  3.36
                </div>
                <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  ITENAS GPA
                </div>
              </SpotlightCard>
            </div>
          </div>

          {/* RIGHT COLUMN: VS CODE TIMELINE EXPLORER (7 COLS) */}
          <div className="lg:col-span-7">
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.15)"
              className="bg-white/80 dark:bg-[#161b22]/90 border border-gray-200 dark:border-gray-800/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl p-0"
            >
              {/* WINDOW TITLE BAR */}
              <div className="flex items-center justify-between bg-gray-100 dark:bg-[#0d1117] border-b border-gray-200 dark:border-gray-800/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="size-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="size-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-xs text-gray-400 ml-2 font-mono">
                    workspace / developer-journey
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-200/50 dark:bg-gray-800/50 px-3 py-1 rounded-full border border-gray-300/30 dark:border-white/5">
                  <Sparkles size={12} className="text-blue-500" />
                  <span className="font-bold">{activeTab}</span>
                </div>
              </div>

              {/* DOCK FILE TABS */}
              <div className="flex bg-gray-100/90 dark:bg-[#0d1117]/90 border-b border-gray-200 dark:border-gray-800/80 overflow-x-auto hide-scrollbar">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        relative flex items-center gap-2.5 px-6 py-3.5 text-xs md:text-sm font-mono transition-all border-r border-gray-200 dark:border-gray-800 select-none
                        ${
                          isActive
                            ? 'bg-white dark:bg-[#161b22] text-gray-900 dark:text-gray-100 font-semibold z-10'
                            : 'bg-transparent text-gray-500 hover:bg-gray-50 dark:hover:bg-[#161b22]/50 hover:text-gray-800 dark:hover:text-gray-300'
                        }
                      `}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-about-tab-indicator"
                          className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500 dark:bg-blue-400"
                        />
                      )}
                      <Icon
                        size={16}
                        className={isActive ? tab.color : 'text-gray-400 dark:text-gray-500'}
                      />
                      <span>{tab.label}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold'
                            : 'bg-gray-200 dark:bg-gray-800 text-gray-400'
                        }`}
                      >
                        {tab.badge}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* TAB CONTENT CONTAINER */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[650px] custom-scrollbar scroll-smooth">
                <AnimatePresence mode="wait">
                  {/* EXPERIENCE TAB */}
                  {activeTab === 'experience.js' && (
                    <motion.div
                      key="experience"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                        <Briefcase size={14} className="text-blue-500" />
                        <span>Work Experience Timeline</span>
                      </div>

                      <div className="relative pl-6 border-l-2 border-blue-500/30 dark:border-blue-400/20 space-y-6">
                        {experiencesData.map((exp) => (
                          <div key={exp.id} className="relative group">
                            <span className="absolute -left-[31px] top-2 flex h-4 w-4">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40"></span>
                              <span className="relative inline-flex rounded-full h-4 w-4 bg-white dark:bg-[#161b22] border-4 border-blue-500"></span>
                            </span>

                            <SpotlightCard
                              spotlightColor="rgba(59, 130, 246, 0.15)"
                              className="bg-gray-50/80 dark:bg-[#0d1117]/60 border border-gray-200/80 dark:border-gray-800/80 rounded-xl p-5 hover:border-blue-500/40 transition-all shadow-sm"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                <div>
                                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 font-sans group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {exp.role}
                                  </h4>
                                  <p className="text-blue-600 dark:text-blue-400 text-xs md:text-sm font-semibold">
                                    {exp.company}
                                  </p>
                                </div>
                                <span className="inline-flex items-center gap-1 text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full self-start sm:self-auto">
                                  {exp.period}
                                </span>
                              </div>

                              <p
                                className="font-sans text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed mb-4"
                                dangerouslySetInnerHTML={{ __html: exp.description }}
                              />

                              <div className="space-y-2 font-sans text-xs md:text-sm text-gray-600 dark:text-gray-300">
                                {exp.tasks.map((task, idx) => (
                                  <div key={idx} className="flex items-start gap-2.5">
                                    <CheckCircle2
                                      size={15}
                                      className="text-emerald-500 shrink-0 mt-0.5"
                                    />
                                    <span>{task}</span>
                                  </div>
                                ))}
                              </div>
                            </SpotlightCard>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* EDUCATION TAB */}
                  {activeTab === 'education.json' && (
                    <motion.div
                      key="education"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.2 }}
                      className="font-mono text-xs md:text-sm"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                        <GraduationCap size={14} className="text-amber-500" />
                        <span>Academic Record [JSON Format]</span>
                      </div>

                      <div className="bg-[#090d13] p-6 rounded-xl border border-gray-800 text-gray-300 overflow-x-auto shadow-inner">
                        <span className="text-gray-500">[</span>
                        {educationData.map((edu, index) => (
                          <div key={edu.id} className="pl-4 py-2 border-l border-gray-800 ml-2 my-1">
                            <span className="text-gray-500">&#123;</span>
                            <div className="pl-4 py-1 space-y-1">
                              <div>
                                <span className="text-cyan-400">"institution"</span>:
                                <span className="text-amber-300"> "{edu.institution}"</span>,
                              </div>
                              <div>
                                <span className="text-cyan-400">"degree"</span>:
                                <span className="text-amber-300"> "{edu.degree}"</span>,
                              </div>
                              {edu.gpa && (
                                <div>
                                  <span className="text-cyan-400">"gpa"</span>:
                                  <span className="text-purple-400"> "{edu.gpa}"</span>
                                </div>
                              )}
                            </div>
                            <span className="text-gray-500">
                              &#125;{index !== educationData.length - 1 ? ',' : ''}
                            </span>
                          </div>
                        ))}
                        <span className="text-gray-500">]</span>
                      </div>
                    </motion.div>
                  )}

                  {/* ACHIEVEMENTS TAB */}
                  {activeTab === 'achievements.sys' && (
                    <motion.div
                      key="achievements"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                        <Award size={14} className="text-emerald-500" />
                        <span>System Milestones & Achievements</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {achievementsData.map((ach) => (
                          <SpotlightCard
                            key={ach.id}
                            spotlightColor="rgba(34, 197, 94, 0.2)"
                            className="bg-gray-50/80 dark:bg-[#0d1117]/60 border border-gray-200/80 dark:border-gray-800/80 rounded-xl p-5 flex items-start gap-4 hover:border-emerald-500/40 transition-all shadow-sm"
                          >
                            <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl shrink-0 border border-emerald-500/20">
                              <Trophy size={22} />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-bold text-gray-900 dark:text-gray-100 text-sm md:text-base">
                                {ach.title}
                              </h5>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                {ach.level}
                              </p>
                              <span className="inline-block mt-2 text-[10px] font-bold bg-emerald-500/10 text-emerald-500 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                                Year: {ach.year}
                              </span>
                            </div>
                          </SpotlightCard>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  )
}
