import {API_GET_ALL_MOVIES, API_KEY} from "../redux/reducers/actionTypesAPI";
import axios from "axios";

export const getAllMoviesRequest = async (dispatch,  page = '&page=1') => {
    try {
        const apiInstance = axios.create({
            baseURL: API_GET_ALL_MOVIES,
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });

    } catch (e) {
        console.log(e);
    } finally {

    }
}
