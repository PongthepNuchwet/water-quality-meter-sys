import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#2a2d3e',
                contrastText: '#fff',
            }
        },
    });
    return (
        <>
            <Box sx={{ flexGrow: 1 }} component="main" >
                <Container>
                    <ThemeProvider theme={theme}>
                        <AppBar color="primary" position='static'>
                            <Toolbar >
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography variant="h5" style={{
                                        color: 'white',
                                        fontFamily: 'mitr',
                                        fontWeight: '300'
                                    }}>
                                        ระบบตรวจสอบคุณภาพน้ำเพื่อรดน้ำต้นไม้
                                    </Typography>
                                    <Button
                                        sx={{
                                            fontFamily: 'mitr',
                                            color: 'white'
                                        }}
                                        color="secondary"
                                        startIcon={<LogoutIcon />} >ลงชื่อออก</Button>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                    </ThemeProvider>
                </Container>
            </Box>
        </>
    )
}