export default function SectionHeading({
  tag,
  title,
  subtitle,
  description,
  alignment = "left",
  light = false,
  className = "",
  children,
}) {
  const isCenter = alignment === "center";

  return (
    <div
      className={`space-y-4 ${
        isCenter ? "text-center max-w-3xl mx-auto" : "max-w-4xl"
      } ${className}`}
    >
      {tag && (
        <div
          className={`flex items-center gap-3 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <span
            className={`text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-sans font-medium ${
              light ? "text-[#949980]" : "text-[#777B63]"
            }`}
          >
            {tag}
          </span>
          <span
            className={`w-8 h-[1px] ${
              light ? "bg-[#383934]" : "bg-[#DDD9D0]"
            }`}
          />
        </div>
      )}

      {title && (
        <h2
          className={`font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-[-0.01em] leading-[1.12] ${
            light ? "text-[#F5F3EE]" : "text-[#242521]"
          }`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`font-serif italic text-xl md:text-2xl font-normal ${
            light ? "text-[#DDD9D0]" : "text-[#77766F]"
          }`}
        >
          {subtitle}
        </p>
      )}

      {description && (
        <p
          className={`text-sm md:text-base font-sans leading-relaxed pt-1 ${
            light ? "text-[#E9E6DF]/75" : "text-[#77766F]"
          }`}
        >
          {description}
        </p>
      )}

      {children && <div className="pt-2">{children}</div>}
    </div>
  );
}
