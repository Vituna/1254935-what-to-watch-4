import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieCard from './movie-card';

const Settings = {
  MOVIE_CARDS: [
    {
      name: `Avatar`,
      image: `img/avatar.jpg`
    },
    {
      name: `Aviator`,
      image: `img/aviator.jpg`
    },
    {
      name: `Bohemian rhapsody`,
      image: `img/bohemian-rhapsody.jpg`
    },
    {
      name: `Johnny English`,
      image: `img/johnny-english.jpg`
    },
    {
      name: `Orlando`,
      image: `img/orlando.jpg`
    },
    {
      name: `Pulp Fiction`,
      image: `img/pulp-fiction.jpg`
    },
    {
      name: `Player poster`,
      image: `img/player-poster.jpg`
    },
    {
      name: `War of the worlds`,
      image: `img/war-of-the-worlds.jpg`
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
