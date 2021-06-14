import {HeaderSearch} from "./HeaderSearch";
import {HeaderGenres} from "./HeaderGenres";
import {HeaderName} from "./HeaderName";

export const Header = () => {

    return (
        <div className={'header'}>
            <HeaderName/>
            <HeaderGenres/>
            <HeaderSearch/>
        </div>
    );
}
