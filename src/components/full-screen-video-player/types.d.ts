export interface FullScreenVideoPlayerProps {
  isPlay: boolean;
  timeElapsed: number;
  currentProgress: string;
  onPlayPauseButtonClick: () => void;
  onFullScreenClick: () => void;
  children: React.ReactNode;
}
