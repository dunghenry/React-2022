import { Box, Button, Chip, PropTypes, TextField } from '@material-ui/core'
import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { MovieContext } from '../contexts/MovieContext';
import { ThemeContext } from '../contexts/ThemeContext';
const useStyles = makeStyles((theme) =>
    createStyles({
        movieInput: {
            marginRight: '5px'
        },
        movieChip:{
            fontSize: '2rem',
            padding: '30px 10px',
            margin: '5px'
        }
    })
)
const Movies = () => {
    const classes = useStyles();
    const [movie, setMovie] = React.useState<string>('');
    const { movies, addMovie, deleteMovie } = React.useContext(MovieContext);
    const { theme } = React.useContext(ThemeContext);
    const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>
    const handleChangeMovie = (event: React.ChangeEvent< HTMLInputElement> ) => {
        setMovie(event.target.value);
    }
    return (
        <>
            <Box display='flex' justifyContent='center' my={5}>
                <TextField
                    className={classes.movieInput}
                    label="Your favourite movie..." variant="outlined"
                    value={movie}
                    // onChange={(e) => setMovie(e.target.value)} value={movie}
                    onChange={handleChangeMovie}
                />
                <Button onClick={() => {
                    addMovie(movie)
                    setMovie('')
                }} variant="contained" color={theme}>Add movie</Button>
            </Box>
            <Box display='flex' justifyContent='center' flexWrap="wrap" mx={5}>
                {
                    movies.map(movie => (
                        <Chip key={movie.id} label={movie.title} color={chipTheme} clickable className={classes.movieChip} onDelete={() => deleteMovie(movie.id)} />
                    ))
                }
            </Box>
        </>
    )
}

export default Movies;