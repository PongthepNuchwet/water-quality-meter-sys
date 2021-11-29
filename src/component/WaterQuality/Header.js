import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider';
import OpacityIcon from '@mui/icons-material/Opacity';
import HomeIcon from '@mui/icons-material/Home';


import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { signOut } from '../../store/Auth'

export default function Header() {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleClose = (event, reason) => {
        dispatch(signOut())
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#2a2d3e',
                contrastText: '#fff',
            }
        },
    });

    const MenuButton = {
        color: '#03a9f4',
        fontFamily: 'mitr',
        fontWeight: '800',
    }

    const GotoHome = () => {
        history.push('/home')
    }
    const GotoGauge = () => {
        history.push('/gauge')
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }} component="main" >
                <ThemeProvider theme={theme}>
                    <AppBar color="primary" position='static'>
                        <Toolbar >
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Box >
                                    <Typography variant="h5" style={{
                                        fontFamily: 'mitr',
                                        fontWeight: '800',
                                        color: '#7fb329'

                                    }}>
                                        ระบบตรวจสอบคุณภาพน้ำเพื่อรดน้ำต้นไม้
                                    </Typography>
                                </Box>

                                <Stack direction="row" divider={<Divider color="#03a9f4" orientation="vertical" flexItem />}>

                                    <Button sx={MenuButton}
                                        startIcon={<HomeIcon />} onClick={GotoHome}>หน้าแรก</Button>
                                    <Button sx={MenuButton}
                                        startIcon={<OpacityIcon />} onClick={GotoGauge}>ตรวจสอบคุณภาพ</Button>

                                </Stack>
                                <Box>
                                    <Button
                                        onClick={handleClose}
                                        sx={{
                                            fontFamily: 'mitr',
                                            color: 'white'
                                        }}
                                        color="secondary"
                                        startIcon={<LogoutIcon />} >ลงชื่อออก</Button>
                                </Box>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </Box>
        </>
    )
}