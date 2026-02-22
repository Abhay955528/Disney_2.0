import React from 'react'
import GenresList from '../constant/GenresList'
import MoviesList from './MoviesList'

function GenreMovieList() {
    
  return (
    <div>
        {GenresList.genre?.map((item,index)=>index<=4&&(
            <div key={index} className='p-3 xl:p-5 lg:p-8 px-2 lg:px-8 md:px-16'>
                <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                <MoviesList genreId={item.id} index_={index}/>
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList