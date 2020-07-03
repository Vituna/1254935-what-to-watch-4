import React from "react";
import renderer from "react-test-renderer";

import Main from "./main.jsx";

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

const genres = [`Comedies`, `Crime`, `Documentary`];
const activeGenre = `Comedies`;

const createNodeMock = () => {
  return {};
};

it(`Should WTW render correctly`, () => {
  const tree = renderer
    .create(<Main
      movieTitle={Settings.MOVIE_TITLE}
      movieGenre={Settings.MOVIE_GENRE}
      movieReleaseDate={Settings.MOVIE_RELEASE_DATE}
      movieСardsSettings={Settings.MOVIE_CARDS}
      genres={genres}
      activeGenre={activeGenre}
      onGenreItemClick={() => {}}
      onCardClick={() => {}}
      onTitleClick={() => {}}
    />, {createNodeMock})
      .toJSON();

  expect(tree).toMatchSnapshot();
});
