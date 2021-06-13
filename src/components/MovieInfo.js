import {YOUTUBE} from "../actionTypesAPI";

export const MovieInfo = ({title, overview, release, runtime, tagline,videos}) => {
    return (
        <div className={'movie-page-info'}>
            <h2>{title}</h2>
            <h3>{tagline}</h3>
            <div>Release: {release}, Runtime: {runtime} min</div>
            <div>{overview}</div>
            <iframe width="420" height="315"
                    src={YOUTUBE+videos?.results[0]?.key}>
            </iframe>
        </div>
    );
}
