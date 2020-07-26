export interface WithTabsState {
  activeTab: string;
}

export interface WithTabsInjectingProps {
  renderTabs: () => React.ReactNode;
}
