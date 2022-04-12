import { createContext, ReactNode, useReducer } from "react";
import { topMovieReducer, TopMovieState } from "../reducers/TopMovieReducer";
import { TopMovieActionType } from "../reducers/types";
import topMoviesInfo from "../api/getTopMovies";
const { GET_TOP_MOVIES , TOGGLE_TOP_MOVIE_WATCHED} = TopMovieActionType;
interface IProps{
    children: ReactNode
}

const topMoviesDefault: TopMovieState = [];
interface TopMovieContextDefault{
    topMovies: TopMovieState,
    getTopMovies: () => Promise<void>,
    toggleWatched: (id: string) => void
}
export const TopMovieContext = createContext <TopMovieContextDefault>({
    topMovies: topMoviesDefault,
    getTopMovies: () => Promise.resolve(void 0),
    toggleWatched: (id: string) => {}
});


const TopMovieContextProvider = ({ children }: IProps) => {
    const [topMovies, dispatch] = useReducer(topMovieReducer,topMoviesDefault);
    const getTopMovies = async () => {
        const topMovies = await Promise.all(topMoviesInfo);
        dispatch({ type: GET_TOP_MOVIES, payload: topMovies.map(topMovie => ({...topMovie.data, Watched: false}))});
    }
    const toggleWatched = (imdbID: string) => {
        dispatch({ type: TOGGLE_TOP_MOVIE_WATCHED, payload: imdbID})
    }
    const data = { topMovies, getTopMovies, toggleWatched }
    return <TopMovieContext.Provider value={data}>
        {children}
    </TopMovieContext.Provider>
}

export default TopMovieContextProvider;