interface MovieCardFromProps {
  id: number;
  title: string;
  filmCover: string;
  previewVideo: string;
  onCardMouseEnter: (title: string) => void;
  onCardMouseLeave: () => void;
  onStopPlaying: () => void
  onStartPlaying: () => void
  isPlaying: boolean

}

interface MovieCardDispatchFromStore {
  onFilmTitleClick: (id: number) => void;
}

export interface MovieCardFromState {
  isPlaying: boolean;
}

export type MovieCardProps = MovieCardFromProps & MovieCardDispatchFromStore;
