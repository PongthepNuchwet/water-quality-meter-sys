import GaugeChart from 'react-gauge-chart'
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux'

export default function Oxygen() {

    const oxygen = useSelector((state) => state.gauge.oxygen)
    const colors = ['#ed2224', '#faf204', '#a6ce3a', '#8abd43']
    const Percent = (oxygen * 100 / 12) / 100

    return (
        <>
            <Box>
                <GaugeChart
                    arcsLength={[0.3333333333333333, 0.2083333333333333, 0.25, 0.2083333333333333]}
                    percent={Percent}
                    formatTextValue={value => oxygen + ' mg/L'}
                    colors={colors}
                    arcPadding={0.02}
                    cornerRadius={5}
                />
            </Box>
        </>
    )
}