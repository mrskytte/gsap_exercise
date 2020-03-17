"use strict";
import { gsap } from "gsap";

gsap.to(".ball", {
  x: 400,
  duration: 2
});
gsap.to(".ball", {
  rotate: 200,
  duration: 2
});
gsap.to(".ball", {
  scale: 0,
  duration: 1,
  delay: 2
});
gsap.to(".ball", {
  y: 50,
  duration: 2,
  delay: 2
});
