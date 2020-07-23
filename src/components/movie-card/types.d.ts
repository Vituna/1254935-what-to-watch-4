export interface MovieCardProps {
  title: string;
  filmCover: string;
  previewVideo: string;
  onCardMouseEnter: (title) => void;
  onCardMouseLeave: () => void;
  onTitleClick: (title) => void;
  onCardClick: (title) => void;
}

export interface MovieCardState {
  isPlaying: boolean;
}
