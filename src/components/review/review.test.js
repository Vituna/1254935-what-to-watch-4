import React from 'react';
import renderer from 'react-test-renderer';

import Review from './review.jsx';

const review = {
  author: `Bill Goodykoontz`,
  date: `November 18, 2015`,
  rating: 8.0,
  text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
};

it(`Should Review render correctly`, () => {
  const tree = renderer
    .create(<Review
      review={review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
