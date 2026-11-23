"use client";

import { motion } from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // refined cubic bezier ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
