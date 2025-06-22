import Head from 'next/head'
import RequireAuth from 'components/guards/RequireAuth'
import CheckoutPageTemplate from 'components/templates/CheckoutPage'

const CheckoutPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Audiophile shop - checkout</title>
      </Head>
      <RequireAuth>
        <CheckoutPageTemplate />
      </RequireAuth>
    </>
  )
}

export default CheckoutPage
