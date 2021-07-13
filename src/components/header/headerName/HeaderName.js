import './headerName.css';
import {Link} from "react-router-dom";

export const HeaderName = () => {
  return (
      <div className={'title-conteiner'}>
          <Link to="/movies">
              <div><img src="public/" alt=""/><span className={'movie-title'}>My Movies App</span></div>
          </Link>
      </div>
  );
}
