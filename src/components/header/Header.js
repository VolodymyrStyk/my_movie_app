import './header.css';
import {HeaderName} from "./headerName/HeaderName";
import {HeaderGenres} from "./headerGenres/HeaderGenres";
import ThemeSwitch from 'react-theme-switch';

export const Header = () => {
  return (
      <div className={'header'}>
          <HeaderName/>
          <HeaderGenres/>
          <ThemeSwitch />
      </div>
  );
}
