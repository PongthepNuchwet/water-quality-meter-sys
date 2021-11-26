import { useState } from 'react';
import LottieWater from '../../lottie/Water'
import Typography from "@mui/material/Typography";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Water() {

    let theme = createTheme({
        palette: {
            ph0: {
                main: '#a5a8b0',
                darker: 'white',
            },
            ph1: {
                main: '#ae2c31',
                darker: 'white',
            },
            ph2: {
                main: '#ce4815',
                darker: 'white',
            },
            ph3: {
                main: '#d17505',
                darker: 'white',
            },
            ph4: {
                main: '#e8a702',
                darker: 'white',
            },
            ph5: {
                main: '#f4bc04',
                darker: 'white',
            },
            ph6: {
                main: '#c8bd02',
                darker: 'white',
            },
            ph7: {
                main: '#568e05',
                darker: 'white',
            },
            ph8: {
                main: '#2a750b',
                darker: 'white',
            },
            ph9: {
                main: '#2e7b3d',
                darker: 'white',
            },
            ph10: {
                main: '#2e7764',
                darker: 'white',
            },
            ph11: {
                main: '#2c60a8',
                darker: 'white',
            },
            ph12: {
                main: '#255093',
                darker: 'white',
            },
            ph13: {
                main: '#1d3d83',
                darker: 'white',
            },
        },
    });

    return (
        <>
            <Box >
                <ThemeProvider theme={theme}>
                    <Stack
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}
                    >
                        <LottieWater />
                    </Stack>

                </ThemeProvider>

            </Box>
        </>
    )
}