import React from 'react'
// Image
import disney from '../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import national from '../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starr from './../assets/images/starr.png'

// // Video
import disneyV from './../assets/videos/disney.mp4'
import marvelV from './../assets/videos/marvel.mp4'
import nationalV from './../assets/videos/national-geographic.mp4'
import pixarV from './../assets/videos/pixar.mp4'
import starrV from './../assets/videos/star-wars.mp4'


function ProductionHouse() {
    const productionHouseList = [
        {
        id:1,
        image:disney,
        video:disneyV,
        },
        {
        id:2,
        image:pixar,
        video:pixarV,
        },
        {
        id:3,
        image:marvel,
        video:marvelV,
        },
         {
        id:4,
        image:starr,
        video:starrV,
        },
         {
        id:4,
        image:national,
        video:nationalV,
        },

    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {productionHouseList.map((item,index)=> (
                <div key={index} className='border-2 border-gray-600 rounded-lg 
                hover:scale-110 transition-all duration-300 ease-in-out
                 cursor-pointer relative shadow-xl shadow-gray-700'>
                    <video src={item.video} autoPlay loop playsInline muted
                    className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'/>
                    <img className='w-full z-1 opacity-100' src={item.image}  />
                </div>
            ))
        }
    </div>
  )
}

export default ProductionHouse