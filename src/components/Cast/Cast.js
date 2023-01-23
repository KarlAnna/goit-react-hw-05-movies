import { useState, useEffect, Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import { getMovieCastById } from '../../services/MovieDatabaseApi'
import './Cast.css'

const Cast = () => {

    const location = useLocation()

    const [cast, setCast] = useState([])

    useEffect(() => {
        getMovieCastById(location.state)
            .then(cast => {
                setCast([...cast])
        })
    }, [location.state])
    
    return (
        <div>
            <Suspense fallback={null}>
            {cast.length > 0 &&
                <ul className='cast__list'>
                    {cast.map(({id, name, character, profile_path}) => (
                        <li className='cast__item' key={id}>
                            {profile_path && <img loading='lazy' src={`https://image.tmdb.org/t/p/original/${profile_path}`} width='100' alt={name} />}
                            <p className='cast__character'>{character}</p>
                            <p className='cast__name'>{name}</p>
                        </li>
                    ))}
                </ul>
            }
            </Suspense>
        </div>
    )
}

export default Cast