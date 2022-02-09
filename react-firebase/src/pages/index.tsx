import React, { useEffect } from 'react';
import { useAppSelector } from 'redux/hooks';
import { useHistory } from 'react-router-dom';
const HomePage = () => {
  const { currentUser } = useAppSelector(state => state.auth);
  // const dispatch = useAppDispatch();
  const history = useHistory();
  useEffect(() => {
    if (!currentUser) {
      return history.replace('/login')
    }
  }, [history, currentUser]);
  return (
    <div>
      {
        currentUser && (
          <div>
            <h1 className="text-3xl font-bold">
              Home Page
            </h1>
          </div>
        )
      }
    </div>
  )
};

export default HomePage;
