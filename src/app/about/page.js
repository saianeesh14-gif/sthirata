import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Compass, Leaf, Maximize2, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import ProjectImage from "@/components/ProjectImage";
import { siteConfig } from "@/data/siteData";

export const metadata = {
  title: "About Our Practice & Architectural Philosophy",
  description:
    "Learn about STHIRATA CONCEPTS & DESIGNS — our approach to contextual architecture, honest materials, and enduring stability across South India.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#242521]">
      <Navbar />

      {/* ========================================================
          ABOUT HERO SECTION
          ======================================================== */}
      <section className="pt-36 md:pt-48 pb-16 md:pb-24 px-6 md:px-12 border-b border-[#E2DFD7]">
        <div className="max-w-7xl mx-auto space-y-8">
          <FadeIn>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#777B63] font-medium">
              <span>01</span>
              <span>/</span>
              <span>ABOUT THE STUDIO</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#242521] leading-[1.05] tracking-[-0.02em] max-w-5xl mt-3">
              Architecture that is steady, purposeful, and built to last.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-2xl font-serif italic text-[#77766F] max-w-3xl leading-relaxed">
              “STHIRATA stands for stability and balance in architecture. Our work is grounded in context, function, and clarity.”
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          MAIN EDITORIAL STORY & ETYMOLOGY
          ======================================================== */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-[#E2DFD7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-6">
              <FadeIn>
                <div className="relative aspect-[4/5] bg-[#E9E6DF] overflow-hidden">
                  <ProjectImage
                    src="https://static.wixstatic.com/media/c837a6_3c2af51c1f2c4e9696b9132fda3267f9~mv2.jpg/v1/crop/x_1382,y_1113,w_2282,h_1885/fill/w_951,h_516,fp_0.50_0.50,q_85,enc_avif,quality_auto/01.jpg"
                    fallbackSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Architectural study from STHIRATA archives"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#242521]/80 backdrop-blur-sm p-4 text-[#F5F3EE] text-xs font-sans">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#949980] block mb-1">
                      Material Tactility
                    </span>
                    Raw stone, crafted timber, and calibrated natural light.
                  </div>
                </div>
              </FadeIn>

              {/* Etymology Card */}
              <FadeIn delay={0.2}>
                <div className="p-6 bg-[#E9E6DF] space-y-3 border-l-2 border-[#777B63]">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#77766F] font-semibold">
                    Etymology & Origin
                  </span>
                  <p className="font-serif text-2xl text-[#242521]">स्थिरता · Sthiratā</p>
                  <p className="text-xs font-sans text-[#77766F] leading-relaxed">
                    A foundational Sanskrit principle denoting firmness, steadfastness, stability,
                    and spiritual equilibrium. In architectural terms, Sthiratā represents structural
                    endurance and timeless harmony with one&apos;s environment.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-8 font-sans text-[#242521]">
              <FadeIn delay={0.15}>
                <div className="space-y-4">
                  <span className="text-xs tracking-[0.25em] uppercase text-[#777B63] font-medium">
                    OUR PHILOSOPHY
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#242521] leading-tight">
                    Stability emerges from simplicity.
                  </h2>
                  <p className="text-base md:text-lg text-[#242521] leading-relaxed font-light">
                    We believe stability comes from simplicity. Through restrained forms, honest materials,
                    and efficient planning, we create architecture that feels calm and enduring.
                    Light, ventilation, and proportion are carefully considered to enhance everyday experience.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="space-y-4 text-sm md:text-base text-[#77766F] leading-relaxed border-t border-[#E2DFD7] pt-6">
                  <h3 className="font-serif text-2xl text-[#242521]">Our Mission</h3>
                  <p>
                    STHIRATA stands for stability and balance in architecture. Our work is grounded in context,
                    function, and clarity. We design spaces that respond thoughtfully to climate, material,
                    and human use.
                  </p>
                  <p>
                    From tranquil private villas to contemporary commercial hubs and hospitality retreats,
                    each commission is conceived as a bespoke response to its site&apos;s topography, sun-path,
                    and natural material resources.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="space-y-4 border-t border-[#E2DFD7] pt-6">
                  <h3 className="font-serif text-2xl text-[#242521]">Specialties</h3>
                  <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#777B63]">
                    {siteConfig.specialties}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-[#E9E6DF]/60 space-y-1">
                      <p className="font-serif text-lg text-[#242521]">Residential Architecture</p>
                      <p className="text-xs text-[#77766F]">
                        Private villas, holiday cottages, multi-generational homes, and tropical courtyards.
                      </p>
                    </div>
                    <div className="p-4 bg-[#E9E6DF]/60 space-y-1">
                      <p className="font-serif text-lg text-[#242521]">Commercial & Hospitality</p>
                      <p className="text-xs text-[#77766F]">
                        Specialty cafes, eco-resort cottages, and sustainable modular dining pavilions.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          DESIGN PRINCIPLES (DETAILED BREAKDOWN)
          ======================================================== */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#E9E6DF] border-b border-[#D5D2C9]">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeading
            tag="02 / ARCHITECTURAL APPROACH"
            title="Four Pillars of Practice"
            subtitle="The tenets that guide every drawing, detail, and material decision."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-8 bg-[#F5F3EE] h-full space-y-4 border border-[#DDD9D0]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#777B63] font-semibold">01</span>
                  <Compass className="w-5 h-5 text-[#777B63]" />
                </div>
                <h3 className="font-serif text-2xl text-[#242521]">Context & Climate Responsiveness</h3>
                <p className="text-sm text-[#77766F] leading-relaxed">
                  We don&apos;t impose prefabricated aesthetics. In South India, heavy monsoons, high solar angles,
                  and fluctuating humidity demand rigorous orientation studies. Deep overhangs, breathable
                  jaalis, and stack-effect cooling ensure comfort with minimal reliance on active energy systems.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-8 bg-[#F5F3EE] h-full space-y-4 border border-[#DDD9D0]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#777B63] font-semibold">02</span>
                  <Maximize2 className="w-5 h-5 text-[#777B63]" />
                </div>
                <h3 className="font-serif text-2xl text-[#242521]">Spatial Proportion & Calm Light</h3>
                <p className="text-sm text-[#77766F] leading-relaxed">
                  Architecture is experienced through light and transition. We carve out courtyards,
                  verandahs, and double-height thresholds that create an unhurried, contemplative rhythm.
                  Light is modulated to avoid harsh glare while maintaining constant visual connection to greenery.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-8 bg-[#F5F3EE] h-full space-y-4 border border-[#DDD9D0]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#777B63] font-semibold">03</span>
                  <Shield className="w-5 h-5 text-[#777B63]" />
                </div>
                <h3 className="font-serif text-2xl text-[#242521]">Material Honesty</h3>
                <p className="text-sm text-[#77766F] leading-relaxed">
                  Materials should speak for themselves. We celebrate the organic grain of seasoned teak,
                  the textural weight of exposed wire-cut brick, the geological permanence of granite, and
                  the breathability of lime stucco. We avoid superficial skins that deteriorate prematurely.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="p-8 bg-[#F5F3EE] h-full space-y-4 border border-[#DDD9D0]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#777B63] font-semibold">04</span>
                  <Leaf className="w-5 h-5 text-[#777B63]" />
                </div>
                <h3 className="font-serif text-2xl text-[#242521]">Inherent Sustainability</h3>
                <p className="text-sm text-[#77766F] leading-relaxed">
                  Sustainability is inherent in our approach. By designing buildings that are adaptable,
                  timeless, and well-constructed, we ensure longevity and relevance. STHIRATA creates
                  architecture that is steady, purposeful, and built to last.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================================
          PRINCIPAL ARCHITECT DISCLOSURE
          ======================================================== */}
      <section className="py-20 px-6 md:px-12 bg-[#F5F3EE] border-b border-[#E2DFD7]">
        <div className="max-w-4xl mx-auto space-y-6">
          <FadeIn>
            <span className="text-xs tracking-[0.25em] uppercase text-[#777B63] font-medium">
              03 / PROFESSIONAL CONTEXT & DISCLOSURE
            </span>
            <h2 className="font-serif text-3xl text-[#242521]">
              The Architectural Archive
            </h2>
            <div className="p-8 bg-[#E9E6DF] border-l-2 border-[#242521] space-y-4 text-sm font-sans text-[#77766F] leading-relaxed">
              <p>
                The projects featured on this website represent the professional work and design experience
                of the principal architect over the years. These works reflect individual involvement across
                various stages of design and execution and are shared to give insight into our approach and capabilities.
              </p>
              <p>
                Some projects were completed as part of earlier professional engagements. They are presented
                here to showcase personal contribution, learning, and design development.
              </p>
              <p className="text-xs font-medium text-[#242521] pt-2">
                If you have any questions regarding the projects shown, feel free to reach out — we are always happy to connect.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          CTA SECTION
          ======================================================== */}
      <section className="py-24 px-6 md:px-12 bg-[#242521] text-[#F5F3EE]">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <FadeIn>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#949980] block font-medium">
              Start a Conversation
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#F5F3EE] leading-tight">
              Let&apos;s build something enduring together.
            </h2>
            <p className="text-sm md:text-base text-[#E9E6DF]/75 max-w-2xl mx-auto leading-relaxed font-light">
              We accept a limited number of architectural commissions each year to ensure uncompromising
              attention to detail and personal involvement across all project stages.
            </p>
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5F3EE] text-[#242521] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#949980] hover:text-[#FFFFFF] transition-all duration-300"
              >
                <span>Inquire With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#E9E6DF]/30 text-[#F5F3EE] text-xs tracking-[0.2em] uppercase font-medium hover:border-[#F5F3EE] transition-all duration-300"
              >
                <span>Browse Projects</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
