import * as React from "react";
import * as renderer from "react-test-renderer";

import SingIn from "./sign-in";

const noop = () => {
  return;
};

const createNodeMock = () => {
  return {};
};

it(`Render SingIn`, () => {
  const tree = renderer
    .create(<SingIn
      onSubmit={noop}
    />, {createNodeMock}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
