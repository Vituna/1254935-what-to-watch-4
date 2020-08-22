import {FullMoves} from "../../types";

interface SendReview {
  rating: string;
  comment: string
}

interface ReviewProps {
  movies: FullMoves;
  showSendError: boolean;
  onReviewSuccess: boolean;
  isSent: boolean;
}

export interface AddReviewStateFromStore {
  movies: FullMoves;
  showSendError: boolean;
  onReviewSuccess: boolean;
  isSent: boolean;
}

export interface AddReviewDispatchFromStore {
  onClosingReview: () => void;
  sendReview: (id: number, {rating, comment}: SendReview) => void;
}

export type AddReviewProps = ReviewProps & AddReviewStateFromStore & AddReviewDispatchFromStore;

export interface AddReviewFromState {
  movies: FullMoves;
}
