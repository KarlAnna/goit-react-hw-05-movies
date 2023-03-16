import { Link, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetailsById } from '../services/MovieDatabaseApi';
import { MovieDetailsAddInfo } from './MovieDetailsAddInfo';
import { FiArrowLeftCircle } from 'react-icons/fi';
import useLocalStorage from '../hooks/useLocalStorage';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [queue, setQueue] = useLocalStorage('queue', []);
  const [liked, setLiked] = useLocalStorage('liked', []);
  const [isInQueue, setIsInQueue] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state ?? '/';

  useEffect(() => {
    getMovieDetailsById(movieId).then(setMovie);
    setIsInQueue(queue.some(item => item.id === Number(movieId)));
    setIsLiked(liked.some(item => item.id === Number(movieId)));
  }, [movieId, queue, liked]);

  const isMovieInList = movieList => {
    return movieList.some(item => item.title === movie.title);
  };

  const handleButtonClick = e => {
    const { name } = e.target;
    const movieList = name === 'toQueue' ? queue : liked;
    const setMovieList = name === 'toQueue' ? setQueue : setLiked;
    const result = isMovieInList(movieList);
    const updatedMovieList = result
      ? movieList.filter(item => item.id !== movie.id)
      : [...movieList, movie];
    setMovieList(updatedMovieList);
  };

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
          <div className="flex gap-6 py-4">
            <button
              name="toQueue"
              type="button"
              onClick={handleButtonClick}
              className="bg-accent-color text-[white] text-sm sm:text-base font-semibold py-1 px-3 rounded shadow 
              hover:bg-light-accent-color hover:text-primary-text-color duration-200"
            >
              {isInQueue ? 'Remove from Queue' : 'Add to Queue'}
            </button>
            <button
              name="toLiked"
              type="button"
              onClick={handleButtonClick}
              className="bg-accent-color text-[white] text-sm sm:text-base font-semibold py-1 px-3 rounded shadow 
              hover:bg-light-accent-color hover:text-primary-text-color duration-200"
            >
              {isLiked ? 'Remove from Liked' : 'Add to Liked'}
            </button>
          </div>
        </div>
      </div>
      <MovieDetailsAddInfo backLinkHref={backLinkHref} />
    </div>
  );
};

export default MovieDetails;
