import * as React from "react";
import * as renderer from "react-test-renderer";

import PageDetails from "./page-details";
import {PageDetailsProps} from "./types";

const movie: PageDetailsProps = {
  genre: `Drama`,
  runTime: `99`,
  year: 2014,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Jude Law`]
};

const createNodeMock = () => {
  return {};
};

it(`Should PageDetails render correctly`, () => {
  const {director, genre, runTime, starring, year} = movie;

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
