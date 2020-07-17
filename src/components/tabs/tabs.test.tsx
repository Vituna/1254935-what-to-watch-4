import * as React from "react";
import * as renderer from "react-test-renderer";

import Tabs from './tabs';

const activeTab = `Overview`;

it(`Should Tabs render correctly`, () => {
  const tree = renderer
    .create(<Tabs
      activeTab={activeTab}
      onTabClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
