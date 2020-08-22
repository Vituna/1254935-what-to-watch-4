import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";

import {PrivateRoute} from "./private-route";
import {history} from "../../utils";

const noop = () => {
  return;
};

const createNodeMock = () => {
  return {};
};

it(`Render PrivateRoute`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <PrivateRoute
            authorizationStatus={`NO_AUTH`}
            render={null}
          />
        </Router>
        , {createNodeMock}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
