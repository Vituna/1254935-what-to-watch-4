import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const App = ({movieTitle, movieGenre, movieReleaseDate, movieListTitle}) => {

  return <Main
    movieTitle={movieTitle}
    movieGenre={movieGenre}
    movieReleaseDate={movieReleaseDate}
    movieListTitle={movieListTitle}

  />;
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieReleaseDate: PropTypes.number.isRequired,
  movieListTitle: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
