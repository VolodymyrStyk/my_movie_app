import './moviesList.css';
import {MoviesListCard} from "./moviesListCard/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getMovies} from "../../reducers/actions/movies";
import {setCurrentPage} from "../../reducers/moviesReducer";
import {createPages} from "../../utils/pagesCreator";

export const MoviesList = () => {
    const dispatch = useDispatch();
    const moviesList = useSelector(state => state.movies.moviesList);
    const isLoading = useSelector(state => state.movies.isLoading);
    const currentPage = useSelector(state => state.movies.currentPage);
    const pagesCount = useSelector(state => state.movies.pagesCount);
    const [searchValue, setSearchValue] = useState('');
    const pages = [];
    console.log(pagesCount);
    createPages(pages,pagesCount,currentPage)

    useEffect(() => {
        dispatch(getMovies(searchValue,currentPage));
    }, [currentPage]);

    const searchHandler = () => {
        dispatch(setCurrentPage(1));
        dispatch(getMovies(searchValue,currentPage));
    }
    const searchHandlerEnter = (e) => {
        dispatch(setCurrentPage(1));
        if (e.code === 'Enter') {
            dispatch(getMovies(searchValue,currentPage));
        }
    }
    return (
        <div>
            <div className={'search'}>
                <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text" placeholder={'Search here...'} className={'search-input'}
                    onKeyPress={(e) => searchHandlerEnter(e)}/>
                <button
                    onClick={() => searchHandler()}
                    className={'search-btn'}>Search
                </button>
            </div>
            <div className={'pages'}>
                <span
                    className={currentPage === pages[0] ? 'current-page':'page'}
                    onClick={()=>dispatch(setCurrentPage(1))}>first :1
                    </span>
                {
                    pages.map((page, index) =>
                        <span
                            className={currentPage === page ? 'current-page':'page'}
                            key={index}
                            onClick={()=>dispatch(setCurrentPage(page))}>{page}
                    </span>)
                }
                <span
                    className={currentPage === pages[pages.length-1] ? 'current-page':'page'}
                    onClick={()=>dispatch(setCurrentPage(pagesCount))}>last: {pagesCount}
                    </span>
            </div>

            <div className={'movies-list'}>
                {
                    (isLoading === false && moviesList.length)
                        ?
                        moviesList.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                        :
                        <div className={'loading'}>.</div>
                }
            </div>
        </div>
    );
}
