import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MoviesList from './movies-list';

Enzyme.configure({adapter: new Adapter()});

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

it(`MovieList is correctly handled click on title`, () => {
  const onHoverHandler = jest.fn();


  const main = shallow(<MoviesList
    movieSetting={Settings.MOVIE_CARDS}
    onMovieCardClick={onHoverHandler}

  />);

  const movieCard = main.find(`.small-movie-card__link`);

  movieCard.simulate(`mouseenter`);

  expect(onHoverHandler).toHaveBeenCalledWith(Settings.MOVIE_CARDS);
});
