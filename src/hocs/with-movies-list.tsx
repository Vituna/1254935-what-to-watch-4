import React, {PureComponent} from 'react';

const withMoviesList = (Component) => {
  class WithMoviesList extends PureComponent {
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
