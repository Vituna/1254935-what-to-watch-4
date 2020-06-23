import React from "react";
import renderer from 'react-test-renderer';

import MovieList from './movie-list.jsx';

const Settings = {
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
    .create(<MovieList
      movieСardsSettings={Settings.MOVIE_CARDS}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

