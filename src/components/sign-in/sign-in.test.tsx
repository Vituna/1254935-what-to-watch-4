import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";

import SingIn from "./sign-in";
import {history} from "../../utils";

const noop = () => {
  return;
};

const createNodeMock = () => {
  return {};
};

it(`Render SingIn`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <SingIn
            onSubmit={noop}
          />
        </Router>, {createNodeMock}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
