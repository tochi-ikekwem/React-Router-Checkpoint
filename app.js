// src/App.js  
import React, { useState } from 'react';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import MovieList from './components/MovieList';  
import MovieDetails from './components/MovieDetails';  
import AddMovie from './components/AddMovie';  
import './App.css';  

const App = () => {  
  const [movies, setMovies] = useState([  
    {  
      title: 'Inception',  
      description: 'A mind-bending thriller about dreams within dreams.',  
      posterURL: 'https://via.placeholder.com/150',  
      rating: 9,  
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0', // Embed link  
    },  
    {  
      title: 'The Matrix',  
      description: 'A computer hacker learns about the true nature of reality.',  
      posterURL: 'https://via.placeholder.com/150',  
      rating: 8.7,  
      trailer: 'https://www.youtube.com/embed/vKQi0pViaz4', // Embed link  
    },  
  ]);  

  const addMovie = (movie) => {  
    setMovies([...movies, movie]);  
  };  

  return (  
    <Router>  
      <div className="App">  
        <h1>Movie App</h1>  
        <AddMovie addMovie={addMovie} />  
        <Switch>  
          <Route exact path="/">  
            <MovieList movies={movies} />  
          </Route>  
          <Route path="/movie/:title">  
            <MovieDetails movies={movies} />  
          </Route>  
        </Switch>  
      </div>  
    </Router>  
  );  
};  

export default App;