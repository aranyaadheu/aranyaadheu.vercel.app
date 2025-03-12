'use client'

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Icons } from '@/components/ui/icons';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function SharedLayout({ children, isHomePage = false }: { children: React.ReactNode, isHomePage?: boolean }) {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <motion.header
        className="mb-8 sm:mb-16 pb-4 border-b border-orange-300/20"
        initial="hidden"
        animate="show"
        variants={fadeInUp}
      >
        <Navigation />
      </motion.header>

      {/* Breadcrumb Navigation */}
      {!isHomePage && <Breadcrumb />}

      {/* Main Content */}
      <div className="flex-grow">
        {children}
      </div>

      {/* Footer with conditional styling */}
      <motion.footer
        className={!isHomePage ? "mt-8 sm:mt-16" : "py-4"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {!isHomePage && <div className="border-t border-orange-300/20" />}
        <div className={!isHomePage ? "py-6 px-4" : "px-4"}>
          <div className="flex justify-between items-center">
            <p className="text-xs sm:text-sm text-zinc-500">Copyright © 2025 | All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Link 
                href="https://github.com/aranyaadheu" 
                className="text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.github className="w-5 h-5" />
              </Link>
              <Link 
                href="https://facebook.com/aranyaadheu" 
                className="text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.facebook className="w-5 h-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/aranyaadheu/" 
                className="text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </main>
  );
} 