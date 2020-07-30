import * as React from "react";
import {Subtract} from "utility-types";

interface State {
  activeCard: string;
}

const withMoviesList = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, {}>;

  class WithMoviesList extends React.PureComponent<T, State> {
    constructor(props: Readonly<T>) {
      super(props);

      this.state = {
        activeCard: null,
      };
      this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
      this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
    }

    private _handleCardMouseEnter(id: string): void {
      this.setState({
        activeCard: id,
      });
    }

    private _handleCardMouseLeave(): void {
      this.setState({
        activeCard: null,
      });
    }

    public render(): React.ReactNode {
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
