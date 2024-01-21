"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
      }}
      className="h-screen max-h-[90vh] opacity-100"
    >
      <ProjectsCarousel />
    </motion.section>
  );
};

export default Projects;
