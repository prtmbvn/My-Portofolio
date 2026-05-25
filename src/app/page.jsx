// src/app/page.jsx

import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectSection from '@/components/sections/ProjectSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    // Cukup gunakan fragment (<>) atau div biasa.
    // Tag <main> sudah ada di dalam HeroSection, About, dll.
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  )
}
