import { fetchPopular } from './API';
import { decodeGenres } from './decodeGenres';

import { APIKEY } from './index';
import { APIURL } from './index';

export async function getPopularMovies(APIKEY) {
  const popularMovies = await fetchPopular(APIKEY);
  const pageCount = popularMovies.total_pages;
  const result = popularMovies.results;

  const currentPage = await Promise.all(
    result.map(
      async ({
        id,
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
        const imgPath = poster_path
          ? `https://image.tmdb.org/t/p/w300` + poster_path
          : '';
        const genres = genre_ids ? await decodeGenres(genre_ids) : null;
        const raitng = vote_average ? vote_average : null;

        return await {
          id: id,
          title: movieTitle,
          originalTitle: movieOriginalTitle,
          year: movieDate.slice(0, 4),
          genres: genres,
          popularity: popularity,
          overview: overview,
          rating: raitng,
          voteCount: vote_count,
          imgPath: imgPath,
        };
      }
    )
  );
console.log(currentPage);
  return currentPage;
}
