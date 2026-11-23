import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import { siteConfig } from "@/data/siteData";

export const metadata = {
  title: "Contact STHIRATA | Architectural Commissions & Inquiries",
  description:
    "Connect with STHIRATA CONCEPTS & DESIGNS for new residential, commercial, or hospitality architectural commissions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#242521]">
      <Navbar />

      <main className="pt-36 md:pt-48 pb-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Page Heading */}
          <FadeIn>
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#777B63] font-medium">
                <span>01</span>
                <span>/</span>
                <span>COMMISSION & DIALOGUE</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#242521] leading-tight tracking-[-0.01em]">
                Contact STHIRATA
              </h1>
              <p className="text-base md:text-lg font-sans text-[#77766F] leading-relaxed font-light">
                We accept private residential, hospitality, and commercial inquiries.
                Reach out to schedule an initial design consultation or site feasibility review.
              </p>
            </div>
          </FadeIn>

          {/* Contact Layout: Left Info & Right Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Studio Details */}
            <div className="lg:col-span-5 space-y-10">
              <FadeIn delay={0.1}>
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#242521]">
                    Studio Information
                  </h3>
                  <p className="text-sm font-sans text-[#77766F] leading-relaxed">
                    Direct communications are handled by our principal architectural team.
                    Feel free to call or write to initiate an exploratory conversation.
                  </p>
                </div>
              </FadeIn>

              {/* Direct Channels */}
              <FadeIn delay={0.2}>
                <div className="space-y-6 border-t border-[#E2DFD7] pt-6 font-sans">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#777B63] font-semibold block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-base md:text-lg text-[#242521] hover:text-[#777B63] transition-colors font-medium flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-[#777B63]" />
                      <span className="break-all">{siteConfig.contact.email}</span>
                    </a>
                    <p className="text-xs text-[#77766F]">
                      Inquiries, client briefs, and tender submissions.
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5 border-t border-[#E2DFD7] pt-4">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#777B63] font-semibold block">
                      Telephone
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-base md:text-lg text-[#242521] hover:text-[#777B63] transition-colors font-medium flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-[#777B63]" />
                      <span>{siteConfig.contact.phoneDisplay}</span>
                    </a>
                    <p className="text-xs text-[#77766F]">
                      Direct phone consultations: Mon – Sat, 9:30 AM – 6:30 PM IST.
                    </p>
                  </div>

                  {/* Practice Hubs */}
                  <div className="space-y-3 border-t border-[#E2DFD7] pt-4">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#777B63] font-semibold block">
                      Studio Practice
                    </span>
                    <div className="space-y-3 text-xs text-[#77766F]">
                      {siteConfig.contact.locations.map((loc) => (
                        <div key={loc.title} className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-[#777B63] shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-[#242521] block">
                              {loc.title}
                            </strong>
                            <span>{loc.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="space-y-1.5 border-t border-[#E2DFD7] pt-4">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#777B63] font-semibold block">
                      Studio Hours
                    </span>
                    <div className="flex items-center gap-2 text-xs text-[#242521]">
                      <Clock className="w-4 h-4 text-[#777B63]" />
                      <span>{siteConfig.contact.hours}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.25}>
                <div className="space-y-4">
                  <span className="text-xs tracking-[0.25em] uppercase text-[#777B63] font-medium">
                    02 / SUBMIT AN INQUIRY
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#242521] mb-6">
                    Project Consultation Form
                  </h2>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
