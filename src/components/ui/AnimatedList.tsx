import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion, type MotionProps } from 'framer-motion'
import {
  Children,
  memo,
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from 'react'

export function AnimatedListItem({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()
  const animations: MotionProps = reduceMotion
    ? { initial: false }
    : {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1, originY: 0 },
        exit: { scale: 0, opacity: 0 },
        transition: { type: 'spring', stiffness: 350, damping: 40 },
      }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}

export type AnimatedListProps = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode
  delay?: number
  /** When true (default), newest item stacks on top — notification style. */
  stackNewestOnTop?: boolean
}

export const AnimatedList = memo(function AnimatedList({
  children,
  className,
  delay = 1000,
  stackNewestOnTop = true,
  ...props
}: AnimatedListProps) {
  const reduceMotion = useReducedMotion()
  const childrenArray = useMemo(() => Children.toArray(children), [children])

  const [index, setIndex] = useState(() =>
    reduceMotion ? Math.max(childrenArray.length - 1, 0) : 0,
  )

  useEffect(() => {
    if (reduceMotion) {
      setIndex(Math.max(childrenArray.length - 1, 0))
      return undefined
    }

    let timeout: ReturnType<typeof setTimeout> | null = null

    if (index < childrenArray.length - 1) {
      timeout = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1)
      }, delay)
    }

    return () => {
      if (timeout !== null) clearTimeout(timeout)
    }
  }, [index, delay, childrenArray.length, reduceMotion])

  const itemsToShow = useMemo(() => {
    const slice = childrenArray.slice(0, index + 1)
    return stackNewestOnTop ? slice.reverse() : slice
  }, [index, childrenArray, stackNewestOnTop])

  return (
    <div className={clsx('flex flex-col items-center gap-4', className)} {...props}>
      <AnimatePresence>
        {itemsToShow.map((item) => (
          <AnimatedListItem key={(item as ReactElement).key}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  )
})