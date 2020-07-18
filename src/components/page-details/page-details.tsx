import * as React from "react";
import {connect} from "react-redux";

import {movieDetail} from "../../types"

interface Props {
  movieDetail: movieDetail[];
};

const PageDetails: React.FunctionComponent<Props> = ({movieDetail}) => {

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

const mapStateToProps = (state) => ({
  movieDetail: state.movieDetail,
});

export {PageDetails};
export default connect(mapStateToProps, {})(PageDetails);
