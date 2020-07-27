import * as React from "react";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/reducer";
import {GenresListProps, StateReducerGenresList} from "./types";

const activeClass = (activeGenre: string, genre: string): string => activeGenre === genre ? `catalog__genres-item--active` : ``;


const GenresList: React.FC<GenresListProps> = (props: GenresListProps) => {
  const {genres, onGenreItemClick, activeGenre} = props;

  const handleGenreClick = (genre: string) => {
    return (evt: React.MouseEvent) => {
      evt.preventDefault();
      onGenreItemClick(genre);
    };
  };

  const getGenre = (genre: string, i: number): React.ReactNode => {
    const genreClass = `catalog__genres-item ${activeClass(activeGenre, genre)}`;
    const key = `${genre} + ${i}`;

    return (
      <li
        className={genreClass}
        key={key}
      >
        <a onClick={handleGenreClick(genre)} href="#" className="catalog__genres-link">{genre}</a>
      </li>
    );
  };

  const renderGenres = (): React.ReactNode => genres.map(getGenre);

  return (
    <ul className="catalog__genres-list">
      {renderGenres()}
    </ul>
  );
};

const mapStateToProps = (state: StateReducerGenresList) => ({
  activeGenre: state.activeGenre,
  genres: state.genres,
});

const mapDispatchToProps: object = (dispatch: any) => ({
  onGenreItemClick(genre: string): void {
    dispatch(ActionCreator.getFilmsByGenre(genre));
    dispatch(ActionCreator.changeFilter(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
