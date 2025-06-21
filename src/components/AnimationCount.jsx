'use client';
import { motion, useInView, useMotionValue, animate, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';

export default function AnimationCount({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, Number(children), { duration: 1 });
      return () => controls.stop();
    }
  }, [isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
