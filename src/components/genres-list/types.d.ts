interface GenresListFromStore {
  activeGenre: string;
  allGenres: string[];
}

interface GenresListDispatchFromStore {
  onGenreItemClick: (genre: string) => void;
}

export type GenresListProps = GenresListFromStore & GenresListDispatchFromStore

export interface GenresListFromState {
  activeGenre: string;
  allGenres: string[];
}
