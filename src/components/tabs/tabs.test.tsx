import * as React from "react";
import * as renderer from "react-test-renderer";
import {TabType} from "../../consts";

import Tabs from "./tabs";

export const noop = () => {
  return;
};

const activeTab: string = TabType.OVERVIEW;

it(`Should Tabs render correctly`, () => {
  const tree = renderer
    .create(<Tabs
      activeTab={activeTab}
      onTabClick={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
