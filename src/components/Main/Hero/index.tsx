"use client";
import { motion, useAnimation } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { debounce } from "lodash";

const Hero = () => {
  // const [scrollY, setScrollY] = useState(0);
  // const controls = useAnimation();

  // const handleScroll = debounce(() => {
  //   setScrollY(window.scrollY);
  // }, 50);

  // useLayoutEffect(() => {
  //   controls.start({ opacity: 1 - scrollY / 150 });
  // }, [scrollY, controls]);

  // useLayoutEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);

  return (
    <section className="fixed inset-0 z-0 flex flex-col justify-end h-[90svh] mx-auto w-full max-w-7xl px-4 xl:px-0 overflow-hidden">
      <p className="z-10 font-bold">
        <motion.span
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="block mt-5 text-[6rem] md:text-[8rem]"
        >
          {/* <span className="relative">
            <motion.span
              initial={{ opacity: 1 }}
              animate={controls}
              className="absolute z-10 top-0 bottom-0"
            > */}
          Hello,
          {/* </motion.span> */}
          {/* <span className="absolute z-0 top-0 bottom-0 text-red-500"> */}
          {/* Hell */}
          {/* </span> */}
          {/* </span> */}
          {/* &#8203; */}
        </motion.span>
        <motion.span
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="block text-[2.7rem] md:text-[5rem]"
        >
          I am Nikolaos
        </motion.span>
        <motion.span
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="block mt-10 text-[1rem] md:text-[2rem] text-gray-500"
        >
          A Frontend Developer based in Greece
        </motion.span>
      </p>
    </section>
  );
};

export default Hero;
