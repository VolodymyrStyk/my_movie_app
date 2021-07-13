import './headerName.css';
import {Link} from "react-router-dom";

export const HeaderName = () => {
  return (
      <div className={'title-conteiner'}>
          <Link to="/movies">
              <div><img src="./camera.png" alt="" className={'title-img'}/><span className={'movie-title'}>My Movies App</span></div>
          </Link>
      </div>
  );
}
