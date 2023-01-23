import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchMoviesByName } from '../../services/MovieDatabaseApi'
import { MoviesList } from 'components/MoviesList/MoviesList'
import './SearchBar.css'

export const SearchBar = () => {

    const [searchMovies, setSearchMovies] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
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
        searchMoviesByName(query).then(movies => {
            setSearchMovies(movies)
        })
    }, [query, searchParams])

    const onSubmit = (e) => {
        e.preventDefault()
        setSearchParams({ query: searchQuery })
        setSearchQuery('')
    }

    return (
        <div className='search-bar__container'>
            
            <form className='search-bar__form' onSubmit={onSubmit}>
                <input type='text' value={searchQuery} className='search-bar__input' onChange={onChange} />
                <button className='search-bar__btn'>Submit</button>
            </form>
            <MoviesList movies={searchMovies} />
        </div>
    )
}

// export default SearchBar