"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import throttle from "lodash/throttle";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = throttle(() => {
    const winScroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    setProgress(scrolled);
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Progress
      value={progress}
      className="h-1 rounded-none bg-transparent absolute top-0 left-0 right-0"
    />
  );
};

export default ProgressBar;
