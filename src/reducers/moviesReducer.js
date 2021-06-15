export const SET_MOVIES = 'SET_MOVIES';
export const SET_IS_LOADING = 'SET_IS_LOADING';

const intialState = {
    moviesList: [],
    isLoading: true,
}

export const moviesReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                moviesList: action.payload.results,
                isLoading: false
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        default:
            return state
    }
}

export const setMovies = (movie) =>({type:SET_MOVIES, payload:movie});
export const setIsLoading = (bool) =>({type:SET_IS_LOADING, payload:bool});