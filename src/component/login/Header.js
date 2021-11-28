import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from "@mui/material/Typography";


export default function Header() {


    const myTypography = createTheme({
        typography: {
            fontFamily: 'mitr'
        }
    })



    return (
        <>
            <ThemeProvider theme={myTypography}>
                <Typography variant="h5" color="textPrimary" sx={{
                    fontWeight: '800',
                    color: '#7fb329'
                }} >
                    ระบบตรวจสอบคุณภาพน้ำเพื่อรดน้ำต้นไม้
                </Typography>
                <Typography variant="h6" color="textSecondary" sx={{
                    color: 'rgb(143 122 113)'
                }}>
                    ลงชื่อเข้าสู่ระบบ
                </Typography>
            </ThemeProvider>
        </>
    )
}