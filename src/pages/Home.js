import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../component/WaterQuality/Header';
import Section1 from '../component/Home/Section1'
import Section2 from '../component/Home/Section2'
import Section3 from '../component/Home/Section3'
import Section4 from '../component/Home/Section4'
import Section5 from '../component/Home/Section5'
import Section6 from '../component/Home/Section6'
import Footer from '../component/Home/Footer'

import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

import styles from '../styles/home.module.css'

export default function Home() {
    let navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Token')
        if (!authToken) {
            navigate('/login')
        }
    })

    return (
        <>
            <Box className={styles.background}>
                <Stack spacing={1} >
                    <Header />
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    {/* <Section4 /> */}
                    <Section5 />
                    <Section6 />
                    <Footer />
                </Stack>
            </Box>
        </>
    );
}