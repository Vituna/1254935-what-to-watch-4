import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import movieСardsSettings from "./mocks/movie-cards-settings.js";

const Settings = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  MOVIE_RELEASE_DATE: 2014,
};

ReactDOM.render(
    <App
      movieСardsSettings={movieСardsSettings}
      movieTitle={Settings.MOVIE_TITLE}
      movieGenre={Settings.MOVIE_GENRE}
      movieReleaseDate={Settings.MOVIE_RELEASE_DATE}
    />, document.querySelector(`#root`)
);
