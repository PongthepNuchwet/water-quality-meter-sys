import InputAdornment from '@mui/material/InputAdornment';
import PasswordIcon from '@mui/icons-material/Password';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TextField from "@mui/material/TextField"
import { useSelector } from 'react-redux'

import { createTheme, ThemeProvider } from '@mui/material/styles';
export default function Input({ username, password, onClick }) {

    const warning = useSelector((state) => state.auth.warning)

    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#03a9f4',
                contrastText: '#fff',
            },
            tonalOffset: 0.2
        },
    });


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onClick()
        }
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <TextField
                    onKeyPress={handleKeyPress}
                    color='primary'
                    autoFocus={true}
                    error={warning}
                    label="Emali"
                    inputRef={username}
                    variant="outlined"
                    fullWidth={true}
                    margin="normal"
                    type="text"
                    autoComplete='off'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MailOutlineIcon />
                            </InputAdornment>
                        ),
                    }} />

                <TextField
                    onKeyPress={handleKeyPress}
                    autoComplete=''
                    color='primary'
                    label="Password"
                    error={warning}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PasswordIcon />
                            </InputAdornment>
                        ),
                    }}
                    inputRef={password}
                    variant="outlined"
                    fullWidth={true}
                    margin="normal"
                    type="password" />
            </ThemeProvider>
        </>
    )
}