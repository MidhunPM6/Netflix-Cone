import { API_KEY } from "./Constants/Constants";
export const action=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const top_Searched=`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
export const horror_movies=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const popular_movies=`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`