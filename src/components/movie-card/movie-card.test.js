import React from 'react';
import renderer from 'react-test-renderer';

import MovieCard from './movie-card.jsx';

const Settings = {
  MOVIE_CARDS:
    {
      name: `Avatar`,
      image: `img/avatar.jpg`
    },
};

it(`Renders cards correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      movieSetting={Settings.MOVIE_CARDS}
      onCardClick={() => {}}
      onTitleClick={() => {}}
      onHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
