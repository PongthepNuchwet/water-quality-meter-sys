import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import Box from '@mui/material/Box';

export default function LottieWater({ pH }) {

    let container1 = useRef();
    useEffect(() => {
        lottie.loadAnimation({
            container: container1.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require("./json/water2.json")
        })
    }, [])

    return (
        <>
            <Box ref={container1} sx={{ height: '165px' }}>
            </Box>
        </>
    )

}