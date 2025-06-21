import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const GoBackLink = (): JSX.Element => {
  const router = useRouter()

  return (
    <Box
      as="a"
      onClick={() => router.back()}
      display="inline-block"
      mt={{ base: '2rem', sm: '3rem', lg: '3rem' }}
      fontSize="0.9375rem"
      textTransform="capitalize"
      cursor="pointer"
      _hover={{
        textDecoration: 'underline',
      }}
    >
      Go back
    </Box>
  )
}

export default GoBackLink
