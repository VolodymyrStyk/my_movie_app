import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getChosenMovie} from "../services/getChosenMovie";
import {MoviePoster} from "./MoviePoster";
import {API_GET_MOVIE_POSTER, NO_POSTER} from "../actionTypesAPI";
import {MovieInfo} from "./MovieInfo";


export const Movie = ({match: {params: {id}}}) => {
    const data = useSelector(state => state);
    const dispatch = useDispatch();
    const {currentMovie} = data;
    useEffect(() => {
        getChosenMovie(id, dispatch);
    }, []);
    console.log(currentMovie);
    const {
        budget,
        genres,
        poster_path,
        title,
        vote_average,
        overview,
        release_date,
        runtime,
        tagline,
        videos
    } = currentMovie;

    let imagSrc = API_GET_MOVIE_POSTER + poster_path;
    if (!poster_path) {
        imagSrc = NO_POSTER;
        console.log('no')
    }


    return (
        <div className={'movie-page'}>
            <MoviePoster src={imagSrc} genres={genres} budget={budget} title={title}
                         vote={vote_average}/>
            <MovieInfo overview={overview} runtime={runtime} tagline={tagline}
                       release={release_date} title={title} videos={videos}/>
        </div>
    );
}
