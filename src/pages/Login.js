import { useHistory } from "react-router-dom";
import { useEffect, useState, createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {check } from '../store/Auth'

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

  let history = useHistory();
  const user = useSelector((state) => state.auth.status)
  const dispatch = useDispatch();

  const username = createRef()
  const password = createRef()

  const [open, setOpen] = useState(false);


  const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #7fb329 30%, #90cc2d 90%)'
  })
  function onClick() {
    dispatch(check({
      username: username.current.value,
      password: password.current.value
    }))

    console.log('user', user)

    // if (){
    // dispatch(signIn())
    // history.push("/home")
    //   console.log(100)
    // }else{
    //   console.log(200)
    // }
    // if (username.current.value === '6310301004' && password.current.value === '6310301004') {
    //   setUser(true)
    //   history.push("/home")
    // } else {
    //   setOpen(true);
    //   setUserError(true)
    //   setPassError(true)
    // }
  }




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
        <Zoom in={true}>
          <Box
            sx={{
              width: '500px',
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
                username={username}
                password={password} />
              <Box sx={{
                fontFamily: 'mitr',
                py: 1
              }}>
                <LoginSnackbar open={open} />
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
