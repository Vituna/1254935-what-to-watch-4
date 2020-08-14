import {Review, FullMoves} from "../../types";

export interface PageReviewsProps {
  reviews: Review[];
  movie: FullMoves
  getFilmReview: (id: number) => void
}

export interface PageReviewsFromStore {
  reviews: Review[];
}

export interface PageReviewsFromState {
  reviews: Review[];
}

export interface PageReviewsFromDispatch {
  getFilmReview: (id: number) => void
}
