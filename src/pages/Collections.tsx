import React from 'react'
import { Link } from 'react-router-dom'

import book from '../assets/img/book.jpeg'
import music from '../assets/img/music.jpeg'
import movies from '../assets/img/movies.jpeg'
import paints from '../assets/img/paints.avif'
import profile from '../assets/img/profile.jpeg'
import contact from '../assets/img/contact.jpeg'

const Collections = () => {
  return (
    <div>
      <section className="overflow-hidden text-neutral-700">
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2 relative">
                <Link to={`/books`} className="hover:opacity-50">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={book}
                  />
                  <h1 className="absolute text-4xl text-white bottom-5 left-5">Books</h1>
                </Link>
              </div>
              <div className="w-1/2 p-1 md:p-2 relative">
                <Link to={`/music`} className="hover:opacity-50">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={music}
                  />
                  <h1 className="absolute text-4xl text-black bottom-5 left-5">Music</h1>
                </Link>
              </div>
              <div className="w-full p-1 md:p-2 relative">
                <Link to={`/movies`} className="hover:opacity-50">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={movies}
                  />
                  <h1 className="absolute text-4xl text-white bottom-5 left-5">Movies</h1>
                </Link>
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2 relative">
                <Link to={`/paints`} className="hover:opacity-50">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={paints}
                  />
                  <h1 className="absolute text-4xl text-white bottom-5 left-5">Paints</h1>
                </Link>
              </div>
              <div className="w-1/2 p-1 md:p-2 relative">
                <Link to={`/profile`} className="hover:opacity-50">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={profile}
                  />
                  <h1 className="absolute text-4xl text-white bottom-5 left-5">Profile</h1>
                </Link>
              </div>
              <div className="w-1/2 p-1 md:p-2 relative">
                <Link to={`/contact`} className="hover:opacity-50">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={contact}
                  />
                  <h1 className="absolute text-4xl text-black bottom-5 left-5">Contact</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Collections
