import * as React from "react";
import {Subtract} from "utility-types";

interface Props {
  filmsLength: number;
  onTitleClick: () => void;
  onCardClick: () => void;
  onCardMouseEnter: () => void;
  onCardMouseLeave: () => void;
  onShowMoreClick: () => void;
}

interface State {
  activeCard: string;
}

const withMoviesList = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, {}>;

  class WithMoviesList extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: null,
      };
      this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
      this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
    }

    _handleCardMouseEnter(id) {
      this.setState({
        activeCard: id,
      });
    }

    _handleCardMouseLeave() {
      this.setState({
        activeCard: null,
      });
    }

    render() {
      const {activeCard} = this.state;

      return (<Component
        {...this.props}
        activeCard={activeCard}
        onCardMouseEnter={this._handleCardMouseEnter}
        onCardMouseLeave={this._handleCardMouseLeave}
      />);
    }
  }

  return WithMoviesList;
};

export default withMoviesList;
