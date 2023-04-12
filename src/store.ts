import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import cartReducer from './redux/slices/cartSlice'
import bookReducer from './redux/slices/bookSlice'
import userReducer from './redux/slices/userSlice'
import movieReducer from './redux/slices/movieSlice'

export const store = configureStore({
  reducer: {
    books: bookReducer,
    cart: cartReducer,
    movies: movieReducer,
    users: userReducer
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export type RootState = ReturnType<typeof store.getState>
