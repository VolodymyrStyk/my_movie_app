import {API_GET_ALL_MOVIES} from "../redux/reducers/actionTypesAPI";
import {SET_MOVIES} from "../redux";

export const getAllMoviesRequest = async (dispatch,  page = '&page=1') => {
    try {
        const response = await fetch(API_GET_ALL_MOVIES + page);
        const payload = await response.json();
        dispatch({type: SET_MOVIES, payload})
    } catch (e) {
        console.log(e);
    } finally {

    }
}
