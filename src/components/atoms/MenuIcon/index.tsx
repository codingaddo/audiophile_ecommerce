import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'

import { isNavOpen, toggleNav } from 'store/UISlice'

const MenuIcon = (): JSX.Element => {
  const navOpen = useSelector(isNavOpen)
  const dispatch = useDispatch()

  return (
    <Box
      as="button"
      aria-label={navOpen ? 'Close Menu' : 'Open Menu'}
      aria-expanded={navOpen ? 'true' : 'false'}
      mr={{ sm: '2.625rem', lg: 0 }}
      lineHeight={0}
      onClick={() => dispatch(toggleNav())}
      display={{ base: 'auto', lg: 'none' }}
      border="none"
      bg="transparent"
      p="0"
    >
      {navOpen ? (
        <Image
          src="/images/shared/tablet/icon-close-menu.svg"
          width={16}
          height={15}
          aria-hidden="true"
          alt=""
        ></Image>
      ) : (
        <Image
          src="/images/shared/tablet/icon-hamburger.svg"
          width={16}
          height={15}
          aria-hidden="true"
          alt=""
        ></Image>
      )}
    </Box>
  )
}

export default MenuIcon
