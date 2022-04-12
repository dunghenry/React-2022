import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core';
import React from 'react'
import { AuthContext } from '../contexts/AuthContext';
interface IProps{
    isOpen: boolean
    handleClose: React.Dispatch<React.SetStateAction<boolean>>
}
const Login = ({isOpen, handleClose}: IProps) => {
    //context
    const { toggleAuth } = React.useContext(AuthContext);

    //state
    const [username, setUsername] = React.useState<string>('');
    const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       setUsername(event.target.value)
    }
    const onLoginSubmit = () => {
        toggleAuth(username);
        setUsername("");
        handleClose(false);
    }
  return (
    <Dialog open={isOpen} onClose={() =>handleClose(false)}>
          <DialogContent>
              <TextField value={username} label="Username" onChange={onUsernameChange} required/>
          </DialogContent>
          <DialogActions>
              <Button color="primary" variant="contained" onClick={onLoginSubmit} disabled={username === ''}>Login</Button>
          </DialogActions>
    </Dialog>
  )
}

export default Login;