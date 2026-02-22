import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3/' 
const api_key = '9c76a60a1ac04f9fed737e2bd75a0642'
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';
const getTrendingVideos = axios.get(movieBaseUrl+'trending/all/day?api_key='+api_key);
const getMoviesByGenreId = (id) => axios.get(movieByGenreBaseURL)
// '&with_genre='+id


  export default {getTrendingVideos , getMoviesByGenreId}

