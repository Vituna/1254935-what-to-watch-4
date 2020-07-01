import React from 'react';
import renderer from 'react-test-renderer';

import PageDetails from './page-details.jsx';

const movieDetail = [
  {
    name: `Genre`,
    value: `Drama`,
  },
  {
    name: `Released`,
    value: 2014,
  },
  {
    name: `Director`,
    value: `Wes Andreson`,
  },
  {
    name: `Starring`,
    value: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
  },
  {
    name: `Run Time`,
    value: `1h 49m`,
  },
];

const createNodeMock = () => {
  return {};
};

it(`Should PageDetails render correctly`, () => {

  const tree = renderer
    .create(<PageDetails
      movieDetail={movieDetail}
    />, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
