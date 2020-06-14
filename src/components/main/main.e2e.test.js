import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Main from "./main.jsx";

const Settings = {
  MOVIE_LIST_TITLE: [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`],
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  MOVIE_RELEASE_DATE: 2014,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should there be a click on the title card`, () => {
  const onMovieCardClick = jest.fn();

  const main = shallow(
      <Main
        movieTitle={Settings.MOVIE_TITLE}
        movieGenre={Settings.MOVIE_GENRE}
        movieReleaseDate={Settings.MOVIE_RELEASE_DATE}
        movieListTitle={Settings.MOVIE_LIST_TITLE}
        onMovieCardClick={onMovieCardClick}
      />
  );

  const movieCardClick1 = main.find(`a.small-movie-card__link`).first();
  movieCardClick1.simulate(`click`);

  expect(onMovieCardClick.mock.calls.length).toBe(1);
});
