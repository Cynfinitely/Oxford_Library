import MovieCard from '../components/MovieCard/MovieCard'

const Movies = () => {
  return (
    <div className="flex justify-center text-center items-center w-full h-full">
      {' '}
      <div className="mt-9 overflow-auto sm:-mx-6 lg:-mx-8">
        <div className="flex flex-row mt-9 justify-around min-w-full py-2 sm:px-6 lg:px-8 items-center ">
          <MovieCard />
        </div>
      </div>
    </div>
  )
}

export default Movies
