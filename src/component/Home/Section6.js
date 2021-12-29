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
                                <Typography variant="h4" className={styles.secTitle}>flow of real-time system</Typography>
                                <Divider color="white" sx={{ mb: '1em' }} />
                            </Box>
                        </Stack>
                        <Grid container direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={12} md={8}>
                                <Box sx={{ p: '10px' }}>
                                    <img className={styles.imgApp} src='home/flow.jpg' width="100%" alt='app' />
                                </Box>
                            </Grid>
                        </Grid>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}