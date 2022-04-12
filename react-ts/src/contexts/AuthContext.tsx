import React from "react";
import { createContext, ReactNode } from "react";
import { authReducer, AuthState } from "../reducers/AuthReducer";
import { AuthActionType } from '../reducers/types';
const { TOGGLE_AUTH } = AuthActionType
interface IProps{
    children: ReactNode
}
interface AuthContextDefault{
    authInfo: AuthState,
    toggleAuth: (username: string) => void
}
const authDefault = {
    isAuthenticated: false,
    username: ''
}
export const AuthContext = createContext < AuthContextDefault>({
    authInfo: authDefault,
    toggleAuth: () => {}
});


const AuthContextProvider = ({ children }: IProps) => {
    const [authInfo, dispatch] = React.useReducer(authReducer, authDefault);
    const toggleAuth = (username: string) => dispatch({type: TOGGLE_AUTH, payload: username});
    const authData = {authInfo, toggleAuth}
    return <AuthContext.Provider value={authData}> 
        {children}
    </AuthContext.Provider>
}
export default AuthContextProvider;