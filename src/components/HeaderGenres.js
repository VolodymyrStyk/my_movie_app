import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getGenres} from "../services";
import {getMoviesByGenre} from "../services/getMoviesByGenre";

export const HeaderGenres = () => {
    const dispatch = useDispatch();
    let {genres: {genres}} = useSelector(state => state);
    useEffect(() => {
        getGenres(dispatch);
    }, [])

    const chooseGenre = (e) => {
        const genreId  = e.target.value;
        getMoviesByGenre(dispatch, genreId);
    }
    return (
        <div>
            <select onChange={chooseGenre}>
                {
                    genres?.map(genre => <option value={genre.id}>{genre?.name}</option>)
                }
            </select>
        </div>
    );
}
