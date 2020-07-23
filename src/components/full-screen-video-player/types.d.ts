export interface FullScreenVideoPlayerProps {
  isPlay: boolean;
  timeElapsed: any;
  currentProgress: string;
  onPlayPauseButtonClick: () => void;
  onFullScreenClick: () => void;
  onPlayerExitClick: () => void;
  children: React.ReactNode;
}
