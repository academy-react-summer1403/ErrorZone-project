import { useScroll, useMotionValueEvent, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  // Listen to scroll events and update progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "5px",
        width: "100%",
        backgroundColor: "#e0e0e0",
        zIndex: 1000,
        direction: "ltr"
      }}
    >
      <div
        style={{
          height: "100%",
          backgroundColor: "#0070f3",
          transformOrigin: "0%",
          width: `${progress * 100}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
