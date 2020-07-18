import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import MoviesList from "./movie-list";
import {Move} from "../../types";

const noop = () => {
  return;
};

configure({adapter: new Adapter()});

const movies: Move[] = [
  {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014,
    movieDurationTime: `1h 39m`,
    filmCover: `img/the-grand-budapest-hotel-poster.jpg`,
    bigPoster: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: 8.9,
    numberVotes: 240,
    descriptionOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    descriptionTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    filmCover: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Sci-Fi`,
    year: 2014,
    movieDurationTime: `1h 39m`,
    bigPoster: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: 8.9,
    numberVotes: 240,
    descriptionOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    descriptionTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }
];


it(`MovieList is correctly handled click on title`, () => {
  const onHoverHandler = jest.fn();


  const main = shallow(<MoviesList
    movies={movies}
    onCardClick={noop}
    onTitleClick={noop}
    onCardMouseEnter={noop}
    onCardMouseLeave={noop}
    onShowMoreClick={noop}
  />);

  const movieList = main.find(`.small-movie-card__link`);

  movieList.simulate(`mouseenter`);

  expect(onHoverHandler).toHaveBeenCalledWith(movies);
});
