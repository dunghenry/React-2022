import React, { createContext, ReactNode } from "react";
import { v4 as uuidv4 } from 'uuid';
interface IProps{
    children: ReactNode
}
interface Movie{
    id: string,
    title: string,
}
interface MovieContextDefault{
    movies: Movie[]
    addMovie: (title: string) => void
    deleteMovie: (id: string) => void
}

const MovieContextDefaultData = {
    movies: [],
    addMovie: () => {},
    deleteMovie: () => {}
}
export const MovieContext = createContext<MovieContextDefault>(MovieContextDefaultData);

const MovieContextProvider = ({ children }: IProps) => {
    const [movies, setMovies] = React.useState<Movie[]>(MovieContextDefaultData.movies);
    const addMovie = (title: string) => {
        setMovies([...movies, {
            id: uuidv4(),
            title
        }])
    }
    const deleteMovie = (id: string) => {
        setMovies(movies.filter(movie => movie.id !== id))
    }
    const data = {movies, addMovie, deleteMovie}
    return <MovieContext.Provider value={data}>
        {children}
    </MovieContext.Provider>
}
export default MovieContextProvider;