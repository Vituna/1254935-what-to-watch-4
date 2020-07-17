import * as React from "react";
import * as renderer from "react-test-renderer";

import VideoPlayer from "./video-player";

const mock = {
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const createNodeMock = () => {
  return {};
};

it(`VideoPlayer is rendered correctly`, () => {
  const {preview, image} = mock;

  const tree = renderer.create(<VideoPlayer
    isPlaying={false}
    src={preview}
    poster={image}
    muted={true}
  />, {createNodeMock})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
