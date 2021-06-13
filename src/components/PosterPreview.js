export const PosterPreview = ({url, title}) => {
    return (
        <div>
            <img src={url} alt={title} className={'poster-image'}/>
        </div>
    );
}
