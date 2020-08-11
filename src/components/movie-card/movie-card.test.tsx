import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import MovieCard from "./movie-card";

const mockStore = configureStore([]);

export const noop = () => {
  return;
};

const Settings = {
  id: 1,
  title: `Avatar`,
  filmCover: `img/avatar.jpg`,
  previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const id: number = Settings.id;
const title: string = Settings.title;
const filmCover: string = Settings.filmCover;
const previewVideo: string = Settings.previewVideo;

const createNodeMock = () => {
  return {};
};

it(`Renders cards correctly`, () => {
  const store = mockStore({
    title,
    filmCover,
    previewVideo
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MovieCard
            id={id}
            title={title}
            filmCover={filmCover}
            previewVideo={previewVideo}
            onFilmTitleClick={noop}
            onCardMouseEnter={noop}
            onCardMouseLeave={noop}
          />
        </Provider>, {createNodeMock})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
