import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchMoviesByName } from '../services/MovieDatabaseApi'
import { MoviesList } from 'components/MoviesList'
import { BiSearchAlt } from 'react-icons/bi'

export const SearchBar = () => {

    const [searchMovies, setSearchMovies] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [page, setPage] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query')

    const onChange = (e) => {
        const { value } = e.target
        setSearchQuery(value.trim().toLowerCase())
    }

    useEffect(() => {
        if (!query) {
          return
        }
        searchMoviesByName(query, page).then(movies => {
            setSearchMovies(prev => [...prev, ...movies])
        })
    }, [query, page])

    const onSubmit = (e) => {
        e.preventDefault()
        setSearchParams({ query: searchQuery })
        setSearchQuery('')
        setSearchMovies([])
        setPage(1)
    }

    const onLoadMore = () => {
        setPage(prev => prev + 1)
    }

    return (
        <div className="container py-8">
            <form className="relative flex items-center max-w-xl w-4/5 overflow-hidden mx-auto" onSubmit={onSubmit}>
                <span className="sr-only">Search</span>
                <button className="absolute px-3 bg-light-royal-blue-0.6 h-10 rounded-md flex justify-center items-center text-cloud-burst"><BiSearchAlt /></button>
                <input className="placeholder:italic placeholder:text-dark-royal-blue-0.6 border border-dark-royal-blue-0.6/40 focus:border-light-royal-blue-0.6 focus:outline-none 
                rounded-md py-2 px-12 w-full shadow-sm text-cloud-burst"
                    placeholder='Type something...' type='text' value={searchQuery} onChange={onChange} />
            </form>
            {searchMovies.length > 0 && 
                <>
                    <MoviesList movies={searchMovies} />
                    <button className="block mx-auto py-[1.5vh] px-[6vw] rounded bg-royal-blue text-[white]" onClick={onLoadMore}>Load more movies...</button>
                </>
            }
        </div>
    )
}