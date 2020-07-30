export interface WithFullScreenVideoPlayerState {
  isPlay: boolean;
  isFullscreen: boolean;
  timeElapsed: number;
  progress: number;
  duration: number;
}

export interface WithFullScreenVideoPlayerProps {
  preview: string;
  onPlayerExitClick: () => void;
}
