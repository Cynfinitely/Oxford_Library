import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../redux/services/movie.service'
import { test } from '../../redux/slices/movieSlice'
import { AppDispatch, RootState } from '../../store'
import { Movie } from '../../types'

const MovieCard = () => {
  const movies = useSelector((state: RootState) => state.movies)
  const dispatch = useDispatch<AppDispatch>()

  const IMG_API = 'https://image.tmdb.org/t/p/w1280'
  const defaultImage =
    'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'

  useEffect(() => {
    console.log('HERE')
    dispatch(fetchMovies())
  }, [])

  return (
    <div className="grid grid-cols-4 gap-9 mt-6">
      {movies.movies &&
        movies.movies.map((movie: Movie) => (
          <div
            key={movie.id}
            className="flex flex-col mx-3 items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg  "
                src={movie.poster_path ? IMG_API + movie.poster_path : defaultImage}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {movie.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default MovieCard
