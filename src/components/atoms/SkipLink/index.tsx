import { Box } from '@chakra-ui/react'

const SkipLink = (): JSX.Element => {
  return (
    <Box
      as="a"
      href="#main"
      position="absolute"
      left="1rem"
      top="6.25rem"
      zIndex="skipLink"
      transform="translateX(-200%)"
      _focus={{
        transform: 'translateX(0)',
      }}
      transition="transform 0.3s ease-out"
      p="1rem"
      bg="white"
      color="black"
    >
      Skip to content
    </Box>
  )
}

export default SkipLink
