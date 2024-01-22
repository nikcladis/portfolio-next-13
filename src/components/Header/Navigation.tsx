"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
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
      className="w-full flex items-center justify-center px-4 py-2 border-b backdrop-blur-md"
    >
      <div className="w-full max-w-7xl flex items-center justify-between">
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex items-baseline gap-5">
              <NavigationMenuItem className="font-bold cursor-pointer">
                nikcladis.dev
              </NavigationMenuItem>
              <NavigationMenuItem className="font-normal transition-opacity ease 150ms hover:opacity-100 opacity-75 text-sm cursor-pointer">
                About
              </NavigationMenuItem>
              <NavigationMenuItem className="font-normal transition-opacity ease 150ms hover:opacity-100 opacity-75 text-sm cursor-pointer">
                Projects
              </NavigationMenuItem>
              <NavigationMenuItem className="font-normal transition-opacity ease 150ms hover:opacity-100 opacity-75 text-sm cursor-pointer">
                Experience
              </NavigationMenuItem>
              <NavigationMenuItem className="font-normal transition-opacity ease 150ms hover:opacity-100 opacity-75 text-sm cursor-pointer">
                Technologies
              </NavigationMenuItem>
              <NavigationMenuItem className="font-normal transition-opacity ease 150ms hover:opacity-100 opacity-75 text-sm cursor-pointer">
                Contact
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
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
      </div>
    </motion.nav>
  );
};

export default Navigation;
