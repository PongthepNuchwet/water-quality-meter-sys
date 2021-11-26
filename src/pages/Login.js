import { useHistory } from "react-router-dom";
import { useEffect, useRef, useState, forwardRef } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';
import Zoom from '@mui/material/Zoom';
import LoginIcon from '@mui/icons-material/Login';

import LottieWaterRipple from '../lottie/WaterRipple'
import LottieRegister from '../lottie/Register'


import Header from '../component/login/Header'
import Input from "../component/login/TextField"
import LoginSnackbar from '../component/login/LoginSnackbar'


const Login = ({ username, password, setUser }) => {

  let history = useHistory();

  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [userError, setUserError] = useState(false);
  const [passError, setPassError] = useState(false)

  const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #7fb329 30%, #90cc2d 90%)'
  })
  function onClick() {
    if (username.current.value === '6310301004' && password.current.value === '6310301004') {
      setUser(true)
      history.push("/home")
    } else {
      setOpen(true);
      setUserError(true)
      setPassError(true)
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    setChecked(true)
  }, [])

  return (
    <>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100vh',
          fontFamily: 'mitr',
          backgroundColor: '#00a4d3',
        }}
      >
        <LottieWaterRipple />
        <Zoom in={checked}>
          <Box
            sx={{
              width:'500px',
              backgroundColor: '#ffffff',
              padding: '10px',
              borderRadius: 3,
              boxShadow: 1,
              zIndex: 'tooltip'
            }}
          >
            <Container maxWidth="sm" >
              <Header />
              <LottieRegister />
              <Input
                userError={userError}
                passError={passError}
                username={username}
                password={password} />
              <Box sx={{
                fontFamily: 'mitr',
                py: 1
              }}>
                <LoginSnackbar handleClose={handleClose} open={open} />
                <MyButton startIcon={<LoginIcon />} onClick={onClick} variant="contained" size="large" color="primary" fullWidth > เข้าสู่ระบบ </MyButton>
              </Box>
            </Container>
          </Box>
        </Zoom>
      </Box>
    </>
  )
}

export default Login
