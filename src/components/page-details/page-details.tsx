import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const PageDetails = ({movieDetail}) => {

  const getDetails = (info, i) => {
    const {name, value} = info;
    const key = `${name} + ${i}`;

    return (
      <p key={key} className="movie-card__details-item">
        <strong className="movie-card__details-name">{name}</strong>
        <span className="movie-card__details-value">{value}</span>
      </p>
    );
  };

  const renderDetails = () => movieDetail.map(getDetails);

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        {renderDetails().slice(0, 3)}
      </div>
      <div className="movie-card__text-col">
        {renderDetails().slice(3, 5)}
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

const mapStateToProps = (state) => ({
  movieDetail: state.movieDetail,
});

export {PageDetails};
export default connect(mapStateToProps, {})(PageDetails);
