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
  
      {/* Home */}
            <section
  id="home"
  className="
    w-full
    min-h-[calc(100vh-4rem)]   /* tinggi layar dikurangi tinggi navbar */
    scroll-mt-20
    px-4
    pt-24
    pb-12
    md:pt-28
    md:pb-20
  "
>
  <div
    className="
      mx-auto
      flex
      w-full
      max-w-6xl
      flex-col
      md:flex-row
      items-center
      md:items-center
      justify-start
      md:justify-between
      gap-10
      md:gap-16
    "
  >
    {/* Text / Content */}
    <div
      className="
        w-full
        max-w-xl
        flex
        flex-col
        items-start
        gap-4
      "
    >
      {/* Baris nama */}
      <div className="flex items-baseline gap-2">
        <BlurText
          text="HI, I'm"
          delay={300}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-3xl sm:text-4xl font-bold"
        />
        <BlurText
          text="Pratama Bevan."
          delay={300}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-3xl sm:text-4xl font-bold text-cyan-400"
        />
      </div>

      {/* Subjudul */}
      <TextType
        text={['Web Developer', 'AI/ML Engineer', 'Data enthusiast', 'Software Engineer']}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        className="text-lg sm:text-2xl md:text-3xl font-sans"
      />

      {/* Tombol */}
      <div className="mt-8">
        <a
          href="https://drive.google.com/file/d/1TUawyQx-ySuSvtBvGghwaT5xQNdimDSb/view?usp=sharing"
          role="button"
          aria-label="Download My CV"
          className="
            group
            relative
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            px-6
            py-3
            font-semibold
            text-white
            transition-transform
            duration-200
            hover:scale-[1.02]
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-sky-400
          "
        >
          <span
            aria-hidden
            className="
              absolute inset-0 rounded-full
              bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400
              opacity-80 blur-md
              transition-all duration-300
              group-hover:opacity-100 group-hover:blur-lg
            "
          />
          <span
            aria-hidden
            className="absolute inset-[2px] rounded-full bg-slate-900"
          />
          <span className="relative z-10 flex items-center gap-2">
            Download My CV
          </span>
        </a>
      </div>
    </div>

    {/* Lanyard */}
    <div
      className="
        w-full
        max-w-sm
        md:max-w-md
        flex
        justify-center
        md:justify-end
      "
    >
      <Lanyard />
    </div>
  </div>
            </section>



      <section id="about" className="min-h-screen w-full py-12 md:py-24 px-4 sm:px-6 scroll-mt-20 overflow-x-hidden flex items-center justify-center">
  
  {/* Container Utama: 
      - Mobile: Stack vertical (flex-col)
      - Desktop Besar (xl): Horizontal (flex-row)
      - max-w-7xl agar tidak terlalu lebar di layar ultrawide
  */}
  <div className="max-w-7xl mx-auto w-full flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-20">
    
    {/* --- BAGIAN 1: FOTO (TILTED CARD) --- */}
    {/* Wrapper div untuk memastikan kartu tetap di tengah saat mobile */}
    <div className="flex-shrink-0 relative z-10 flex justify-center items-center">
      {/* Menggunakan scale-90 di mobile agar tidak terlalu memenuhi layar kecil, scale-100 di desktop */}
      <div className="transform scale-90 sm:scale-100 transition-transform duration-300">
        <TiltedCard
          imageSrc="/asset/Bevan.png"
          altText="Bevan Profile"
          captionText=""
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text"></p>
          }
        />
      </div>
    </div>

    {/* --- BAGIAN 2: GRID KONTEN --- */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl xl:max-w-3xl">
      
      {/* Card 1: About Me */}
      <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-sky-500/40 via-cyan-400/40 to-emerald-400/40 h-full">
        <div className="relative h-full rounded-2xl bg-slate-900/90 backdrop-blur-sm p-6 ring-1 ring-white/10 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-sky-500/20 flex flex-col">
          <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-emerald-300 mb-3">About Me</h3>
          <p className="text-sm text-slate-300 leading-relaxed text-justify">
            Fresh Computer Science graduate focused on App/Web Dev, AI/ML, and Data Analytics.
            Built responsive apps (Next.js/Laravel/Tailwind), data pipelines, and ML models.
            Seeking a full-time IT role; result-oriented & detail-driven.
          </p>
        </div>
      </div>

      {/* Card 2: Education */}
      <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-sky-500/40 via-cyan-400/40 to-emerald-400/40 h-full">
        <div className="relative h-full rounded-2xl bg-slate-900/90 backdrop-blur-sm p-6 ring-1 ring-white/10 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-emerald-500/20 flex flex-col">
          <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300 mb-3">My Education</h3>
          <div className="text-sm text-slate-300 leading-relaxed">
            <span className="block font-semibold text-white mb-1 text-base">Institut Teknologi Nasional Bandung</span>
            <p className="mb-2">Bachelor of Computer Science</p>
            <div className="flex justify-between items-center mt-auto pt-2 border-t border-white/10">
              <span className="text-xs text-slate-400">3 Years 11 Months</span>
              <span className="text-emerald-400 font-bold bg-emerald-400/10 px-2 py-1 rounded text-xs">GPA: 3.36</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Work Experience 
          MODIFIKASI: md:col-span-2 membuat kartu ini memanjang ke samping di tablet/desktop 
          agar bullet points lebih mudah dibaca dan tidak sempit.
      */}
      <div className="md:col-span-2 group relative rounded-2xl p-[1px] bg-gradient-to-r from-sky-500/40 via-cyan-400/40 to-emerald-400/40 h-full">
        <div className="relative h-full rounded-2xl bg-slate-900/90 backdrop-blur-sm p-6 ring-1 ring-white/10 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-cyan-500/20 flex flex-col">
          <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300 mb-3">Work Experience</h3>
          <ul className="text-sm text-slate-300 space-y-3 list-none">
            <li className="relative pl-4 border-l-2 border-sky-500/30 hover:border-sky-500 transition-colors">
              <strong className="text-white block">Web Developer Intern, UPT-TIK ITENAS</strong> 
              <span className="text-xs text-slate-500 block mb-1">Jan – Aug 2025</span>
              Built profile site (Laravel/PHP, CMS) with SEO & maintenance.
            </li>
            <li className="relative pl-4 border-l-2 border-cyan-500/30 hover:border-cyan-500 transition-colors">
              <strong className="text-white block">Full-stack Intern, PT Winnicode</strong>
              <span className="text-xs text-slate-500 block mb-1">Aug – Nov 2024</span>
              Delivered news portal with real-time API, CMS & responsive UI.
            </li>
            <li className="relative pl-4 border-l-2 border-emerald-500/30 hover:border-emerald-500 transition-colors">
              <strong className="text-white block">IT Support Intern, Telkom CorpU</strong>
              <span className="text-xs text-slate-500 block mb-1">Oct 2020 – Jan 2021</span>
              Maintained network reliability & MikroTik administration.
            </li>
          </ul>
        </div>
      </div>

      {/* Card 4: Organisational Experience
          MODIFIKASI: md:col-span-2 juga untuk simetri dan kerapian layout.
      */}
      <div className="md:col-span-2 group relative rounded-2xl p-[1px] bg-gradient-to-r from-sky-500/40 via-cyan-400/40 to-emerald-400/40 h-full">
        <div className="relative h-full rounded-2xl bg-slate-900/90 backdrop-blur-sm p-6 ring-1 ring-white/10 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-sky-500/20 flex flex-col">
          <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-emerald-300 mb-3">Organisational Experience</h3>
          <div className="text-sm text-slate-300 leading-relaxed">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <strong className="text-white text-base">Deputy Executive Chair</strong>
              <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded w-fit mt-1 sm:mt-0">Itenas Futsal Series 2023</span>
            </div>
            <p className="text-justify">
              Led end-to-end delivery, coordinated eight divisions, and managed stakeholders. 
              Oversaw volunteer rostering, safety compliance, and post-event reporting.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section
  id="project"
  className="
    w-full
    scroll-mt-20
    px-4 sm:px-6 lg:px-8
    py-16 sm:py-20 lg:py-24
  "
