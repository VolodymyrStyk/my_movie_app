import axios from "axios";
import {
    setAllGenre,
    setIsLoading,
    setLoadingError,
    setMovies
} from "../moviesReducer";

export const API_KEY = '7996fd1d5fe10f2d44bd8703cfab60f7';
export const API_GET_ALL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=`;
export const API_GET_SEARCH_MOVIES = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
export const API_GET_ALL_GENRE = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
export const API_GET_CHOSE_GENRE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=`;

export const getMovies = (query, currentPage = 1) => {
    let url;
    if (query) {
        url = `${API_GET_SEARCH_MOVIES}${query}&page=${currentPage}`;
    }
    if (!query) {
        url = `${API_GET_ALL_MOVIES}${currentPage}`;
    }
    return async (dispatch) => {
        try {
            dispatch((setIsLoading(true)));

            const response = await axios.get(url);

            dispatch(setMovies(response.data));
        }catch (e) {
            dispatch(setLoadingError(true));
            dispatch(setIsLoading(false));
        }
    }
}

export const getCurrentMovie = async (movieId, setMovieData,dispatch) => {
    let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;
    try {
        const response = await axios.get(url)

        setMovieData(response.data);
    }catch (e) {
        dispatch(setLoadingError(true));
        dispatch(setIsLoading(false));
    }
}

export const getGenres = async (dispatch) => {
    try {
        const response = await axios.get(API_GET_ALL_GENRE);
        const payload = await response.data;

        dispatch(setAllGenre(payload));
    } catch (e) {
        console.log(e);
    }
}

export const getMoviesByGenre = (genre, currentPage = 1) => {
    let url;
    if (genre) {
        url = `${API_GET_CHOSE_GENRE}${genre}`;
    }
    if (!genre) {
        url = `${API_GET_ALL_MOVIES}${currentPage}`;
    }
    return async (dispatch) => {
        try {
            dispatch((setIsLoading(true)));

            const response = await axios.get(url);

            dispatch(setMovies(response.data));
        }catch (e) {
            dispatch(setLoadingError(true));
            dispatch(setIsLoading(false));
        }
    }
}
