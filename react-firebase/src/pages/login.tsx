
import LoginForm from 'components/auth/LoginForm';
import LoginSocial from 'components/auth/LoginSocial';
import Loading from 'components/global/Loading';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';

const LoginPage = () => {
  const { loading, currentUser } = useAppSelector(state => state.auth);
  const history = useHistory();
  useEffect(() => {
    if (currentUser) {
      return history.replace('/')
    }
  }, [history, currentUser]);
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-6rem)]">
      {
        !currentUser && (
          <div className="container max-w-md p-5 shadow-lg">
            <h2 className="my-3 text-2xl font-semibold tracking-wider text-center uppercase">Login</h2>
            <LoginForm />
            <div className="text-center">
              Or
            </div>
            <LoginSocial />
            <div className="text-right px-2">
              You do not have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
            </div>
          </div>
        )
      }
      {loading && <Loading />}
    </div>
  )
};

export default LoginPage;
