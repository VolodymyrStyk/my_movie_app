import { API_KEY} from "../redux/reducers/actionTypesAPI";
import {SET_MOVIES} from "../redux";

export const getMoviesByGenre = async (dispatch, genreId) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
        const payload = await response.json();
        dispatch({type: SET_MOVIES, payload})
    } catch (e) {
        console.log(e);
    } finally {

    }
    return (
        <div>

        </div>
    );
}
