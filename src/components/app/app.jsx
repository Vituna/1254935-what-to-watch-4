import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const App = ({movieTitle, movieGenre, movieReleaseDate, movieСardsSettings}) => {

  return <Main
    movieTitle={movieTitle}
    movieGenre={movieGenre}
    movieReleaseDate={movieReleaseDate}
    movieСardsSettings={movieСardsSettings}
  />;
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieReleaseDate: PropTypes.number.isRequired,
  movieСardsSettings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string
  })),
};

export default App;
