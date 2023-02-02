import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const MoviesList = ({ movies }) => {

    const [moviesList, setMoviesList] = useState([])
    const location = useLocation()

    useEffect(() => {
        setMoviesList(movies)
    }, [movies])

    return (
        <div className="container py-8">
            {moviesList.length > 0 &&
                <ul className="flex flex-wrap justify-center gap-2">
                    {moviesList.map(({id, title, poster_path, overview}) => {
                        return (
                            <li className="group relative overflow-hidden" key={id}>
                                <Link state={location} to={`/movies/${id}`}>
                                    {poster_path &&
                                        <img 
                                        loading='lazy' 
                                        src={`https://image.tmdb.org/t/p/original${poster_path}`} 
                                        width='400' 
                                        alt={title} />
                                    }
                                    <div className="bg-dark-royal-blue-0.6 h-[100%] px-1 opacity-0 group-hover:opacity-100 group-hover:duration-500 absolute top-0 left-0 text-center">
                                        <p className="text-[white] group-hover:translate-y-40 group-hover:duration-700">{overview}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
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