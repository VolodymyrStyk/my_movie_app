import './header.css'

export const Header = () => {

    return (
        <div className={'header'}>
            <HeaderName/>
            <HeaderGenres/>
            <HeaderSearch/>
        </div>
    );
}