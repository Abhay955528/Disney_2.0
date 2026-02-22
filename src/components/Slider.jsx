import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import { SlArrowLeft ,SlArrowRight} from "react-icons/sl";
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'
const screenWidth = window.innerWidth;

function Slider() {
    const [movieList , setMoviesList] = useState([]);
    const elementRef = useRef();

    useEffect(()=>{
        getTrendingMovies()
    },[])

    const getTrendingMovies = () =>{
        GlobalApi.getTrendingVideos.then(resp => {
            setMoviesList(resp.data.results);
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth-110
    }

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth-110
    }
    
  return (
    <div>
        <SlArrowLeft 
        onClick={()=>sliderLeft(elementRef.current)}
        className='hidden md:block text-white text-[30px] absolute mx-8
        mt-41.25' />
        <SlArrowRight
        onClick={()=>sliderRight(elementRef.current)}
        className='hidden md:block text-white text-[30px] absolute mx-8
        mt-41.25 right-0'  />

    <div className='flex overflow-x-auto w-full px-5 lg:px-16 
    scrollbar-hide py-4 scroll-smooth' ref={elementRef}>
        {movieList?.map((item,index)=> (
            <img src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full md:h-77.5
             object-cover object-top-left mr-5 rounded-md hover:border-4
             border-gray-400 transition-all duration-100 ease-in-out' key={index}/>
        ))}
    </div>
    </div>
  )
}

export default Slider