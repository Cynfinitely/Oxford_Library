import React from 'react'
import { Link } from 'react-router-dom'
import logo3 from '../../assets/img/logo3.png'

const Header = () => {
  return (
    <header className="flex flex-row justify-evenly items-center relative h-24 bg-[#fbcc6e]">
      <div className="text-4xl font-bold ">OXFORD LIBRARY</div>
      <div className="w-1/12  sm:w-4/12 flex items-center justify-center  hidden md:flex">
        <img
          src={logo3}
          alt="logo"
          className="shadow rounded-full w-40  h-auto align-middle border-4 absolute -bottom-20 border-black border-dashed"
        />
      </div>
      <div className="flex flex-row">
        <Link to={'/books'} className="mybtn1 border-2 border-black mr-2">
          Books
        </Link>
        <Link to={'/music'} className="mybtn1 border-2 border-black mr-2">
          Music
        </Link>
        <Link to={'/movies'} className="mybtn1 border-2 border-black mr-2">
          Movies
        </Link>
        <Link to={'/paints'} className="mybtn1 border-2 border-black mr-2">
          Paints
        </Link>
        <Link to={'/contact'} className="mybtn1 border-2 border-black mr-2">
          Contact
        </Link>
      </div>
    </header>
  )
}

export default Header
