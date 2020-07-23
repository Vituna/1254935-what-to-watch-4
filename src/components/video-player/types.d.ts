export interface VideoPlayerProps {
  isPlaying: boolean;
  muted: boolean;
  src: string;
  poster: string;
}

export interface VideoPlayerState {
  isPlaying: boolean;
}
