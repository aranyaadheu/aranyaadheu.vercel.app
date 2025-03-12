'use client'

import { motion } from 'framer-motion';
import { SharedLayout } from '@/components/shared-layout';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function SearchPage() {
  return (
    <SharedLayout>
      <motion.section
        className="prose dark:prose-invert max-w-none"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        <motion.h1 
          className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8"
          variants={fadeInUp}
        >
          Search
        </motion.h1>
        <motion.div 
          className="grid gap-4 sm:gap-8"
          variants={fadeInUp}
        >
          {/* Add search functionality here */}
          <p className="text-sm sm:text-base text-muted-foreground">Coming soon...</p>
        </motion.div>
      </motion.section>
    </SharedLayout>
  );
} 