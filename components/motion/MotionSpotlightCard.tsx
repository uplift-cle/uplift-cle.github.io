'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export default function MotionSpotlightCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
      className={className}
    >
      <Card>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  )
}