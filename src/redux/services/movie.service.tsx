import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const API_KEY = '3335b69cd2d6a9a6eaa61218e6db6e28'
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

export const fetchMovies = createAsyncThunk('movies/getMovies', async () => {
  const response = await axios.get(FEATURED_API)
  console.log('here is the response', response)
  console.log('WORKINGG')
  if (response.status === 200) {
    const movies = await response.data.results
    return movies
  } else {
    toast.error(`Error happened : ${response.data.error}`)
    return response.status
  }
})
