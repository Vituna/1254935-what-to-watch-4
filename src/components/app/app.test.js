import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";

const Settings = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  MOVIE_RELEASE_DATE: 2014,
  MOVIE_CARDS: [
    {
      name: `Avatar`,
      image: `img/avatar.jpg`,
      previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      name: `Aviator`,
      image: `img/aviator.jpg`,
      previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    },
    {
      name: `Bohemian rhapsody`,
      image: `img/bohemian-rhapsody.jpg`,
      previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      name: `Johnny English`,
      image: `img/johnny-english.jpg`,
      previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    },
    {
      name: `Orlando`,
      image: `img/orlando.jpg`,
      previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      name: `Pulp Fiction`,
      image: `img/pulp-fiction.jpg`,
      previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    },
    {
      name: `Player poster`,
      image: `img/player-poster.jpg`,
      previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      name: `War of the worlds`,
      image: `img/war-of-the-worlds.jpg`,
      previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    },
  ]
};

const movieReviews = [
  {
    author: `Kate Muir`,
    date: `December 24, 2016`,
    rating: 8.9,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years`,
  },
  {
    author: `Bill Goodykoontz`,
    date: `November 18, 2015`,
    rating: 8.0,
    text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  },
  {
    author: `Amanda Greever`,
    date: `November 18, 2015`,
    rating: 8.0,
    text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
  },
  {
    author: `Matthew Lickona`,
    date: `December 20, 2016`,
    rating: 7.2,
    text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
  },
  {
    author: `Paula Fleri-Soler`,
    date: `December 20, 2016`,
    rating: 7.6,
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult`,
  },
  {
    author: `Paula Fleri-Soler`,
    date: `December 20, 2016`,
    rating: 7.0,
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult`,
  },
];

const movieDetails = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
  bigPoster: `img/bg-the-grand-budapest-hotel.jpg`,
  filmCover: `img/the-grand-budapest-hotel-poster.jpg`,
  rating: 8.9,
  numberVotes: 240,
  descriptionOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  descriptionTwo: `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  director: `Wes Andreson`,
  starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
  movieDurationTime: `1h 49m`,
};

const createNodeMock = () => {
  return {};
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      movieTitle={Settings.MOVIE_TITLE}
      movieGenre={Settings.MOVIE_GENRE}
      movieReleaseDate={Settings.MOVIE_RELEASE_DATE}
      movieСardsSettings={Settings.MOVIE_CARDS}
      movieDetails={movieDetails}
      movieReviews={movieReviews}
    />, {createNodeMock})
      .toJSON();

  expect(tree).toMatchSnapshot();
});
