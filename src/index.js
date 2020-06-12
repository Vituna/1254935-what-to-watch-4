import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const Settings = {
  MOVIE_LIST_TITLE: [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`],
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  MOVIE_RELEASE_DATE: 2014,
};

ReactDOM.render(
    <App
      movieListTitle={Settings.MOVIE_LIST_TITLE}
      movieTitle={Settings.MOVIE_TITLE}
      movieGenre={Settings.MOVIE_GENRE}
      movieReleaseDate={Settings.MOVIE_RELEASE_DATE}
    />, document.querySelector(`#root`)
);
