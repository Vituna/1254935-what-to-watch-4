import * as React from "react";

import {PageDetailsProps} from "./types";

const getDetails = (starringIt: string, i: number): React.ReactNode => {
  const key = `${starringIt} + ${i}`;

  return (
    <React.Fragment key={key}>
      {starringIt} <br />
    </React.Fragment>
  );
};

const renderDetails = (starring) => starring.map(getDetails);

const PageDetails: React.FC<PageDetailsProps> = (props: PageDetailsProps) => {
  const {director, starring, genre, runTime, year} = props;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">{renderDetails(starring)}</span>
        </p>
      </div>
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{year}</span>
        </p>
      </div>
    </div>
  );
};

export default PageDetails;
