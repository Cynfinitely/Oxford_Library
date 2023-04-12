import React, { useEffect, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { featuredImages, featuredTitles } from '../../helpers/CarouselData'
import girl from '../../assets/img/girl_with_a_pearl_earring.jpeg'
import mona from '../../assets/img/mona_lisa.jpeg'
import kiss from '../../assets/img/the_kiss.jpeg'
import night from '../../assets/img/the_starry_night.jpeg'
import watch from '../../assets/img/the_night_watch.jpeg'
import whistlers from '../../assets/img/whistlers_mother.jpeg'
import last from '../../assets/img/last_supper.jpeg'

let count = 0

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length
    setCurrentIndex(count)
  }

  const handleOnPrevClick = () => {
    const productsLength = featuredImages.length
    count = (currentIndex + productsLength - 1) % productsLength
    setCurrentIndex(count)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((count) => (count + 1) % featuredImages.length)
    }, 20000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-2 ">
      <div className="w-full relative select-none ">
        <h1 className="text-4xl mb-4 font-bold italic">{featuredTitles[currentIndex]}</h1>
        <div className="">
          <img src={featuredImages[currentIndex]} alt="" className="object-scale-down max-h-1/2 " />
        </div>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button
            className="bg-white text-black p-1 bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}>
            <AiOutlineLeft size={20} />
          </button>
          <button
            className=" bg-white text-black p-1  bg-opacity-50 rounded-full  cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnNextClick}>
            <AiOutlineRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
