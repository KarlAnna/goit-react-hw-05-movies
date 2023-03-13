import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react'
import { MoviesItem } from './MoviesItem';

export const MoviesList = ({ movies }) => {
  return (
    <div className="container py-8">
      {movies.length > 0 && (
        <ul className="flex flex-wrap justify-center gap-2">
          <MoviesItem movies={movies} />
        </ul>
      )}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      overview: PropTypes.string,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
