import Cart from '../components/Cart/Cart'
import BookTable from '../components/BookTable/BookTable'
import BookSearch from '../components/BookSearch/BookSearch'

const Books = () => {
  return (
    <div className="flex justify-center text-center items-center w-full h-full">
      {' '}
      <div className="overflow-auto sm:-mx-6 lg:-mx-8">
        <div className="flex flex-row  justify-around min-w-full py-2 sm:px-6 lg:px-8 items-center ">
          <BookSearch />
          <BookTable />
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default Books
