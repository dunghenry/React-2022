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
import { useAppDispatch } from "redux/hooks";
import { addUser } from "redux/slice/authSlice";
const App = () => {
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
    })
    return unsubscribe;
  }, [dispatch, history])
  return (
    <>
      <Header />
      <main className="container p-4 mx-auto max-w-2xl">
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
