"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col justify-end h-[90vh] mx-auto w-full max-w-7xl px-4 xl:px-0">
      <p className="z-10 font-bold">
        <motion.span
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="block mt-5 text-6xl md:text-9xl"
        >
          Hello,
        </motion.span>
        <motion.span
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="block mt-5 text-4xl md:text-7xl"
        >
          I am Nikolaos
        </motion.span>
        <motion.span
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="block mt-8 text-lg md:text-3xl text-gray-500"
        >
          A Frontend Developer based in Greece
        </motion.span>
      </p>
    </section>
  );
};

export default Hero;
