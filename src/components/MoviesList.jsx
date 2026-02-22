import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import HrMovieCard from "./HrMoviesCard";

function MoviesList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMoviesByGenreId();
  }, []);
  const getMoviesByGenreId = () => {
    GlobalApi.getMoviesByGenreId(genreId).then((resp) =>
      // console.log(resp.data.results)
      setMovieList(resp.data.results),
    );
  };

  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };
  return (
    <div className="relative">
      <SlArrowLeft
        onClick={() => sliderLeft(elementRef.current)}
        className={`text-[45px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_ % 3 == 0 ? "mt-17.5" : "mt-37.5"} `}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-3 lg:pb-10"
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
      <SlArrowRight
        onClick={() => sliderRight(elementRef.current)}
        className={`text-[45px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_ % 3 == 0 ? "mt-17.5" : "mt-37.5"}`}
      />
    </div>
  );
}

export default MoviesList;
