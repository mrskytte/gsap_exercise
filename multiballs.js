"use strict";

import { gsap } from "gsap";

gsap.from(".ball", {
  duration: 2.5,
  stagger: 0.2,
  y: -400,
  ease: "bounce.out"
});
