import { Link, useLocation } from 'react-router-dom';

export const MoviesItem = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(({ id, title, poster_path, overview }) => {
        return (
          <li className="group relative" key={id}>
            <Link state={location} to={`/movies/${id}`}>
              {poster_path && (
                <img
                  className="max-h-[450px] max-w-80"
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt={title}
                />
              )}
              <div className="bg-dark-accent-color h-full w-full px-2 opacity-0 group-hover:opacity-100 group-hover:duration-500 absolute top-0 text-center overflow-y-auto">
                <p className="text-[white] group-hover:translate-y-16 group-hover:duration-700 text-sm">
                  {overview
                    ? overview
                    : 'No info about overview for this movie'}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </>
  );
};
