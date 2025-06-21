import { CartSlice } from 'store/CartSlice'

export const loadCart = (): CartSlice | undefined => {
  try {
    const serializedCart = localStorage.getItem('cart')
    if (serializedCart === null) {
      return undefined
    }
    const parsed = JSON.parse(serializedCart)
    if (
      parsed &&
      Array.isArray(parsed.items) &&
      typeof parsed.totalQuantity === 'number'
    ) {
      return parsed
    }
    // corrupted or outdated data – discard
    return undefined
  } catch (err) {
    return undefined
  }
}

export const saveCart = (cart: CartSlice): void => {
  try {
    const serializedCart = JSON.stringify(cart)
    localStorage.setItem('cart', serializedCart)
  } catch (err) {
    console.log('error while saving cart to local storage', err)
  }
}
