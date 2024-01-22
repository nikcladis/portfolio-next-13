"use client";

import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Navigation = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="flex items-center justify-between pt-4 pb-3 px-4 border-b backdrop-blur-md"
    >
      <h1 className="hidden sm:flex font-bold">nikcladis.dev</h1>
      <Button variant="ghost" size="icon" className="sm:hidden">
        <Menu />
      </Button>
      <div className="flex items-center">
        <Button variant="ghost" size="icon">
          <a
            href="https://www.twitter.com/nikcladis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="ghost" size="icon">
          <a
            href="https://www.github.com/nikcladis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
};

export default Navigation;
