import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {PageReviews} from "./page-reviews";
import {Review, FullMoves} from "../../types";

const mockStore = configureStore([]);

const reviews: Review[] = [
  {
    id: 1,
    user: {
      id: 4,
      name: `Kate Muir`
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  }
];

const movie: FullMoves =
  {
    id: 1,
    title: `The Grand Budapest Hotel`,
    filmPoster: `img/bg-the-grand-budapest-hotel.jpg`,
    image: `img/the-grand-budapest-hotel-poster.jpg`,
    backgroundPoster: `img/the-grand-budapest-hotel-poster.jpg`,
    backgroundColor: `img/bg-the-grand-budapest-hotel.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    rating: 8.9,
    ratingCount: 240,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    runTime: `1h 39m`,
    genre: `Drama`,
    year: 2014,
  };

const createNodeMock = () => {
  return {};
};

const noop = () => {
  return;
};

it(`Should PageReviews render correctly`, () => {
  const store = mockStore({
    reviews,
    movie,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <PageReviews
            movie={movie}
            reviews={reviews}
            getFilmReview={noop}
          />
        </Provider>, {createNodeMock})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
