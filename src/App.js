import React from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './serach.svg';

const API_BASE_URL = 'https://www.omdbapi.com/?apikey=6f443b3a'

const searchMovies = async (title) => {
    const response = await fetch(`${API_BASE_URL}&s=${title}`);
    const movieData = await response.json();
    console.log(movieData.Search)
}

const App = () => {

    useEffect(() => {
        searchMovies('spiderman')
    }, [])
    return (
        <h1>Hello React</h1>
    )
}
export default App;