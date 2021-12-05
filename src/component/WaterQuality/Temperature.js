import GaugeChart from 'react-gauge-chart'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";

export default function Temperature() {
    const temperature = useSelector((state) => state.gauge.temperature)
    const array = useSelector((state) => state.gauge.tempList)
    const average = array.length > 0 ? Number(array.reduce((a, b) => a + b, 0) / array.length ).toFixed(2) : '-'
    const max = array.length > 0 ?  Number(Math.max(...array)).toFixed(2) : '-'
    const min = array.length > 0 ? Number(Math.min(...array)).toFixed(2) : '-'

    const Percent = (temperature * 100 / 100) / 100
    
    
    const colors = ['#50c0af', '#89ca88', '#d0de63', '#f9e80c', '#f7d019', '#f2a42e', '#ef6930', '#ed4634', '#e43436', '#c6202c']
    const style = {
        color: 'white',
        fontFamily: 'mitr',
    }
    return (
        <>
            <Stack>
                <GaugeChart
                    nrOfLevels={10}
                    percent={Percent}
                    formatTextValue={value => temperature + ' °C'}
                    colors={colors}
                    arcPadding={0.02}
                    cornerRadius={5}
                />
                <Typography align="center" sx={{ color: 'white', fontFamily: 'mitr' }}>
                    อุณหภูมิ
                </Typography>
                <Divider color="white" sx={{ mb: '10px', mt: '10px' }} />
                <Grid container >
                    <Grid item xs={6}><Typography sx={style} variant="body2">ปัจจุบัน : {temperature}</Typography></Grid>
                    <Grid item xs={6}><Typography sx={style} variant="body2">ค่าเฉลี่ย : {average}</Typography></Grid>
                    <Grid item xs={6}><Typography sx={style} variant="body2">ค่าน้อยสุด : {min}</Typography></Grid>
                    <Grid item xs={6}><Typography sx={style} variant="body2">ค่ามากสุด : {max}</Typography></Grid>
                </Grid>
            </Stack>
        </>
    )
}