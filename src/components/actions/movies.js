import axios from "axios";
import {setIsLoading, setMovies} from "../../reducers/moviesReducer";

export const API_KEY = '7996fd1d5fe10f2d44bd8703cfab60f7';
export const API_GET_ALL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=1`;
export const getMovies = () => {
    return async (dispatch) => {
        dispatch((setIsLoading(true)));
        const response = await axios.get(API_GET_ALL_MOVIES);
        dispatch(setMovies(response.data));
    }
}
