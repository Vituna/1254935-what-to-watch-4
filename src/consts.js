export const MAX_SIMILAR_CARDS = 4;

export const DEFAULT_GENRE = `All genres`;

export const VIDEO_DELAY = 1000;

export const FILMS_LENGTH = 8;

export const calculateTime = (time) => Math.floor(time / MINUTE / MINUTE);

export const calculateTimeMinutes = (time, hours) => Math.floor(time / MINUTE) - (hours * MINUTE);

export const calculateTimeSeconds = (time) => time % MINUTE;

export const INTEREST = 100;

const MINUTE = 60;

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

export const LengthReview = {
  MIN: 50,
  MAX: 400
};

export const TabType = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const RatingType = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

export const MovieRating = {
  BAD: 0,
  NORMAL: 3,
  GOOD: 5,
  VERY_GOOD: 8,
  AWESOME: 10
};

