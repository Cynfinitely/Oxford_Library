import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { getTotals, removeBook } from '../../redux/slices/cartSlice'
import { AppDispatch, RootState } from '../../store'
import { Book } from '../../types'
import CartOpen from '../CartOpen/CartOpen'

const Cart = () => {
  const CartBooks = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getTotals())
  }, [CartBooks])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border border-dark ">
        <h1 className="text-4xl">CART</h1>
        <ul className="flex flex-col justify-evenly m-2 border-bottom ">
          {CartBooks.cartBooks.length === 0 ? (
            <div className="cart-empty">
              <p>Your Cart is Empty!</p>
            </div>
          ) : (
            <div>
              {CartBooks.cartBooks.map((book: Partial<Book>) => (
                <>
                  <li className="list-group-item flex flex-row justify-between" key={book.ISBN}>
                    <div className="ml-4 flex flex-1 flex-col border-black border-b-2 mb-2 pb-2 ">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a>{book.title}</a>
                          </h3>
                          <p className="ml-4">{book.author}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{book.publisher}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {book.cartQuantity}</p>

                        <div className="flex">
                          <button
                            type="button"
                            onClick={() => dispatch(removeBook(book))}
                            className="bg-red-300 rounded-md h-5 p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close menu</span>

                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              ))}
            </div>
          )}
        </ul>
        <div className="flex justify-around">
          <p className="m-2 ">Total amount : {CartBooks.cartTotalQuantity} </p>
        </div>
        <ToastContainer position="bottom-right" theme="light" />
      </div>
      <CartOpen />
    </div>
  )
}

export default Cart
