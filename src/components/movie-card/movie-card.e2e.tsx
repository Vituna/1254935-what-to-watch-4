import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import MovieCard from './movie-card';

const noop = () => {
  return;
};

configure({adapter: new Adapter()});

const Settings = {
  title: `Avatar`,
  filmCover: `img/avatar.jpg`,
  previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const title: string = Settings.title;
const filmCover: string = Settings.filmCover;
const previewVideo: string = Settings.previewVideo;

it(`Should there be a click on the title card`, () => {
  const onMovieCardClick = jest.fn();

  const main = shallow(
      <MovieCard
        title={title}
        filmCover={filmCover}
        previewVideo={previewVideo}
        onCardClick={noop}
        onTitleClick={noop}
        onCardMouseEnter={noop}
        onCardMouseLeave={noop}
      />
  );

  const movieCardClick = main.find(`a.small-movie-card__link`).first();
  movieCardClick.simulate(`click`);

  expect(onMovieCardClick.mock.calls.length).toBe(1);
});
