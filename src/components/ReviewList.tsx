import { useAsyncValue } from "react-router-dom";
import { Review } from "../api/getMovies";

export default function ReviewList() {
  const reviews = useAsyncValue() as Review[];

  return (
    <ul>
      {reviews.map((review: Review) => (
        <li key={review.id}>{review.reviewText}</li>
      ))}
    </ul>
  );
}
