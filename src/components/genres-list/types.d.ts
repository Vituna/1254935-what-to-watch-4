export interface GenresListProps {
  genres: string[];
  activeGenre: string;
  onGenreItemClick: ({genre: string}) => void;
}
