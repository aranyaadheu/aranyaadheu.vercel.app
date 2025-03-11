'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/ui/icons'
import { ThemeToggle } from '@/components/theme-toggle'

const navigation = [
  { name: 'Posts', href: '/posts', icon: Icons.code },
  { name: 'Tags', href: '/tags', icon: Icons.chevronRight },
  { name: 'About', href: '/about', icon: Icons.github },
  { name: 'Search', href: '/search', icon: Icons.search },
]

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

const mobileMenuVariants = {
  closed: { 
    opacity: 0,
    y: -20,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: { 
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="text-xl sm:text-2xl font-mono font-bold tracking-tight">
        aranyaadheu
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <nav>
          <motion.ul
            className="flex items-center space-x-6 text-sm font-medium"
            variants={listVariants}
            initial="hidden"
            animate="show"
          >
            {navigation.map((item) => (
              <motion.li key={item.href} variants={itemVariants}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-1 text-zinc-500 hover:text-zinc-300 transition-colors',
                    pathname === item.href && 'text-zinc-300'
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
        <ThemeToggle />
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center space-x-2 md:hidden">
        <ThemeToggle />
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <Icons.close className="w-6 h-6" />
          ) : (
            <Icons.menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="absolute top-16 left-0 right-0 bg-white dark:bg-[#212737] shadow-lg z-50 border-b border-orange-300/20 px-4 py-4"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <motion.nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center space-x-2 text-zinc-500 hover:text-zinc-300 transition-colors py-2',
                      pathname === item.href && 'text-zinc-300'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-base">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 