import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieCastById } from '../../services/MovieDatabaseApi'
import './Cast.css'

const Cast = () => {

    const { movieId } = useParams()
    const [cast, setCast] = useState([])

    useEffect(() => {
        getMovieCastById(movieId)
            .then(cast => {
                setCast([...cast])
        })
    }, [movieId])
    
    return (
        <div>
            {cast.length > 0 ?
                <ul className='cast__list'>
                    {cast.map(({id, name, character, profile_path}) => (
                        <li className='cast__item' key={id}>
                            {profile_path && <img loading='lazy' src={`https://image.tmdb.org/t/p/original/${profile_path}`} width='100' alt={name} />}
                            <p className='cast__character'>{character}</p>
                            <p className='cast__name'>{name}</p>
                        </li>
                    ))}
                </ul>
                 : <p>We don't have information about cast</p>
            }
        </div>
    )
}

export default Cast