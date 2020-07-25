export interface MovieCardProps {
  title: string;
  filmCover: string;
  previewVideo: string;
  onCardMouseEnter: (title) => void;
  onCardMouseLeave: () => void;
  onFilmTitleClick: (title) => void;
}

export interface MovieCardState {
  isPlaying: boolean;
}
