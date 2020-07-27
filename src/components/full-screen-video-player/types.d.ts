export interface FullScreenVideoPlayerProps {
  isPlay: boolean;
  timeElapsed: number;
  currentProgress: string;
  onPlayPauseButtonClick: () => void;
  onFullScreenClick: () => void;
  onPlayerExitClick: () => void;
  children: React.ReactNode;
}
