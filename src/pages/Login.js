import { useEffect, createRef, useState } from "react";
import { useDispatch } from 'react-redux'
import { signIn, error } from '../store/Auth'

import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';
import Zoom from '@mui/material/Zoom';
import LoginIcon from '@mui/icons-material/Login';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';



import LottieWaterRipple from '../lottie/WaterRipple'
import LottieRegister from '../lottie/Register'

import Header from '../component/login/Header'
import Input from "../component/login/TextField"
import LoginSnackbar from '../component/login/LoginSnackbar'

import styles from "../styles/login.module.css"


const Login = () => {

  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Token')
    if (authToken) {
      navigate('/home')
    }
  }, [])


  const dispatch = useDispatch();
  const username = createRef()
  const password = createRef()

  const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #007e05bd 30%, #278b0b 90%)',
    fontFamily: 'mitr'
  })

  const showError = () => {
    dispatch(error())
  }
  const success = () => {
    dispatch(signIn())
  }

  function onClick() {
    setLoading(true)
    setDisable(true)
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, username.current.value, password.current.value)
      .then((response) => {
        sessionStorage.setItem('Token', response._tokenResponse.refreshToken)
        navigate('/home')
        success()
      }).catch((error) => {
        showError()
        setLoading(false)
        setDisable(false)
      })

  }

  return (
    <>
      <CssBaseline />
      <Box className={styles.institution}>
        สถาบันเทคโนโลยีจิตรลดา
      </Box>
      <Box
        component="main"
        className={styles.bgWater}
      >
        <LottieWaterRipple />
        <Zoom in={true}>
          <Box className={styles.cardLogin}>
            <Container maxWidth="sm" >
              <Header />
              <Box className={styles.LottieRegister} >
                <LottieRegister />
              </Box>

              <Input
                username={username}
                password={password} />
              <Box className={styles.mitr} sx={{ position: 'relative' }}>
                <LoginSnackbar />
                <MyButton startIcon={<LoginIcon />} disabled={disable} onClick={onClick} variant="contained" size="large" color="primary" fullWidth > เข้าสู่ระบบ </MyButton>
                {loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: green[50],
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: '-12px',
                      marginLeft: '-12px',
                    }}
                  />
                )}
              </Box>
            </Container>
          </Box>
        </Zoom>
      </Box>
    </>
  )
}

export default Login
