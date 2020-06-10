import React from "react";

import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movieTitle, movieGenre, movieReleaseDate} = props;

  return <Main
    movieTitle={movieTitle}
    movieGenre={movieGenre}
    movieReleaseDate={movieReleaseDate}
  />;
};

export default App;
