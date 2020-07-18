import * as React from "react";
import * as renderer from "react-test-renderer";

import ShowMore from "./show-more";

export const noop = () => {
};

it(`Render ShowMore`, () => {
  const tree = renderer
    .create(<ShowMore
      onShowMoreClick={noop}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
