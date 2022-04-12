import { AppBar, Box, Button, Chip, FormControl, MenuItem, Select, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { ProgressContext } from '../contexts/ProgressContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Login from './Login';
import { AuthContext } from '../contexts/AuthContext';
const useStyles = makeStyles((theme: Theme) => createStyles({
    positionSelect: {
        color: 'white',
        borderBottom: '1px solid white'
    }
}))
const Navbar = () => {
    const data = React.useContext(ProgressContext);
    const { theme } = React.useContext(ThemeContext);
    const { authInfo: { isAuthenticated }, toggleAuth } = React.useContext(AuthContext)
    const classes = useStyles();
    const [position, setPosition] = React.useState<string>('Web developer');
    const [time, setTime] = React.useState<Date>(() => new Date(Date.now()));
    const [loginOpen, setLoginOpen] = React.useState(false);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date(Date.now()));
        }, 1000);
        return () => clearInterval(timer);
    }, [])
    const onPositionChange = (e: React.ChangeEvent<{
        value: unknown;
    }>) => {
        setPosition(e.target.value as string);
    }
  return (
      <AppBar position="static" color={theme}>
          <Toolbar>
              <Box display="flex" justifyContent="space-around" alignItems="center" width={1} py={2}>
                  <Typography variant="h6">My movies</Typography>
                  <Box textAlign="center" >
                      <WelcomeMessage position={position} country="VietNam" />
                      <Chip label={`Last time working  on this project: ${data.lastTime}  - Status: ${data.status} }`} />
                      <Box mt={1}>
                          <FormControl>
                              <Select className={classes.positionSelect} value={position} onChange={onPositionChange}>
                                  <MenuItem value="Web developer">Web developer</MenuItem>
                                  <MenuItem value="Front-end developer">Front-end developer</MenuItem>
                                  <MenuItem value="Back-end developer">Back-end developer</MenuItem>
                            </Select>
                          </FormControl>
                      </Box>
                  </Box>
              </Box>
              <Box textAlign="center">
                  <Box my={1}>
                      <Typography variant="h6">{ time.toLocaleString() }</Typography>
                  </Box>
                  <Button variant="contained" onClick={isAuthenticated ? () => toggleAuth('') :() => setLoginOpen(true)}>
                      {isAuthenticated ? "Logout" : "Login" }
                  </Button>
              </Box>
              <Login isOpen={loginOpen} handleClose={setLoginOpen} />
          </Toolbar>
    </AppBar>
  )
}

export default Navbar;