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
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box className={styles.sec3TitleBox} >
                            <Typography variant="h4" className={styles.secTitle}>ค่า pH (Positive potential of the Hydrogen ions) มีผลอย่างไร</Typography>
                            <Divider color="white" sx={{ mb: '1em' }} />
                        </Box>
                    </Stack>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={12} md={6}>
                            <Box sx={{p:'10px'}}>
                                <Typography variant="body1" className={styles.content} >   หากค่า pH มีความเหมาะสมกับพืชก็จะสามารถที่จะดูดธาตุอาหารเข้าไปใช้ได้โดยง่ายและมีประสิทธิ โดยทั่วไปค่าความเป็นกรด-ด่างที่ความเหมาะสมคือค่าช่วงที่อยู่ในความเป็นกรด ทั้งนี้ขึ้นอยู่กับพืชแต่ละชนิดด้วย ยิ่งเป็นกรดมากเท่าใดยิ่งจะทำให้พืชดูดซึมสารอาหารได้ดียิ่งขึ้น
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{p:'10px'}}>
                                <Stack direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2} >
                                    <img src="home/1.jpg" className={styles.img} width="100%" alt='' />
                                </Stack>
                            </Box>

                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Box sx={{p:'10px'}}>
                                <Stack direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2} >
                                    <img src="home/2.jpg" className={styles.img} width="100%" alt='' />
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{p:'10px'}}>
                                <Stack spacing={3}>
                                    <Typography variant="body1" className={styles.content} sx={{ fontFamily: 'Sarabun', color: 'white' }}>
                                        การวัดค่าความเป็นกรด-ด่างโดยมีช่วงการวัดระหว่างค่า 0-14 มีค่ากลางที่ค่า pH 7  หากค่าต่ำกว่า pH 7 นับว่ามีความเป็นกรดและในทางกลับกันหากค่า pH มากกว่า 7 นั้นนับว่ามีค่าเป็นด่าง
                                    </Typography>
                                    <Typography variant="body1" className={styles.content} sx={{ fontFamily: 'Sarabun', color: 'white' }}>
                                        ถ้าต่ำกว่า 7 สารจะเป็นกรด หากมีความเป็นกรดสูง ธาตุอาหารของพืชจะละลายน้ำได้ดี พืชดูดไปใช้ได้ง่าย แต่รากพืชจะถูกกัดกร่อน และรากจะอ่อนแอ ส่งผลให้เชื้อโรคเข้าทำลายได้ง่าย ในทางกลับกัน
                                    </Typography>
                                    <Typography variant="body1" className={styles.content} sx={{ fontFamily: 'Sarabun', color: 'white' }}>
                                        ค่า pH ที่ต่ำกว่า 4 ไม่เหมาะสมในการใช้ปลูกพืชเนื่องจากว่ามีความเป็นกรดมากเกินไป
                                        อาจทำให้รากของพืช โดนกัดกร่อนและเน่าได้ง่าย
                                    </Typography>
                                    <Typography variant="body1" className={styles.content} sx={{ fontFamily: 'Sarabun', color: 'white' }}>
                                        ถ้าสูงกว่า 7 จะเป็นด่าง นึกถึงน้ำสบู่ หากมีความเป็นด่างสูง ธาตุอาหารพืชจะตกตะกอน
                                        จนพืชไม่สามารถดูดซึมได้ ส่งผลให้พืชมีอาการแคระแกรน ใบเหลือง
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}