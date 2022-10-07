import { fetchPopular } from './API';
import { decodeGenres } from './decodeGenres';
import { APIKEY } from './index';
import { APIURL } from './index';

export async function getPopularMovies(APIKEY) {
  const popularMovies = await fetchPopular(APIKEY);
  const pageCount = popularMovies.total_pages;
  const result = popularMovies.results;

  const currentPage = result.map(
    async ({
      title,
      original_title,
      name,
      original_name,
      overview,
      poster_path,
      genre_ids,
      popularity,
      release_date,
      first_air_date,
      vote_average,
      vote_count,
    }) => {
      const movieTitle = title ? title : name;
      const movieOriginalTitle = original_title
        ? original_title
        : original_name;
      const movieDate = release_date ? release_date : first_air_date;

      const movieData = {
        title: movieTitle,
        originalTitle: movieOriginalTitle,
        year: movieDate.slice(0, 4),
        genres: await decodeGenres(genre_ids),
        popularity: popularity,
        overview: overview,
        rating: vote_average,
        voteCount: vote_count,
        imgPath: APIURL + 't/p/orginal' + poster_path,
      };
      console.log(movieData);
      return movieData;
    }
  );
}
