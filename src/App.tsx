import { createBrowserRouter, createRoutesFromElements, defer, Route, RouterProvider } from "react-router-dom";
import { getMovie, getMovieReviews, loadMovies } from "./api/getMovies";
import MovieDetailError from "./components/MovieDetailError";
import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";
import Movies from "./routes/Movies";
import News from "./routes/News";
import Root from "./routes/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} loader={loadMovies}>
        <Route
          path=":id"
          element={<MovieDetail />}
          loader={async ({ params }) => {
            // const [movie, reviews] = await Promise.all([getMovie(params.id!), getMovieReviews(params.id!)]);

            const movie = await getMovie(params.id!);
            const reviews = getMovieReviews(params.id!);
            return defer({ movie, reviews });
          }}
          errorElement={<MovieDetailError />}
        />
      </Route>
      <Route path="news" element={<News />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
