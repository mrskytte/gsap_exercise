"use strict";

import { gsap } from "gsap";

let tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from(".ball:first-child", { ease: "bounce.out", y: -400 });
tl.from(".ball:nth-child(2)", { ease: "bounce.out", y: -300 });
tl.from(".ball:nth-child(3)", { ease: "bounce.out", y: -400 });
tl.from(".ball:nth-child(4)", { ease: "bounce.out", y: -200 });
tl.from(".ball:nth-child(5)", { ease: "bounce.out", y: -600 });

window.addEventListener("click", reverse);

let counter = 1;
function reverse() {
  if (counter === 1) {
    tl.reverse();
    counter = 0;
  } else {
    tl.play();
    counter++;
  }
  console.log("click");
}
