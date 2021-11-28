import { createSlice } from '@reduxjs/toolkit'

export const Auth = createSlice({
    name: 'Auth',
    initialState: {
        status: false,
        username: 'admin',
        password: 'admin',
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
        check: (state, data) => {
            if (data.payload.username === state.username && data.payload.password === state.password) {
                state.status = true
            } else {
                state.warning = true
                state.snackbar = true
            }
        },
    }
})

export const { closeSnackbar, signOut, check } = Auth.actions
export default Auth.reducer