import Header from '../component/WaterQuality/Header';
import Section1 from '../component/Home/Section1'
import Section2 from '../component/Home/Section2'
import Section3 from '../component/Home/Section3'
import Footer from '../component/Home/Footer'

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Video from '../component/Home/Video'
import Logo from '../component/Logo'
import styles from '../styles/home.module.css'

export default function Home() {
    let navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Token')
        if (!authToken) {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <Box className={styles.background}>
                <Stack spacing={1} >
                    <Header />
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Footer />
                </Stack>
            </Box>
        </>
    );
}