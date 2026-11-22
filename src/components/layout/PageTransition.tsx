import { motion, useReducedMotion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { type ReactNode } from 'react'

type PageTransitionProps = {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div key={pathname}>{children}</div>
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}