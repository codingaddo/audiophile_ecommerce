import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAuth } from 'contexts/AuthContext'
import { FiUser } from 'react-icons/fi'

const UserMenu = (): JSX.Element => {
  const { user, signOut } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }

  const handleLogin = () => {
    router.push('/auth/sign-in')
  }

  const handleOrders = () => {
    router.push('/orders')
  }

    // Compute two-letter initials
  let avatarLabel: string | undefined = undefined
  if (user) {
    const name: string | undefined = user.user_metadata?.name
    if (name) {
      avatarLabel = name
        .trim()
        .split(/\s+/)
        .map(part => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    } else if (user.email) {
      avatarLabel = user.email.slice(0, 2).toUpperCase()
    }
  }

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="User menu"
        variant="ghost"
        icon={
          <Avatar
            size="sm"
            borderWidth="2px"
            borderColor="accent"
            bg="gray.600"
            icon={user ? undefined : <FiUser />}
            name={user ? avatarLabel : undefined}
          />
        }
      />
      <MenuList minW="150px">
        {user ? (
          <>
            <MenuItem _hover={{ bg: 'accent', color: 'white' }} onClick={handleOrders}>My Orders</MenuItem>
            <MenuItem _hover={{ bg: 'accent', color: 'white' }} onClick={handleLogout}>Log out</MenuItem>
          </>
        ) : (
          <MenuItem _hover={{ bg: 'accent', color: 'white' }} onClick={handleLogin}>Log in</MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}

export default UserMenu
