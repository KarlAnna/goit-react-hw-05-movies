import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieReviewsById } from '../services/MovieDatabaseApi'

const Reviews = () => {

    const { movieId } = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getMovieReviewsById(movieId)
            .then(reviews => {
                setReviews([...reviews])
        })
    }, [movieId])
    

    return (
        <div className="py-8">
            {reviews.length > 0 ?
                <ul className="flex gap-3 flex-wrap">
                    {reviews.map(({id, author, content}) => (
                        <li key={id}>
                            <h3>{author}</h3>
                            <p className="text-xs sm:text-sm">{content}</p>
                        </li>
                    ))}
                </ul>
                : <p>We don't have any reviews for this movie</p>
            }
        </div>
    )
}

export default Reviews