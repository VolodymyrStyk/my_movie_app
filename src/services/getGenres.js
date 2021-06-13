import {API_GET_ALL_GENRE} from "../actionTypesAPI";
import {SET_ALL_GENRE} from "../redux";

export const getGenres = async (dispatch) => {
    try {
        const response = await fetch(API_GET_ALL_GENRE);
        const payload = await response.json();
        dispatch({type: SET_ALL_GENRE, payload})
    } catch (e) {
        console.log(e);
    } finally {

    }
    return (
        <div>

        </div>
    );
}
