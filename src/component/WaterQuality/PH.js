import GaugeChart from 'react-gauge-chart'
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux'

export default function PH() {

    const pH = useSelector((state) => state.gauge.pH)
    const Percent = (pH * 100 /14 ) / 100
    const colors = ['#d61f00', '#ef6e3b', '#f4b718', '#faf001', '#cbe800', '#8dd200', '#4cbf00', '#41ab00', '#49b875', '#56cbcd', '#469bd9', '#386ae6', '#395bdd', '#6b4bd5', '#52369f']

    return (
        <>
            <Box>
                <GaugeChart
                    nrOfLevels={15}
                    percent={Percent}
                    formatTextValue={value => pH + ' pH'}
                    colors={colors}
                    arcPadding={0.02}
                    cornerRadius={5}
                />
            </Box>
        </>
    )
}