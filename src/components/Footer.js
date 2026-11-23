"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteData";
import { projects } from "@/data/projects";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#242521] text-[#F5F3EE] pt-20 pb-12 border-t border-[#383934]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#383934]">
          {/* Brand & Philosophy Statement */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-3xl md:text-4xl tracking-[0.18em] uppercase font-light text-[#F5F3EE] group-hover:text-[#949980] transition-colors">
                STHIRATA
              </span>
              <span className="block text-[10px] tracking-[0.35em] uppercase text-[#77766F] font-sans mt-0.5">
                CONCEPTS & DESIGNS
              </span>
            </Link>
            <p className="text-sm font-sans text-[#E9E6DF]/75 leading-relaxed max-w-md">
              An architectural and interior design practice crafting spaces rooted in balance,
              material honesty, and climatic intelligence. Built to endure with calm proportion.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[10px] tracking-[0.25em] uppercase text-[#949980] border border-[#383934] px-3 py-1.5">
                Architecture & Interior Design
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-[#77766F] font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#E9E6DF]/80 hover:text-[#FFFFFF] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Selected Projects Directory */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-[#77766F] font-sans">
              Projects
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              {projects.slice(0, 5).map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-[#E9E6DF]/70 hover:text-[#FFFFFF] transition-colors line-clamp-1"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  className="text-[#949980] hover:underline text-xs tracking-wider uppercase pt-1 inline-block"
                >
                  View All ({projects.length}) →
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Direct Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-[#77766F] font-sans">
              Inquiries & Commissions
            </h4>
            <div className="space-y-3 text-sm font-sans">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2.5 text-[#E9E6DF] hover:text-[#949980] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#949980] shrink-0" />
                <span className="break-all">{siteConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2.5 text-[#E9E6DF] hover:text-[#949980] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#949980] shrink-0" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
              <div className="flex items-start gap-2.5 text-xs text-[#E9E6DF]/70 pt-1">
                <MapPin className="w-4 h-4 text-[#949980] shrink-0 mt-0.5" />
                <span>Architecture & interior design studio consultations.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Principal Architect Notice */}
        <div className="py-8 border-b border-[#383934] text-xs font-sans text-[#77766F] leading-relaxed">
          <p className="max-w-4xl">
            <span className="text-[#E9E6DF] font-medium mr-2">Architectural Archive:</span>
            {siteConfig.principalNote}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-sans text-[#77766F] gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} STHIRATA CONCEPTS & DESIGNS. All rights reserved.</span>
            <span>Architecture & Interiors</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase text-[#E9E6DF]/80 hover:text-[#FFFFFF] transition-colors group"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
