import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";

const Settings = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  MOVIE_RELEASE_DATE: 2014,
  MOVIE_CARDS: [
    {
      name: `Avatar`,
      image: `img/avatar.jpg`
    },
    {
      name: `Aviator`,
      image: `img/aviator.jpg`
    },
    {
      name: `Bohemian rhapsody`,
      image: `img/bohemian-rhapsody.jpg`
    },
    {
      name: `Johnny English`,
      image: `img/johnny-english.jpg`
    },
    {
      name: `Orlando`,
      image: `img/orlando.jpg`
    },
    {
      name: `Pulp Fiction`,
      image: `img/pulp-fiction.jpg`
    },
    {
      name: `Player poster`,
      image: `img/player-poster.jpg`
    },
    {
      name: `War of the worlds`,
      image: `img/war-of-the-worlds.jpg`
    },
  ]
};

const movieDetails = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
  bigPoster: `img/bg-the-grand-budapest-hotel.jpg`,
  filmCover: `img/the-grand-budapest-hotel-poster.jpg`,
  rating: 8.9,
  numberVotes: 240,
  descriptionOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  descriptionTwo: `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  director: `Wes Andreson`,
  starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      movieTitle={Settings.MOVIE_TITLE}
      movieGenre={Settings.MOVIE_GENRE}
      movieReleaseDate={Settings.MOVIE_RELEASE_DATE}
      movieСardsSettings={Settings.MOVIE_CARDS}
      movieDetails={movieDetails}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
