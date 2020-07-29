interface MovieCardFromProps {
  title: string;
  filmCover: string;
  previewVideo: string;
  onCardMouseEnter: (title: string) => void;
  onCardMouseLeave: () => void;
}

interface MovieCardDispatchFromStore {
  onFilmTitleClick: (title: string) => void;
}

export interface MovieCardFromState {
  isPlaying: boolean;
}

export type MovieCardProps = MovieCardFromProps & MovieCardDispatchFromStore;
