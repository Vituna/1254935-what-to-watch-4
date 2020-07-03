import React from 'react';
import renderer from 'react-test-renderer';

import GenresList from './genres-list.jsx';

const mock = {
  activeGenre: `All genres`,
  genres: [`Family`, `Comedian`, `Drama`],
};

it(`Should GenresList render correctly`, () => {
  const {activeGenre, genres} = mock;

  const tree = renderer
    .create(<GenresList
      genres={genres}
      activeGenre={activeGenre}
      onGenreItemClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
