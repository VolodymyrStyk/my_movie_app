import {
    SET_ALL_GENRE,
    SET_CURRENT_MOVIE,
    SET_MOVIES, SET_SEARCH_TERM,
    START_MOVIES_LOADING,
    STOP_MOVIES_LOADING
} from "../actionTypes";

const initialState = {
    moviesList: [],
    isMoviesLoading: false,
    appData:[],
    currentMovie: {},
    searchTerm: '',
    genres:[],
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_MOVIES_LOADING: {
            return {
                ...state,
                isMoviesLoading: true,
            }
        }
        case STOP_MOVIES_LOADING: {
            return {
                ...state,
                isMoviesLoading: false,
            }
        }
        case SET_MOVIES: {
            return {
                ...state,
                appData: action.payload,
                moviesList: action.payload.results,
            }
        }
        case SET_CURRENT_MOVIE: {
            return {
                ...state,
                currentMovie: action.payload,
            }
        }
        case SET_SEARCH_TERM: {
            return {
                ...state,
                searchTerm: action.payload,
            }
        }
        case SET_ALL_GENRE: {
            return {
                ...state,
                genres: action.payload,
            }
        }
        default:
            return state;
    }
}