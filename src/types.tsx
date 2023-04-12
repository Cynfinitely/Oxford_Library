import { z } from 'zod'

import { loginSchema, registerSchema, searchSchema } from './helpers/validationSchema'

export type LoginValidationSchema = z.infer<typeof loginSchema>
export type RegisterValidationSchema = z.infer<typeof registerSchema>
export type SearchSchema = z.infer<typeof searchSchema>

export type UsersState = {
  users: User[]
  filteredUsers: User[]
  user: null | User
  isLoading: boolean
  error: null | string | unknown
  token: null | string
}

export type User = {
  _id?: number | string
  first_name?: string
  last_name?: string
  email: string
  password: string
  role?: string
  image?: File | URL
}

export interface CredentialResponse {
  /** This field is the returned ID token */
  credential?: string
  /** This field sets how the credential is selected */
  select_by?:
    | 'auto'
    | 'user'
    | 'user_1tap'
    | 'user_2tap'
    | 'btn'
    | 'btn_confirm'
    | 'brn_add_session'
    | 'btn_confirm_add_session'
  clientId?: string
}

export type Book = {
  ISBN: number | string
  title: string
  description?: string
  publisher?: string
  author?: number
  status?: string
  borrowerId?: string
  publishedDate?: Date
  borrowDate?: Date
  returnDate?: Date
  collectionName?: string
  image?: string
  cartQuantity?: any
}

export interface BooksState {
  books: Book[]
  filteredBooks: Book[]
  book: null | Book
  isLoading: boolean
  error: null | string | unknown
}

export interface CartState {
  cartBooks: Book[]
  cartTotalQuantity: number
  cartTotalAmount: number
}

export interface userValues {
  first_name?: string
  last_name?: string
  email: string
  password: string
  confirmPassword?: string
  image?: File | URL
}

export type MoviesState = {
  movies: Movie[]
  filteredMovies: Movie[]
  movie: null | Movie
  isLoading: boolean
  error: null | string | unknown
}

export type Movie = {
  adult?: boolean
  backdrop_path?: string
  genre_ids?: number[]
  id: number
  original_language?: string
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  release_date?: string
  title: string
  video?: boolean
  vote_average?: number
  vote_count?: number
}
