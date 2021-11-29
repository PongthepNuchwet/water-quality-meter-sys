import Header from '../component/WaterQuality/Header';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import LottieRegister from '../lottie/Register'
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';

export default function Home() {

    const style = {
        background: '#2a2d3e',
        padding: '10px 20px',
        borderRadius: '5px',
        color: 'white',
    }

    return (
        <>
            <Box sx={{
                background: '#212332',
                height: '100vh',
                paddingBottom: '20px'
            }}>
                <Stack spacing={1} >
                    <Header />
                    <Box sx={{ height: '250px' }}>
                        <LottieRegister />
                    </Box>
                    <Box >
                        <Container>
                            <Box sx={style}>
                                <Typography variant="h6" sx={{ fontFamily: 'Sarabun', color: '#03a9f4', display: 'inline' }}>ระบบตรวจสอบคุณภาพน้ำเพื่อรดน้ำต้นไม้ </Typography>
                                <Typography variant="body1" sx={{ fontFamily: 'Sarabun', display: 'inline' }}> เป็นระบบ</Typography>
                            </Box>
                        </Container>
                    </Box>
                </Stack>
            </Box>
        </>
    );
}