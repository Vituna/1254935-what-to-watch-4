import React from 'react';
import PropTypes from 'prop-types';

const PageDetails = ({movieDetail}) => {

  const getDetails = (it, i) => {
    const {name, value} = it;
    return (
      <p key={`${i}`} className="movie-card__details-item">
        <strong className="movie-card__details-name">{name}</strong>
        <span className="movie-card__details-value">{value}</span>
      </p>
    );
  };

  const renderDetails = () => movieDetail.map(getDetails);

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        {renderDetails()}
      </div>
      <div className="movie-card__text-col">
      </div>
    </div>
  );
};

PageDetails.propTypes = {
  movieDetail: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.number,
      })),
};

export default PageDetails;
