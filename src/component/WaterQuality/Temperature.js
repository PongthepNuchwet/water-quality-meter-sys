import GaugeChart from 'react-gauge-chart'
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux'

export default function Temperature() {
    const C = useSelector((state) => state.gauge.temperature)
    const Percent = (C * 100 / 100) / 100
    const colors = [ '#50c0af', '#89ca88', '#d0de63', '#f9e80c', '#f7d019', '#f2a42e', '#ef6930', '#ed4634', '#e43436', '#c6202c']

    return (
        <>
            <Box>
                <GaugeChart
                    nrOfLevels={10}
                    percent={Percent}
                    formatTextValue={value => C + ' °C'}
                    colors={colors}
                    arcPadding={0.02}
                    cornerRadius={5}
                />
            </Box>
        </>
    )
}