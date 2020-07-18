import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Tabs from "./tabs";

configure({adapter: new Adapter()});

it(`Check pressed tab`, () => {
  const onTabClick = jest.fn();

  const mockEvent = {
    preventDefault() {}
  };

  const tabs = shallow(
      <Tabs
        activeTab={`Overview`}
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
