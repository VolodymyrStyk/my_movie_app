import {useState} from "react";
import {getAllMoviesRequest, searchMoviesRequest} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {SET_SEARCH_TERM} from "../../redux";

export const HeaderSearch = () => {
    const dispatch = useDispatch();
    let {searchTerm} = useSelector(state => state);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            searchMoviesRequest(searchTerm, dispatch);
        }
        if (!searchTerm){
            getAllMoviesRequest(dispatch);
        }
    };
    const handleOnChange = (e) => {
        dispatch({type: SET_SEARCH_TERM, payload: e.target.value});

    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder={'Search...'} className={'search'}
                       value={searchTerm}
                       onChange={handleOnChange}/>
            </form>
        </div>
    );
}
