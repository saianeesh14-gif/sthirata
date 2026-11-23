import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProjectImage from "./ProjectImage";

export default function ProjectCard({
  project,
  index,
  aspectRatio = "aspect-[16/11]",
  showSummary = false,
  priority = false,
}) {
  const indexStr = String(index + 1).padStart(2, "0");

  return (
    <article className="group block">
      <Link
        href={`/projects/${project.slug}`}
        className="block focus:outline-none focus:ring-1 focus:ring-[#777B63]"
        aria-label={`View architectural project: ${project.title}, ${project.location}`}
      >
        {/* Architectural Image Container */}
        <div
          className={`relative w-full overflow-hidden bg-[#E9E6DF] ${aspectRatio}`}
        >
          <ProjectImage
            src={project.heroImage}
            fallbackSrc={project.fallbackHero}
            alt={`${project.title} - ${project.location} architecture by STHIRATA`}
            fill
            priority={priority}
            className="group-hover:scale-105 duration-700 ease-out"
          />

          {/* Minimal Hover Overlay */}
          <div className="absolute inset-0 bg-[#242521]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Top category & index indicator */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-[#F5F3EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 drop-shadow-sm">
            <span className="bg-[#242521]/80 backdrop-blur-sm px-2.5 py-1">
              {project.category}
            </span>
            <span className="bg-[#242521]/80 backdrop-blur-sm px-2.5 py-1 font-mono">
              {indexStr}
            </span>
          </div>

          {/* Floating arrow icon on hover */}
          <div className="absolute bottom-4 right-4 w-9 h-9 bg-[#F5F3EE] text-[#242521] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Project Meta Information */}
        <div className="mt-4 pt-2 border-t border-[#E2DFD7] flex items-baseline justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#77766F] font-sans">
                {project.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#777B63]" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#77766F] font-sans">
                {project.category}
              </span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#242521] group-hover:text-[#777B63] transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          <span className="text-xs font-mono text-[#77766F] shrink-0">
            {project.year}
          </span>
        </div>

        {showSummary && project.summary && (
          <p className="mt-2 text-xs md:text-sm text-[#77766F] font-sans line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        )}
      </Link>
    </article>
  );
}
