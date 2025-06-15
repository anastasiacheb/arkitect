'use client';
import { motion } from 'motion/react';

export default function Animation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeOut', duration: 1 }}>
      {children}
    </motion.div>
  );
}
