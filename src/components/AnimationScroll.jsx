'use client';
import { motion } from 'motion/react';

export default function AnimationScroll({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeOut', duration: 0.7 }}
      viewport={{ once: true, amount: 0.5 }}>
      {children}
    </motion.div>
  );
}
