import * as React from "react";
import {connect} from "react-redux";

import {Operation as UserOperation} from "../../reducer/user/user";

import {history} from "../../utils";
import VideoPlayer from "../video-player/video-player";
import {VIDEO_DELAY} from "../../consts";
import {MovieCardProps, MovieCardFromState, MovieCardDispatchFromStore} from "./types";

class MovieCard extends React.PureComponent<MovieCardProps, MovieCardFromState> {
  _timer: number ;
  constructor(props: Readonly<MovieCardProps>) {
    super(props);

    this._timer = null;
    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseRemove = this._handleCardMouseRemove.bind(this);
  }

  componentWillUnmount(): void {
    clearTimeout(this._timer);
  }

  private _stopPlaying(): void {
    const {onStopPlaying} = this.props;
    clearTimeout(this._timer);
    this._timer = null;

    onStopPlaying();
  }

  private _handleCardMouseEnter(): void {
    const {title, onStartPlaying} = this.props;
    this._timer = window.setTimeout(onStartPlaying, VIDEO_DELAY);
    this.props.onCardMouseEnter(title);
  }

  private _handleCardMouseRemove(): void {
    this._stopPlaying();
    if (this._timer) {
      this._stopPlaying();
    }

    this.props.onCardMouseLeave();
  }

  private _handleCartTitleClick(id: number) {
    return (evt: React.MouseEvent): void => {
      evt.preventDefault();
      history.push(`/films/${id}`);
      this.props.onFilmTitleClick(id);
    };
  }

  private _handleCardClick(id: number) {
    return () => {
      history.push(`/films/${id}`);
      this.props.onFilmTitleClick(id);
    };
  }

  public render(): React.ReactNode {
    const {id, title, filmCover, previewVideo, isPlaying} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleCardMouseEnter}
        onMouseLeave={this._handleCardMouseRemove}
      >
        <div className="small-movie-card__image" onClick={this._handleCardClick(id)}>
          <VideoPlayer
            src={previewVideo}
            poster={filmCover}
            muted={true}
            isPlaying={isPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html"
            onClick={this._handleCartTitleClick(id)}
          >{title}</a>
        </h3>
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch: any): MovieCardDispatchFromStore => ({
  onFilmTitleClick(id) {
    dispatch(UserOperation.loadReview(id));
  },
});

export {MovieCard};
export default connect(null, mapDispatchToProps)(MovieCard);
