import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Main from "./main.jsx";

const Settings = {
  MOVIE_LIST_TITLE: [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`],
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  MOVIE_RELEASE_DATE: 2014,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should there be a click on the title WTW`, () => {
  const onWhatToWatchClick = jest.fn();

  const main = shallow(
      <Main
        movieTitle={Settings.MOVIE_TITLE}
        movieGenre={Settings.MOVIE_GENRE}
        movieReleaseDate={Settings.MOVIE_RELEASE_DATE}
        movieListTitle={Settings.MOVIE_LIST_TITLE}
        onWhatToWatchClick={onWhatToWatchClick}
      />
  );

  const whatToWatchClick = main.find(`h1.visually-hidden`);

  whatToWatchClick.simulate(`click`);

  expect(onWhatToWatchClick.mock.calls.length).toBe(1);
});
