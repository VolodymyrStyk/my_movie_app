import './moviesList.css';
import {MoviesListCard} from "./moviesListCard/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovies} from "../actions/movies";

export const MoviesList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.moviesList);
    const isLoading = useSelector(state => state.movies.isLoading);

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <div className={'movies-list'}>
            {
                movies.map(movie =>
                    <MoviesListCard key={movie.id} movie={movie}/>
                )}
        </div>
    );
}
