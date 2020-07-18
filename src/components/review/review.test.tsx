import * as React from "react";
import * as renderer from "react-test-renderer";

import Review from "./review";
import {movieComments} from "../../types";

const review: movieComments = {
  text: `I didn&apos;t find it amusing, and while I can appreciate the creativity, it&apos;s an hour and 40 minutes I wish I could take back.`,
  author: `Amanda Greever`,
  date: `2015-11-18`,
  rating: `8,0`,
};

it(`Should Review render correctly`, () => {
  const tree = renderer
    .create(<Review
      review={review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
