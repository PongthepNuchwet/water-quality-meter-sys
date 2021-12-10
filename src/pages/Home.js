import Header from '../component/WaterQuality/Header';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import LottieRegister from '../lottie/Register'
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Video from '../component/Home/Video'
import Logo from '../component/Logo'
import styles from '../styles/home.module.css'

export default function Home() {
    let navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Token')
        if (!authToken) {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <Box className={styles.background}>
                <Stack spacing={1} >
                    <Header />
                    <Box >
                        <Container>
                            <Stack spacing={2}>
                                <Box className={styles.box}>
                                    <Logo />
                                    <Typography variant="h6" sx={{ fontFamily: 'mitr' }} className={styles.title}>ระบบตรวจสอบคุณภาพน้ำเพื่อรดน้ำต้นไม้ </Typography>
                                    <Typography variant="body1" sx={{ fontFamily: 'Sarabun', display: 'inline' }}>เป็นระบบตรวจสอบคุณภาพของน้ำเพื่อใช้รดน้ำต้นไม้  โดยประเมินจาก ค่าความเป็นกรด-ด่าง อุณหภูมิ และออกซิเจนในน้ำ อยู่ในรูปแบบของ Gauge ข้อความ ตัวเลข และรูปภาพ แบบเรียลไทม์
                                        (Realtime)  </Typography>
                                </Box>
                                <Box sx={{ height: '315px' }} >
                                    <Stack direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2} >
                                        <Video />
                                    </Stack>

                                </Box>
                                <Box className={styles.box}>
                                    <Stack spacing={3} >
                                        <Box >
                                            <Typography variant="subtitle1" className={styles.title} sx={{ fontFamily: 'Sarabun' }}>ที่มาและความสำคัญของโครงงาน </Typography>
                                            <Typography variant="body1" className={styles.content} sx={{ fontFamily: 'Sarabun' }}>  เป็นที่ทราบกันดีอยู่แล้วว่าการปลูกพืชนั้นน้ำมีความสำคัญต่อพืชมากที่สุดเนื่องจากน้ำเป็นตัวนำพา
                                                สารอาหารให้แก่พืชและเป็นส่วนสำคัญในการสังเคราะห์แสงอีกด้วย ดังนั้นวันนี้กลุ่มเราจะนำเสนอ หนึ่งในคุณสมบัติของน้ำ ค่าความเป็นกรด-ด่างของน้ำกันครับ หรือที่เรียยกกันว่าค่า pH
                                            </Typography>
                                        </Box>
                                        <Box >
                                            <Typography variant="subtitle1" className={styles.title} sx={{ fontFamily: 'Sarabun' }}>ค่า pH (Positive potential of the Hydrogen ions) มีผลอย่างไร</Typography>
                                            <Typography variant="body1" className={styles.content} sx={{ fontFamily: 'Sarabun' }}>   หากค่า pH มีความเหมาะสมกับพืชก็จะสามารถที่จะดูดธาตุอาหารเข้าไปใช้ได้โดยง่ายและมีประสิทธิ โดยทั่วไปค่าความเป็นกรด-ด่างที่ความเหมาะสมคือค่าช่วงที่อยู่ในความเป็นกรด ทั้งนี้ขึ้นอยู่กับพืชแต่ละชนิดด้วย ยิ่งเป็นกรดมากเท่าใดยิ่งจะทำให้พืชดูดซึมสารอาหารได้ดียิ่งขึ้น
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body1" className={styles.content} sx={{ fontFamily: 'Sarabun' }}>ปัญหาส่วนมาก พืชได้รับน้ำอย่างไม่ถูกต้องทำให้รากพืชจะถูกกัดกร่อนจนทำให้รากอ่อนแอ ธาตุอาหารพืชจะตกตะกอนจนพืชไม้สามารถดูดซึมได้ นั่นเลยส่งผลให้พืชมีอาการแคระแกรน ใบเหลือง และอีกปัญหาหนึ่งคือพืชแต่ละชนิดใช่ค่าความเป้นกรด-ด่าง ไม่เท่ากัน
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body1" className={styles.content} sx={{ fontFamily: 'Sarabun' }}>ดังนั้นกลุ่มเราจึงจัดทำระบบตรวจสอบคุณภาพของน้ำ โดยใช้ค่าความเป็นกรด-ด่าง เพื่อให้พืชได้รับน้ำได้อย่างเหมาะสม
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                                <Box>
                                    <Stack direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2} >
                                        <img src="home/1.jpg" className={styles.img} width="100%"></img>
                                    </Stack>
                                </Box>
                                <Box className={styles.box}>
                                    <Stack spacing={3} >
                                        <Box>
                                            <Typography variant="body1" className={styles.content} sx={{ fontFamily: 'Sarabun' }}>
                                                การวัดค่าความเป็นกรด-ด่างโดยมีช่วงการวัดระหว่างค่า 0-14 มีค่ากลางที่ค่า pH 7  หากค่าต่ำกว่า pH 7 นับว่ามีความเป็นกรดและในทางกลับกันหากค่า pH มากกว่า 7 นั้นนับว่ามีค่าเป็นด่าง
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body1" className={styles.content} sx={{ fontFamily: 'Sarabun' }}>
                                                ถ้าต่ำกว่า 7 สารจะเป็นกรด หากมีความเป็นกรดสูง ธาตุอาหารของพืชจะละลายน้ำได้ดี พืชดูดไปใช้ได้ง่าย แต่รากพืชจะถูกกัดกร่อน และรากจะอ่อนแอ ส่งผลให้เชื้อโรคเข้าทำลายได้ง่าย ในทางกลับกัน
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body1" className={styles.content} sx={{ fontFamily: 'Sarabun' }}>
                                                ค่า pH ที่ต่ำกว่า 4 ไม่เหมาะสมในการใช้ปลูกพืชเนื่องจากว่ามีความเป็นกรดมากเกินไป
                                                อาจทำให้รากของพืช โดนกัดกร่อนและเน่าได้ง่าย
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body1" className={styles.content} sx={{ fontFamily: 'Sarabun' }}>
                                                ถ้าสูงกว่า 7 จะเป็นด่าง นึกถึงน้ำสบู่ หากมีความเป็นด่างสูง ธาตุอาหารพืชจะตกตะกอน
                                                จนพืชไม่สามารถดูดซึมได้ ส่งผลให้พืชมีอาการแคระแกรน ใบเหลือง
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                                <Box>
                                    <Stack direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2} >
                                        <img src="home/2.jpg" className={styles.img} width="100%"></img>
                                    </Stack>
                                </Box>
                                <Box className={styles.box}>
                                    <Stack spacing={3} >
                                        <Box >
                                            <Typography variant="subtitle1" className={styles.title} sx={{ fontFamily: 'Sarabun' }}>พืชที่เหมาะสมกับค่า pH</Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                                <Box>
                                    <Stack direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2} >
                                        <img src="home/3.jpg"  width="50%"></img>
                                    </Stack>
                                </Box>

                            </Stack>
                        </Container>
                    </Box>
                </Stack>
            </Box>
        </>
    );
}