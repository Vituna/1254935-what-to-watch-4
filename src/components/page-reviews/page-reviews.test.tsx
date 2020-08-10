import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import NameSpace from "../../reducer/name-space";
import PageReviews from "./page-reviews";
import {MovieComments} from "../../types";

const mockStore = configureStore([]);

const comments: MovieComments[] = [
  {
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
    author: `Kate Muir`,
    date: `2016-12-24`,
    rating: `8,9`,
  },
  {
    text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    author: `Bill Goodykoontz`,
    date: `2015-11-18`,
    rating: `8,0`,
  },
  {
    text: `I didn&apos;t find it amusing, and while I can appreciate the creativity, it&apos;s an hour and 40 minutes I wish I could take back.`,
    author: `Amanda Greever`,
    date: `2015-11-18`,
    rating: `8,0`,
  },
];

const createNodeMock = () => {
  return {};
};

it(`Should PageReviews render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      comments
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <PageReviews
            // comments={comments}
          />
        </Provider>, {createNodeMock})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
