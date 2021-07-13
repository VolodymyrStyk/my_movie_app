import {setCurrentPage} from "../../../redux/reducers/moviesReducer";
import React from "react";
import {useDispatch} from "react-redux";

export const MovieNavPagination = ({currentPage, pages, pagesCount}) => {
    const dispatch = useDispatch();

    return (
        <div className={'pages'}>
                <span
                    className={currentPage === pages[0] ? 'current-page' : 'page'}
                    onClick={() => dispatch(setCurrentPage(1))}>first :1
                    </span>
            {
                pages.map((page, index) =>
                    <span
                        className={currentPage === page ? 'current-page' : 'page'}
                        key={index}
                        onClick={() => dispatch(setCurrentPage(page))}>{page}
                    </span>)
            }
            <span
                className={currentPage === pages[pages.length - 1] ? 'current-page' : 'page'}
                onClick={() => dispatch(setCurrentPage(pagesCount))}>last: {pagesCount}
                    </span>
        </div>
    );
}
