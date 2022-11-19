// e58dca02
import {useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e58dca02';


const App = () => {
const [movies,setMovies] = useState([]);
const [searchTerm,setsearchTerm] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    
    searchMovies('Avengers');
  }, []);
  return (
    <div className="app">
      <h1>ShowFlix</h1>
      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)} />
        <img src={SearchIcon} alt='search'
          onclick={() => searchMovies(searchTerm)} />
      </div>
      {
        movies?.length >0
        ?(
          <div className='container'>
              {movies.map((movie) =>(
                <MovieCard movie={movie} />
              ))}
            </div>
        ):  (
          <div className='empty'>
            <h2>NO movies found</h2>
 
          </div>
        )
      }
      

    </div>
  )
}

export default App;
