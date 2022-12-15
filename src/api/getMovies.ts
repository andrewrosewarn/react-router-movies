export interface Movie {
  id: string;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  movieId: string;
  reviewText: string;
}

const movies: Movie[] = [
  {
    id: "001",
    title: "Die Hard",
    description: "Christmas party in a tower",
  },
  {
    id: "002",
    title: "Ghostbusters",
    description: "Fours scientists go into business catching ghosts",
  },
  {
    id: "003",
    title: "The Goonies",
    description: "Bunch of kids go on a pirate adventure to save the goon docks",
  },
];

const reviews: Review[] = [
  {
    id: "r001",
    movieId: "001",
    reviewText: "Love this film",
  },
  {
    id: "r002",
    movieId: "001",
    reviewText: "Great film a classic, bit is it a christmas moview",
  },
  {
    id: "r003",
    movieId: "002",
    reviewText: "Classic film love anything Bill Murray",
  },
  {
    id: "r004",
    movieId: "003",
    reviewText: "Amazing film, should never be remade",
  },
  {
    id: "r005",
    movieId: "003",
    reviewText: "The fertellies mum looks like mine",
  },
];

export async function loadMovies(): Promise<Movie[]> {
  return new Promise((res) => {
    setTimeout(() => {
      res(movies);
    }, 1000);
  });
}

export async function getMovie(id: string): Promise<Movie> {
  return new Promise((res) => {
    setTimeout(() => {
      const movie = movies.filter((movie) => movie.id === id)[0];
      res(movie);
    }, 1000);
  });
}

export async function getMovieReviews(movieId: string): Promise<Review[]> {
  return new Promise((res) => {
    setTimeout(() => {
      const revs = reviews.filter((review) => review.movieId === movieId);
      res(revs);
    }, 3000);
  });
}
