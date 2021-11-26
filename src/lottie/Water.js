import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import Box from '@mui/material/Box';

export default function LottieWater({ url }) {

    let container1 = useRef();
    let container2 = useRef();

    const file1 = require("./json/water1.json")
    const file2 = require("./json/water3.json")

    const [display1, setDisplay1] = useState('none')
    const [display2, setDisplay2] = useState('')

    useEffect(() => {
        lottie.loadAnimation({
            container: container1.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: file1
        })
        lottie.loadAnimation({
            container: container2.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: file2
        })
    }, [])

    const onClick = () => {

        setDisplay1(() => {
            return (
                display1 === '' ? 'none' : ''
            )
        })
        setDisplay2(() => {
            return (
                display2 === '' ? 'none' : ''
            )
        })
        console.log('Click', display1)
    }

    return (
        <>
            <Box ref={container2} sx={{ display: display2, height: '165px' }}>
            </Box>
            <Box ref={container1} sx={{ display: display1, height: '165px' }}>
            </Box>

            <button onClick={onClick}>A</button>
        </>
    )

}