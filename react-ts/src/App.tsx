import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleTheme';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
import MovieContextProvider from './contexts/MovieContext';
import Movies from './components/Movies';
import AuthContextProvider from './contexts/AuthContext';
import { Grid } from '@material-ui/core';
import TopMovies from './components/TopMovies';
import TopMovieContextProvider from './contexts/TopMovieContext';
function App() {
  return (
    <TopMovieContextProvider>
      <AuthContextProvider>
        <ProgressContextProvider>
          <ThemeContextProvider>
            <MovieContextProvider>
              <Navbar />
              <Grid container>
                <Grid item xs={4}>
                  <TopMovies />
                </Grid>
                <Grid item xs={8}>
                  <Movies />
                </Grid>
              </Grid>
              <ToggleTheme />
            </MovieContextProvider>
          </ThemeContextProvider>
        </ProgressContextProvider>
      </AuthContextProvider>
    </TopMovieContextProvider>
  );
}

export default App;
