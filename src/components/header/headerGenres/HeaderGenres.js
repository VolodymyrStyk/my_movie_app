import './headerGenres.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMoviesByGenre} from "../../../backUp/services/getMoviesByGenre";
import {getGenres, getMovies} from "../../../reducers/actions/movies";

export const HeaderGenres = () => {
    const dispatch = useDispatch();
    let genres = useSelector(state => state.movies.genres);
    console.log(genres);
    useEffect(() => {
        getGenres();
    }, [])

    const chooseGenre = (e) => {
        const genreId  = e.target.value;

        getMovies(genreId);
    }

  return (
      <div>
          <select onChange={chooseGenre}>
              {
                  genres?.map(genre => <option key={genre.id} value={genre.id}>{genre?.name}</option>)
              }
          </select>
      </div>
  );
}
