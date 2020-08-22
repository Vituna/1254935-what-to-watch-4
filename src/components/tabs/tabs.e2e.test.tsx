import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Tabs from "./tabs";
import {TabType} from "../../consts";

const activeTab: string = TabType.OVERVIEW;

configure({adapter: new Adapter()});

it(`Check pressed tab`, () => {
  const onTabClick = jest.fn();

  const mockEvent = {
    preventDefault() {
      return;
    }
  };

  const tabs = shallow(
      <Tabs
        activeTab={activeTab}
        onTabClick={onTabClick}
      />
  );

  const movieNav = tabs.find(`.movie-nav__link`);

  movieNav.forEach((tabLink) => tabLink.simulate(`click`, mockEvent));

  expect(onTabClick).toHaveBeenCalledTimes(movieNav.length);
  expect(onTabClick).toHaveBeenNthCalledWith(1, `Overview`);
  expect(onTabClick).toHaveBeenNthCalledWith(2, `Details`);
  expect(onTabClick).toHaveBeenNthCalledWith(3, `Reviews`);
});
