import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllMoviesRequest, getGenres} from "../services";

export const HeaderGenres = () => {
    const dispatch = useDispatch();
    let {genres: {genres}} = useSelector(state => state);
    console.log(genres);
    useEffect(() => {
        getGenres(dispatch);
    }, [])

    const chooseGenre = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <select onChange={chooseGenre}>
                {
                    genres?.map(genre => <option value={genre.name}>{genre?.name}</option>)
                }
            </select>
        </div>
    );
}
