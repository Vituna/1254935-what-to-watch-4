import * as React from "react";
import * as renderer from "react-test-renderer";

import FullScreenVideoPlayer from "./full-screen-video-player";

const createNodeMock = () => {
  return {};
};

const noop = () => {
  return;
};

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

it(`Render FullScreenVideoPlayer`, () => {
  const tree = renderer.create(
      <FullScreenVideoPlayer
        isPlay={true}
        timeElapsed={0}
        currentProgress={`0`}
        onPlayPauseButtonClick={noop}
        onFullScreenClick={noop}
      ><MockComponent/></FullScreenVideoPlayer>, {createNodeMock})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
