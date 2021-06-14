import {Link} from "react-router-dom";
import {MoviesList} from "./MoviesList";

export const PaginationNav = ({currentPage, totalPages}) => {

    return (
        <div className={'pagination-component'}>
            <ul>
                {/*<li>*/}
                {/*    <Link to={*/}
                {/*        {*/}
                {/*            pathname: `/movies`,*/}
                {/*            state: 'movie'*/}
                {/*        }}>*/}
                {/*        <MoviesList>1</MoviesList>*/}
                {/*    </Link>*/}
                {/*</li>*/}
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>{totalPages}</li>
            </ul>
        </div>
    );
}
