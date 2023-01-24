import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieReviewsById } from '../../services/MovieDatabaseApi'
import './Reviews.css'

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
        <div className='reviews__container'>
            {reviews.length > 0 ?
                <ul className='reviews__list'>
                    {reviews.map(({id, author, content}) => (
                        <li className='reviews__item' key={id}>
                            <h3 className='reviews__author'>{author}</h3>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
                : <p>We don't have any reviews for this movie</p>
            }
        </div>
    )
}

export default Reviews