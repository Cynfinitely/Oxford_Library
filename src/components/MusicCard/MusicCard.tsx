/* eslint-disable prettier/prettier */
import React from 'react'

import imagine from '../../assets/img/imagine.jpeg'
import linkin from '../../assets/img/linkin.jpeg'
import soad from '../../assets/img/soad.jpeg'

const MusicCard = () => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      <div className="flex flex-col mx-3 items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={imagine} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Believer
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Imagine Dragons</p>
          <audio
            src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
            controls
          />
        </div>
      </div>
      <div className="flex flex-col mx-3 items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={linkin} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              In The End
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Linkin Park</p>
          <audio
            src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
            controls
          />
        </div>
      </div>
      <div className="flex flex-col mx-3 items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={soad} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Chop Suey!
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">System Of A Down</p>
          <audio
            src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
            controls
          />
        </div>
      </div>
    </div>
  )
}

export default MusicCard
