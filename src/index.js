import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const settings = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  MOVIE_RELEASE_DATE: 2014,
};

ReactDOM.render(
    <App
      movieTitle={settings.MOVIE_TITLE}
      movieGenre={settings.MOVIE_GENRE}
      movieReleaseDate={settings.MOVIE_RELEASE_DATE}
    />, document.querySelector(`#root`)
);
