import {FullMoves} from "../../types";

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
  sendReview: (id: number, {rating, comment}: {rating: string; comment: string}) => void;
}

export type AddReviewProps = ReviewProps & AddReviewStateFromStore & AddReviewDispatchFromStore;

export interface AddReviewFromState {
  movies: FullMoves;
}
