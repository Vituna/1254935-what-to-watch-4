import * as React from "react";
import * as renderer from "react-test-renderer";

import ReviewBlock from "./review-block";
import {Review} from "../../types";

const reviews: Review =
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
;

it(`Should Review render correctly`, () => {
  const tree = renderer
    .create(<ReviewBlock
      comment={reviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
