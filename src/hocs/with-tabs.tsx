import * as React from "react";
import {Subtract} from "utility-types";

import Tabs from '../components/tabs/tabs';

interface State {
  activeTab: string;
}

interface InjectingProps {
  renderTabs: () => React.ReactNode;
}

const withTabs = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithTabs extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: `Overview`,
      };

      this._getTabs = this._getTabs.bind(this);
      this._handleTabClick = this._handleTabClick.bind(this);
    }

    _getTabs() {
      const {activeTab} = this.state;

      return (
        <Tabs
          activeTab={activeTab}
          onTabClick={this._handleTabClick}
        />
      );
    }

    _handleTabClick(currentTab) {
      this.setState({
        activeTab: currentTab
      });
    }

    render() {
      const {activeTab} = this.state;

      return <Component
        {...this.props}
        renderTabs={this._getTabs}
        activeTab={activeTab}
      />;
    }
  }

  return WithTabs;
};

export default withTabs;
