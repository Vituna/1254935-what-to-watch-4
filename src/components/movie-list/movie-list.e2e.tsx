import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import MoviesList from "./movie-list";
import {MovieListProp} from "../../types";

const noop = () => {
  return;
};

configure({adapter: new Adapter()});

const movies: MovieListProp[] = [
  {
    id: 1,
    title: `The Grand Budapest Hotel`,
    image: `img/the-grand-budapest-hotel-poster.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 1,
    title: `The Grand Budapest Hotel`,
    image: `img/the-grand-budapest-hotel-poster.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  }
];


it(`MovieList is correctly handled click on title`, () => {
  const onHoverHandler = jest.fn();

  const main = shallow(<MoviesList
    movies={movies}
    onCardMouseEnter={noop}
    onCardMouseLeave={noop}
  />);

  const movieList = main.find(`.small-movie-card__link`);

  movieList.simulate(`mouseenter`);

  expect(onHoverHandler).toHaveBeenCalledWith(movies);
});
