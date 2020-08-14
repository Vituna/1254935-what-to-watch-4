import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import NameSpace from "../../reducer/name-space";
import PageReviews from "./page-reviews";
import {Review, MoviePageProp} from "../../types";

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

const movie: MoviePageProp =
  {
    id: 1,
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    runTime: `1h 39m`,
    year: 2014,
    backgroundPoster: `img/the-grand-budapest-hotel-poster.jpg`,
    filmPoster: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: 8.9,
    ratingCount: 240,
    description: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
  };


const id = 1;

const createNodeMock = () => {
  return {};
};

const noop = () => {
  return;
};

it(`Should PageReviews render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      reviews,
      getFilmReview: movie.id,
    },
    [NameSpace.DATA]: {
      movie: movie.id,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <PageReviews
            movie={movie}
            reviews={reviews}
            getFilmReview={movie}
          />
        </Provider>, {createNodeMock})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
