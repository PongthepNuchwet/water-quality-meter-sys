import { useState } from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';
import Stack from '@mui/material/Stack'
import OpacityIcon from '@mui/icons-material/Opacity';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';

import { useDispatch } from 'react-redux'
import { useNavigate  } from "react-router-dom";
import { signOut } from '../../store/Auth'
import Logo from '../Logo'

export default function Header() {

    const dispatch = useDispatch()
    const navigate  = useNavigate()

    const SignOut = (event, reason) => {
        dispatch(signOut())
        sessionStorage.removeItem('Token');
        navigate('/Login')
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#2a2d3e',
                contrastText: '#fff',
            }
        },
    });

    const MenuStyle = {
        color: '#03a9f4',
        fontFamily: 'mitr',
        fontWeight: '800',
    }
    const logOutStyle = {
        color: '#eb5146',
        fontFamily: 'mitr',
        fontWeight: '800',
    }

    const GotoHome = () => {
        navigate('/home')
    }
    const GotoGauge = () => {
        navigate('/WaterQuality')
    }

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

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
                                    <Stack direction="row" alignItems="center">
                                        <Logo />
                                        <Typography variant="h5" sx={{
                                            fontFamily: 'mitr',
                                            fontWeight: '800',
                                            color: '#7fb329'

                                        }}>
                                            ระบบตรวจสอบคุณภาพน้ำเพื่อรดน้ำต้นไม้
                                        </Typography>
                                    </Stack>
                                </Box>
                                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                                    <Stack direction="row" >
                                        <Button sx={MenuStyle}
                                            startIcon={<HomeIcon />} onClick={GotoHome}>หน้าแรก</Button>
                                        <Button sx={MenuStyle}
                                            startIcon={<OpacityIcon />} onClick={GotoGauge}>ตรวจสอบคุณภาพ</Button>
                                        <Button sx={logOutStyle}
                                            startIcon={<LogoutIcon />} onClick={SignOut}>ลงชื่อออก</Button>
                                    </Stack>
                                </Box>
                                <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenUserMenu}
                                        color="inherit"
                                    >
                                        <MenuIcon />
                                    </IconButton>

                                    <Menu
                                        sx={{ mt: '45px' }}
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >

                                        <MenuItem onClick={GotoHome}>
                                            <ListItemIcon>
                                                <HomeIcon />
                                            </ListItemIcon>
                                            <Typography textAlign="center">หน้าแรก</Typography>
                                        </MenuItem>
                                        <MenuItem onClick={GotoGauge}>
                                            <ListItemIcon>
                                                <OpacityIcon />
                                            </ListItemIcon>
                                            <Typography textAlign="center">ตรวจสอบคุณภาพ</Typography>
                                        </MenuItem>
                                        <MenuItem onClick={SignOut}>
                                            <ListItemIcon>
                                                <LogoutIcon />
                                            </ListItemIcon>
                                            <Typography textAlign="center">ลงชื่อออก</Typography>
                                        </MenuItem>
                                    </Menu>
                                </Box>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </Box>
        </>
    )
}