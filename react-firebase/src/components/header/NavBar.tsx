import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = () => {
  return(
    <div>
        <Link to='/login'>
            <button className='px-5 py-2 mx-5 text-white hover:text-black font-semibold rounded-lg bg-purple-500 hover:bg-pink-400'>Login</button>
        </Link>
        <Link to='/register'>
            <button className='px-5 py-2 hover:bg-pink-400 text-white hover:text-black font-semibold rounded-lg bg-purple-500'>Register</button>
        </Link>
    </div>
  )
};

export default NavBar;
