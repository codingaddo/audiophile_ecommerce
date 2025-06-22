import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Text, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useAuth } from 'contexts/AuthContext'
import { useRouter } from 'next/router'
import Link from 'next/link'

const SignInPage = (): JSX.Element => {
  const { signIn } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const toast = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    setLoading(true)
    const { error } = await signIn({ email, password })
    setLoading(false)

    if (error) {
      setError(error.message)
    } else {
      toast({ title: 'Signed in successfully', status: 'success', duration: 3000, isClosable: true })
      router.push('/')
    }
  }

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} bg="white" borderRadius="md" boxShadow="md">
      <Heading mb={4}>Sign In</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" name="email" type="email" placeholder="email@example.com" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" name="password" type="password" placeholder="••••••••" />
          </FormControl>
          {error && <Text color="red.500">{error}</Text>}
          <Button type="submit" colorScheme="orange" isLoading={loading}>
            Sign In
          </Button>
          <Text fontSize="sm">
            Don&apos;t have an account?{' '}
            <Link href="/auth/sign-up" passHref>
              <Box as="a" color="orange.400" fontWeight="bold">
                Sign up
              </Box>
            </Link>
          </Text>
        </Stack>
      </form>
    </Box>
  )
}

export default SignInPage
