import { Link, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetailsById } from '../services/MovieDatabaseApi';
import { MovieDetailsAddInfo } from './MovieDetailsAddInfo';
import { MovieDetailsBtns } from './MovieDetailsBtns';
import { FiArrowLeftCircle } from 'react-icons/fi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state ?? '/';

  useEffect(() => {
    getMovieDetailsById(movieId).then(setMovie);
  }, [movieId]);

  const { title, release_date, poster_path, overview, genres, vote_average } =
    movie;

  return (
    <div className="container">
      <Link to={backLinkHref} className="inline-flex gap-2 items-center p-2">
        <FiArrowLeftCircle className="inline" />
        Go Back
      </Link>
      <div className="flex gap-8 flex-wrap py-2 items-center justify-center">
        <div>
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              width="300"
              alt={title}
            />
          )}
        </div>
        <div className="flex flex-col gap-3 max-w-[75%] py-4">
          <h2>{title}</h2>
          <div className="flex gap-x-[10%] gap-y-1 flex-wrap">
            {release_date && <p>{new Date(release_date).getFullYear()}</p>}
            {vote_average && (
              <p>User Score: {Math.round((vote_average / 10) * 100)}%</p>
            )}
          </div>
          <div>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <ul className="flex gap-x-3 gap-y-1 flex-wrap">
              {genres &&
                genres.map(genre => (
                  <li key={genre.id}>
                    <p>{genre.name}</p>
                  </li>
                ))}
            </ul>
          </div>
          <MovieDetailsBtns movie={movie} />
        </div>
      </div>
      <MovieDetailsAddInfo backLinkHref={backLinkHref} />
    </div>
  );
};

export default MovieDetails;
