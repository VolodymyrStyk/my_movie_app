import {YOUTUBE} from "../../../redux/reducers/actionTypesAPI";
import './movieDescription.css';

export const MovieDescription = ({title, overview, release, runtime, tagline, videos}) => {
    return (
        <div className={'movie-description'}>
            <h2>{title}</h2>
            <h3>{tagline}</h3>
            <div>Release: {release}, Runtime: {runtime} min</div>
            <div>{overview}</div>
            <div className={'video'}>
                    <iframe width="420" height="315" src={YOUTUBE + videos?.results[0]?.key}/>
            </div>
        </div>
    );
}
