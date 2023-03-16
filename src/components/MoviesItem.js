import { Link, useLocation } from 'react-router-dom';

export const MoviesItem = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(({ id, title, poster_path, overview }) => {
        return (
          <li className="group relative overflow-hidden" key={id}>
            <Link state={location} to={`/movies/${id}`}>
              {poster_path && (
                <img
                  className="h-[450px]"
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  width="300"
                  alt={title}
                />
              )}
              <div className="bg-dark-accent-color h-[100%] px-2 opacity-0 group-hover:opacity-100 group-hover:duration-500 absolute top-0 left-0 text-center">
                <p className="text-[white] group-hover:translate-y-[15vh] group-hover:duration-700 text-sm">
                  {overview}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </>
  );
};
