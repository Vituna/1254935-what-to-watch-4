import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({movieSetting, onCardMouseEnter, onTitleClick}) => {
  const {name, image} = movieSetting;

  const handleCardMouseEnter = () => onCardMouseEnter(movieSetting);
  const handleCartTitleClick = (evt) => {
    evt.preventDefault();
    onTitleClick(movieSetting);
  };

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleCardMouseEnter}
    >
      <div className="small-movie-card__image">
        <img src={image} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html"
          onClick={handleCartTitleClick}
        >{name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movieSetting: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onCardMouseEnter: PropTypes.func,
  onTitleClick: PropTypes.func,
};

export default MovieCard;
