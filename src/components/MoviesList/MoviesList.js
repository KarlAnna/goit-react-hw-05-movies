import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './MoviesList.css'

export const MoviesList = ({ movies }) => {

    const [moviesList, setMoviesList] = useState([])
    const location = useLocation()

    useEffect(() => {
        setMoviesList([...movies])
    }, [movies])

    return (
        <>
            <hr className='movies__line' />
            <div className='movies__container'>
                {moviesList.length > 0 &&
                    <ul className='movies__list'>
                        {moviesList.map(({id, title, poster_path, overview}) => {
                            return (
                                <li className='movies__item' key={id}>
                                    <Link state={location} to={`/movies/${id}`}>
                                        {poster_path &&
                                            <img 
                                                loading='lazy' 
                                                src={`https://image.tmdb.org/t/p/original${poster_path}`} 
                                                width='400' 
                                                alt={title} />
                                        }
                                        <div className='movies__item-overlay'>
                                            <p className='movies__item-description'>{overview}</p>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                }
            </div>
        </>
    )
}

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