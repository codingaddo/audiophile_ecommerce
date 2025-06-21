import { Box, Portal } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'

import { isNavOpen } from 'store/UISlice'
import { closeNav } from 'store/UISlice'

const MotionBox = motion(Box)

const Overlay = (): JSX.Element => {
  const navOpen = useSelector(isNavOpen)
  const dispatch = useDispatch()

  return (
    <Portal>
      <AnimatePresence>
        {navOpen ? (
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            position="fixed"
            inset="0"
            zIndex={1200}
            height="100vh"
            bg="blackAlpha.600"
            display={{ lg: 'none' }}
            onClick={() => dispatch(closeNav())}
          />
        ) : null}
      </AnimatePresence>
    </Portal>
  )
}

export default Overlay
