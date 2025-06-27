'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { HTMLMotionProps, motion as fm } from 'framer-motion'

type MotionSectionProps = HTMLMotionProps<'section'>

export default function MotionSection({ children, className, ...props }: MotionSectionProps) {
  return (
    <fm.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={cn("container px-4 md:px-6 mx-auto", className)}
      {...props}
    >
      {children}
    </fm.section>
  )
}
