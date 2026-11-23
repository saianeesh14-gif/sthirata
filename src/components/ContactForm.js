"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Send, RefreshCw, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteData";

const projectTypes = [
  "Residential Villa",
  "Holiday Cottage / Hospitality",
  "Commercial / Dining Interior",
  "Modular / Biophilic Concept",
  "Interior Architecture & Joinery",
  "Master Planning & Advisory",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "Residential Villa",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) {
      errs.firstName = "First name is required.";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^[+0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid contact phone number.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please include a message of at least 10 characters.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate brief processing delay for realistic UX
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 800);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "Residential Villa",
      location: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="bg-[#E9E6DF] p-8 md:p-12 border border-[#DDD9D0]">
      {/* Explicit Frontend Demonstration Notice */}
      <div className="mb-8 p-4 bg-[#F5F3EE] border-l-2 border-[#777B63] flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-[#777B63] shrink-0 mt-0.5" />
        <div className="text-xs text-[#77766F] leading-relaxed">
          <strong className="text-[#242521] block mb-0.5 font-medium">
            Frontend Demonstration Notice
          </strong>
          This form is operating in interactive demonstration mode. Submissions are processed locally.
          For active commissions and immediate architectural discussions, write directly to{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-[#242521] underline hover:text-[#777B63]"
          >
            {siteConfig.contact.email}
          </a>{" "}
          or call{" "}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="text-[#242521] underline hover:text-[#777B63]"
          >
            {siteConfig.contact.phoneDisplay}
          </a>.
        </div>
      </div>

      <AnimatePresence mode="wait">
        {submittedData ? (
          /* Confirmation state */
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="space-y-6 py-6"
          >
            <div className="flex items-center gap-3 text-[#777B63]">
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-xs tracking-[0.25em] uppercase font-semibold">
                Inquiry Received (Demo Mode)
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-3xl text-[#242521]">
                Thank you, {submittedData.firstName}.
              </h3>
              <p className="text-sm font-sans text-[#77766F] leading-relaxed">
                Your architectural inquiry for a <strong>{submittedData.projectType}</strong>{" "}
                has been simulated successfully in this environment. In a production deployment,
                our design director will review the brief within two business days.
              </p>
            </div>

            <div className="bg-[#F5F3EE] p-5 border border-[#DDD9D0] text-xs font-mono space-y-2 text-[#242521]">
              <p><strong>Name:</strong> {submittedData.firstName} {submittedData.lastName}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Phone:</strong> {submittedData.phone}</p>
              <p><strong>Typology:</strong> {submittedData.projectType}</p>
              {submittedData.location && (
                <p><strong>Site Location:</strong> {submittedData.location}</p>
              )}
              <p className="border-t border-[#E2DFD7] pt-2">
                <strong>Message:</strong> &ldquo;{submittedData.message}&rdquo;
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#242521] text-[#F5F3EE] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#777B63] transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Submit Another Inquiry</span>
              </button>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#242521] text-[#242521] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#242521] hover:text-[#F5F3EE] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Studio Directly</span>
              </a>
            </div>
          </motion.div>
        ) : (
          /* Interactive Form */
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6"
          >
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label
                  htmlFor="firstName"
                  className="block text-[11px] tracking-[0.2em] uppercase font-medium text-[#242521]"
                >
                  First Name <span className="text-[#777B63]">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="e.g. Arjun"
                  className={`w-full px-4 py-3 bg-[#F5F3EE] border text-sm text-[#242521] placeholder-[#77766F]/50 focus:outline-none focus:border-[#777B63] transition-colors ${
                    errors.firstName ? "border-red-600" : "border-[#DDD9D0]"
                  }`}
                  aria-invalid={!!errors.firstName}
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                />
                {errors.firstName && (
                  <p id="firstName-error" className="text-xs text-red-700 font-sans">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="lastName"
                  className="block text-[11px] tracking-[0.2em] uppercase font-medium text-[#242521]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="e.g. Menon"
                  className="w-full px-4 py-3 bg-[#F5F3EE] border border-[#DDD9D0] text-sm text-[#242521] placeholder-[#77766F]/50 focus:outline-none focus:border-[#777B63] transition-colors"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-[11px] tracking-[0.2em] uppercase font-medium text-[#242521]"
                >
                  Email Address <span className="text-[#777B63]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@domain.com"
                  className={`w-full px-4 py-3 bg-[#F5F3EE] border text-sm text-[#242521] placeholder-[#77766F]/50 focus:outline-none focus:border-[#777B63] transition-colors ${
                    errors.email ? "border-red-600" : "border-[#DDD9D0]"
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-700 font-sans">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="block text-[11px] tracking-[0.2em] uppercase font-medium text-[#242521]"
                >
                  Phone Number <span className="text-[#777B63]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-3 bg-[#F5F3EE] border text-sm text-[#242521] placeholder-[#77766F]/50 focus:outline-none focus:border-[#777B63] transition-colors ${
                    errors.phone ? "border-red-600" : "border-[#DDD9D0]"
                  }`}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-xs text-red-700 font-sans">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Project Type & Site Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label
                  htmlFor="projectType"
                  className="block text-[11px] tracking-[0.2em] uppercase font-medium text-[#242521]"
                >
                  Project Typology
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F5F3EE] border border-[#DDD9D0] text-sm text-[#242521] focus:outline-none focus:border-[#777B63] transition-colors"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="location"
                  className="block text-[11px] tracking-[0.2em] uppercase font-medium text-[#242521]"
                >
                  Site Location (City / Region)
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Bangalore, Kannur, Coorg"
                  className="w-full px-4 py-3 bg-[#F5F3EE] border border-[#DDD9D0] text-sm text-[#242521] placeholder-[#77766F]/50 focus:outline-none focus:border-[#777B63] transition-colors"
                />
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="block text-[11px] tracking-[0.2em] uppercase font-medium text-[#242521]"
              >
                Project Scope & Details <span className="text-[#777B63]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your site, built area expectations, preferred timeline, or architectural aspirations..."
                className={`w-full px-4 py-3 bg-[#F5F3EE] border text-sm text-[#242521] placeholder-[#77766F]/50 focus:outline-none focus:border-[#777B63] transition-colors resize-y ${
                  errors.message ? "border-red-600" : "border-[#DDD9D0]"
                }`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-red-700 font-sans">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex items-center justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#242521] text-[#F5F3EE] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#777B63] disabled:opacity-50 transition-all duration-300"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Submit Architectural Brief</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              <span className="text-[10px] tracking-wider uppercase text-[#77766F] hidden sm:inline">
                Confidential & Direct
              </span>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
