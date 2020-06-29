import React from 'react';
import renderer from 'react-test-renderer';

import PageDetails from './page-details.jsx';

const movieDetails = {
  genre: `Drama`,
  movieDurationTime: `1h 39m`,
  year: 2014,
  director: `Wes Andreson`,
  starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
};

it(`Should PageDetails render correctly`, () => {
  const {director, genre, movieDurationTime, starring, year} = movieDetails;

  const tree = renderer
    .create(<PageDetails
      director={director}
      genre={genre}
      movieDurationTime={movieDurationTime}
      starring={starring}
      year={year}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
