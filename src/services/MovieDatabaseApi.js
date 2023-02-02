import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3/`
const API_KEY = `api_key=b87c06507a636c850d5a0bd93afe2f26`

export function getTrendingMovies() {
    try {
        return axios.get(`${BASE_URL}trending/movie/day?${API_KEY}`)
            .then(res => {
                return res.data.results
            })
    } catch (error) {
        console.log(error);
    }
}

export function getMovieDetailsById(id) {
    try {
        return axios.get(`${BASE_URL}movie/${id}?${API_KEY}`)
            .then(res => {
                return res.data
        })
    } catch (error) {
        console.log(error);
    }
}

export function getMovieCastById(id) {
    try {
        return axios.get(`${BASE_URL}movie/${id}/credits?${API_KEY}`)
            .then(res => {
                return res.data.cast
        })
    } catch (error) {
        console.log(error);
    }
}

export function getMovieReviewsById(id) {
    try {
        return axios.get(`${BASE_URL}movie/${id}/reviews?${API_KEY}`)
            .then(res => {
                return res.data.results
        })
    } catch (error) {
        console.log(error);
    }
}

export function searchMoviesByName(q, page) {
    try {
        return axios.get(`${BASE_URL}search/movie?query=${q}&page=${page}&${API_KEY}`)
            .then(res => {
                if (res.data.results.length > 0) {
                    return res.data.results
                }
                return alert('No results')
        })
    } catch (error) {
        console.log(error);
    }
}