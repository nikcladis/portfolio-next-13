"use client";
import { motion, useAnimation } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { debounce } from "lodash";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  const handleScroll = debounce(() => {
    setScrollY(window.scrollY);
  }, 50);

  useLayoutEffect(() => {
    controls.start({ opacity: 1 - scrollY / 150 });
  }, [scrollY, controls]);

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className="fixed inset-0 z-0 flex flex-col justify-end h-[90svh] lg:h-[100svh] mx-auto w-full max-w-7xl px-8 xl:px-0 overflow-hidden">
      <p className="z-10 font-bold">
        <span className="block text-[5rem] md:text-[8rem]">
          <span className="relative">
            <motion.span
              initial={{ opacity: 1 }}
              animate={controls}
              className="absolute z-10 top-0 bottom-0"
            >
              Hello,
            </motion.span>
            <span className="absolute z-0 top-0 bottom-0 text-red-600">
              Hell
            </span>
          </span>
          &#8203;
        </span>
        <span className="block text-[2.7rem] md:text-[5rem]">
          I am Nikolaos
        </span>
        <span className="block font-normal mt-8 text-[1rem] md:text-[2rem] text-zinc-500">
          A Frontend Developer based in Greece
        </span>
      </p>
    </section>
  );
};

export default Hero;
