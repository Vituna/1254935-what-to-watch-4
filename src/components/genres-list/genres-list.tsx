import * as React from "react";
import {connect} from "react-redux";

import {getAllGenres} from "../../reducer/data/selectors";
import {getCurrentGenre} from "../../reducer/state/selectors";
import {ActionCreator} from "../../reducer/state/state";

import {GenresListProps, GenresListFromStore, GenresListDispatchFromStore, GenresListFromState} from "./types";

const activeClass = (activeGenre: string, genre: string): string => activeGenre === genre ? `catalog__genres-item--active` : ``;


const GenresList: React.FC<GenresListProps> = (props: GenresListProps) => {
  const {allGenres, onGenreItemClick, activeGenre} = props;

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

  const renderGenres = (): React.ReactNode => allGenres.map(getGenre);

  return (
    <ul className="catalog__genres-list">
      {renderGenres()}
    </ul>
  );
};

const mapStateToProps = (state: GenresListFromState): GenresListFromStore => ({
  activeGenre: getCurrentGenre(state),
  allGenres: getAllGenres(state),
});

const mapDispatchToProps = (dispatch: any): GenresListDispatchFromStore => ({
  onGenreItemClick(genre: string): void {
    dispatch(ActionCreator.changeCurrentGenre(genre));
    dispatch(ActionCreator.changeFilter(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
