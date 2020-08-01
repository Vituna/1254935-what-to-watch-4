import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";

import PageDetails from "./page-details";
import {PageDetailsProps} from "./types";

const mockStore = configureStore([]);


const movie: PageDetailsProps = {
  genre: `Drama`,
  runTime: `99`,
  year: 2014,
  director: `Wes Andreson`,
  starring: `Bill Murray`,
};

const createNodeMock = () => {
  return {};
};

it(`Should PageDetails render correctly`, () => {
  const {director, genre, runTime, starring, year} = movie;

  const store = mockStore({
    mistakes: 0,
  });

  const tree = renderer
    .create(
        <PageDetails
          director={director}
          genre={genre}
          runTime={runTime}
          starring={starring}
          year={year}
        />
        , {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
