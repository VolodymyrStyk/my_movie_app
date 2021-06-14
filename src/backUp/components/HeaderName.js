import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getAllMoviesRequest} from "../services";

export const HeaderName = () => {
    const dispatch = useDispatch();
    const updateToMain = () => {
        getAllMoviesRequest(dispatch);
    }
    return (
        <div>
            <Link to="/movies">
                <div onClick={updateToMain}>My Movies App</div>
            </Link>
        </div>
    );
}
