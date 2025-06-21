import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hydrateCart } from 'store/CartSlice'
import { loadCart } from 'utils/localStorage'

import store from 'store'
import theme from 'styles/theme'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import ModalContextProvider from 'store/ModalContextProvider'
import CartModal from 'components/organisms/CartModal'
import CheckoutModal from 'components/organisms/CheckoutModal'
import Overlay from './../components/atoms/Overlay/index'

function HydrateCartOnClient() {
  const dispatch = useDispatch()
  useEffect(() => {
    const cart = loadCart()
    if (cart) {
      dispatch(hydrateCart(cart))
    }
  }, [dispatch])
  return null
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Provider store={store}>
        <ModalContextProvider>
          <HydrateCartOnClient />
          <Header />
          <Component {...pageProps} />
          <Footer />
          <CartModal />
          <CheckoutModal />
          <Overlay />
        </ModalContextProvider>
      </Provider>
    </ChakraProvider>
  )
}
