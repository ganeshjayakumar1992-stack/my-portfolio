import { motion } from 'framer-motion'

interface FadeInUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export const FadeInUp = ({ children, delay = 0, duration = 0.6, className = '' }: FadeInUpProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
)
