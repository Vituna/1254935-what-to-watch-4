import * as React from "react";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/reducer";
import {GenresListProps} from "./types";

const activeClass = (activeGenre, genre) => activeGenre === genre ? `catalog__genres-item--active` : ``;


const GenresList: React.FC<GenresListProps> = (props: GenresListProps) => {
  const {genres, onGenreItemClick, activeGenre} = props;

  const handleGenreClick: any = (genre: { genre: string }) => {
    return (evt) => {
      evt.preventDefault();
      onGenreItemClick(genre);
    };
  };

  const getGenre = (genre, i) => {
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

  const renderGenres = () => genres.map(getGenre);

  return (
    <ul className="catalog__genres-list">
      {renderGenres()}
    </ul>
  );
};

const mapStateToProps: any = (state: { activeGenre: string; genres: string }) => ({
  activeGenre: state.activeGenre,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreItemClick(genre) {
    dispatch(ActionCreator.getFilmsByGenre(genre));
    dispatch(ActionCreator.changeFilter(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
