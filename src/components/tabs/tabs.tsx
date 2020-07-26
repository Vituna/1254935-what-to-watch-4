import * as React from "react";

import {TabsProps} from "./types";

const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
  const {activeTab, onTabClick} = props;

  const activeClass = (tab: string): string => activeTab === tab ? `movie-nav__item--active` : ``;

  const handleTabClick = (tab: string) => {
    return (evt) => {
      evt.preventDefault();
      onTabClick(tab);
    };
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={`movie-nav__item ${activeClass(`Overview`)}`}>
          <a onClick={handleTabClick(`Overview`)} href="#" className="movie-nav__link">Overview</a>
        </li>
        <li className={`movie-nav__item ${activeClass(`Details`)}`}>
          <a onClick={handleTabClick(`Details`)} href="#" className="movie-nav__link">Details</a>
        </li>
        <li className={`movie-nav__item ${activeClass(`Reviews`)}`}>
          <a onClick={handleTabClick(`Reviews`)} href="#" className="movie-nav__link">Reviews</a>
        </li>
      </ul>
    </nav>
  );
};

export default Tabs;
