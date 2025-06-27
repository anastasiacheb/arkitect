'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function AnimationParallax({ children, simple, depth = 300 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useParallax(scrollYProgress, depth);

  return (
    <motion.div ref={ref} style={{ y }} className={`${simple ? '' : 'absolute '} w-full h-full will-change-transform`}>
      {children}
    </motion.div>
  );
}
