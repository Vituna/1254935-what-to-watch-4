export interface AddReviewProps {
  title: string;
  backgroundPoster: string;
  filmPoster: string;
  onSubmitReview: ({rating, comment}: {rating: string; comment: string}) => void;
  showSendError: boolean;
}
