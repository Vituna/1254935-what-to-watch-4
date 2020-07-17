import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieCard from './movie-card';

const Settings = {
  MOVIE_CARDS: [
    {
      name: `Avatar`,
      image: `img/avatar.jpg`,
      previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      name: `Aviator`,
      image: `img/aviator.jpg`,
      previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    },
    {
      name: `Bohemian rhapsody`,
      image: `img/bohemian-rhapsody.jpg`,
      previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      name: `Johnny English`,
      image: `img/johnny-english.jpg`,
      previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    },
    {
      name: `Orlando`,
      image: `img/orlando.jpg`,
      previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      name: `Pulp Fiction`,
      image: `img/pulp-fiction.jpg`,
      previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    },
    {
      name: `Player poster`,
      image: `img/player-poster.jpg`,
      previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      name: `War of the worlds`,
      image: `img/war-of-the-worlds.jpg`,
      previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    },
  ]

};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should there be a click on the title card`, () => {
  const onMovieCardClick = jest.fn();

  const main = shallow(
      <MovieCard
        movieSetting={Settings.MOVIE_CARDS}
        onMovieCardClick={onMovieCardClick}
      />
  );

  const movieCardClick = main.find(`a.small-movie-card__link`).first();
  movieCardClick.simulate(`click`);

  expect(onMovieCardClick.mock.calls.length).toBe(1);
});
