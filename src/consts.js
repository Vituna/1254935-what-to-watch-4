export const MaxSimilarCards = 4;

export const DefaultGenre = `All genres`;

export const nameTab = `Overview`;

export const VIDEO_DELAY = 1000;

export const FILMS_LENGTH = 8;

export const сlockCalculations = (time) => Math.floor(time / Minute / Minute);

export const сalculatingMinutes = (time, hours) => Math.floor(time / Minute) - (hours * Minute);

export const сalculatingSeconds = (time) => time % Minute;

export const INTEREST = 100;

const Minute = 60;

export const formatDate = (date) => {
  const MONTH_NAMES = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ];
  return `${MONTH_NAMES[date.getMonth()]}
  ${date.getDate()},
  ${date.getFullYear()}`;

};

