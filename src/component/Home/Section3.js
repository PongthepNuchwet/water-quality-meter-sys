import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';


import styles from '../../styles/home.module.css'

export default function Section3() {



    return (
        <Box className={`${styles.section}`}>
            <Container>
                <Stack spacing={1}>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: '10px' }}>
                                <Stack spacing={3}>
                                    <Typography variant="h6" className={styles.content} >ค่า pH คือการวัดความเข้มข้นของไฮโดรเจนไอออนซึ่งเป็นการวัดความป็นกรด-ด่างหรือเบสของสารละลาย ของเหลวหรือน้ำ โดยที่ระดับพีเอช มักจะอยู่ในช่วง 0 ถึง 14 </Typography>
                                    <Typography variant="h6" className={styles.content} >น้อยกว่า 7 จะมีสภาพเป็นกรด หากมีความเป็นกรดสูง ธาตุอาหารของพืชจะละลายน้ำได้ดี พืชดูดไปใช้ได้ง่าย แต่รากพืชจะถูกกัดกร่อน และรากจะอ่อนแอ ส่งผลให้เชื้อโรคเข้าทำลายได้ง่าย ของเหลวหรือน้ำที่มีค่าพีเอช </Typography>
                                    <Typography variant="h6" className={styles.content} >มากกว่า 7 จะเป็นด่างหรือเบสหากมีความเป็นด่างสูงธาตุอาหารพืชจะตกตะกอนจนพืชไม่สามารถดูดซึมได้ส่งผลให้พืชมีอาการแคระแกรนใบเหลือง</Typography>
                                    <Typography variant="h6" className={styles.content} >ส่วนระดับค่าพีเอช ที่ 7.0 หมายถึง “เป็นกลาง” </Typography>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: '10px' }}>
                                <Stack direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2} >
                                    <img src="home/1.jpg" className={styles.img} width="100%" alt='' />
                                </Stack>
                            </Box>

                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Box sx={{ p: '10px' }}>
                            <img src="home/DO.png" className={styles.img} width="100%" alt='' />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: '10px' }}>
                                <Stack spacing={3}>
                                    <Typography variant="h6" className={styles.content} >ปริมาณออกซิเจนที่ละลายในน้ำ หรือค่าดีโอ (Dissolved Oxygen: DO) โดยปกติออกซิเจนที่ละลายในน้ำได้มาจากบรรยากาศและการสังเคราะห์ด้วยแสงของพืชที่ได้รับน้ำ ปริมาณออกซิเจนที่ละลายในน้ำ (Dissolved Oxygen:DO) จะแปรผกผันกับอุณหภูมิ และความเข้มข้นของแร่ธาตุที่ละลายในน้ำ ถ้าหากอุณหภูมิและความเข้มข้นของแร่ธาตุในน้ำสูง จะทำให้ออกซิเจนจะละลายในน้ำได้น้อยลง</Typography>
                                    <Typography variant="h6" className={styles.content} >น้ำในธรรมชาติทั่วไปปกติจะมีค่าดีโอ Dissolved Oxygen ประมาณ 5-7 มิลลิกรัมต่อลิตร (mg/L) มาตรฐานน้ำที่มีคุณภาพดี จะมีค่า DO ประมาณ 5 – 8( mg/L) มิลลิกรัมต่อลิตร</Typography>
                                    <Typography variant="h6" className={styles.content} >หากน้ำเสีย จะมีค่า DO ต่ำกว่า 3 (mg/L)มิลลิกรัมต่อลิตร</Typography>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}