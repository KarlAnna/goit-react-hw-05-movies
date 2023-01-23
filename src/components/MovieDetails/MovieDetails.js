import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { useState, useEffect, Suspense } from 'react'
import { getMovieDetailsById } from '../../services/MovieDatabaseApi'
import './MovieDetails.css'

const MovieDetails = () => {

    const { movieId } = useParams()
    const [movie, setMovie] = useState([])
    const location = useLocation()
    const backLinkHref = location.state?.location ?? '/'

    useEffect(() => {
        getMovieDetailsById(movieId)
            .then(setMovie)
    }, [movieId])

    const { title, poster_path, overview, genres, vote_average } = movie

    return (
        <div className='movie-details__container'>
            <NavLink to={backLinkHref}>Go Back</NavLink>
            <div className='movie-details__info'>
                <div className='movie-details__poster-container'>
                    {poster_path &&
                        <img
                        className='movie-details__img' 
                        src={`https://image.tmdb.org/t/p/original/${poster_path}`} 
                        width='300' 
                        alt={title} />}
                </div>
                <div className='movie-details__info-container'>
                    <h2 className='movie-details__info-title'>{title}</h2>
                    <p className='movie-details__info-page'>User Score: {Math.round((vote_average / 10) * 100)}%</p>
                    <h2 className='movie-details__info-title'>Overview</h2>
                    <p className='movie-details__info-page'>{overview}</p>
                    <h2 className='movie-details__info-title'>Genres</h2>
                    <ul>
                        {genres && genres.map((genre) => (
                            <li key={genre.id}>
                                <p>{genre.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <h2 className='movie-details__info-title movie-details__add-info-title'>Additional Information</h2>
                <ul className='movie-details__more-info-list'>
                    <li><NavLink to={`cast`} state={movieId}>Cast</NavLink></li>
                    <li><NavLink to={`reviews`} state={movieId}>Reviews</NavLink></li>
                </ul>
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    )
}

export default MovieDetails