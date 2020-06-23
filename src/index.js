import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import movieСardsSettings from "./mocks/movie-cards-settings.js";
import {Settings, movieDetails} from "./mocks/movie-info.js";


ReactDOM.render(
    <App
      movieСardsSettings={movieСardsSettings}
      movieTitle={Settings.MOVIE_TITLE}
      movieGenre={Settings.MOVIE_GENRE}
      movieReleaseDate={Settings.MOVIE_RELEASE_DATE}
      movieDetails = {movieDetails}
    />, document.querySelector(`#root`)
);
