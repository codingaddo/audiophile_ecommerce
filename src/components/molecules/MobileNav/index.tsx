import { Box, Stack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'

import { isNavOpen } from 'store/UISlice'
import CategoryLink from 'components/molecules/CategoryLink'
import { links } from 'utils/links'

const navVariants = {
  hidden: { opacity: 0, y: '-100%' },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: '-100%' },
}

const MobileNav = (): JSX.Element => {
  const navOpen = useSelector(isNavOpen)
  return (
    <AnimatePresence>
      {navOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={navVariants}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: '100%',
            top: '5.625rem',
            zIndex: 1300,
          }}
        >
          <Box
            as="nav"
            bg="white"
            px="1.5rem"
            pb="2rem"
            display={{ base: 'block', lg: 'none' }}
            borderBottomRadius="0.5rem"
          >
            <Stack
              as="ul"
              direction={{ base: 'column', sm: 'row' }}
              spacing={['4rem', '.6rem']}
              mt={['5.75rem']}
            >
              {links.slice(1).map(link => (
                <CategoryLink {...link} key={link.id} />
              ))}
            </Stack>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileNav
