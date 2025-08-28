import { motion } from 'framer-motion'

interface ScaleInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export const ScaleIn = ({ children, delay = 0, duration = 0.6, className = '' }: ScaleInProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
)
