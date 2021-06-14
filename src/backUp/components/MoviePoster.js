export const MoviePoster = ({src, genres, budget, title, vote}) => {
    return (
        <div className={'movie-page-poster'}>
            <h3>{title}</h3>
            <img src={src} alt={title}/>
            <div>Ranking:{vote}</div>
            <div>Genres:
                {genres?.map(genre => <span key={genre.id}> {genre.name} </span>)}
            </div>
            <div>Budget: {budget}$</div>
        </div>
    );
}
