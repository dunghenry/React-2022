import React, { useEffect } from "react";
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import PageRenders from "./PageRenders";
import Header from './components/header/index';
import { onAuthStateChanged, sendEmailVerification, signOut } from "firebase/auth";
import { auth } from "./firebase/index";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addUser } from "redux/slice/authSlice";
import { fetchProfile } from "redux/slice/profileSlice";
const App = () => {
  const { currentUser } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const history = useHistory();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const providerId = user.providerData.some(p => p.providerId === 'password')
        if (providerId && !user.emailVerified) {
          await sendEmailVerification(user)
          await signOut(auth)
          return history.replace('/email_verified')
        }
        dispatch(addUser(user))
      }
      else {
        dispatch(addUser(undefined))
        return history.replace('/login')
      }
    })
    return unsubscribe;
  }, [dispatch, history])
  useEffect(() => {
    if (currentUser?.uid) dispatch(fetchProfile(currentUser.uid))
  }, [currentUser])
  return (
    <>
      <Header />
      <main className="container p-4 mx-auto max-w-6xl">
        <Switch>
          <Route path="/" component={PageRenders} exact />
          <Route path="/:page" component={PageRenders} exact />
          <Route path="/:page/:id" component={PageRenders} exact />
        </Switch>
      </main>

    </>
  )
};

export default App;
