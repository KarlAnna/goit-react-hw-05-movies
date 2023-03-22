import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByName } from '../services/MovieDatabaseApi';
import { MoviesList } from 'components/MoviesList';
import { BiSearchAlt } from 'react-icons/bi';

export const Searcher = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  // const queryParams = new URLSearchParams(useLocation().search);
  const query = searchParams.get('query');
  // const page = searchParams.get('page');

  const onChange = e => {
    const { value } = e.target;
    setSearchQuery(value.trim().toLowerCase());
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    searchMoviesByName(query, currentPage).then(({ results, total_pages }) => {
      setSearchedMovies(results);
      setSearchParams({ query: query, page: currentPage });
      setTotalPages(total_pages);
    });
  }, [query, currentPage, setSearchParams]);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery, page: currentPage });
    setSearchQuery('');
  };

  const onLoad = e => {
    const { name } = e.target;
    const next = currentPage + 1;
    const prev = currentPage - 1;

    switch (name) {
      case 'first':
        setCurrentPage(1);
        break;
      case 'prev':
        setCurrentPage(prev);
        break;
      case 'next':
        setCurrentPage(next);
        break;
      case 'last':
        setCurrentPage(totalPages);
        break;
      default:
        return;
    }
  };

  return (
    <div className="container py-8">
      <form
        className="relative flex items-center max-w-xl w-4/5 overflow-hidden mx-auto"
        onSubmit={onSubmit}
      >
        <span className="sr-only">Search</span>
        <button className="absolute px-3 bg-light-accent-color h-10 rounded-md flex justify-center items-center text-primary-text-color">
          <BiSearchAlt />
        </button>
        <input
          className="placeholder:italic placeholder:text-dark-accent-color border border-dark-accent-color/40
           focus:border-light-accent-color focus:outline-none rounded-md py-2 px-12 w-full shadow-sm text-primary-text-color"
          placeholder="Type something..."
          type="text"
          value={searchQuery}
          onChange={onChange}
        />
      </form>
      {searchedMovies.length > 0 && (
        <>
          <MoviesList movies={searchedMovies} />
          <div className="container flex justify-center gap-3">
            <button name="first" onClick={onLoad}>
              1
            </button>
            <button name="prev" onClick={onLoad}>
              prev
            </button>
            <p className="bg-[pink]">{currentPage}</p>
            <button name="next" onClick={onLoad}>
              next
            </button>
            <button name="last" onClick={onLoad}>
              {totalPages}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
