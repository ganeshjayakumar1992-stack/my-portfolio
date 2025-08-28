import { motion } from 'framer-motion'

interface SlideInRightProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export const SlideInRight = ({ children, delay = 0, duration = 0.6, className = '' }: SlideInRightProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
)
