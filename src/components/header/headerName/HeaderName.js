import './headerName.css';
import {Link} from "react-router-dom";

export const HeaderName = () => {
  return (
      <div>
          <Link to="/movies">
              <div>My Movies App</div>
          </Link>
      </div>
  );
}
