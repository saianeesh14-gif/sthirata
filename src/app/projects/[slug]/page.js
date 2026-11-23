import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Compass, Layers, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import ProjectImage from "@/components/ProjectImage";
import { projects, getProjectBySlug, getAllProjectSlugs, getAdjacentProjects } from "@/data/projects";

export async function generateStaticParams() {
  return getAllProjectSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.location} | STHIRATA Architecture`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | STHIRATA CONCEPTS & DESIGNS`,
      description: project.summary,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#242521]">
      <Navbar />

      <main className="pt-32 md:pt-40 pb-28">
        {/* ========================================================
            TOP BREADCRUMB & METADATA BAR
            ======================================================== */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
          <FadeIn>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DFD7] pb-6">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-sans text-[#77766F] hover:text-[#242521] transition-colors group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>Return to Projects</span>
              </Link>

              <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-mono text-[#777B63]">
                <span>{project.category}</span>
                <span>·</span>
                <span>{project.year}</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ========================================================
            PROJECT HERO TITLE & SUMMARY
            ======================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <div className="space-y-6 max-w-4xl">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#777B63]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{project.location}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#242521] leading-tight tracking-[-0.01em] mt-2">
                {project.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="font-serif italic text-xl md:text-2xl text-[#77766F] leading-relaxed">
                {project.tagline}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ========================================================
            HERO FULL PHOTOGRAPH
            ======================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <FadeIn delay={0.25}>
            <div className="relative aspect-[16/10] md:aspect-[21/10] w-full bg-[#E9E6DF] overflow-hidden">
              <ProjectImage
                src={project.heroImage}
                fallbackSrc={project.fallbackHero}
                alt={`${project.title} - ${project.location}`}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-[#F5F3EE] bg-[#242521]/75 backdrop-blur-sm px-4 py-2">
                <span>{project.title} · Exterior Elevation Study</span>
                <span className="font-mono">{project.area}</span>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ========================================================
            PROJECT SPECIFICATIONS & DESIGN NARRATIVE
            ======================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Architectural Specifications Table */}
            <div className="lg:col-span-5 space-y-6">
              <FadeIn>
                <div className="bg-[#E9E6DF] p-8 border border-[#DDD9D0] space-y-6">
                  <div className="flex items-center justify-between border-b border-[#D5D2C9] pb-4">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#777B63] font-semibold">
                      Architectural Data
                    </span>
                    <span className="text-xs font-mono text-[#77766F]">
                      {project.id}
                    </span>
                  </div>

                  <dl className="space-y-4 text-xs font-sans">
                    {project.spatialDetails.map((item) => (
                      <div key={item.label} className="border-b border-[#D5D2C9]/60 pb-3">
                        <dt className="text-[10px] tracking-[0.2em] uppercase text-[#77766F] mb-1">
                          {item.label}
                        </dt>
                        <dd className="text-sm font-medium text-[#242521] leading-relaxed">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="pt-2">
                    <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[#77766F]">
                      Status: {project.status}
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Detailed Narrative & Approach */}
            <div className="lg:col-span-7 space-y-8 font-sans">
              <FadeIn delay={0.15}>
                <div className="space-y-4">
                  <span className="text-xs tracking-[0.25em] uppercase text-[#777B63] font-medium">
                    01 / DESIGN BRIEF & DESCRIPTION
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#242521]">
                    Spatial Concept & Intent
                  </h2>
                  <p className="text-base md:text-lg text-[#242521] leading-relaxed font-light">
                    {project.summary}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="space-y-4 border-t border-[#E2DFD7] pt-8">
                  <span className="text-xs tracking-[0.25em] uppercase text-[#777B63] font-medium">
                    02 / CLIMATIC & MATERIAL APPROACH
                  </span>
                  <h3 className="font-serif text-2xl text-[#242521]">
                    Contextual Integration
                  </h3>
                  <p className="text-sm md:text-base text-[#77766F] leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.35}>
                <div className="p-6 bg-[#F5F3EE] border border-[#E2DFD7] space-y-2">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#777B63] font-semibold">
                    Architectural Note
                  </span>
                  <p className="text-xs font-sans text-[#77766F] leading-relaxed">
                    All layouts and volumetric masses were modeled in accordance with regional daylighting
                    charts, natural wind vectors, and local municipal zoning mandates.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ========================================================
            ARCHITECTURAL GALLERY
            ======================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28 border-t border-[#E2DFD7] pt-16">
          <div className="space-y-12">
            <FadeIn>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-xs tracking-[0.25em] uppercase text-[#777B63] font-medium">
                    03 / VISUAL ARCHIVE
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#242521] mt-1">
                    Architectural Perspectives & Details
                  </h2>
                </div>
                <span className="text-xs font-mono text-[#77766F]">
                  {project.gallery.length} Plates Documented
                </span>
              </div>
            </FadeIn>

            <div className="grid grid-cols-12 gap-8 md:gap-10">
              {project.gallery.map((item, idx) => (
                <div key={idx} className={`${item.span}`}>
                  <FadeIn delay={idx * 0.1}>
                    <div className="space-y-3">
                      <div className={`relative ${item.aspect} w-full bg-[#E9E6DF] overflow-hidden group`}>
                        <ProjectImage
                          src={item.url}
                          fallbackSrc={item.fallback}
                          alt={`${project.title} perspective plate ${idx + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 duration-700 ease-out"
                        />
                        <div className="absolute top-3 left-3 bg-[#242521]/75 backdrop-blur-sm text-[#F5F3EE] text-[10px] font-mono px-2 py-0.5">
                          Plate 0{idx + 1}
                        </div>
                      </div>
                      <p className="text-xs text-[#77766F] font-sans leading-relaxed flex items-start gap-2">
                        <span className="text-[#777B63] font-mono font-bold mt-0.5">•</span>
                        <span>{item.caption}</span>
                      </p>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            PREV / NEXT PROJECT NAVIGATION
            ======================================================== */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 border-t border-[#E2DFD7]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prev && (
              <FadeIn>
                <Link
                  href={`/projects/${prev.slug}`}
                  className="p-8 bg-[#E9E6DF] hover:bg-[#DDD9D0] transition-colors block space-y-2 group border border-[#DDD9D0]"
                >
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#77766F] block flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
                    <ArrowLeft className="w-3 h-3" />
                    <span>Previous Project</span>
                  </span>
                  <h4 className="font-serif text-2xl text-[#242521] group-hover:text-[#777B63] transition-colors">
                    {prev.title}
                  </h4>
                  <p className="text-xs text-[#77766F] font-sans">{prev.location}</p>
                </Link>
              </FadeIn>
            )}

            {next && (
              <FadeIn delay={0.1}>
                <Link
                  href={`/projects/${next.slug}`}
                  className="p-8 bg-[#E9E6DF] hover:bg-[#DDD9D0] transition-colors block space-y-2 text-right group border border-[#DDD9D0]"
                >
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#77766F] block flex items-center justify-end gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Next Project</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <h4 className="font-serif text-2xl text-[#242521] group-hover:text-[#777B63] transition-colors">
                    {next.title}
                  </h4>
                  <p className="text-xs text-[#77766F] font-sans">{next.location}</p>
                </Link>
              </FadeIn>
            )}
          </div>

          {/* Direct Commission CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#242521] hover:text-[#777B63] transition-colors border-b border-[#242521] pb-1"
            >
              <span>Inquire About A Similar Architectural Commission</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
