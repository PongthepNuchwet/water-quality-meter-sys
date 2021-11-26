import Snackbar from '@mui/material/Snackbar';
import Typography from "@mui/material/Typography";
import { forwardRef } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

export default function LoginSnackbar({ handleClose, open }) {

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    function SlideTransition(props) {
        return <Slide {...props} direction="left" />;
    }

    const myTypography = createTheme({
        typography: {
            fontFamily: 'mitr'
        }
    })

    return (
        <>
            <Snackbar open={open} autoHideDuration={6000} TransitionComponent={SlideTransition} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    <ThemeProvider theme={myTypography}>
                        <Typography variant="caption" >
                            ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง
                        </Typography>
                    </ ThemeProvider >
                </Alert>
            </Snackbar>
        </>
    )
}