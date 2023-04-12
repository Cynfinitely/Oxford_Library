import React from 'react'
import Carousel from '../components/Carousel/Carousel'

const Paints = () => {
  return (
    <div className="flex justify-center text-center items-center w-full h-full">
      {' '}
      <div className=" sm:-mx-6 lg:-mx-8 flex flex-row  justify-center items-center w-8/12">
        <div className="flex flex-row  w-5/12 py-2 sm:px-6 lg:px-8 items-center ">
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default Paints
