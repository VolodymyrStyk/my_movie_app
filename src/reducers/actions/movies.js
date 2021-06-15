import axios from "axios";
import {setIsLoading, setMovies} from "../moviesReducer";

export const API_KEY = '7996fd1d5fe10f2d44bd8703cfab60f7';
export const API_GET_ALL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=`;
export const API_GET_SEARCH_MOVIES = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
export const getMovies = (query, currentPage = 1) => {
    let url;
    if (query){
        url = `${API_GET_SEARCH_MOVIES}${query}&page=${currentPage}`;
    }
    if (!query){
        url = API_GET_ALL_MOVIES + currentPage;
    }
    console.log(url);
    return async (dispatch) => {
        dispatch((setIsLoading(true)));
        const response = await axios.get(url);
        dispatch(setMovies(response.data));
    }
}

// export const searchMovies = (query, currentPage = 1) => {
//     let url = `${API_GET_SEARCH_MOVIES}${query}&page=${currentPage}`;
//     if (!query || query === '') {
//         url = API_GET_ALL_MOVIES + currentPage;
//     }
//     console.log(url);
//     return async (dispatch) => {
//         dispatch((setIsLoading(true)));
//         const response = await axios.get(url);
//         dispatch(setMovies(response.data));
//     }
// }