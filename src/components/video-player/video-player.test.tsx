import * as React from "react";
import * as renderer from "react-test-renderer";

import VideoPlayer from "./video-player";

interface Mock {
  image: string;
  previewVideo: string;
}

const mock: Mock = {
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const createNodeMock = () => {
  return {};
};

it(`VideoPlayer is rendered correctly`, () => {
  const {previewVideo, image} = mock;

  const tree = renderer.create(<VideoPlayer
    isPlaying={false}
    src={previewVideo}
    poster={image}
    muted={true}
  />, {createNodeMock})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
