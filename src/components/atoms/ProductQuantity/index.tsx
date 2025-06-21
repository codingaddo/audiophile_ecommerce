import { Box, Center } from '@chakra-ui/react'

const ProductQuantity = ({
  quantity,
  increment,
  decrement,
  width,
  height,
}: {
  quantity: number
  increment: () => void
  decrement: () => void
  width: string
  height: string
}): JSX.Element => {
  return (
    <Box
      display="flex"
      bg="gray"
      alignItems="center"
      width={width}
      height={height}
    >
      <Button sign="-" handleClick={decrement} />
      <Center fontSize="0.8125rem" fontWeight="bold" width="20%">
        {quantity}
      </Center>
      <Button sign="+" handleClick={increment} />
    </Box>
  )
}

const Button = ({
  sign,
  handleClick,
}: {
  sign: string
  handleClick: () => void
}): JSX.Element => {
  return (
    <Box
      as="button"
      onClick={handleClick}
      width="40%"
      height="100%"
      color="text"
      fontSize="0.9375rem"
      fontWeight="bold"
      border="none"
      p="0"
      bg="transparent"
      _hover={{
        bg: 'lightGray',
        color: 'accent',
      }}
    >
      {sign}
    </Box>
  )
}

export default ProductQuantity
