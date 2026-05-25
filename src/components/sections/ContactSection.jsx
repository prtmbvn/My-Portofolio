'use client'

import { useState } from 'react'
import { Terminal, Send, MapPin, CheckCircle2 } from 'lucide-react'

// Import data kontak yang sudah dipisah (pastikan path-nya benar)
import { socialLinks } from '../../data/contactData'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulasi pengiriman form (bisa kamu ganti dengan API sungguhan nanti, misal pakai Formspree/EmailJS)
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-4 bg-gray-50 dark:bg-[#0d1117] overflow-hidden font-mono text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
    >
      {/* Background FX */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* TITLE HEADER */}
        <div className="mb-16 border-b border-gray-200 dark:border-gray-800 pb-4">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
            <Terminal size={20} />
            <span className="text-sm font-bold tracking-widest uppercase">ping contact.me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-gray-100 tracking-tight transition-colors">
            Establish <span className="text-blue-600 dark:text-blue-500">Connection</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: TERMINAL FORM */}
          <div className="relative group">
            <div className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg dark:shadow-2xl overflow-hidden transition-all duration-300">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-[#0d1117] border-b border-gray-200 dark:border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/80"></div>
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  bash - root@pratamabevan:~
                </span>
              </div>

              {/* Form Body */}
              <div className="p-6 sm:p-8 relative">
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {/* Map Inputs: Name & Email */}
                  {['name', 'email'].map((field) => (
                    <div key={field}>
                      <label className="flex gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span className="text-green-500 dark:text-green-400">➜</span>
                        <span className="text-blue-500 dark:text-blue-400">~</span>
                        <span>Enter payload:</span>
                        <span className="text-amber-600 dark:text-yellow-300">{field}</span>
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        required
                        className="w-full bg-gray-50 dark:bg-[#0d1117] border border-gray-200 dark:border-gray-700 py-2.5 px-4 text-gray-900 dark:text-gray-200 focus:outline-none focus:border-blue-500 rounded transition-all font-sans"
                        placeholder={`e.g. ${field === 'email' ? 'john@mail.com' : 'John Doe'}`}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      />
                    </div>
                  ))}

                  {/* Message Textarea */}
                  <div>
                    <label className="flex gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <span className="text-green-500 dark:text-green-400">➜</span>
                      <span className="text-blue-500 dark:text-blue-400">~</span>
                      <span>Enter payload:</span>
                      <span className="text-amber-600 dark:text-yellow-300">message</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full bg-gray-50 dark:bg-[#0d1117] border border-gray-200 dark:border-gray-700 p-4 text-gray-900 dark:text-gray-200 focus:outline-none focus:border-blue-500 resize-none rounded font-sans transition-all"
                      placeholder="Type your message here..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status !== 'idle'}
                    className={`w-full py-3.5 rounded font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 border ${
                      status === 'success'
                        ? 'bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-500/50'
                        : 'bg-blue-600 text-white border-blue-500 hover:bg-blue-700'
                    }`}
                  >
                    {status === 'idle' && (
                      <>
                        <Send size={18} />
                        <span>POST /api/message</span>
                      </>
                    )}
                    {status === 'sending' && (
                      <>
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                        <span>Transmitting...</span>
                      </>
                    )}
                    {status === 'success' && (
                      <>
                        <CheckCircle2 size={18} />
                        <span>[200 OK] Delivered</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* RIGHT: CHANNELS */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 font-sans transition-colors">
                Network Endpoints
              </h3>
              <p className="text-gray-500 text-sm">
                Select a channel to initialize a direct connection.
              </p>
            </div>

            {/* Dynamic Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-all shadow-sm dark:shadow-none"
                  >
                    <div
                      className={`w-10 h-10 bg-gray-50 dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 rounded flex items-center justify-center text-gray-500 dark:text-gray-400 transition-colors ${link.hoverColor}`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4
                        className={`font-bold text-gray-900 dark:text-gray-200 font-sans transition-colors ${link.hoverColor}`}
                      >
                        {link.name}
                      </h4>
                      <p className="text-xs text-gray-500">{link.desc}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Server Region Info */}
            <div className="mt-8 p-4 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-lg flex items-center gap-3 shadow-sm dark:shadow-none transition-colors">
              <div className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">
                  Server Region
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1 transition-colors">
                  <MapPin size={14} className="text-blue-500 dark:text-blue-400" />
                  Bandung, Indonesia (GMT+7)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