>
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <div className="flex flex-col items-center text-center">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
        <span className="inline-block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
          PORTFOLIOS
        </span>
      </h1>

      <h2 className="mt-4 font-bold text-2xl sm:text-3xl md:text-4xl text-white">
        My Project Collection
      </h2>

      <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/70">
        These are some of my recent projects that showcase my experience in web development,
        backend services, and data-driven applications.
      </p>

      <div className="mt-5 h-1 w-24 sm:w-32 md:w-40 rounded-4xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500" />
    </div>

    {/* GRID PROJECTS */}
    <div
      className="
        mt-10
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-6
        gap-4 sm:gap-5
        [grid-auto-rows:13rem]
        sm:[grid-auto-rows:14rem]
      "
    >
      {/* ITENAS PROFILE – big tile (3x2 di desktop) */}
      <Link
        href="https://uat-web.itenas.ac.id/"
        aria-label="Open: ITENAS Profile Website"
        className="
          group relative overflow-hidden rounded-2xl
          bg-white/5 ring-1 ring-white/10
          lg:col-span-3 lg:row-span-2
        "
      >
        {/* Image + base overlay */}
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

        {/* Default bottom text */}
        <div className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="text-base font-semibold">ITENAS Profile Website</h3>
          <p className="mt-1 text-sm text-white/80 line-clamp-2">
            Laravel/PHP, custom CMS, responsive UI & SEO.
          </p>
        </div>

        {/* Hover overlay with detailed description */}
        <div
          className="
            pointer-events-none absolute inset-0 flex items-end
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100 focus-within:opacity-100
          "
        >
          <div aria-hidden className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div className="relative z-10 p-5 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-lg font-semibold">ITENAS Profile Website</h3>
            <p className="mt-2 text-sm text-white/90 text-justify">
              Campus profile website built with Laravel/PHP, custom CMS, responsive Blade UI,
              and MySQL; optimized for performance & SEO, deployed to production with
              ongoing maintenance.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {['Laravel', 'Blade', 'MySQL', 'PHP', 'Tailwind'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>

      {/* NEWS & BLOG PORTAL – wide (3 kolom di desktop) */}
      <Link
        href="#"
        aria-label="Open: News & Blog Portal"
        className="
          group relative overflow-hidden rounded-2xl
          bg-white/5 ring-1 ring-white/10
          lg:col-span-3
        "
      >
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

        <div className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="text-base font-semibold">News & Blog Portal</h3>
          <p className="mt-1 text-sm text-white/80 line-clamp-2">
            Real-time News API, Laravel CMS, responsive UI.
          </p>
        </div>

        <div
          className="
            pointer-events-none absolute inset-0 flex items-end
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100 focus-within:opacity-100
          "
        >
          <div aria-hidden className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div className="relative z-10 p-5 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-lg font-semibold">News & Blog Portal</h3>
            <p className="mt-2 text-sm text-white/90 text-justify">
              Built a Laravel/PHP News & Blog Portal with real-time news API integration
              (normalized + merged feed), custom CMS, responsive Blade UI, and MySQL—optimized
              for performance and SEO, deployed to production.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {['Laravel', 'Blade', 'MySQL', 'PHP', 'Tailwind'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>

      {/* LPG GAS MARKETPLACE – normal tile */}
      <Link
        href="#"
        aria-label="Open: LPG Gas Marketplace"
        className="
          group relative overflow-hidden rounded-2xl
          bg-white/5 ring-1 ring-white/10
          lg:col-span-3
        "
      >
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

        <div className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="text-base font-semibold">LPG Gas Marketplace</h3>
          <p className="mt-1 text-sm text-white/80 line-clamp-2">
            Laravel marketplace, real-time inventory & CMS.
          </p>
        </div>

        <div
          className="
            pointer-events-none absolute inset-0 flex items-end
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100 focus-within:opacity-100
          "
        >
          <div aria-hidden className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div className="relative z-10 p-5 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-lg font-semibold">LPG Gas Marketplace</h3>
            <p className="mt-2 text-sm text-white/90 text-justify">
              Built a Laravel/PHP marketplace for LPG (Elpiji) products with real-time pricing
              & inventory, secure checkout, order management, and supplier/admin CMS; responsive
              Blade UI, MySQL—performance/SEO optimized and deployed to production.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {['Laravel', 'Blade', 'MySQL', 'PHP', 'Bootstrap'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>

      {/* MENTAL WORKLOAD EEG – tall (3x2 di desktop) */}
      <Link
        href="#"
        aria-label="Open: Mental Workload Classification EEG-Based"
        className="
          group relative overflow-hidden rounded-2xl
          bg-white/5 ring-1 ring-white/10
          lg:col-span-3 lg:row-span-2
        "
      >
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

        <div className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="text-base font-semibold">
            Mental Workload Classification EEG-Based
          </h3>
          <p className="mt-1 text-sm text-white/80 line-clamp-2">
            Python, PyTorch, Scikit-learn.
          </p>
        </div>

        <div
          className="
            pointer-events-none absolute inset-0 flex items-end
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100 focus-within:opacity-100
          "
        >
          <div aria-hidden className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div className="relative z-10 p-5 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-lg font-semibold">
              Mental Workload Classification EEG-Based
            </h3>
            <p className="mt-2 text-sm text-white/90 text-justify">
              Converts raw brain signals into actionable insights for cognitive load
              monitoring. Built an end-to-end pipeline (signal preprocessing, feature
              representation, TabNet-based classifier, and evaluation) to distinguish low,
              moderate, and high workload levels. The TabNet architecture’s attentive feature
              selection supports interpretable predictions suitable for real-time decision
              support in learning and work settings.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {['Python', 'Scikit-learn', 'PyTorch'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>

      {/* PORTFOLIO WEBSITE – normal tile */}
      <Link
        href="#"
        aria-label="Open: Portfolio Website"
        className="
          group relative overflow-hidden rounded-2xl
          bg-white/5 ring-1 ring-white/10
          lg:col-span-3
        "
      >
        <div className="absolute inset-0">
          <Image
            src="/asset/Porto.png"
            alt="Portfolio Website"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="text-base font-semibold">Portfolio Website</h3>
          <p className="mt-1 text-sm text-white/80 line-clamp-2">
            Next.js, Tailwind, bento grid & deployment.
          </p>
        </div>

        <div
          className="
            pointer-events-none absolute inset-0 flex items-end
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100 focus-within:opacity-100
          "
        >
          <div aria-hidden className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div className="relative z-10 p-5 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-lg font-semibold">Portfolio Website</h3>
            <p className="mt-2 text-sm text-white/90 text-justify">
              Built a fast, responsive portfolio with Next.js & Tailwind—bento-grid projects,
              micro-animations, dark mode, SEO/OG tags, optimized images, and contact links;
              deployed on Vercel.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {['Next.js', 'Tailwind'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wide rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  </div>
</section>


        <section
  id="contact"
  className="
    w-full
    scroll-mt-20
    px-4 sm:px-6 lg:px-8
    py-16 sm:py-20 lg:py-24
  "
>
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <div className="flex flex-col items-center text-center">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
        <span className="inline-block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
          Contact
        </span>
      </h1>
      <h2 className="mt-4 font-bold text-2xl sm:text-3xl md:text-4xl text-white">
        Let&apos;s work together!
      </h2>
      <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/70">
        These are some contacts you can reach out to and a snapshot of the skills I use most often.
      </p>
      <div className="mt-5 h-1 w-24 sm:w-32 md:w-40 rounded-4xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500" />
    </div>

    {/* GRID CONTACTS */}
    <div
      className="
        mt-10
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-6
        gap-4 sm:gap-5
        [grid-auto-rows:13rem]
        sm:[grid-auto-rows:14rem]
        mb-4 sm:mb-8 lg:mb-12
      "
    >
      {/* EMAIL – besar (3 kolom x 2 baris di desktop) */}
      <a
        href="mailto:pratamabevan@gmail.com"
        className="
          group relative overflow-hidden rounded-2xl p-[1px]
          bg-gradient-to-r from-cyan-500/40 via-sky-400/40 to-blue-500/40
          lg:col-span-3 lg:row-span-2
        "
        aria-label="Email Me"
      >
        <div
          className="
            relative h-full w-full rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6
            shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl
          "
        >
          {/* Glow on hover */}
          <span
            aria-hidden
            className="
              pointer-events-none absolute inset-0 rounded-2xl
              opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-cyan-500/20 via-sky-400/20 to-blue-500/20
              blur-xl transition-opacity duration-300
            "
          />
          {/* Icon */}
          <div
            className="
              mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
              bg-white/5 ring-1 ring-white/10
            "
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 6h16v12H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </div>

          <h3 className="text-lg font-semibold">Email</h3>
          <p className="mt-1 text-sm text-white/80">pratamabevan@gmail.com</p>

          {/* CTA muncul saat hover */}
          <div
            className="
              pointer-events-none absolute inset-0 flex items-center justify-center
              opacity-0 transition-opacity duration-300 group-hover:opacity-100
            "
          >
            <span className="rounded-full bg-black/60 px-3 py-1 text-sm backdrop-blur">
              Send Message →
            </span>
          </div>
        </div>
      </a>

      {/* WHATSAPP – lebar (3 kolom di desktop) */}
      <a
        href="https://wa.me/628882030708"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group relative overflow-hidden rounded-2xl p-[1px]
          bg-gradient-to-r from-green-500/40 via-emerald-400/40 to-teal-400/40
          lg:col-span-3
        "
        aria-label="WhatsApp"
      >
        <div
          className="
            relative h-full w-full rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6
            shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl
          "
        >
          <div
            className="
              mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
              bg-white/5 ring-1 ring-white/10
            "
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20 11.5A8.5 8.5 0 1 1 11.5 3 8.5 8.5 0 0 1 20 11.5z" />
              <path d="M5 19l1.5-4.5" />
              <path d="M8 10c1 2 3 3 5 4l2-2" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">WhatsApp</h3>
          <p className="mt-1 text-sm text-white/80">+62 888-203-0708</p>
          <div className="mt-3 inline-flex items-center gap-2 text-sm text-emerald-300">
            Chat Now
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </a>

      {/* INSTAGRAM – lebar (3 kolom di desktop) */}
      <a
        href="https://instagram.com/bevaaann"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group relative overflow-hidden rounded-2xl p-[1px]
          bg-gradient-to-r from-fuchsia-500/40 via-rose-500/40 to-amber-400/40
          lg:col-span-3
        "
        aria-label="Instagram"
      >
        <div
          className="
            relative h-full w-full rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6
            shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl
          "
        >
          {/* Glow on hover */}
          <span
            aria-hidden
            className="
              pointer-events-none absolute inset-0 rounded-2xl
              opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-fuchsia-500/20 via-rose-500/20 to-amber-400/20
              blur-xl transition-opacity duration-300
            "
          />
          {/* Icon */}
          <div
            className="
              mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
              bg-white/5 ring-1 ring-white/10
            "
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
            </svg>
          </div>

          <h3 className="text-lg font-semibold">Instagram</h3>
          <p className="mt-1 text-sm text-white/80">@bevaaann</p>

          <div className="mt-3 inline-flex items-center gap-2 text-sm text-rose-300">
            Open Profile
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </a>

      {/* LINKEDIN – kecil (2 kolom di desktop) */}
      <a
        href="https://www.linkedin.com/in/pratamabevan/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group relative overflow-hidden rounded-2xl p-[1px]
          bg-gradient-to-r from-sky-500/40 via-blue-500/40 to-indigo-500/40
          lg:col-span-2
        "
        aria-label="LinkedIn"
      >
        <div
          className="
            relative h-full w-full rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6
            shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl
          "
        >
          <div
            className="
              mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
              bg-white/5 ring-1 ring-white/10
            "
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M6 6a2 2 0 11-.001-4.001A2 2 0 016 6zM4 8h4v12H4zM14.5 8A4.5 4.5 0 0010 12.5V20h4v-6a2 2 0 114 0v6h4v-7a5 5 0 00-7.5-4.33z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">LinkedIn</h3>
          <p className="mt-1 text-sm text-white/80">pratamabevan</p>
          <span className="mt-3 inline-flex items-center text-sm text-sky-300">
            Connect
            <svg
              className="ml-2 h-4 w-4 animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </a>

      {/* GITHUB – kecil (2 kolom di desktop) */}
      <a
        href="https://github.com/prtmbvn"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group relative overflow-hidden rounded-2xl p-[1px]
          bg-gradient-to-r from-zinc-200/20 via-zinc-400/20 to-zinc-600/20
          lg:col-span-2
        "
        aria-label="GitHub"
      >
        <div
          className="
            relative h-full w-full rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6
            shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl
          "
        >
          <div
            className="
              mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
              bg-white/5 ring-1 ring-white/10
            "
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.07 3.29 9.36 7.86 10.88.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.37-3.87-1.37-.52-1.31-1.27-1.66-1.27-1.66-1.04-.7.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.76.4-1.24.73-1.52-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.3 1.18-3.12-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.19a10.9 10.9 0 0 1 5.74 0C17.4 5.31 18.36 5.62 18.36 5.62c.62 1.59.23 2.76.11 3.05.74.82 1.18 1.86 1.18 3.12 0 4.44-2.7 5.41-5.27 5.7.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.79.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">GitHub</h3>
          <p className="mt-1 text-sm text-white/80">prtmbvn</p>
          <span className="mt-3 inline-flex items-center text-sm text-zinc-300">
            View Repos
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </a>

      {/* SKILLS – tinggi (2 kolom x 2 baris di desktop) */}
      <div
        className="
          group relative overflow-hidden rounded-2xl p-[1px]
          bg-gradient-to-r from-cyan-500/40 via-sky-400/40 to-blue-500/40
          lg:col-span-2 lg:row-span-2
        "
      >
        <div
          className="
            relative h-full w-full rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6
            shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl
          "
        >
          <h3 className="text-lg font-semibold">Skills</h3>
          <p className="mt-1 text-sm text-white/80">Tech I use most</p>

          {/* Chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              'Next.js',
              'Laravel',
              'Tailwind',
              'Python',
              'Pandas',
              'SQL',
              'TensorFlow',
              'PyTorch',
              'React.js',
              'PHP',
              'JavaScript',
              'Vue.js',
              'Django',
              'Golang',
            ].map((s, i) => (
              <span
                key={i}
                className="
                  text-xs rounded-full px-2.5 py-1.5 bg-white/5 ring-1 ring-white/10
                  hover:bg-white/10 hover:ring-white/20 transition-colors
                "
              >
                {s}
              </span>
            ))}
          </div>

          {/* Progress style bar (visual) */}
          <div className="mt-6 h-2 w-full rounded-full bg-white/5 overflow-hidden ring-1 ring-white/10">
            <div
              className="
                h-full w-2/3
                bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500
                animate-pulse
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>     
    </main>
  );
}

