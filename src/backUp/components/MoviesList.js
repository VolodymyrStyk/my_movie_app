import {MoviesListCard} from "./MoviesListCard";
import '../styleComponents/MoviesList.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllMoviesRequest} from "../../services";
import {PaginationNav} from "./PaginationNav";
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
                        <Link to={
                            {
                                pathname: `${url}/${movie.id}`,
                                state: movie,
                            }}>
                            <MoviesListCard data={movie}/>
                        </Link>
                    ))
                }
            </div>
            <PaginationNav currentPage={appData?.page} totalPages={appData?.total_pages}/>
        </div>
    );
}
