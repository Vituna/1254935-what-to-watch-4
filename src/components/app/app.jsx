import React from "react";

import Main from "../main/main.jsx";

// eslint-disable-next-line react/prop-types
const App = ({movieTitle, movieGenre, movieReleaseDate}) => {

  return <Main
    movieTitle={movieTitle}
    movieGenre={movieGenre}
    movieReleaseDate={movieReleaseDate}
  />;
};

export default App;
