import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Card, CardContent, CardHeader, Checkbox, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { TopMovieContext } from '../contexts/TopMovieContext';
const useStyles = makeStyles((theme: Theme) => createStyles({
    topMoviesHeader: {
        paddingBottom: 0
    },
    topMoviesList: {
        paddingBottom: 0
    },
    topMovieItem: {
        paddingTop: '5px',
        paddingBottom: '5px'
    }
}))
const TopMovies = () => {
    const classes = useStyles();
    const { topMovies, getTopMovies, toggleWatched } = React.useContext(TopMovieContext);
    React.useEffect(() => {
        getTopMovies();
    }, [])
    return (
        <Box mt={1} ml={2}>
            <Card raised>
                <CardHeader
                    title="Top 10 movies of all time"
                    className={classes.topMoviesHeader}
                    titleTypographyProps={{ variant: 'h4', align: 'center', color: "primary" }}
                />
                <CardContent className={classes.topMoviesList}>
                    <List>
                        {topMovies.map(movie => (
                            <ListItem
                                button
                                key={movie.imdbID}
                                className={classes.topMovieItem}
                            >
                                <ListItemIcon>
                                    <Checkbox checked={movie.Watched} onClick={() => toggleWatched(movie.imdbID)} />
                                </ListItemIcon>
                                <ListItemText primary={movie.Title} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Box>
    )
}

export default TopMovies;