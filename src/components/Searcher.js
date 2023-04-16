import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesByName } from '../services/MovieDatabaseApi';
import { MoviesList } from 'components/MoviesList';
import { Pagination } from './Pagination';
import { BiSearchAlt } from 'react-icons/bi';

export const Searcher = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalPages, setTotalPages] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = searchParams.get('page');

  const onChange = e => {
    const { value } = e.target;
    setSearchQuery(value.trim().toLowerCase());
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    setSearchParams({ query: query, page: page });
    searchMoviesByName(query, page).then(({ results, total_pages }) => {
      setSearchedMovies(results);
      setTotalPages(total_pages);
    });
  }, [query, page, setSearchParams]);

  const updatePage = value => {
    setSearchParams({ query, page: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery, page: 1 });
    setSearchQuery('');
  };

  const onLoad = e => {
    const { name } = e.target;
    const numberPage = Number(page);
    const next = numberPage + 1;
    const prev = numberPage - 1;

    switch (name) {
      case 'first':
        updatePage(1);
        break;
      case 'prev':
        if (numberPage !== 1) {
          updatePage(prev);
        }
        break;
      case 'next':
        if (numberPage !== totalPages) {
          updatePage(next);
        }
        break;
      case 'last':
        updatePage(totalPages);
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
          <Pagination onLoad={onLoad} totalPages={totalPages} page={page} />
        </>
      )}
    </div>
  );
};
