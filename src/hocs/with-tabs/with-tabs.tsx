import * as React from "react";
import {Subtract} from "utility-types";

import Tabs from "../../components/tabs/tabs";
import {WithTabsState, WithTabsInjectingProps} from "./types";
import {TabType} from "../../consts";

const withTabs = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, WithTabsInjectingProps>;

  class WithTabs extends React.PureComponent<T, WithTabsState> {
    constructor(props: Readonly<T>) {
      super(props);

      this.state = {
        activeTab: TabType.OVERVIEW,
      };

      this._getTabs = this._getTabs.bind(this);
      this._handleTabClick = this._handleTabClick.bind(this);
    }

    private _getTabs(): React.ReactNode {
      const {activeTab} = this.state;

      return (
        <Tabs
          activeTab={activeTab}
          onTabClick={this._handleTabClick}
        />
      );
    }

    private _handleTabClick(currentTab: string): void {
      this.setState({
        activeTab: currentTab
      });
    }

    public render(): React.ReactNode {
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
