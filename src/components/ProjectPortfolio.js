"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const categories = ["All", "Residential", "Commercial", "Hospitality"];

export default function ProjectPortfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="space-y-12">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DFD7] pb-6">
        <div className="flex flex-wrap items-center gap-2 sm:gap-6">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count =
              cat === "All"
                ? projects.length
                : projects.filter(
                    (p) => p.category.toLowerCase() === cat.toLowerCase()
                  ).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative py-2 px-3 text-xs tracking-[0.2em] uppercase font-sans transition-colors duration-200 flex items-center gap-1.5 focus:outline-none ${
                  isActive
                    ? "text-[#242521] font-semibold"
                    : "text-[#77766F] hover:text-[#242521]"
                }`}
                aria-pressed={isActive}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-none ${
                    isActive
                      ? "bg-[#242521] text-[#F5F3EE]"
                      : "bg-[#E9E6DF] text-[#77766F]"
                  }`}
                >
                  {count}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="categoryUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#777B63]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="text-xs text-[#77766F] font-mono tracking-wider hidden sm:block">
          Showing {filteredProjects.length} of {projects.length} works
        </div>
      </div>

      {/* Portfolio Responsive Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
      >
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <ProjectCard
                project={project}
                index={idx}
                aspectRatio="aspect-[16/11]"
                showSummary={true}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
