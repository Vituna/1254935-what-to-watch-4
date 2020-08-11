import * as React from "react";
import * as renderer from "react-test-renderer";

import AddReview from "./add-review";

const promoFilm = {
  id: 1,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  cover: `img/bg-the-grand-budapest-hotel.jpg`,
  ratingScore: 8.9,
  ratingLevel: `Very good`,
  ratingCount: 240,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
  textPartTwo: `Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
};

const createNodeMock = () => {
  return {};
};

const noop = () => {
  return;
};

it(`Render AddReview`, () => {
  const tree = renderer
    .create(<AddReview
      title={promoFilm.title}
      backgroundPoster={promoFilm.poster}
      filmPoster={promoFilm.cover}
      showSendError={false}
      onSubmitReview={noop}
    />, {createNodeMock}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
