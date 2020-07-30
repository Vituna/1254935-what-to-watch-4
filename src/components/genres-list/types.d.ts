interface GenresListFromStore {
  activeGenre: string;
  genres: string[];
}

interface GenresListDispatchFromStore {
  onGenreItemClick: (genre: string) => void;
  }

  export type GenresListProps = GenresListFromStore & GenresListDispatchFromStore

  export interface GenresListFromState {
    activeGenre: string;
    genres: string[];
  }
