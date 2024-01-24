"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const SectionTwo = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  return (
    <motion.section
      ref={ref}
      style={{ scale: scrollYProgress }}
      className="z-20 flex h-[100vh] mx-auto w-full max-w-7xl overflow-hidden sticky top-0"
    >
      <div className="mt-[4.5rem] bg-gray-600 max-w-[98%] h-[80%] rounded-xl w-full flex flex-col md:flex-row gap-4">
        {/* <div className="w-full md:w-1/2 bg-gray-600 h-[48%] md:h-full rounded-xl"></div>
        <div className="w-full md:w-1/4 bg-gray-400 h-[23%] md:h-full rounded-xl"></div>
        <div className="w-full md:w-1/4 bg-gray-400 h-[23%] md:h-full rounded-xl"></div> */}
      </div>
    </motion.section>
  );
};

export default SectionTwo;
