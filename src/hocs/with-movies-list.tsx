import * as React from "react";
import {Subtract} from "utility-types";

interface State {
  activeCard: string;
}

const withMoviesList = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, {}>;

  class WithMoviesList extends React.PureComponent<T, State> {
    constructor(props: Readonly<Pick<any, string | number | symbol>>) {
      super(props);

      this.state = {
        activeCard: null,
      };
      this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
      this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
    }

    private handleCardMouseEnter(id: string): void {
      this.setState({
        activeCard: id,
      });
    }

    private handleCardMouseLeave(): void {
      this.setState({
        activeCard: null,
      });
    }

    public render(): React.ReactNode {
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
