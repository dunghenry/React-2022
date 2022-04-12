import { Fab } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme: Theme) => createStyles({
  btnToggle: {
    position: "fixed",
    right: '3rem',
    bottom: "3rem"
  }
}))
const ToggleTheme = () => {
  const classes = useStyles();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Fab color={theme} variant="extended" className={classes.btnToggle} onClick={() => toggleTheme(theme == 'primary' ? 'secondary' : 'primary')}>
      Toggle Theme
    </Fab>
  )
}

export default ToggleTheme;