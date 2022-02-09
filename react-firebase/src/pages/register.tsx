import RegisterForm from 'components/auth/RegisterForm';
import Loading from 'components/global/Loading';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
const RegisterPage = () => {
  const { loading, currentUser } = useAppSelector(state => state.auth);
  const history = useHistory();
  useEffect(() => {
    if (currentUser) {
      return history.replace('/')
    }
  }, [history, currentUser]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-6rem)]">
      {!currentUser && (
        <div className="container max-w-md p-5 shadow-lg">
          <h2 className="my-3 text-2xl font-semibold tracking-wider text-center uppercase">Register</h2>
          <RegisterForm />
          <div className="text-right px-2">
            You already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          </div>
        </div>
      )}
      {loading && <Loading />}
    </div>
  )
};

export default RegisterPage;
