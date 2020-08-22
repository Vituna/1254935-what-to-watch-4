import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import {MovieCard} from './movie-card';

const noop = () => {
  return;
};

configure({adapter: new Adapter()});

const Settings = {
  id: 1,
  title: `Bohemian Rhapsody`,
  filmCover: `img/avatar.jpg`,
  previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const id: number = Settings.id;
const title: string = Settings.title;
const filmCover: string = Settings.filmCover;
const previewVideo: string = Settings.previewVideo;

it(`Should there be a click on the title card`, () => {
  const onFilmTitleClick = jest.fn();

  const main = shallow(
      <MovieCard
        id={id}
        title={title}
        filmCover={filmCover}
        previewVideo={previewVideo}
        onFilmTitleClick={() => onFilmTitleClick(1)}
        onCardMouseEnter={noop}
        onCardMouseLeave={noop}
        isPlaying={false}
        onStartPlaying={noop}
        onStopPlaying={noop}
      />
  );

  const movieCardClick = main.find(`a.small-movie-card__link`).first();
  movieCardClick.simulate(`click`, {
    preventDefault: onFilmTitleClick,
  });
  expect(onFilmTitleClick).toHaveBeenCalledWith(1);
});

it(`checks that when you hover over the card with the movie, the movie information gets to the handler`, () => {
  const onFilmTitleClick = jest.fn();
  const onCardMouseEnter = jest.fn();
  const onCardMouseLeave = jest.fn();

  const main = shallow(
      <MovieCard
        id={id}
        title={title}
        filmCover={filmCover}
        previewVideo={previewVideo}
        onFilmTitleClick={onFilmTitleClick}
        onCardMouseEnter={() => onCardMouseEnter({title, filmCover})}
        onCardMouseLeave={onCardMouseLeave}
        isPlaying={false}
        onStartPlaying={noop}
        onStopPlaying={noop}
      />
  );

  const filmCard = main.find(`article.small-movie-card`);

  filmCard.simulate(`mouseenter`);

  expect(onCardMouseEnter).toHaveBeenCalledWith({title, filmCover});
});

