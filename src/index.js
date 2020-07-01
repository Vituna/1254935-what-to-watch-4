import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import movieСardsSettings from "./mocks/movie-cards-settings.js";
import {Settings, movieDetails, movieDetail} from "./mocks/movie-info.js";
import movieReviews from "./mocks/movie-reviews.js";


ReactDOM.render(
    <App
      movieСardsSettings={movieСardsSettings}
      movieTitle={Settings.MOVIE_TITLE}
      movieGenre={Settings.MOVIE_GENRE}
      movieReleaseDate={Settings.MOVIE_RELEASE_DATE}
      movieDetails={movieDetails}
      movieDetail={movieDetail}
      movieReviews={movieReviews}
    />, document.querySelector(`#root`)
);
