import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, ReactNode } from 'react'

type FadeInOnScrollProps = {
  children: ReactNode
  transition?: { duration: number; delay?: number; ease: string }
}

const FadeInOnScroll = ({
  children,
  transition = { ease: 'easeOut', duration: 1 },
}: FadeInOnScrollProps) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={transition}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInOnScroll
