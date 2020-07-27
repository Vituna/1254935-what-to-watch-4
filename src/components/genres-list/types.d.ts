export interface GenresListProps {
  genres: string[];
  activeGenre: string;
  onGenreItemClick: (genre: string) => void;
}

export interface StateReducerGenresList {
  activeGenre: string;
  genres: string;
}
