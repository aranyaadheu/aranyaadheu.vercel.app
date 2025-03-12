'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
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

export default function AboutPage() {
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
          About Me
        </motion.h1>
        
        <motion.p 
          className="mb-4 sm:mb-6 font-pitch text-sm sm:text-base"
          variants={fadeInUp}
        >
          Welcome to my blog! I'm <span className="font-black">Aniruddha Aranya A Dheu</span>, an AI enthusiast who values solitude, cherishes attention to detail, and believes in the power of reflective thinking. I love building things with code and solving complex problems.
        </motion.p>

        <motion.h2 
          className="text-xl sm:text-2xl font-bold mt-8 sm:mt-12 mb-3 sm:mb-4"
          variants={fadeInUp}
        >
          Deep diving into
        </motion.h2>
        <motion.ul 
          className="list-none p-0 space-y-2 sm:space-y-4 text-sm sm:text-base"
          variants={fadeInUp}
        >
          <li>🧠 Data Wrangling with pandas, NumPy & Jupyter</li>
          <li>♟️ Chess Analysis</li>
          <li>💻 AI/ML & Data Science</li>
          <li>🧩 Problem Solving</li>
        </motion.ul>

        <motion.h2 
          className="text-xl sm:text-2xl font-bold mt-8 sm:mt-12 mb-3 sm:mb-4"
          variants={fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.ul 
          className="list-none p-0 space-y-2 sm:space-y-4 text-sm sm:text-base"
          variants={fadeInUp}
        >
          <li>Frontend: HTML, CSS</li>
          <li>Backend: Python</li>
          <li>Languages: Python</li>
          <li>Tools: Git, VS Code, Linux, Jupyter Notebook, Vercel</li>
        </motion.ul>

        <motion.h2 
          className="text-xl sm:text-2xl font-bold mt-8 sm:mt-12 mb-3 sm:mb-4"
          variants={fadeInUp}
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          className="text-sm sm:text-base"
          variants={fadeInUp}
        >
          Feel free to reach out to me on{" "}
          <Link href="https://github.com/aranyaadheu" className="text-primary hover:underline">
            GitHub
          </Link>
          ,{" "}
          <Link href="https://www.linkedin.com/in/aranyaadheu/" className="text-primary hover:underline">
            LinkedIn
          </Link>
          , or{" "}
          <Link href="https://facebook.com/aranyaadheu/" className="text-primary hover:underline">
            Facebook
          </Link>
          .
        </motion.p>
      </motion.section>
    </SharedLayout>
  );
} 
