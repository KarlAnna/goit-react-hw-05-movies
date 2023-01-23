import { useState, useEffect, Suspense } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import { getMovieReviewsById } from '../../services/MovieDatabaseApi'
import './Reviews.css'

const Reviews = () => {

    const location = useLocation()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getMovieReviewsById(location.state)
            .then(reviews => {
                setReviews([...reviews])
        })
    }, [location.state])
    

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
                : `We don't have ane reviews for this movie`
            }
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default Reviews