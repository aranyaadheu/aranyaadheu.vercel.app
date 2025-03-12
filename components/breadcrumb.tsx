'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

export function Breadcrumb() {
  const pathname = usePathname()
  
  // Don't show breadcrumbs on homepage
  if (pathname === '/') return null
  
  // Convert path to breadcrumb items
  const pathSegments = pathname.split('/').filter(segment => segment)
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`
    return {
      href,
      label: segment.charAt(0).toUpperCase() + segment.slice(1) // Capitalize first letter
    }
  })

  return (
    <motion.nav 
      className="text-sm mb-8 px-4"
      initial="hidden"
      animate="show"
      variants={fadeIn}
    >
      <ol className="flex items-center">
        <li>
          <Link 
            href="/" 
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Home
          </Link>
        </li>
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <span className="text-zinc-600 mx-3">»</span>
            <Link
              href={item.href}
              className={`${
                index === breadcrumbItems.length - 1
                  ? 'text-zinc-100 cursor-default pointer-events-none'
                  : 'text-zinc-500 hover:text-zinc-300 transition-colors'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </motion.nav>
  )
} 