import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { Book, CartState } from '../../types'

const initialCartState: CartState = {
  cartBooks: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems') || '')
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      const bookIndex = state.cartBooks.findIndex((book) => book.title === action.payload.title)
      if (bookIndex >= 0) {
        if (state.cartBooks[bookIndex].cartQuantity == 0) {
          state.cartBooks[bookIndex].cartQuantity += 1
          toast.success('Item Added to Cart  Successfully')
        } else {
          toast.info('Your Item is already in the cart')
        }
      } else {
        const tempBook = { ...action.payload, cartQuantity: 1 }
        state.cartBooks.push(tempBook)
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartBooks))
    },
    getTotals(state) {
      const { quantity } = state.cartBooks.reduce(
        (cartTotal, cartItem) => {
          const { cartQuantity } = cartItem
          cartTotal.quantity += cartQuantity

          return cartTotal
        },
        {
          quantity: 0
        }
      )
      state.cartTotalQuantity = quantity
    },
    removeBook: (state, action) => {
      const index = state.cartBooks.indexOf(action.payload)
      console.log('**Action Payload', action.payload)
      console.log('** Index', index)
      state.cartTotalQuantity -= action.payload
      state.cartBooks.splice(
        state.cartBooks.findIndex((book: Book) => book.ISBN === action.payload.ISBN),
        1
      )
      state.cartBooks = [...state.cartBooks]
      localStorage.setItem('cartItems', JSON.stringify(state.cartBooks))
    },
    cartBooks: () => {
      console.log('CART WORKING!')
    }
  }
})

export const { cartBooks, addToCart, getTotals, removeBook } = cartSlice.actions
export default cartSlice.reducer
