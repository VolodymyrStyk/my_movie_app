import {Link} from "react-router-dom";

export const ErrorMovies = () => {
    return (
    <div className={'error-component'}>
        <Link to={'/'}>
            <button>Go to Main Page</button>
        </Link>
        <div className={'error-component-text'}>
            Error
        </div>
    </div>
  );
}
