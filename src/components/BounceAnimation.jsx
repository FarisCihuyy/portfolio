"use client";

import { motion as Motion } from "framer-motion"; // perhatikan: pakai M besar!

function bounceEase(x) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}

export const BounceAnimation = ({ children, className, delay }) => {
  return (
    <Motion.div
      className={className}
      initial={{ y: -20 }}
      whileInView={{ y: 0 }}
      transition={{
        duration: 1.2,
        ease: bounceEase,
        delay,
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </Motion.div>
  );
};

export default BounceAnimation;
