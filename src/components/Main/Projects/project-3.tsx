"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const SectionThree = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  return (
    <motion.section
      ref={ref}
      style={{ scale: scrollYProgress }}
      className="z-30 flex h-[100svh] mx-auto w-full max-w-7xl overflow-hidden sticky"
    >
      <div className="mt-24 mx-8 max-w-full bg-gray-800 h-[80%] rounded-xl w-full flex flex-col md:flex-row gap-4">
        {/* <div className="w-full md:w-1/2 bg-gray-800 h-[48%] md:h-full rounded-xl"></div>
        <div className="w-full md:w-1/4 bg-gray-600 h-[23%] md:h-full rounded-xl"></div>
        <div className="w-full md:w-1/4 bg-gray-600 h-[23%] md:h-full rounded-xl"></div> */}
      </div>
    </motion.section>
  );
};

export default SectionThree;
