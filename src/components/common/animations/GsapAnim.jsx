import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const GsapAnim = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    // gsap code here...
    gsap.from([".box"], { y: 30, opacity: 0, stagger: 0.05 }); // <-- automatically reverted
    gsap.from([".box1"], { y: 30, opacity: 0, stagger: 0.1, duration: 1 }); // <-- automatically reverted
    gsap.from([".box2"], { y: -50, opacity: 0, stagger: 0.1, duration: 1 }); // <-- automatically reverted
    gsap.from([".rightToLeft"], {
      x: 200,
      opacity: 0,
      stagger: 0.1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".rightToLeft",
        start: "top center",
        end: "center center",
        // scrub: true
      },
    }); // <-- automatically reverted
    gsap.from([".leftToRight"], {
      x: -200,
      opacity: 0,
      stagger: 0.1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".leftToRight",
        start: "top center",
        end: "center center",
        // scrub: true
      },
    }); // <-- automatically reverted
    // gsap.to([box1,box2,box3], { y: 0, opacity:1 }); // <-- automatically reverted
  }, null);
};

export default GsapAnim;
