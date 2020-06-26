import React from 'react';
import renderer from 'react-test-renderer';

import MovieCard from './movie-card.jsx';

const Settings = {
  MOVIE_CARDS:
    {
      name: `Avatar`,
      image: `img/avatar.jpg`,
      previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
};

const createNodeMock = () => {
  return {};
};

it(`Renders cards correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      movieSetting={Settings.MOVIE_CARDS}
      onCardClick={() => {}}
      onTitleClick={() => {}}
      onHover={() => {}}
    />, {createNodeMock})
      .toJSON();

  expect(tree).toMatchSnapshot();
});
