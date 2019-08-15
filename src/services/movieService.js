import http from "../services/httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

export function deleteMovie(movieId) {
  return http.delete(`${apiEndpoint}/${movieId}`);
}

export function getMovie(movieId) {
  try {
    return http.get(`${apiEndpoint}/${movieId}`);
  } catch {
    return {};
  }
}

export async function saveMovie(movie) {
  if (!movie._id) {
    return http.post(apiEndpoint, movie);
  }

  let { data: movieInDb } = await getMovie(movie._id);

  const movieId = movieInDb._id;
  movieInDb.title = movie.title;
  movieInDb.genreId = movie.genreId;
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;
  delete movieInDb._id;
  delete movieInDb.genre;

  return http.put(`${apiEndpoint}/${movieId}`, movieInDb);
}
