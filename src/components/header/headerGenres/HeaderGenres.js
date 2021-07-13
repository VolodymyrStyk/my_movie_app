import './headerGenres.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getGenres, getMoviesByGenre} from "../../../services";

export const HeaderGenres = () => {
    const dispatch = useDispatch();
    let genres = useSelector(state => state.movies.genres.genres);

    useEffect(() => {
        getGenres(dispatch);
    }, [])

    let genreId = 0;


    const chooseGenre = (e) => {
        genreId  = e.target.value;

        getMoviesByGenre(dispatch, genreId);
    }

    return (
        <div className={"select-css"}>
            <select onChange={chooseGenre}>
                {
                    genres?.map(genre => <option key={genre.id} value={genre.id}>{genre?.name}</option>)
                }
            </select>
        </div>
    );
}
