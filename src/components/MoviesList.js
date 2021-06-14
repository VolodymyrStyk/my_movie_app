import {MoviesListCard} from "./MoviesListCard";
import '../styleComponents/MoviesList.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllMoviesRequest} from "../services";
import {Navigation} from "./Navigation";
import {Link, useRouteMatch} from "react-router-dom";

export const MoviesList = () => {
    let {url} = useRouteMatch();
    const data = useSelector(state => state);
    const {appData} = data;
    const dispatch = useDispatch();
    useEffect(() => {
        getAllMoviesRequest(dispatch);
    }, [])
    return (
        <div>
            <div className={'movies-list'}>
                {

                    appData.results?.map((movie) => (
                        <Link key={movie.id} to={
                            {
                                pathname: `${url}/${movie.id}`,
                                state: movie
                            }}>
                            <MoviesListCard data={movie}/>
                        </Link>
                    ))
                }
            </div>
            <Navigation currentPage={appData?.page} totalPages={appData?.total_pages}/>
        </div>
    );
}
