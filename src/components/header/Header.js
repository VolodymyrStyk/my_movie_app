import './header.css';
import {HeaderName} from "./headerName/HeaderName";
import {HeaderGenres} from "./headerGenres/HeaderGenres";

export const Header = () => {
  return (
      <div className={'header'}>
          <HeaderName/>
          <HeaderGenres/>
      </div>
  );
}
