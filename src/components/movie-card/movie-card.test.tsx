import * as React from "react";
import * as renderer from "react-test-renderer";

import MovieCard from './movie-card';

const Settings = {
  MOVIE_CARDS:
    {
      name: `Avatar`,
      filmCover: `img/avatar.jpg`,
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
