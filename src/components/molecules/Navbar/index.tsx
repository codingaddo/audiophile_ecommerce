import { Container, Flex } from '@chakra-ui/react'

import Logo from 'components/atoms/Logo'
import MenuIcon from 'components/atoms/MenuIcon'
import { HStack } from '@chakra-ui/react'
import CartIcon from 'components/atoms/CartIcon'
import UserMenu from '../UserMenu'
import NavLinks from '../NavLinks'

const Navbar = (): JSX.Element => {
  return (
    <Container maxW="container.lg" px={6}>
      <Flex
        align="center"
        justify="space-between"
        position="relative"
        zIndex="modal"
        sx={{
          '@media screen and (min-width: 30em)': {
            '&::after': {
              content: "''",
              position: 'absolute',
              bottom: '-2rem',
              height: '0.0625rem',
              width: '100%',
              backgroundColor: 'divider',
            },
          },
        }}
      >
        <MenuIcon />
        <Logo />
        <NavLinks />
        <HStack spacing={3} alignItems="center">
          <UserMenu />
          <CartIcon />
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
