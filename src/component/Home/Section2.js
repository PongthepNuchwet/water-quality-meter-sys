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
                                <Divider  color="white" sx={{ mb: '1em' }} />
                            </Box>
                        </Stack>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Box sx={{p:'10px'}}>
                                    <img className={styles.imgApp} src='home/app.png' width="100%" alt='app' />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ p: '10px' }}>
                                    <Stack spacing={2}>
                                        <Typography variant="body1" className={styles.content} >  เป็นที่ทราบกันดีอยู่แล้วว่าการปลูกพืชนั้นน้ำมีความสำคัญต่อพืชมากที่สุดเนื่องจากน้ำเป็นตัวนำพา
                                            สารอาหารให้แก่พืชและเป็นส่วนสำคัญในการสังเคราะห์แสงอีกด้วย ดังนั้นวันนี้กลุ่มเราจะนำเสนอ หนึ่งในคุณสมบัติของน้ำ ค่าความเป็นกรด-ด่างของน้ำกันครับ หรือที่เรียยกกันว่าค่า pH
                                        </Typography>
                                        <Typography variant="body1" className={styles.content} >ปัญหาส่วนมาก พืชได้รับน้ำอย่างไม่ถูกต้องทำให้รากพืชจะถูกกัดกร่อนจนทำให้รากอ่อนแอ ธาตุอาหารพืชจะตกตะกอนจนพืชไม้สามารถดูดซึมได้ นั่นเลยส่งผลให้พืชมีอาการแคระแกรน ใบเหลือง และอีกปัญหาหนึ่งคือพืชแต่ละชนิดใช่ค่าความเป้นกรด-ด่าง ไม่เท่ากัน
                                        </Typography>
                                        <Typography variant="body1" className={styles.content} >ดังนั้นกลุ่มเราจึงจัดทำระบบตรวจสอบคุณภาพของน้ำ โดยใช้ค่าความเป็นกรด-ด่าง เพื่อให้พืชได้รับน้ำได้อย่างเหมาะสม
                                        </Typography>
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