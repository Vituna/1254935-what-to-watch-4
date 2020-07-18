import * as React from "react";
import * as renderer from "react-test-renderer";

import PageOverview from "./page-overview";

interface MoveDetail {
  rating: number,
  numberVotes: number,
  descriptionOne: string,
  descriptionTwo: string,
  director: string,
  starring: string,
};

const movieDetails: MoveDetail = {
  rating: 8.9,
  numberVotes: 240,
  descriptionOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  descriptionTwo: `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  director: `Wes Andreson`,
  starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
};

it(`Should PageOverview render correctly`, () => {
  const {descriptionOne, descriptionTwo, director, rating, numberVotes, starring} = movieDetails;

  const tree = renderer
    .create(<PageOverview
      descriptionOne={descriptionOne}
      descriptionTwo={descriptionTwo}
      director={director}
      rating={rating}
      numberVotes={numberVotes}
      starring={starring}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
