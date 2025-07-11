// @ts-nocheck
import { HStack, Box, Heading, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'

const CategoryLink = ({
  text,
  img,
  url,
}: {
  text: string
  img?: string
  url: string
}): JSX.Element => (
  <Box
    as="li"
    bg="gray"
    textAlign="center"
    borderRadius="0.5rem"
    position="relative"
    flex="1"
    cursor="pointer"
    sx={{
      '&:hover p': {
        color: 'accent',
      },
      'a:focus': {
        outline: 'none',
      },
    }}
  >
    <Link href={url} passHref>
      <Box pt="5.5rem" pb="1.375rem">
        <Image
          position="absolute"
          top="0"
          left="50%"
          transform="translate(-50%, -38%)"
          width="8.625rem"
          objectFit="cover"
          src={img}
          alt=""
          aria-hidden="true"
        />
        <Heading
          as="h2"
          mb="1rem"
          fontSize={{ base: '0.9375rem', lg: '1.125rem' }}
          letterSpacing={{ base: '0.0669em', lg: '0.0806em' }}
        >
          {text}
        </Heading>
        <HStack
          spacing="0.8325rem"
          justifyContent="center"
          _hover={{
            cursor: 'pointer',
          }}
        >
          <Text
            color="text"
            fontWeight="bold"
            fontSize="0.8125rem"
            textTransform="uppercase"
          >
            Shop
          </Text>
          <Image
            src="/images/shared/desktop/icon-arrow-right.svg"
            alt=""
            aria-hidden="true"
          />
        </HStack>
      </Box>
    </Link>
  </Box>
)

export default CategoryLink
