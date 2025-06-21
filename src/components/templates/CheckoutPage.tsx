import { Container } from '@chakra-ui/react'
import GoBackLink from 'components/atoms/GoBackLink'
import CheckoutForm from './../organisms/CheckoutForm/index'
import { useSelector } from 'react-redux'
import { totalQuantity } from 'store/CartSlice'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const CheckoutPage = (): JSX.Element | null => {
  const quantity = useSelector(totalQuantity)
  const router = useRouter()

  useEffect(() => {
    if (quantity === 0) {
      router.replace('/')
    }
  }, [quantity, router])

  if (quantity === 0) {
    return null // prevent UI flash while redirecting
  }

  return (
    <Container maxW="container.lg" px={6} as="main" id="main">
      <GoBackLink />
      <CheckoutForm />
    </Container>
  )
}

export default CheckoutPage
