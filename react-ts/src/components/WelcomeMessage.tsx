import { Box } from '@material-ui/core';
import React from 'react'
import { AuthContext } from '../contexts/AuthContext';
interface IProps {
  position: string;
  country?: string;
}
const WelcomeMessage: React.FC<IProps> = ({ position, country = "VietNam" }) => {
  const { authInfo: { username } } = React.useContext(AuthContext);
  return (
    <Box mb={1} >
      Welcome {username} - {position} from {country}
    </Box>
  )
}

export default WelcomeMessage;