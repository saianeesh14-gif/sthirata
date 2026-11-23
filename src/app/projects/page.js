import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectPortfolio from "@/components/ProjectPortfolio";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Architectural Projects & Portfolio | Residential, Commercial & Hospitality",
  description:
    "Explore the architectural portfolio of STHIRATA CONCEPTS & DESIGNS — modern vacation villas, coastal cottages, boutique hospitality, and biophilic commercial spaces.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#242521]">
      <Navbar />

      <main className="pt-36 md:pt-48 pb-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <FadeIn>
            <div className="max-w-4xl space-y-4">
              <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#777B63] font-medium">
                <span>01</span>
                <span>/</span>
                <span>ARCHITECTURAL ARCHIVE</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#242521] leading-tight tracking-[-0.01em]">
                Selected Works & Spatial Studies
              </h1>
              <p className="text-base md:text-lg font-sans text-[#77766F] leading-relaxed max-w-2xl font-light">
                An ongoing exploration of contemporary residential architecture, intimate hospitality spaces,
                and sustainable modular engineering.
              </p>
            </div>
          </FadeIn>

          {/* Interactive Filterable Grid */}
          <FadeIn delay={0.15}>
            <ProjectPortfolio />
          </FadeIn>

          {/* Project Archive Context Box */}
          <FadeIn delay={0.3}>
            <div className="p-8 md:p-12 bg-[#E9E6DF] border-t-2 border-[#242521] grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-20">
              <div className="md:col-span-8 space-y-3">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#777B63] font-semibold">
                  Custom Inquiries & Feasibility
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#242521]">
                  Commission an architectural concept for your site.
                </h3>
                <p className="text-xs md:text-sm font-sans text-[#77766F] leading-relaxed">
                  Every site possesses unique sun angles, wind currents, and local material traditions.
                  We carry out comprehensive pre-design feasibility and climatic site mapping.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-start md:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#242521] text-[#F5F3EE] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#777B63] transition-colors"
                >
                  <span>Start Discussion</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
