import GaugeChart from 'react-gauge-chart'
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import { useSelector } from 'react-redux'

export default function Oxygen() {

    const oxygen = useSelector((state) => state.gauge.oxygen)
    const oxygenList = useSelector((state) => state.gauge.oxygenList)
    const average = oxygenList.length > 0 ? Number(oxygenList.reduce((a, b) => a + b, 0) / oxygenList.length ).toFixed(2) : '-'
    const max = oxygenList.length > 0 ? Number(Math.max(...oxygenList)).toFixed(2) : '-'
    const min = oxygenList.length > 0 ? Number(Math.min(...oxygenList)).toFixed(2) : '-'

    const colors = ['#ed2224', '#faf204', '#a6ce3a', '#8abd43']
    const Percent = (oxygen * 100 / 12) / 100

    const style = {
        color: 'white',
        fontFamily: 'mitr',
    }

    return (
        <>
            <Stack>
                <GaugeChart
                    arcsLength={[0.3333333333333333, 0.2083333333333333, 0.25, 0.2083333333333333]}
                    percent={Percent}
                    formatTextValue={value => oxygen + ' mg/L'}
                    colors={colors}
                    arcPadding={0.02}
                    cornerRadius={5}
                />

                <Typography align="center" sx={{ color: 'white', fontFamily: 'mitr' }}>
                    ออกซิเจนในน้ำ
                </Typography>
                <Divider color="white" sx={{ mb: '10px', mt: '10px' }} />
                <Grid container >
                    <Grid item xs={6} ><Typography sx={style} variant="body2">ปัจจุบัน : {oxygen}</Typography></Grid>
                    <Grid item xs={6} ><Typography sx={style} variant="body2">ค่าเฉลี่ย : {average}</Typography></Grid>
                    <Grid item xs={6} ><Typography sx={style} variant="body2">ค่าน้อยสุด : {min}</Typography></Grid>
                    <Grid item xs={6} ><Typography sx={style} variant="body2">ค่ามากสุด : {max}</Typography></Grid>
                </Grid>
            </Stack>
        </>
    )
}