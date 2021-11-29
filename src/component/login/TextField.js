import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import InputAdornment from '@mui/material/InputAdornment';
import PasswordIcon from '@mui/icons-material/Password';
import TextField from "@mui/material/TextField"
import { useSelector } from 'react-redux'
import { createMuiTheme } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';
export default function Input({ username, password }) {

    const warning = useSelector((state) => state.auth.warning)

    const theme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: '#03a9f4',
                contrastText: '#fff',
            }
        }
    });
    return (
        <>
            <ThemeProvider theme={theme}>
                <TextField
                    color='primary'
                    autoFocus={true}
                    error={warning}
                    label="Username"
                    inputRef={username}
                    variant="outlined"
                    fullWidth={true}
                    margin="normal"
                    type="text"
                    autoComplete='off'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SupervisedUserCircleIcon />
                            </InputAdornment>
                        ),
                    }} />

                <TextField
                    autoComplete=''
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