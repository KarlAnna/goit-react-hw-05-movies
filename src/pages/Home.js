import { useEffect, useState } from 'react'
import { getTrendingMovies } from '../services/MovieDatabaseApi'
import { MoviesList } from '../components/MoviesList'

const Home = () => {

    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        getTrendingMovies().then(movies => {
            setTrendingMovies([...movies])
        })
    }, [])

    return (
        <>
            <h1 className="text-center text-4xl py-8 font-semibold">Trending Today</h1>
            <MoviesList movies={trendingMovies} />
        </>
    )
}

export default Home