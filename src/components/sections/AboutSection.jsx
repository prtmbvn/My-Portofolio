'use client'

import { useState } from 'react'
import { GitCommit, FileJson, FileText, MapPin, Terminal, CheckCircle2, Trophy } from 'lucide-react'

// Import data yang sudah dipisah (pastikan path-nya benar sesuai struktur foldermu)
import { experiencesData, educationData, achievementsData } from '../../data/aboutData'

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('experience.js')

  const tabs = [
    { id: 'experience.js', icon: GitCommit, color: 'text-blue-500 dark:text-blue-400' },
    { id: 'education.json', icon: FileJson, color: 'text-amber-500 dark:text-yellow-400' },
  ]

  const skills = [
    'React',
    'Next.js',
    'JavaScript',
    'TypeScripst',
    'PHP',
    'Tailwind',
    'SQL',
    'PorstgeSQL',
    'LARAVEL',
    'PYTHON',
  ]

  return (
    <section
      id="about"
      className="relative w-full py-24 px-4 bg-gray-50 dark:bg-[#0d1117] overflow-hidden font-mono text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
    >
      {/* --- Custom CSS for aesthetic scrollbar --- */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1; /* Tailwind slate-300 */
          border-radius: 20px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #334155; /* Tailwind slate-700 */
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8; /* Tailwind slate-400 */
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #475569; /* Tailwind slate-600 */
        }
      `}</style>

      {/* --- BACKGROUND FX --- */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* --- TITLE HEADER --- */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
            <Terminal size={20} />
            <span className="text-sm font-bold tracking-widest uppercase">whoami</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-gray-100 tracking-tight transition-colors duration-300">
            Developer <span className="text-blue-600 dark:text-blue-500">Profile</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* --- LEFT: DEVELOPER CARD --- */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-lg dark:shadow-2xl group transition-colors duration-300">
              <div className="relative h-64 w-full rounded-md overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 mb-4 group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-colors">
                <img
                  src="/asset/Profile.png"
                  alt="Pratama Bevan"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 "
                />
                <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-full shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-bold text-gray-700 dark:text-gray-200">
                    Open to Work
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1 mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Pratama Bevan
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                  Software Engineer
                </p>
                <div className="flex items-center gap-2 text-gray-500 text-xs mt-2">
                  <MapPin size={14} />
                  <span>Bandung, Indonesia</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-3 uppercase tracking-wider font-bold">
                  Primary Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs rounded text-gray-600 dark:text-gray-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT: TABS CONTENT --- */}
          {/* PERUBAHAN: Menentukan tinggi (height) spesifik agar tidak memanjang tak terbatas */}
          <div className="lg:col-span-8 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden flex flex-col h-[600px] md:h-[700px] shadow-lg dark:shadow-none transition-colors duration-300">
            {/* NAVIGATION TABS */}
            {/* PERUBAHAN: Menambahkan shrink-0 agar tab header tidak menciut saat konten penuh */}
            <div className="flex bg-gray-100 dark:bg-[#0d1117] border-b border-gray-200 dark:border-gray-800 overflow-x-auto hide-scrollbar shrink-0">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 text-sm transition-all border-t-2 border-r border-r-gray-200 dark:border-r-gray-800 ${
                      isActive
                        ? 'bg-white dark:bg-[#161b22] border-t-blue-500 text-gray-900 dark:text-gray-200'
                        : 'bg-transparent border-t-transparent text-gray-500 hover:bg-gray-50 dark:hover:bg-[#161b22]/50 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    <Icon
                      size={16}
                      className={isActive ? tab.color : 'text-gray-400 dark:text-gray-500'}
                    />
                    {tab.id}
                  </button>
                )
              })}
            </div>

            {/* TAB CONTENT */}
            {/* PERUBAHAN: Menambahkan overflow-y-auto dan class custom-scrollbar */}
            <div className="p-6 md:p-8 flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
              {/* --- EXPERIENCE --- */}
              {activeTab === 'experience.js' && (
                <div className="relative animate-fadeIn">
                  <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gray-200 dark:bg-gray-800"></div>

                  <div className="flex flex-col gap-8">
                    {experiencesData.map((exp) => (
                      <div key={exp.id} className="relative pl-10 group">
                        <div className="absolute left-0 top-1.5 w-6 h-6 bg-white dark:bg-[#161b22] border-4 border-blue-500 rounded-full z-10 transition-colors"></div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 font-sans">
                              {exp.role}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 text-sm">
                              {exp.company}
                            </p>
                          </div>
                          <span className="text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 px-2 py-1 rounded whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                        <div className="font-sans text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-3 mt-4">
                          {/* Untuk merender HTML di dalam string jika diperlukan, atau render string biasa */}
                          <p dangerouslySetInnerHTML={{ __html: exp.description }}></p>
                          <ul className="space-y-2">
                            {exp.tasks.map((task, index) => (
                              <li key={index} className="flex gap-2">
                                <CheckCircle2
                                  size={16}
                                  className="text-green-500 shrink-0 mt-0.5"
                                />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* --- EDUCATION --- */}
              {activeTab === 'education.json' && (
                <div className="animate-fadeIn font-mono text-sm sm:text-base">
                  <div className="text-gray-600 dark:text-gray-400">
                    <span className="text-gray-400 dark:text-gray-500">[</span>
                    {educationData.map((edu, index) => (
                      <div key={edu.id} className="pl-4 sm:pl-8 py-2">
                        <span className="text-gray-400 dark:text-gray-500">&#123;</span>
                        <div className="pl-4 sm:pl-8 border-l border-gray-200 dark:border-gray-800 ml-2">
                          <span className="text-blue-600 dark:text-blue-300">"institution"</span>:{' '}
                          <span className="text-amber-600 dark:text-yellow-300">
                            "{edu.institution}"
                          </span>
                          ,<br />
                          <span className="text-blue-600 dark:text-blue-300">"degree"</span>:{' '}
                          <span className="text-amber-600 dark:text-yellow-300">
                            "{edu.degree}"
                          </span>
                          {/* Tambahkan field opsional jika ada di data */}
                          {edu.gpa && (
                            <>
                              ,<br />
                              <span className="text-blue-600 dark:text-blue-300">"GPA"</span>:{' '}
                              <span className="text-amber-600 dark:text-yellow-300">
                                "{edu.gpa}"
                              </span>
                            </>
                          )}
                        </div>
                        <span className="text-gray-400 dark:text-gray-500">
                          &#125;{index !== educationData.length - 1 ? ',' : ''}
                        </span>
                      </div>
                    ))}
                    <span className="text-gray-400 dark:text-gray-500">]</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
