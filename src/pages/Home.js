import { useEffect, useState } from 'react'
import { getTrendingMovies } from '../services/MovieDatabaseApi'
import { MoviesList } from '../components/MoviesList/MoviesList'

const Home = () => {

    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        getTrendingMovies().then(data => {
            setTrendingMovies([...data.results])
        })
    }, [])

    return (
        <>
            <h2 className='movies__title'>Trending Today</h2>
            <MoviesList movies={trendingMovies} />
        </>
    )
}

export default Home