import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";

const Settings = {
  MOVIE_LIST_TITLE: [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`],
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  MOVIE_RELEASE_DATE: 2014,
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      movieTitle={Settings.MOVIE_TITLE}
      movieGenre={Settings.MOVIE_GENRE}
      movieReleaseDate={Settings.MOVIE_RELEASE_DATE}
      movieListTitle={Settings.MOVIE_LIST_TITLE}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
