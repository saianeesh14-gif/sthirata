"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#E2DFD7] py-3.5 shadow-[0_4px_24px_rgba(36,37,33,0.03)]"
            : "bg-transparent py-5 md:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none"
            aria-label="STHIRATA CONCEPTS & DESIGNS - Home"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.18em] uppercase font-light text-[#242521] group-hover:text-[#777B63] transition-colors duration-300">
              STHIRATA
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-[#77766F] font-sans -mt-1 group-hover:text-[#242521] transition-colors duration-300">
              CONCEPTS & DESIGNS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center space-x-10 text-xs tracking-[0.2em] uppercase font-medium"
          >
            {siteConfig.navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-300 ${
                    isActive
                      ? "text-[#242521] font-semibold"
                      : "text-[#77766F] hover:text-[#242521]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#777B63]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#242521] text-[#242521] text-[11px] tracking-[0.2em] uppercase hover:bg-[#242521] hover:text-[#F5F3EE] transition-all duration-300"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#242521] hover:text-[#777B63] transition-colors focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Editorial Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F5F3EE] md:hidden flex flex-col justify-between px-8 pt-28 pb-12 overflow-y-auto"
          >
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#77766F] block mb-4">
                Directory
              </span>
              <nav className="flex flex-col space-y-5">
                {siteConfig.navLinks.map((link, idx) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`font-serif text-3xl tracking-[0.05em] flex items-center justify-between border-b border-[#E2DFD7] pb-3 ${
                          isActive
                            ? "text-[#777B63] italic"
                            : "text-[#242521] hover:text-[#777B63]"
                        }`}
                      >
                        <span>{link.name}</span>
                        <span className="text-xs font-sans tracking-[0.2em] text-[#77766F]">
                          0{idx + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="pt-10 border-t border-[#E2DFD7] space-y-6"
            >
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#77766F] mb-1">
                  Studio Inquiries
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm font-sans text-[#242521] hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
                <p className="text-sm font-sans text-[#77766F] mt-1">
                  {siteConfig.contact.phoneDisplay}
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#77766F] mb-1">
                  Practice
                </p>
                <p className="text-xs font-sans text-[#242521]">
                  Architecture & Interior Design
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
