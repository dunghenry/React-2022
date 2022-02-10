import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IAuth, ILogin, IRegister } from 'types';
import { facebookApi, forgotPasswordApi, googleApi, loginApi, registerApi, signOutApi } from './../actions/authActions';

export const authRegister = createAsyncThunk('auth/register',
    async (user: IRegister) => {
        return await registerApi(user);
    })
export const authLogin = createAsyncThunk('auth/login',
    async (user: ILogin) => {
        return await loginApi(user);
    })
export const authGoogleLogin = createAsyncThunk('auth/google',
    async () => {
        return await googleApi();
    })
export const authFacebookLogin = createAsyncThunk('auth/facebook',
    async () => {
        return await facebookApi();
    })
export const authForgotPassword = createAsyncThunk('auth/forgot_password',
    async (email: string) => {
        return await forgotPasswordApi(email);
    }
)
export const authLogout = createAsyncThunk('auth/logout',
    async () => {
       await signOutApi()
    })
// Define a type for the slice state
export interface AuthState {
    currentUser?: IAuth;
    loading: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
    currentUser: undefined,
    loading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action) => {
            // console.log(action)
            state.currentUser = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            // //register
            // .addCase(authRegister.pending, (state) => {
            //     state.loading = true
            // })
            // .addCase(authRegister.fulfilled, (state) => {
            //     state.loading = false;
            // })
            // //login
            // .addCase(authLogin.pending, (state) => {
            //     state.loading = true
            // })
            // .addCase(authLogin.fulfilled, (state) => {
            //     state.loading = false;
            // })

            // //login google
            // .addCase(authGoogleLogin.pending, (state) => {
            //     state.loading = true
            // })
            // .addCase(authGoogleLogin.fulfilled, (state) => {
            //     state.loading = false;
            // })

            // //login facebook
            // .addCase(authFacebookLogin.pending, (state) => {
            //     state.loading = true
            // })
            // .addCase(authFacebookLogin.fulfilled, (state) => {
            //     state.loading = false;
            // })

            // //forgot password
            // .addCase(authForgotPassword.pending, (state) => {
            //     state.loading = true
            // })
            // .addCase(authForgotPassword.fulfilled, (state) => {
            //     state.loading = false;
            // })
            
            // //Logout
            // .addCase(authLogout.pending, (state) => {
            //     state.loading = true
            // })
            // .addCase(authLogout.fulfilled, (state) => {
            //     state.loading = false;
            // })

            .addMatcher(({type}) => type.startsWith('auth') && type.endsWith('/pending'),
            (state) => {state.loading = true}
            )
            .addMatcher(({type}) => type.startsWith('auth') && type.endsWith('/fulfilled'),
            (state) => {state.loading = false}
            )


    }
})

export const { addUser } = authSlice.actions;

export default authSlice.reducer;