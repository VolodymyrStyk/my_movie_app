import './posterPreview.css';

export const PosterPreview = (props) => {
    const {url,title} = props;
  return (
      <div className={'poster-preview'}>
          <img src={url} alt={title} className={'poster-image'}/>
      </div>
  );
}
