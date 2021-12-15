import Header from '../component/WaterQuality/Header';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';



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
                        <Box className={styles.sec1}>
                            <Container>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Box >
                                            <Logo />
                                            <Typography variant="h3" className={styles.title}>ระบบตรวจสอบคุณภาพน้ำเพื่อรดน้ำต้นไม้ </Typography>
                                            <Typography variant="h6" className={styles.content} sx={{ mt: '10px' }}>เป็นระบบตรวจสอบคุณภาพของน้ำเพื่อใช้รดน้ำต้นไม้  โดยประเมินจาก ค่าความเป็นกรด-ด่าง อุณหภูมิ และออกซิเจนในน้ำ อยู่ในรูปแบบของ Gauge ข้อความ ตัวเลข และรูปภาพ แบบเรียลไทม์
                                                (Realtime)  </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ height: '315px' }} >
                                            <Stack direction="row"
                                                justifyContent="center"
                                                alignItems="center"
                                                spacing={2} >
                                                <Video />
                                            </Stack>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>
                        <Box className={styles.sec2}>
                            <Container >
                                <Stack spacing={1} >
                                    <Stack
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Box className={styles.sec2TitleBox} >
                                            <Typography variant="h4" className={styles.sec2Title}>ที่มาและความสำคัญของโครงงาน </Typography>
                                            <Divider color="white" sx={{ mb: '1em' }} />
                                        </Box>
                                    </Stack>
                                    <Grid container spacing={3}>
                                        <Grid item xs={6}>
                                            <img className={styles.imgApp} src='home/app.png' alt='app' />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Stack spacing={2}>
                                                <Box >
                                                    <Typography variant="body1" className={styles.content} >  เป็นที่ทราบกันดีอยู่แล้วว่าการปลูกพืชนั้นน้ำมีความสำคัญต่อพืชมากที่สุดเนื่องจากน้ำเป็นตัวนำพา
                                                        สารอาหารให้แก่พืชและเป็นส่วนสำคัญในการสังเคราะห์แสงอีกด้วย ดังนั้นวันนี้กลุ่มเราจะนำเสนอ หนึ่งในคุณสมบัติของน้ำ ค่าความเป็นกรด-ด่างของน้ำกันครับ หรือที่เรียยกกันว่าค่า pH
                                                    </Typography>
                                                </Box>

                                                <Box>
                                                    <Typography variant="body1" className={styles.content} >ปัญหาส่วนมาก พืชได้รับน้ำอย่างไม่ถูกต้องทำให้รากพืชจะถูกกัดกร่อนจนทำให้รากอ่อนแอ ธาตุอาหารพืชจะตกตะกอนจนพืชไม้สามารถดูดซึมได้ นั่นเลยส่งผลให้พืชมีอาการแคระแกรน ใบเหลือง และอีกปัญหาหนึ่งคือพืชแต่ละชนิดใช่ค่าความเป้นกรด-ด่าง ไม่เท่ากัน
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="body1" className={styles.content} >ดังนั้นกลุ่มเราจึงจัดทำระบบตรวจสอบคุณภาพของน้ำ โดยใช้ค่าความเป็นกรด-ด่าง เพื่อให้พืชได้รับน้ำได้อย่างเหมาะสม
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </Grid>
                                    </Grid>


                                </Stack>
                            </Container>
                        </Box>

                        <Box className={styles.sec3}>
                            <Container>
                                <Stack spacing={1}>
                                    <Stack
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Box className={styles.sec3TitleBox} >
                                            <Typography variant="h4" className={styles.sec2Title}>ค่า pH (Positive potential of the Hydrogen ions) มีผลอย่างไร</Typography>
                                            <Divider color="white" sx={{ mb: '1em' }} />
                                        </Box>
                                    </Stack>
                                    <Grid container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={3}>
                                        <Grid item xs={6}>
                                            <Box>
                                                <Typography variant="body1" className={styles.content} >   หากค่า pH มีความเหมาะสมกับพืชก็จะสามารถที่จะดูดธาตุอาหารเข้าไปใช้ได้โดยง่ายและมีประสิทธิ โดยทั่วไปค่าความเป็นกรด-ด่างที่ความเหมาะสมคือค่าช่วงที่อยู่ในความเป็นกรด ทั้งนี้ขึ้นอยู่กับพืชแต่ละชนิดด้วย ยิ่งเป็นกรดมากเท่าใดยิ่งจะทำให้พืชดูดซึมสารอาหารได้ดียิ่งขึ้น
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box >
                                                <Stack direction="row"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    spacing={2} >
                                                    <img src="home/1.jpg" className={styles.img} width="100%" alt='' />
                                                </Stack>
                                            </Box>

                                        </Grid>
                                        <Grid item xs={6} >
                                            <Box>
                                                <Stack direction="row"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    spacing={2} >
                                                    <img src="home/2.jpg" className={styles.img} width="100%" alt='' />
                                                </Stack>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box >
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
                        <Box className={styles.sec2}>
                            <Container >
                                <Stack spacing={1} >
                                    <Stack
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Box className={styles.sec4TitleBox} >
                                            <Typography variant="h4" className={styles.sec4Title}>ผู้พัฒนา </Typography>
                                            <Divider color="white" sx={{ mb: '1em' }} />
                                        </Box>
                                    </Stack>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2}>
                                        <Grid item >
                                            <Card className={styles.bgCard}>
                                                <CardContent >
                                                    <Stack
                                                        direction="row"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        sx={{ mb: '10px' }}
                                                    >
                                                        <img src="home/01.png" alt="" height="100px" />
                                                    </Stack>
                                                    <Typography className={styles.nameCard} variant="h5" align='center' component="div">
                                                        Pongthep Nuchwet
                                                    </Typography>
                                                    <Typography className={styles.nameCard} variant="h6" align='center' component="div">
                                                        พงศ์เทพ นุชเวช
                                                    </Typography>
                                                </CardContent>
                                                <Box>
                                                    <Stack
                                                        direction="row"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        spacing={2}
                                                    >
                                                        <IconButton size="large" color="primary" >
                                                            <FacebookIcon />
                                                        </IconButton>
                                                        <IconButton size="large" color="primary" onClick={() => { navigator.clipboard.writeText("Pongthep"); }}>
                                                            <GitHubIcon />
                                                        </IconButton>
                                                        <IconButton size="large" color="primary" onClick={() => { navigator.clipboard.writeText("Pongthep"); }}>
                                                            <EmailIcon />
                                                        </IconButton>
                                                    </Stack>
                                                </Box>
                                            </Card>
                                        </Grid>
                                        <Grid item >
                                            <Card className={styles.bgCard}>
                                                <CardContent >
                                                    <Stack
                                                        direction="row"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        sx={{ mb: '10px' }}
                                                    >
                                                        <img src="home/01.png" alt="" height="100px" />
                                                    </Stack>
                                                    <Typography className={styles.nameCard} variant="h5" align='center' component="div">
                                                        Pongthep Nuchwet
                                                    </Typography>
                                                    <Typography className={styles.nameCard} variant="h6" align='center' component="div">
                                                        พงศ์เทพ นุชเวช
                                                    </Typography>
                                                </CardContent>
                                                <Box>
                                                    <Stack
                                                        direction="row"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        spacing={2}
                                                    >
                                                       
                                                        <IconButton size="large" color="primary" onClick={() => { navigator.clipboard.writeText("Pongthep"); }}>
                                                            <EmailIcon />
                                                        </IconButton>
                                                    </Stack>
                                                </Box>
                                            </Card>
                                        </Grid>
                                        <Grid item >
                                            <Card className={styles.bgCard}>
                                                <CardContent >
                                                    <Stack
                                                        direction="row"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        sx={{ mb: '10px' }}
                                                    >
                                                        <img src="home/01.png" alt="" height="100px" />
                                                    </Stack>
                                                    <Typography className={styles.nameCard} variant="h5" align='center' component="div">
                                                        Pongthep Nuchwet
                                                    </Typography>
                                                    <Typography className={styles.nameCard} variant="h6" align='center' component="div">
                                                        พงศ์เทพ นุชเวช
                                                    </Typography>
                                                </CardContent>
                                                <Box>
                                                    <Stack
                                                        direction="row"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        spacing={2}
                                                    >
                                                       
                                                        <IconButton size="large" color="primary" onClick={() => { navigator.clipboard.writeText("Pongthep"); }}>
                                                            <EmailIcon />
                                                        </IconButton>
                                                    </Stack>
                                                </Box>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Stack>
                            </Container>
                        </Box>

                    </Box>
                </Stack>
            </Box>
        </>
    );
}