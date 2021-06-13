import {PosterPreview} from "./PosterPreview";
import {API_GET_MOVIE_POSTER, NO_POSTER} from "../actionTypesAPI";
import StarRatings from "react-star-ratings";

export const MoviesListCard = ({data}) => {
    const {id, title, overview, popularity, poster_path, vote_average} = data;
    let imagSrc = API_GET_MOVIE_POSTER + poster_path;
    if (!poster_path){
        imagSrc = NO_POSTER;
    }
    return (
        <div className={'movies-list-card'}>
            <div className={'list-card-title'}>{title}</div>
            <PosterPreview
                url={imagSrc}
                title={title}
            />
            <StarRatings
                rating={vote_average}
                starRatedColor="gold"
                numberOfStars={10}
                name='rating'
                starDimension="25px"
                starSpacing="3px"
            />
        </div>
    );
}
