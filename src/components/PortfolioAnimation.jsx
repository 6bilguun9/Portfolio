// src/components/ProjectsScrollTransition.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PortfolioAnimation() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0.4, 0.6], [1, 20]);

  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 1]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    ["rgba(255, 255, 255, 0)", "rgba(10, 10, 10, 1.0)"]
  );

  return (
    <motion.div
      style={{ backgroundColor }}
      className="overflow-hidden w-full flex items-center justify-center "
    >
      <section className="h-screen flex items-center justify-center bg-transparent">
        <motion.h1
          style={{ scale, opacity, transformOrigin: "center center" }}
          className="text-8xl font-extrabold text-neutral-950 flex items-center justify-center"
        >
          Welcome to Bilguun
        </motion.h1>
      </section>
    </motion.div>
  );
}
