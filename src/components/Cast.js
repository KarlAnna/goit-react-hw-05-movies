import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieCastById } from '../services/MovieDatabaseApi'

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
                <ul className="py-8 flex gap-4 flex-wrap justify-center align-baseline">
                    {cast.map(({id, name, character, profile_path}) => (
                        <li className="max-w-[100px] w-full text-center" key={id}>
                            {profile_path ?
                                <img loading='lazy' src={`https://image.tmdb.org/t/p/original/${profile_path}`} width='100' alt={name} />
                                : <img loading='lazy' src={`https://placehold.co/100x150?text=${name}`} width='100' alt={name} />
                            }
                            <p className="text-lg">{character}</p>
                            <p className="text-sm">{name}</p>
                        </li>
                    ))}
                </ul>
                 : <p>We don't have any information about cast for this film</p>
            }
        </div>
    )
}

export default Cast