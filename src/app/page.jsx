'use client'
import BlurText from "@/components/animations/blur-text";
import TextType from "@/components/animations/text-type";
import TiltedCard from "@/components/animations/title-card";
import { Section } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Lanyard from "@/components/animations/lanyard";
import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Home() {
  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
  return (
    <main className="relative min-h-screen ">
      {/* Navbar */}
      {/* <div className="sticky inset-x-0 top-0 z-50
                    bg-slate-950/40 backdrop-blur-md
                      border-b border-white/10
                    supports-[backdrop-filter]:bg-slate-950/30">
        <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4 md:px-6">
          <nav className="text-sm">
            <ul className="flex items-center gap-6 text-white/80">

               <li className="group relative">
                    <a
                      href="#home"
                      className="text-white "
                    >
                      Home
                    </a>
                    <span
                      className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full
                                bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500
                                transition-[width] duration-300 group-hover:w-12"
                    />
                  </li>
              <li className=" group relative">
                    <a href="#about" 
                      className="text-white">About</a>
                      <span 
                        className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full
                                      bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500
                                      transition-[width] duration-300 group-hover:w-12" 
                      />
              </li>
              <li className="group relative">
                <a href="#project" 
                  className="text-white">Project</a>
                <span 
                  className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full
                                      bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500
                                      transition-[width] duration-300 group-hover:w-12" />
              </li>
              <li className="group relative">
                <a href="#contact" 
                  className="text-white">Contact</a>
                <span 
                  className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full
                                      bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500
                                      transition-[width] duration-300 group-hover:w-12" />
              </li>
             
            </ul>
          </nav>

          <div className="hidden text-xs font-medium text-white/80 md:flex items-center gap-2">
            <a className="text-white/70" />
            <a href="#">+628882030708</a>
          </div>
        </div>
      </div> */}

      {/* Home */}
      <section id="home" className="min-h-screen w-full flex flex-row justify-center items-center gap-20 scroll-mt-20">
           <div className="flex flex-col justify-center items-start gap-2 mb-48 ">
          {/* Baris nama */}
              <div className="flex items-baseline gap-2">
                <BlurText
                  text="HI, I'm"
                  delay={300}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-4xl font-bold"
                />
                <BlurText
                  text="Pratama Bevan."
                  delay={300}              
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-4xl font-bold text-cyan-400"  
                />
              </div>
             {/* Subjudul */}
                <TextType 
                  text={["Web Developer", "AI/ML Engineer", "Data enthusiast","Software Engineer"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text-3xl font-sans"
                />
                <div className="mt-10 ">
                  <a
                    href="https://drive.google.com/file/d/1TUawyQx-ySuSvtBvGghwaT5xQNdimDSb/view?usp=sharing"
                    role="button"
                    aria-label="Go to What I do section"
                    className="group relative inline-flex items-center justify-center gap-2
                              rounded-full px-6 py-3 font-semibold text-white
                              transition-transform duration-200 hover:scale-[1.02]
                              focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <span aria-hidden className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 opacity-80 blur-md transition-all duration-300 group-hover:opacity-100 group-hover:blur-lg" />
                    <span aria-hidden className="absolute inset-[2px] rounded-full bg-slate-900" />
                    <span className="relative z-10 flex items-center gap-2">
                      Download My CV
                    </span>
                  </a>
                </div>
           </div>
          
      <div className="mb-40">
         <Lanyard/>
      </div>
      </section>

      <section id="about" className="min-h-screen w-full scroll-mt-20">
       <div className="flex justify-center items-center flex-row gap-20 "> 
        <TiltedCard
        imageSrc="/asset/Bevan.png"
        altText=""
        captionText=""
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="370px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-demo-text">
          </p>
        }
      />
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[700px]">
              {/* Card 1 */}
              <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-sky-500/40 via-cyan-400/40 to-emerald-400/40">
                <div className="relative rounded-2xl bg-slate-900 p-6 ring-1 ring-white/10 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <h3 className="text-lg font-semibold text-center">About Me</h3>
                  <p className="mt-1 text-sm text-white/70 text-center">Fresh Computer Science graduate focused on App/Web Dev, AI/ML, and Data Analytics. 
                  Built responsive apps (Next.js/Laravel/Tailwind), data pipelines (Python, Pandas, SQL), and ML models (scikit-learn/TensorFlow/PyTorch). 
                  Seeking a full-time IT role, fast-learning, results-oriented, detail-driven. 
                  I solve data-driven problems, write clean code, and collaborate well, with campus & freelance experience.</p>
                </div>
              </div>
              {/* Card 2 */}
               <div className="h-full group relative rounded-2xl p-[1px] bg-gradient-to-r from-sky-500/40 via-cyan-400/40 to-emerald-400/40">
                <div className="relative h-full rounded-2xl bg-slate-900 p-6 ring-1 ring-white/10 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <h3 className="text-lg font-semibold text-center">My Education</h3>
                  <p className="mt-10 text-sm text-white/70 text-center">My last education was at Institut Teknologi Nasional Bandung , where I studied computer science. 
                  I graduated after 3 years and 11 months of study, and my final GPA was 3.36.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-sky-500/40 via-cyan-400/40 to-emerald-400/40">
                <div className="relative rounded-2xl bg-slate-900 p-6 ring-1 ring-white/10 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <h3 className="text-lg font-semibold text-center">Work Experience</h3>
                  <p className="mt-1 text-sm text-white/70 text-center">Web Developer Intern, UPT-TIK ITENAS (Jan–Aug 2025): built and launched the profile site (Laravel/PHP, Blade, CMS, MySQL) with performance/SEO, deployment, and maintenance. Full-stack Intern, PT Winnicode (Aug–Nov 2024): delivered a news/blog portal with real-time news API, CMS, responsive UI, MySQL, and production hardening. IT Support Intern, Telkom CorpU (Oct 2020–Jan 2021): 
                  maintained multi-building network reliability and administered MikroTik RouterOS.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-sky-500/40 via-cyan-400/40 to-emerald-400/40">
                <div className="relative h-full rounded-2xl bg-slate-900 p-6 ring-1 ring-white/10 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <h3 className="text-lg font-semibold text-center">Organisational Experience</h3>
                  <p className="mt-1 text-sm text-white/70 text-center">Deputy Executive Chair, Itenas Futsal Series 2023 (Bandung, Dec 2023). 
                  Led end-to-end delivery—coordinated eight divisions, aligned timelines and budgets, and managed logistics, scheduling, and marketing. 
                  Handled stakeholders (campus units, referees, sponsors/vendors), oversaw volunteer rostering and on-site ops, enforced safety/compliance, and resolved day-of issues. 
                  Closed with post-event reporting and lessons learned for future editions.
                  </p>
                </div>
              </div>
        </div>
    </div>
      </section>

      <section id='project' className="h-full w-full flex justify-center items-center flex-col gap-1 my-20 scroll-mt-20">
        <h1 className="font-bold text-3xl text-center ">
          <span className="inline-block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            PORTOFOLIOS
          </span>
        </h1>
        <h1 className="mt-5 font-bold text-3xl text-center">My Project Collection</h1>
        <p className="mt-2 text-center">These are some of my own portofolios i made recently</p>
        <div className="mt-5 w-96 h-1 rounded-4xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"></div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-6 gap-5 [grid-auto-rows:12rem] mx-48">
            {/* Besar (3 kolom × 2 baris) */}
            <Link
                  href="https://uat-web.itenas.ac.id/"
                  aria-label="Open: ITENAS Profile Website"
                  className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 sm:col-span-3 sm:row-span-2"
                >
                  {/* Gambar + overlay dasar */}
                  <div className="absolute inset-0">
                    <Image
                      src="/asset/Itenas.png"
                      alt="ITENAS Profile Website"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>

                  {/* Teks bawah default (akan memudar saat hover) */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="text-base font-semibold">ITENAS Profile Website</h3>
                    <p className="mt-1 text-sm text-white/80 line-clamp-2">
                      Laravel/PHP, CMS, SEO, deployment.
                    </p>
                  </div>

                  {/* Overlay hover deskripsi lengkap */}
                  <div
                    className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-300
                              group-hover:opacity-100 focus-within:opacity-100"
                  >
                    {/* Layer gelap + blur biar teks kebaca */}
                    <div aria-hidden className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    <div className="relative z-10 p-5 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                      <h3 className="text-lg font-semibold">ITENAS Profile Website</h3>
                      <p className="mt-2 text-sm text-white/90 text-justify">
                        Campus profile website built with Laravel/PHP, custom CMS, responsive
                        Blade UI, MySQL; optimized for performance & SEO, deployed to
                        production with ongoing maintenance.
                      </p>

                      {/* Tag chips (opsional) */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          Laravel
                        </span>
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          Blade
                        </span>
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          MySQL
                        </span>
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          PHP
                        </span>
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          Tailwind
                        </span>
                      </div>
                    </div>
                  </div>
            </Link>


            {/* Lebar (3 kolom) */}
            <Link href="#" aria-label="Open: News & Blog Portal"
              className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 sm:col-span-3">
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-base font-semibold">News & Blog Portal</h3>
                <p className="mt-1 text-sm text-white/80 line-clamp-2">Real-time News API, responsive UI.</p>
              </div>
               <div className="absolute inset-0">
                    <Image
                      src="/asset/Berita.png"
                      alt="News & Blog Portal"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>

                  {/* Teks bawah default (akan memudar saat hover) */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="text-base font-semibold">News & Blog Portal</h3>
                    <p className="mt-1 text-sm text-white/80 line-clamp-2">
                      Laravel/PHP, CMS, SEO, deployment.
                    </p>
                  </div>

                  {/* Overlay hover deskripsi lengkap */}
                  <div
                    className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-300
                              group-hover:opacity-100 focus-within:opacity-100"
                  >
                    {/* Layer gelap + blur biar teks kebaca */}
                    <div aria-hidden className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    <div className="relative z-10 p-5 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                      <h3 className="text-lg font-semibold">News & Blog Portal</h3>
                      <p className="mt-2 text-sm text-white/90 text-justify">
                        Built a Laravel/PHP News & Blog Portal with real-time news API integration (normalized + merged feed), 
                        custom CMS, responsive Blade UI, MySQL—performance/SEO optimized and deployed to production.
                      </p>

                      {/* Tag chips (opsional) */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          Laravel
                        </span>
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          Blade
                        </span>
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          MySQL
                        </span>
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          PHP
                        </span>
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          Tailwind
                        </span>
                      </div>
                    </div>
                  </div>
            </Link>

            {/* Kecil (2 kolom) */}
            <Link href="#" aria-label="Open: News & Blog Portal"
              className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 sm:col-span-3">
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-base font-semibold">News & Blog Portal</h3>
                <p className="mt-1 text-sm text-white/80 line-clamp-2">Real-time News API, responsive UI.</p>
              </div>
               <div className="absolute inset-0">
                    <Image
                      src="/asset/Gas.png"
                      alt="LPG gas Marketplace"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>

                  {/* Teks bawah default (akan memudar saat hover) */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="text-base font-semibold">LPG gas Marketplace</h3>
                    <p className="mt-1 text-sm text-white/80 line-clamp-2">
                      Laravel/PHP, CMS, SEO, deployment.
                    </p>
                  </div>

                  {/* Overlay hover deskripsi lengkap */}
                  <div
                    className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-300
                              group-hover:opacity-100 focus-within:opacity-100"
                  >
                    {/* Layer gelap + blur biar teks kebaca */}
                    <div aria-hidden className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    <div className="relative z-10 p-5 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                      <h3 className="text-lg font-semibold">LPG gas Marketplace</h3>
                      <p className="mt-2 text-sm text-white/90 text-justify">
                        Built a Laravel/PHP marketplace for LPG (Elpiji) products with real-time pricing & inventory, secure checkout, order management, 
                        and supplier/admin CMS; responsive Blade UI, MySQL—performance/SEO optimized and deployed to production.
                      </p>

                      {/* Tag chips (opsional) */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          Laravel
                        </span>
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          Blade
                        </span>
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          MySQL
                        </span>
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          PHP
                        </span>
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          Bootstrap
                        </span>
                      </div>
                    </div>
                  </div>
            </Link>

            {/* Tinggi (2 kolom × 2 baris) */}
             <Link
                  href="https://uat-web.itenas.ac.id/"
                  aria-label="Open: ITENAS Profile Website"
                  className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 sm:col-span-3 sm:row-span-2"
                >
                  {/* Gambar + overlay dasar */}
                  <div className="absolute inset-0">
                    <Image
                      src="/asset/TA.png"
                      alt="Mental Workload Classification EEG-Based"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>

                  {/* Teks bawah default (akan memudar saat hover) */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="text-base font-semibold">Mental Workload Classification EEG-Based</h3>
                    <p className="mt-1 text-sm text-white/80 line-clamp-2">
                      Python, Pytorch, Scikit-learn.
                    </p>
                  </div>

                  {/* Overlay hover deskripsi lengkap */}
                  <div
                    className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-300
                              group-hover:opacity-100 focus-within:opacity-100"
                  >
                    {/* Layer gelap + blur biar teks kebaca */}
                    <div aria-hidden className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    <div className="relative z-10 p-5 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                      <h3 className="text-lg font-semibold">Mental Workload Classification EEG-Based</h3>
                      <p className="mt-2 text-sm text-white/90 text-justify">
                        converts raw brain signals into actionable insights for cognitive load monitoring. 
                        Built an end-to-end pipeline (signal preprocessing, feature representation, 
                        TabNet-based classifier, and evaluation) to distinguish low, moderate, and high workload levels.
                         The TabNet architecture’s attentive feature selection supports interpretable predictions suitable for real-time 
                         decision support in learning and work settings.
                      </p>

                      {/* Tag chips (opsional) */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          Python
                        </span>
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          Sckit-learn
                        </span>
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          Pytorch
                        </span>
                      </div>
                    </div>
                  </div>
              </Link>

            {/* Kecil (2 kolom) */}
            <Link href="#" aria-label="Open: News & Blog Portal"
              className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 sm:col-span-3">
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-base font-semibold">News & Blog Portal</h3>
                <p className="mt-1 text-sm text-white/80 line-clamp-2">Real-time News API, responsive UI.</p>
              </div>
               <div className="absolute inset-0">
                    <Image
                      src="/asset/Porto.png"
                      alt="Portofolio Website"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>

                  {/* Teks bawah default (akan memudar saat hover) */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="text-base font-semibold">Portofolio Website</h3>
                    <p className="mt-1 text-sm text-white/80 line-clamp-2">
                      Next.js, Tailwind, Deployment.
                    </p>
                  </div>

                  {/* Overlay hover deskripsi lengkap */}
                  <div
                    className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-300
                              group-hover:opacity-100 focus-within:opacity-100"
                  >
                    {/* Layer gelap + blur biar teks kebaca */}
                    <div aria-hidden className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    <div className="relative z-10 p-5 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                      <h3 className="text-lg font-semibold">Portofolio Website</h3>
                      <p className="mt-2 text-sm text-white/90 text-justify">
                        Built a fast, responsive portfolio with Next.js & Tailwind—bento-grid projects, micro-animations, 
                        dark mode, SEO/OG, optimized images, and contact links; deployed on Vercel.
                      </p>

                      {/* Tag chips (opsional) */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          Next.js
                        </span>
                        <span className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15">
                          Tailwind
                        </span>
                      </div>
                    </div>
                  </div>
            </Link>

      </div>

        <section id="contact" className="h-full w-full flex justify-center items-center flex-col gap-1 my-20 scroll-mt-20">
          <h1 className="font-bold text-3xl text-center ">
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Contact 
            </span>
          </h1>
          <h1 className="mt-5 font-bold text-3xl text-center">Let's work Together !</h1>
          <p className="mt-2 text-center">These are some contacts you can reach out to and some skills I have.</p>
          <div className="mt-5 w-96 h-1 rounded-4xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"></div>
        </section>

      {/* Contact */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-6 gap-5 [grid-auto-rows:12rem] mx-48 mb-20">

        {/* EMAIL – besar (3 kolom x 2 baris) */}
        <a
          href="mailto:pratamabevan@gmail.com.com"
          className="group relative overflow-hidden rounded-2xl p-[1px]
                    bg-gradient-to-r from-cyan-500/40 via-sky-400/40 to-blue-500/40
                    sm:col-span-3 sm:row-span-2"
          aria-label="Email Me"
        >
          <div className="relative h-full w-full rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6
                          shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
            {/* Glow on hover */}
            <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl
                                        opacity-0 group-hover:opacity-100
                                        bg-gradient-to-r from-cyan-500/20 via-sky-400/20 to-blue-500/20
                                        blur-xl transition-opacity duration-300" />
            {/* Icon */}
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
                            bg-white/5 ring-1 ring-white/10">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 6h16v12H4z"/><path d="M22 6l-10 7L2 6"/>
              </svg>
            </div>

            <h3 className="text-lg font-semibold">Email</h3>
            <p className="mt-1 text-sm text-white/80">pratamabevan@gmail.com</p>

            {/* CTA muncul saat hover */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center
                            opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full bg-black/60 px-3 py-1 text-sm backdrop-blur">
                Send Message →
              </span>
            </div>
          </div>
        </a>

        {/* WHATSAPP – lebar (3 kolom) */}
        <a
          href="https://wa.me/628882030708"
          target="_blank" rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl p-[1px]
                    bg-gradient-to-r from-green-500/40 via-emerald-400/40 to-teal-400/40
                    sm:col-span-3"
          aria-label="WhatsApp"
        >
          <div className="relative h-full w-full rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6
                          shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
                            bg-white/5 ring-1 ring-white/10">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20 11.5A8.5 8.5 0 1 1 11.5 3 8.5 8.5 0 0 1 20 11.5z"/><path d="M5 19l1.5-4.5"/>
                <path d="M8 10c1 2 3 3 5 4l2-2"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">WhatsApp</h3>
            <p className="mt-1 text-sm text-white/80">+62 888-203-0708</p>
            <div className="mt-3 inline-flex items-center gap-2 text-sm text-emerald-300">
              Chat Now
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/bevaaann"
          target="_blank" rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl p-[1px]
                    bg-gradient-to-r from-fuchsia-500/40 via-rose-500/40 to-amber-400/40
                    sm:col-span-3"
          aria-label="Instagram"
        >
          <div className="relative h-full w-full rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6
                          shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
            {/* Glow on hover */}
            <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl
                                        opacity-0 group-hover:opacity-100
                                        bg-gradient-to-r from-fuchsia-500/20 via-rose-500/20 to-amber-400/20
                                        blur-xl transition-opacity duration-300" />
            {/* Icon */}
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
                            bg-white/5 ring-1 ring-white/10">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold">Instagram</h3>
            <p className="mt-1 text-sm text-white/80">bevaaann</p>

            <div className="mt-3 inline-flex items-center gap-2 text-sm text-rose-300">
              Open Profile
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </a>


        {/* LINKEDIN – kecil (2 kolom) */}
        <a
          href="https://www.linkedin.com/in/pratamabevan/"
          target="_blank" rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl p-[1px]
                    bg-gradient-to-r from-sky-500/40 via-blue-500/40 to-indigo-500/40
                    sm:col-span-2"
          aria-label="LinkedIn"
        >
          <div className="relative h-full w-[500px] rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6
                          shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
                            bg-white/5 ring-1 ring-white/10">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M6 6a2 2 0 11-.001-4.001A2 2 0 016 6zM4 8h4v12H4zM14.5 8A4.5 4.5 0 0010 12.5V20h4v-6a2 2 0 114 0v6h4v-7a5 5 0 00-7.5-4.33z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">LinkedIn</h3>
            <p className="mt-1 text-sm text-white/80">pratamabevan</p>
            <span className="mt-3 inline-flex items-center text-sm text-sky-300">
              Connect
              <svg className="ml-2 h-4 w-4 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
              </svg>
            </span>
          </div>
        </a>

        {/* GITHUB – kecil (2 kolom) */}
        <a
          href="https://github.com/prtmbvn"
          target="_blank" rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl p-[1px]
                    bg-gradient-to-r from-zinc-200/20 via-zinc-400/20 to-zinc-600/20
                    sm:col-span-2"
          aria-label="GitHub"
        >
          <div className="relative h-full w-full rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6
                          shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
                            bg-white/5 ring-1 ring-white/10">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.07 3.29 9.36 7.86 10.88.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.37-3.87-1.37-.52-1.31-1.27-1.66-1.27-1.66-1.04-.7.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.76.4-1.24.73-1.52-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.3 1.18-3.12-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.19a10.9 10.9 0 0 1 5.74 0C17.4 5.31 18.36 5.62 18.36 5.62c.62 1.59.23 2.76.11 3.05.74.82 1.18 1.86 1.18 3.12 0 4.44-2.7 5.41-5.27 5.7.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.79.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">GitHub</h3>
            <p className="mt-1 text-sm text-white/80">prtmbvn</p>
            <span className="mt-3 inline-flex items-center text-sm text-zinc-300">
              View Repos
              <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
              </svg>
            </span>
          </div>
        </a>

        {/* SKILLS – tinggi (2 kolom x 2 baris) */}
        <div className="group relative overflow-hidden rounded-2xl p-[1px]
                        bg-gradient-to-r from-cyan-500/40 via-sky-400/40 to-blue-500/40
                        sm:col-span-2 sm:row-span-2">
          <div className="relative h-full w-full rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6
                          shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
            <h3 className="text-lg font-semibold">Skills</h3>
            <p className="mt-1 text-sm text-white/80">Tech I use most</p>

            {/* Chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["Next.js","Laravel","Tailwind","Python","Pandas","SQL","TensorFlow","PyTorch","React.js","PHP","javascript","Vue.js","Django","Golang"].map((s,i)=>(
                <span key={i}
                  className="text-xs rounded-full px-2.5 py-1.5 bg-white/5 ring-1 ring-white/10
                            hover:bg-white/10 hover:ring-white/20 transition-colors">
                  {s}
                </span>
              ))}
            </div>

            {/* Progress style bar (visual) */}
            <div className="mt-6 h-2 w-full rounded-full bg-white/5 overflow-hidden ring-1 ring-white/10">
              <div className="h-full w-2/3 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500
                              animate-pulse" />
            </div>
          </div>
        </div>

      </div>


     
    </main>
  );
}

