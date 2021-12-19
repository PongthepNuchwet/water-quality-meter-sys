import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '@mui/material/Avatar';

import styles from '../../styles/home.module.css'
export default function Footer() {
    return (
        <Box className={`${styles.section}`}>
            <Container >
                <Stack spacing={1} >
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box className={styles.sec4TitleBox} >
                            <Typography variant="h4" className={styles.secTitle}>ผู้พัฒนา </Typography>
                            <Divider color="white" sx={{ mb: '1em' }} />
                        </Box>
                    </Stack>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item md='auto' xs={12} sm={6} >
                            <Box sx={{ p: "10px" }}>
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
                                        <Typography className={styles.nameCard} sx={{color:'#4ea9f4'}} variant="h5" align='center' component="div">
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
                                            <IconButton size="large" color="primary" onClick={() => { window.open('https://web.facebook.com/PJ28745') }}>
                                                <FacebookIcon />
                                            </IconButton>
                                            <IconButton size="large" color="primary" onClick={() => { window.open('https://github.com/PongthepNuchwet') }}>
                                                <GitHubIcon />
                                            </IconButton>
                                            <IconButton size="large" color="primary" onClick={() => { window.location = "mailto:6310301004@cdti.ac.th"; }}>
                                                <EmailIcon />
                                            </IconButton>
                                        </Stack>
                                    </Box>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item md='auto' xs={12} sm={6}>
                            <Box sx={{ p: "10px" }}>
                                <Card className={styles.bgCard}>
                                    <CardContent >
                                        <Stack
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                            sx={{ mb: '10px' }}
                                        >
                                          
                                            <img src="home/02.png" alt="" height="100px" />
                                        </Stack>
                                        <Typography className={styles.nameCard} sx={{color:'#4ea9f4'}} variant="h5" align='center' component="div">
                                            Pulis Sributtra
                                        </Typography>
                                        <Typography className={styles.nameCard} variant="h6" align='center' component="div">
                                            ภูริศ ศรีบุตรตา
                                        </Typography>
                                    </CardContent>
                                    <Box>
                                        <Stack
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                            spacing={2}
                                        >
                                            <IconButton size="large" color="primary" onClick={() => { window.location = "mailto:6310301033@cdti.ac.th"; }}>
                                                <EmailIcon />
                                            </IconButton>
                                        </Stack>
                                    </Box>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item md='auto' xs={12} >
                            <Box sx={{ p: "10px" }}>
                                <Card className={styles.bgCard}>
                                    <CardContent >
                                        <Stack
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                            sx={{ mb: '10px' }}
                                        >
                                            <img src="home/03.png" alt="" height="100px" />
                                        </Stack>
                                        <Typography className={styles.nameCard} sx={{color:'#4ea9f4'}} variant="h5" align='center' component="div">
                                            Pakkamat limjitsomboon
                                        </Typography>
                                        <Typography className={styles.nameCard} variant="h6" align='center' component="div">
                                            ภัคเมศฐ์ ลิ้มจิตสมบูรณ์
                                        </Typography>
                                    </CardContent>
                                    <Box>
                                        <Stack
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                            spacing={2}
                                        >
                                            <IconButton size="large" color="primary" onClick={() => { window.open('https://web.facebook.com/Pkmmik') }}>
                                                <FacebookIcon />
                                            </IconButton>
                                            <IconButton size="large" color="primary" onClick={() => { window.open('https://github.com/jaomahnoi') }}>
                                                <GitHubIcon />
                                            </IconButton>
                                            <IconButton size="large" color="primary" onClick={() => { window.location = "mailto:6310301036@cdti.ac.th"; }}>
                                                <EmailIcon />
                                            </IconButton>
                                        </Stack>
                                    </Box>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}