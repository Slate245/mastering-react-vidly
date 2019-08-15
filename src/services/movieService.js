import http from "../services/httpService";
import config from "../config.json";

export function getMovies() {
  return http.get(`${config.apiEndpoint}/movies`);
}
