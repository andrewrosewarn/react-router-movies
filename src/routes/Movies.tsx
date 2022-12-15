import { Link, Outlet, useLoaderData } from "react-router-dom";
import { Movie } from "../api/getMovies";

export default function Movies() {
  const movies = useLoaderData() as Movie[];

  return (
    <>
      <h2>Movies</h2>
      <p>This is the movies page of the appliation</p>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={movie.id}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
