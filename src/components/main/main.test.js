import React from "react";
import renderer from "react-test-renderer";

import Main from "./main.jsx";

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

it(`Should WTW render correctly`, () => {
  const tree = renderer
    .create(<Main
      movieTitle={Settings.MOVIE_TITLE}
      movieGenre={Settings.MOVIE_GENRE}
      movieReleaseDate={Settings.MOVIE_RELEASE_DATE}
      movieСardsSettings={Settings.MOVIE_CARDS}
      onCardClick={() => {}}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
