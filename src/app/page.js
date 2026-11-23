import Link from "next/link";
import { ArrowUpRight, ArrowRight, Compass, Layers, ShieldCheck, SunMedium } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import ProjectImage from "@/components/ProjectImage";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/siteData";

export default function HomePage() {
  const selectedProjects = projects.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#242521] selection:bg-[#777B63] selection:text-[#FFFFFF]">
      <Navbar />

      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="relative min-h-[92vh] md:min-h-screen flex items-end pb-16 md:pb-24 pt-32 px-6 md:px-12 bg-[#242521] text-[#F5F3EE] overflow-hidden">
        {/* Architectural Background Media */}
        <div className="absolute inset-0 z-0">
          <ProjectImage
            src="https://static.wixstatic.com/media/51ed44_788bb6426b824d01b5554a4cfec8996a~mv2.png/v1/fill/w_1920,h_1080,al_c,q_90/Picture5.png"
            fallbackSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85"
            alt="STHIRATA architectural facade study"
            fill
            priority
            className="opacity-45 scale-100 object-center filter saturate-[0.85]"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#242521] via-[#242521]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#242521]/70 via-transparent to-[#242521]/40" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-6">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#777B63] animate-pulse" />
                  <span className="text-[11px] md:text-xs tracking-[0.3em] uppercase font-sans text-[#E9E6DF]/85 font-medium">
                    Architecture & Interior Design Practice
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] leading-[1.05] text-[#F5F3EE]">
                  Architecture rooted in{" "}
                  <span className="italic font-normal text-[#DDD9D0]">balance.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-base md:text-lg font-sans text-[#E9E6DF]/80 max-w-2xl leading-relaxed font-light">
                  STHIRATA designs spaces grounded in context, function, and clarity.
                  Crafting contemporary residential retreats, commercial spaces, and public
                  pavilions that respond thoughtfully to climate, material honesty, and human use.
                </p>
              </FadeIn>

              <FadeIn delay={0.55}>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F5F3EE] text-[#242521] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#777B63] hover:text-[#FFFFFF] transition-all duration-300"
                  >
                    <span>Explore Projects</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#E9E6DF]/30 text-[#F5F3EE] text-xs tracking-[0.2em] uppercase font-medium hover:border-[#F5F3EE] transition-all duration-300"
                  >
                    <span>Our Philosophy</span>
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Architectural Index Badge */}
            <div className="lg:col-span-4 hidden lg:block text-right">
              <FadeIn delay={0.6}>
                <div className="inline-block border-l border-[#383934] pl-6 text-left space-y-3">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#77766F] block">
                    Discipline Directory
                  </span>
                  <p className="text-xs font-sans text-[#E9E6DF]/80 leading-relaxed">
                    01 · Luxury Residential Architecture<br />
                    02 · Hospitality & Eco-Cottages<br />
                    03 · Commercial & F&B Interiors<br />
                    04 · Modular Sustainable Public Pavilions
                  </p>
                  <p className="text-[11px] font-mono text-[#949980]">
                    12.9716° N, 77.5946° E
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          INTRODUCTION SECTION: THE ETHOS
          ======================================================== */}
      <section className="py-24 md:py-36 px-6 md:px-12 border-b border-[#E2DFD7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Sanskrit Concept & Statement */}
            <div className="lg:col-span-5 space-y-6">
              <FadeIn>
                <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#777B63] font-medium">
                  <span>01</span>
                  <span>/</span>
                  <span>THE PRACTICE</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#242521] leading-tight">
                  Spaces shaped by restraint, permanence, and regional context.
                </h2>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="p-6 bg-[#E9E6DF] border-l-2 border-[#777B63] space-y-2">
                  <span className="text-xs font-serif italic text-[#777B63]">
                    Etymology & Identity
                  </span>
                  <p className="text-sm font-sans text-[#242521] leading-relaxed">
                    <strong>Sthiratā (स्थिरता)</strong> embodies stability, steadfastness,
                    and fortitude. In our architecture, it represents structures that stand
                    grounded against seasonal extremes and remain relevant for decades.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Detailed Introduction Narrative */}
            <div className="lg:col-span-7 space-y-6 text-[#242521] font-sans">
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl font-light leading-relaxed text-[#242521]">
                  STHIRATA stands for stability and balance in architecture. Our work is grounded
                  in context, function, and clarity. We design spaces that respond thoughtfully
                  to climate, material, and human use.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-sm md:text-base text-[#77766F] leading-relaxed">
                  We believe stability comes from simplicity. Through restrained forms, honest
                  materials, and efficient planning, we create architecture that feels calm and
                  enduring. Light, ventilation, and proportion are carefully considered to
                  enhance everyday experience.
                </p>
              </FadeIn>

              {/* 3 Value Pillars */}
              <FadeIn delay={0.4}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E2DFD7]">
                  <div className="space-y-2">
                    <SunMedium className="w-5 h-5 text-[#777B63]" />
                    <h4 className="font-serif text-lg text-[#242521]">Climate Driven</h4>
                    <p className="text-xs text-[#77766F] leading-relaxed">
                      Passive shading, courtyards, and airflow tailored to South India’s tropical zones.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Layers className="w-5 h-5 text-[#777B63]" />
                    <h4 className="font-serif text-lg text-[#242521]">Honest Materials</h4>
                    <p className="text-xs text-[#77766F] leading-relaxed">
                      Exposed brick, natural stone, textured lime plaster, and warm regional hardwoods.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <ShieldCheck className="w-5 h-5 text-[#777B63]" />
                    <h4 className="font-serif text-lg text-[#242521]">Built to Endure</h4>
                    <p className="text-xs text-[#77766F] leading-relaxed">
                      Timeless geometry and resilient construction that age gracefully without obsolescence.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SELECTED PROJECTS: ASYMMETRIC EDITORIAL GRID
          ======================================================== */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E2DFD7] pb-8">
            <SectionHeading
              tag="02 / SELECTED WORKS"
              title="Architectural Portfolio"
              subtitle="Residential retreats, commercial hubs, and hospitality sanctuaries."
              description="A curated survey of residential retreats, boutique commercial spaces, and built architectural concepts."
            />

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#242521] hover:text-[#777B63] transition-colors pb-1 border-b border-[#242521] hover:border-[#777B63] shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Asymmetric Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Project 1: Vacation Villa (Large feature span) */}
            <div className="md:col-span-8">
              <FadeIn>
                <ProjectCard
                  project={selectedProjects[0]}
                  index={0}
                  aspectRatio="aspect-[16/10]"
                  showSummary={true}
                  priority={true}
                />
              </FadeIn>
            </div>

            {/* Project 2: Holiday Cottage (Vertical complementary feature) */}
            <div className="md:col-span-4">
              <FadeIn delay={0.15}>
                <ProjectCard
                  project={selectedProjects[1]}
                  index={1}
                  aspectRatio="aspect-[4/5]"
                  showSummary={true}
                />
              </FadeIn>
            </div>

            {/* Project 3: Jihad Residence (Balanced feature) */}
            <div className="md:col-span-6">
              <FadeIn delay={0.2}>
                <ProjectCard
                  project={selectedProjects[2]}
                  index={2}
                  aspectRatio="aspect-[16/11]"
                  showSummary={true}
                />
              </FadeIn>
            </div>

            {/* Project 4: Cafe Bangalore (Balanced feature) */}
            <div className="md:col-span-6">
              <FadeIn delay={0.25}>
                <ProjectCard
                  project={selectedProjects[3]}
                  index={3}
                  aspectRatio="aspect-[16/11]"
                  showSummary={true}
                />
              </FadeIn>
            </div>

            {/* Project 5: Modular Food Court (Span 7) */}
            <div className="md:col-span-7">
              <FadeIn delay={0.3}>
                <ProjectCard
                  project={selectedProjects[4]}
                  index={4}
                  aspectRatio="aspect-[16/10]"
                  showSummary={true}
                />
              </FadeIn>
            </div>

            {/* Project 6: Frame Residence Bellary (Span 5) */}
            <div className="md:col-span-5">
              <FadeIn delay={0.35}>
                <ProjectCard
                  project={selectedProjects[5]}
                  index={5}
                  aspectRatio="aspect-[16/10]"
                  showSummary={true}
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PHILOSOPHY & SUSTAINABILITY SECTION
          ======================================================== */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#E9E6DF] border-y border-[#D5D2C9]">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeading
            tag="03 / DESIGN PHILOSOPHY"
            title="Permanence through simplicity."
            subtitle="How we practice architecture."
            description="Our approach avoids fleeting trends in favor of architectural proportion, natural airflow, and material tactility."
          />

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.pillars.map((pillar, idx) => (
              <FadeIn key={pillar.number} delay={idx * 0.1}>
                <div className="p-8 bg-[#F5F3EE] h-full flex flex-col justify-between border border-[#DDD9D0] hover:border-[#777B63] transition-colors duration-300">
                  <div className="space-y-4">
                    <span className="font-mono text-xs tracking-wider text-[#777B63] font-semibold">
                      {pillar.number}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#242521]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm font-sans text-[#77766F] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-[#E2DFD7] flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#77766F]">
                    <span>STHIRATA PRINCIPLE</span>
                    <Compass className="w-3.5 h-3.5 text-[#777B63]" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Large Editorial Quote */}
          <FadeIn delay={0.4}>
            <div className="py-12 px-8 md:px-16 bg-[#242521] text-[#F5F3EE] relative overflow-hidden">
              <div className="max-w-3xl space-y-4 relative z-10">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#949980]">
                  Core Commitment
                </span>
                <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light italic leading-snug">
                  “Sustainability is inherent in our approach. By designing buildings that are
                  adaptable, timeless, and well-constructed, we ensure longevity and relevance.”
                </blockquote>
                <p className="text-xs font-sans text-[#E9E6DF]/70 tracking-wider uppercase pt-2">
                  — STHIRATA CONCEPTS & DESIGNS
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          DISCIPLINES & SERVICES
          ======================================================== */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F3EE] border-b border-[#E2DFD7]">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeading
            tag="04 / PRACTICE AREAS"
            title="Comprehensive Design Services"
            subtitle="From master planning to bespoke interior joinery."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.disciplines.map((disc, idx) => (
              <FadeIn key={disc.title} delay={idx * 0.12}>
                <div className="border-t-2 border-[#242521] pt-6 space-y-3">
                  <span className="text-xs font-mono text-[#777B63]">0{idx + 1}</span>
                  <h3 className="font-serif text-2xl text-[#242521]">{disc.title}</h3>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#77766F] font-medium">
                    {disc.subtitle}
                  </p>
                  <p className="text-sm text-[#77766F] font-sans leading-relaxed pt-2">
                    {disc.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT CTA SECTION
          ======================================================== */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto">
          <div className="p-10 md:p-20 bg-[#242521] text-[#F5F3EE] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#949980] block font-medium">
                  Begin a Conversation
                </span>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-[#F5F3EE] leading-tight">
                  Discuss your upcoming architectural commission.
                </h2>
                <p className="text-sm md:text-base font-sans text-[#E9E6DF]/75 max-w-xl leading-relaxed">
                  Whether you are planning a private vacation residence, a bespoke commercial interior,
                  or a sustainable public pavilion, we welcome dialogue with discerning clients.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F5F3EE] text-[#242521] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#949980] hover:text-[#FFFFFF] transition-all duration-300 text-center"
                >
                  <span>Initiate Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#E9E6DF]/30 text-[#F5F3EE] text-xs tracking-[0.2em] uppercase font-medium hover:border-[#F5F3EE] transition-all duration-300 text-center"
                >
                  <span>Direct Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
