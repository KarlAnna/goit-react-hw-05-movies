import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByName } from '../services/MovieDatabaseApi';
import { MoviesList } from 'components/MoviesList';
import { BiSearchAlt } from 'react-icons/bi';

export const Searcher = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(null);
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
      // setTotalPages(Math.ceil(total_pages / 20));
    });
  }, [query, currentPage, setSearchParams]);
  

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery, page: currentPage });
    setSearchQuery('');
  };

  const onLoadMore = () => {
    let next = currentPage + 1
    setCurrentPage(next);
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
          className="placeholder:italic placeholder:text-dark-accent-color border border-dark-accent-color/40 focus:border-light-accent-color focus:outline-none rounded-md py-2 px-12 w-full shadow-sm text-primary-text-color"
          placeholder="Type something..."
          type="text"
          value={searchQuery}
          onChange={onChange}
        />
      </form>
      {searchedMovies.length > 0 && (
        <>
          <MoviesList movies={searchedMovies} />
          <button onClick={onLoadMore}>MORE</button>
        </>
      )}
    </div>
  );
};
