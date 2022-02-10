import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { changeProfile, getProfile } from 'redux/actions/profileActions';
import { IAuth, IProfile } from 'types';
export const profileUpdate = createAsyncThunk('profile/update',
    async (params: { user: IAuth, data: IProfile }) => {
        const { user, data } = params;
        return await changeProfile(user, data)
    }
)
export const fetchProfile = createAsyncThunk('profile/fetch',
    async (uid: string) => {
        return await getProfile(uid)
    }
)
// Define a type for the slice state
export interface ProfileState {
    profile?: IProfile

}

// Define the initial state using that type
const initialState: ProfileState = {
    profile: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addMatcher(({ type }) => type.startsWith('profile') && type.endsWith('/fulfilled'),
                (state, action: PayloadAction<IProfile | undefined>) => { state.profile = action.payload }
            )
    }
})

export const { } = profileSlice.actions;

export default profileSlice.reducer;