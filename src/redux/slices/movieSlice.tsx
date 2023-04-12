import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { MoviesState, Movie } from '../../types'
import { fetchMovies } from '../services/movie.service'

const initialMovieState: MoviesState = {
  movies: [],
  movie: null,
  filteredMovies: [],
  isLoading: false,
  error: null
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState: initialMovieState,
  reducers: {
    test: () => {
      console.log('You are Succ!')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(fetchMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
      state.isLoading = false
      state.movies = action.payload
      state.filteredMovies = []
    })
  }
})

export const { test } = movieSlice.actions
export default movieSlice.reducer
