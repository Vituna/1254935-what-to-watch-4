import * as React from "react";

interface Props {
  rating: number,
  numberVotes: number,
  descriptionOne: string,
  descriptionTwo: string,
  director: string,
  starring: string,
};

const PageOverview: React.FunctionComponent<Props> = ({rating, numberVotes, descriptionOne, descriptionTwo, director, starring}) => {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{numberVotes} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{descriptionOne}</p>
        <p>{descriptionTwo}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </>
  );
};

export default PageOverview;
