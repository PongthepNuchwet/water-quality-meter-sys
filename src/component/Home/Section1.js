import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';

import Video from './Video'
import Logo from '../../component/Logo'
import styles from '../../styles/home.module.css'
export default function Section1() {

    return (
        <Box className={`${styles.section}`}>
            <Container>
                <Grid container spacing={3} direction="row"
                    justifyContent="center"
                    alignItems="flex-start">
                    <Grid item xs={12} md={6}>
                        <Box >
                            <Logo />
                            <Typography variant="h3" className={styles.sec1Title}>ระบบตรวจสอบคุณภาพน้ำเพื่อรดน้ำต้นไม้ </Typography>
                            <Typography variant="h6" className={styles.content} sx={{ mt: '10px' }}>เป็นระบบตรวจสอบคุณภาพของน้ำเพื่อใช้รดน้ำต้นไม้  โดยประเมินจาก ค่าความเป็นกรด-ด่าง อุณหภูมิ และออกซิเจนในน้ำ อยู่ในรูปแบบของ Gauge ข้อความ ตัวเลข และรูปภาพ แบบเรียลไทม์
                                (Realtime)  </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ height: '315px' }} >

                            <img src='home/video.png' style={{ width: '80%' }} alt='Video' />
                            {/* <Video /> */}

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}