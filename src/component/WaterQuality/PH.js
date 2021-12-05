import GaugeChart from 'react-gauge-chart'
import { useSelector } from 'react-redux'
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

export default function PH() {

    const pH = useSelector((state) => Number(state.gauge.pH).toFixed(2))
    const pHList = useSelector((state) => state.gauge.pHList)
    
    const average = pHList.length > 0 ? Number(pHList.reduce((a, b) => a + b, 0) / pHList.length ).toFixed(2) : '-'
    const max = pHList.length > 0 ?  Number(Math.max(...pHList)).toFixed(2) : '-'
    const min = pHList.length > 0 ? Number(Math.min(...pHList)).toFixed(2) : '-'

    const Percent = (pH * 100 / 14) / 100
    const colors = ['#d61f00', '#ef6e3b', '#f4b718', '#faf001', '#cbe800', '#8dd200', '#4cbf00', '#41ab00', '#49b875', '#56cbcd', '#469bd9', '#386ae6', '#395bdd', '#6b4bd5', '#52369f']

    const style = {
        color: 'white',
        fontFamily: 'mitr',
    }
    return (
        <>
            <Stack>

                <GaugeChart
                    nrOfLevels={15}
                    percent={Percent}
                    formatTextValue={value => pH + ' pH'}
                    colors={colors}
                    arcPadding={0.02}
                    cornerRadius={5}
                    animate={false}
                />

                <Typography align="center" sx={{ color: 'white', fontFamily: 'mitr' }}>
                    ค่าความเป็นกรด - ด่าง
                </Typography>
                <Divider color="white" sx={{ mb: '10px', mt: '10px' }} />
                <Grid container >
                    <Grid item xs={6}><Typography sx={style} variant="body2">ปัจจุบัน : {pH}</Typography></Grid>
                    <Grid item xs={6}><Typography sx={style} variant="body2">ค่าเฉลี่ย : {average}</Typography></Grid>
                    <Grid item xs={6}><Typography sx={style} variant="body2">ค่าน้อยสุด : {min}</Typography></Grid>
                    <Grid item xs={6}><Typography sx={style} variant="body2">ค่ามากสุด : {max}</Typography></Grid>
                </Grid>
            </Stack>
        </>
    )
}