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

export default function TagsPage() {
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
          Tags
        </motion.h1>
        <motion.div 
          className="grid gap-2 sm:gap-4"
          variants={fadeInUp}
        >
          {/* Add tags here */}
          <p className="font-pitch text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Coming soon...</p>
        </motion.div>
      </motion.section>
    </SharedLayout>
  );
} 