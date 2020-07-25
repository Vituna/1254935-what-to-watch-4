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
      this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
      this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
    }

    private handleCardMouseEnter(id) {
      this.setState({
        activeCard: id,
      });
    }

    private handleCardMouseLeave() {
      this.setState({
        activeCard: null,
      });
    }

    render() {
      const {activeCard} = this.state;

      return (<Component
        {...this.props}
        activeCard={activeCard}
        onCardMouseEnter={this.handleCardMouseEnter}
        onCardMouseLeave={this.handleCardMouseLeave}
      />);
    }
  }

  return WithMoviesList;
};

export default withMoviesList;
