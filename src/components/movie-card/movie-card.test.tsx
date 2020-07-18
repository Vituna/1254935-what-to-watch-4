import * as React from "react";
import * as renderer from "react-test-renderer";

import MovieCard from "./movie-card";

export const noop = () => {
};

const Settings = {
  title: `Avatar`,
  filmCover: `img/avatar.jpg`,
  previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const title: string = Settings.title;
const filmCover: string = Settings.filmCover;
const previewVideo: string = Settings.previewVideo;

const createNodeMock = () => {
  return {};
};

it(`Renders cards correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      title={title}
      filmCover={filmCover}
      previewVideo={previewVideo}
      onCardClick={noop}
      onTitleClick={noop}
      onCardMouseEnter={noop}
      onCardMouseLeave={noop}
    />, {createNodeMock})
      .toJSON();

  expect(tree).toMatchSnapshot();
});
