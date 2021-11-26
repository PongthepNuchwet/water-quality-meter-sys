import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import InputAdornment from '@mui/material/InputAdornment';
import PasswordIcon from '@mui/icons-material/Password';
import TextField from "@mui/material/TextField"
export default function Input({userError,passError,username,password}) {

    return (
        <>
            <TextField
                error={userError}
                label="Username"
                inputRef={username}
                variant="outlined"
                fullWidth={true}
                margin="normal"
                type="text"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SupervisedUserCircleIcon />
                        </InputAdornment>
                    ),
                }} />

            <TextField
                label="Password"
                error={passError}
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
        </>
    )
}