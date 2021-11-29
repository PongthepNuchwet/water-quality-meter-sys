import { createRef } from 'react';
import { useDispatch } from 'react-redux'
import { check } from '../store/Auth'

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



const Login = () => {

  const dispatch = useDispatch();
  const username = createRef()
  const password = createRef()

  const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #007e05bd 30%, #278b0b 90%)',
    fontFamily: 'mitr'
  })
  function onClick() {
    dispatch(check({
      username: username.current.value,
      password: password.current.value
    }))


  }


  return (
    <>
      <CssBaseline />
      <Box sx={{
        position:'fixed' , 
        left:'0' ,
        top:'0',
        background:'white',
        zIndex: 'tooltip',
        p:'5px',
        fontFamily:'mitr',
        borderBottomRightRadius:'10px'

        }}>
        สถาบันเทคโนโลยีจิตรลดา
      </Box>
      <Box
        component="main"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100vh',
          fontFamily: 'mitr',
          backgroundColor: '#03a9f4',
        }}
      >
        <LottieWaterRipple />
        <Zoom in={true}>
          <Box
            sx={{
              width: '500px',
              backgroundColor: '#2a2d3e',
              padding: '20px 10px',
              borderRadius: 3,
              boxShadow: 1,
              zIndex: 'tooltip'
            }}
          >
            <Container maxWidth="sm" >
              <Header />
              <LottieRegister />
              <Input
                username={username}
                password={password} />
              <Box sx={{
                fontFamily: 'mitr',
                py: 1
              }}>
                <LoginSnackbar />
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
