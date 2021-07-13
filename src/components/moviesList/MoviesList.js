import './moviesList.css';
import {MoviesListCard} from "./moviesListCard/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getMovies} from "../../redux/reducers/actions/movies";
import {setCurrentPage} from "../../redux/reducers/moviesReducer";
import {createPages} from "../../utils/pagesCreator";
import React from "react";
import {Link} from "react-router-dom";
import {ErrorMovies} from "./ErrorMovies";
import {MovieSearch} from "./movieSearch/MovieSearch";
import {MovieNavPagination} from "./movieNavPagination/MovieNavPagination";

export const MoviesList = (props) => {
    const {location: {pathname}} = props;

    const dispatch = useDispatch();
    const moviesList = useSelector(state => state.movies.moviesList);
    const isLoading = useSelector(state => state.movies.isLoading);
    const currentPage = useSelector(state => state.movies.currentPage);
    const pagesCount = useSelector(state => state.movies.pagesCount);
    const isLoadingError = useSelector(state => state.movies.isLoadingError);

    const [searchValue, setSearchValue] = useState('');
    const pages = [];

    createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        dispatch(getMovies(searchValue, currentPage));
    }, [currentPage]);

    const searchHandler = () => {
        dispatch(setCurrentPage(1));
        dispatch(getMovies(searchValue, currentPage));
    }
    const searchHandlerEnter = (e) => {
        dispatch(setCurrentPage(1));
        if (e.code === 'Enter') {
            dispatch(getMovies(searchValue, currentPage));
        }
    }

    if (isLoadingError) {
        return <ErrorMovies/>
    }

    return (
        <div>

            <MovieSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchHandlerEnter={searchHandlerEnter}
                searchHandler={searchHandler}
            />

            <MovieNavPagination
                currentPage={currentPage}
                pages={pages}
                pagesCount={pagesCount}
            />

            <div className={'movies-list'}>
                {
                    (isLoading === false && moviesList.length)
                        ?
                        moviesList.map(movie =>
                            <Link to={`${pathname}/${movie.id}`}>
                                <MoviesListCard
                                    key={movie.id}
                                    movie={movie}
                                />
                            </Link>)
                        :
                        <div className={'loading'}>.</div>
                }
            </div>

            <MovieNavPagination
                currentPage={currentPage}
                pages={pages}
                pagesCount={pagesCount}
            />

        </div>
    );
}
