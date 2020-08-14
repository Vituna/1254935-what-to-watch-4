import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import NameSpace from "../../reducer/name-space";
import PageReviews from "./page-reviews";
import {Review} from "../../types";

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

const createNodeMock = () => {
  return {};
};

it(`Should PageReviews render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      reviews
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <PageReviews
            reviews={reviews}
          />
        </Provider>, {createNodeMock})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
