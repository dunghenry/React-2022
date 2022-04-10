import { Box } from '@material-ui/core';
import React from 'react'
interface IProps{
    position: string;
    country?: string;
}
const WelcomeMessage: React.FC<IProps> = ({position, country = "VietNam"}) => {
  return (
      <Box mb={1} >
          Welcome {position} from {country}
    </Box>
  )
}

export default WelcomeMessage;