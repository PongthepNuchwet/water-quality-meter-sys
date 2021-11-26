import { useState } from 'react';
import GaugeChart from 'react-gauge-chart'
import Box from '@mui/material/Box';

export default function Temperature() {

    const pH = 7.1
    const colors = ["#a5a8b0", "#ae2c31", "#ce4815", "#d17505", '#e8a702', '#f4bc04', '#c8bd02', '#568e05', '#2a750b', '#2e7b3d', '#2e7764', '#2c60a8', '#255093', '#1d3d83']

    return (
        <>
            <Box>
                <GaugeChart
                    nrOfLevels={14}
                    percent={1}
                    formatTextValue={value => pH + ' pH'}
                    colors={colors}
                    arcPadding={0.02}
                    cornerRadius={5}
                />
            </Box>
        </>
    )
}