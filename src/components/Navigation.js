import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllMoviesRequest} from "../services";
import {Pagination} from '@material-ui/lab';

export const Navigation = ({currentPage, totalPages}) => {
    // // const {page,total_pages,total_results} = props;
    // console.log(currentPage, totalPages);
    // const LEFT_PAGE = 'LEFT';
    // const RIGHT_PAGE = 'RIGHT';
    // const range = (from, to, step = 1) => {
    //     let i = from;
    //     const range = [];
    //     while (i <= to) {
    //         range.push(i);
    //         i += step;
    //     }
    //     return range;
    // }
    // const pageNeighbours = Math.max(0, Math.min(0, totalPages));
    // const totalNumbers = (pageNeighbours * 2) + 3;
    // const totalBlocks = totalNumbers + 2;
    // const handleChange = (e) => {
    //     console.log(e.target.value)
    // }
    // const data = useSelector(state => state);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     getAllMoviesRequest(dispatch, `&page=${currentPage}`);
    // }, [currentPage])
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        currentPage = pageNumber;
    }
    return (
        <div>
            <Pagination count={10} page={currentPage} onChange={handlePageChange}/>
        </div>
    );
}
