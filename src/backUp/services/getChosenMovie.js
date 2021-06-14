import {API_KEY} from "../actionTypesAPI";
import {SET_CURRENT_MOVIE} from "../redux";


export const getChosenMovie = async (movieId,dispatch) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`);
        const payload = await response.json();
        dispatch({type: SET_CURRENT_MOVIE, payload})
    } catch (e) {
        console.log(e);
    } finally {

    }
}