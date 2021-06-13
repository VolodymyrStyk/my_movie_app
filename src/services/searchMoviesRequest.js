import {SET_MOVIES} from "../redux";

export const searchMoviesRequest = async (searchRequest,dispatch) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=7996fd1d5fe10f2d44bd8703cfab60f7&query=${searchRequest}`);
        const payload = await response.json();
        dispatch({type: SET_MOVIES, payload});
    } catch (e) {
        console.log(e);
    } finally {

    }
}
