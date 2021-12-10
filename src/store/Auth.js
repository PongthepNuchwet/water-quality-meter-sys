import { createSlice } from '@reduxjs/toolkit'

export const Auth = createSlice({
    name: 'Auth',
    initialState: {
        status: false,
        warning: false,
        snackbar: false
    },
    reducers: {
        closeSnackbar: state => {
            state.snackbar = false
        },
        signOut: state => {
            state.status = false
            state.warning = false
            state.snackbar = false
        },
        signIn: state => {
            state.status = true
        },
        error: state => {
            state.warning = true
            state.snackbar = true
        }
    }
})

export const { closeSnackbar, signOut, signIn, error } = Auth.actions
export default Auth.reducer