import { Await, useLoaderData } from "react-router-dom";
import { Movie, Review } from "../api/getMovies";
import { Suspense } from "react";
import ReviewList from "../components/ReviewList";

export default function MovieDetail() {
  const { movie, reviews } = useLoaderData() as { movie: Movie; reviews: Review[] };

  return (
    <>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <h3>Reviews</h3>
      <Suspense fallback={<h4>Loading...</h4>}>
        <Await resolve={reviews}>
          <ReviewList />
        </Await>
      </Suspense>
    </>
  );
}
