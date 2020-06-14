import React from "react";
import renderer from "react-test-renderer";

import Main from "./main.jsx";

const Settings = {
  MOVIE_LIST_TITLE: [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`],
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  MOVIE_RELEASE_DATE: 2014,
};

it(`Should WTW render correctly`, () => {
  const tree = renderer
    .create(<Main
      movieTitle={Settings.MOVIE_TITLE}
      movieGenre={Settings.MOVIE_GENRE}
      movieReleaseDate={Settings.MOVIE_RELEASE_DATE}
      movieListTitle={Settings.MOVIE_LIST_TITLE}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
