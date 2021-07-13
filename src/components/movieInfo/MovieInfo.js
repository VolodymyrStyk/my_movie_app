import './movieInfo.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCurrentMovie} from "../../redux/reducers/actions/movies";
import {MoviePoster} from "./moviePoster/MoviePoster";
import {MovieDescription} from "./movieDescription/MovieDescription";
import {API_GET_MOVIE_POSTER, NO_POSTER} from "../../redux/reducers/actionTypesAPI";

export const MovieInfo = (props) => {
    const params = useParams();
    const[movieData,setMovieData] = useState({});

    useEffect(() => {
        getCurrentMovie(params.id,setMovieData);
    },[]);

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
    } = movieData;

    let imagSrc = API_GET_MOVIE_POSTER + poster_path;

    if (!poster_path) {
        imagSrc = NO_POSTER;
    }

    return (
        <div>
            <button onClick={() => props.history.goBack()} className={'back-btn'}>back</button>
            <div className={'movie-info'}>
                <MoviePoster src={imagSrc} genres={genres} budget={budget} title={title}
                             vote={vote_average}/>
                <MovieDescription overview={overview} runtime={runtime} tagline={tagline}
                                  release={release_date} title={title} videos={videos}/>
            </div>
        </div>
    );
}
