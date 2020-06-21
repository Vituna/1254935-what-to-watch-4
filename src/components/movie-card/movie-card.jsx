import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({movieSetting, onClick, onHover}) => {
  const {name, image} = movieSetting;

  const handleMouseEnter = () => onHover(movieSetting);

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
    >
      <div className="small-movie-card__image">
        <img src={image} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html"
          onClick={onClick}
        >{name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movieSetting: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
  onHover: PropTypes.func,
};

export default MovieCard;
