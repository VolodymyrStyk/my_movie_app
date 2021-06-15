
export const SET_MOVIES = 'SET_MOVIES';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_LOADING_ERROR = 'SET_LOADING_ERROR';
export const SET_LOADING_NO_ERROR = 'SET_LOADING_NO_ERROR';
export const SET_ALL_GENRE = 'SET_ALL_GENRE';

const intialState = {
    moviesList: [],
    isLoading: true,
    currentPage: 1,
    pagesCount: 1,
    isLoadingError:false,
    genres:[],
}

export const moviesReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                moviesList: action.payload.results,
                pagesCount:  action.payload.total_pages,
                isLoading: false
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }
        case SET_LOADING_ERROR:
            return {
                ...state,
                isLoadingError: action.payload,
            }
        case SET_LOADING_NO_ERROR:
            return {
                ...state,
                isLoadingError: action.payload,
            }
        case SET_ALL_GENRE: {
            return {
                ...state,
                genres: action.payload,
            }
        }
        default:
            return state
    }
}

export const setMovies = (movie) => ({type: SET_MOVIES, payload: movie});
export const setIsLoading = (bool) => ({type: SET_IS_LOADING, payload: bool});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page});
export const setLoadingError = (bool) => ({type: SET_LOADING_ERROR, payload: bool});
export const setLoadingNoError = (bool) => ({type: SET_LOADING_NO_ERROR, payload: bool});
export const setAllGenre = (genre) => ({type: SET_ALL_GENRE, payload: genre});