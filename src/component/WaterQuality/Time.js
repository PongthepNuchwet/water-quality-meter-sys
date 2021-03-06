import { useState } from 'react'
import { useSelector } from 'react-redux'

import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

import Test from './Test'

function Th(month) {
    let th = ''
    switch (month) {
        case 0: th = 'มกราคม'; break;
        case 1: th = 'กุมภาพันธ์'; break;
        case 2: th = 'มีนาคม'; break;
        case 3: th = 'เมษายน'; break;
        case 4: th = 'พฤษภาคม'; break;
        case 5: th = 'มิถุนายน'; break;
        case 6: th = 'กรกฎาคม'; break;
        case 7: th = 'สิงหาคม'; break;
        case 8: th = 'กันยายน'; break;
        case 9: th = 'ตุลาคม'; break;
        case 10: th = 'พฤศจิกายน'; break;
        case 11: th = 'ธันวาคม'; break;
        default: th = '-';
    }

    return th
}

function FormateDate({ timeStamp }) {
    let year = timeStamp.getFullYear() + 543
    let month = timeStamp.getMonth();
    let Fmonth = Th(month)
    let date = timeStamp.getDate();
    let hour = timeStamp.getHours();
    let minute = timeStamp.getMinutes();
    let seconds = timeStamp.getSeconds();
    return `${hour}:${minute}:${seconds} น. ${date} ${Fmonth} ${year}`
}


export default function Time() {

    const [show, setshow] = useState(false)
    const onShows = () => {
        setshow(!show)
    }
    const dateTime = useSelector((state) => state.gauge.time)
    const timeStamp = new Date(dateTime * 1000)

    return (
        <>
            <Grid container>
                <Grid item xs={12} md={6}>{show && <Test />}</Grid>
                <Grid item xs={12} md={6}>
                    <Typography onClick={onShows} align='right' variant='body2' sx={{ color: 'white', fontFamily: 'mitr' }} >
                        ข้อมูลล่าสุด : {dateTime !== 0 ? <FormateDate timeStamp={timeStamp} /> : '-'}
                    </Typography>
                </Grid>
            </Grid >
        </>
    )
}