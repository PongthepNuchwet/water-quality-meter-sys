import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

import styles from '../../styles/home.module.css'
export default function Section2() {
    return (
        <>
            <Box className={`${styles.section}`}>
                <Container >
                    <Stack spacing={1} >
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box className={styles.sec2TitleBox} >
                                <Typography variant="h4" className={styles.secTitle}>ที่มาและความสำคัญของโครงงาน </Typography>
                                <Divider color="white" sx={{ mb: '1em' }} />
                            </Box>
                        </Stack>
                        <Grid container direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            {/* <Grid item xs={12} md={6}>
                                <Box sx={{p:'10px'}}>
                                    <img className={styles.imgApp} src='home/app.png' width="100%" alt='app' />
                                </Box>
                            </Grid> */}
                            <Grid item xs={12} md={8}>
                                <Box sx={{ p: '10px' }}>
                                    <Stack spacing={2}>
                                        <Typography variant="h6" className={styles.content} >เนื่องจากน้ำมีความสำคัญต่อพืชมากที่สุดเพราะน้ำเป็นตัวนำพา สารอาหารให้แก่พืชและเป็นส่วนสำคัญในการสังเคราะห์แสง ปัญหาส่วนมากคือพืชได้รับน้ำอย่างไม่ถูกต้องทำให้รากพืชจะถูกกัดกร่อนจนทำให้รากอ่อนแอ ธาตุอาหารพืชจะตกตะกอนจนพืชไม้สามารถดูดซึมได้ </Typography>
                                        <Typography variant="h6" className={styles.content} >ดังนั้นวันนี้กลุ่มเราจะมานำเสนอการวัดคุณภาพของน้ำด้วยค่าความเป็นกรด-ด่าง และ ออกซิเจนในน้ำเพื่อใช้ในการรดน้ำต้นไม้อย่างเหมาะสม</Typography>
                                    </Stack>
                                </Box>
                            </Grid>
                            
                        </Grid>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}