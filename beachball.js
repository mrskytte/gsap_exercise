"use strict";
import { gsap } from "gsap";

const tl = gsap.timeline();

tl.to(".ball", {
  x: 400,
  rotate: 200,
  duration: 2
}).to(".ball", {
  scale: 0,
  y: -500,
  x: 500,
  duration: 3
});
