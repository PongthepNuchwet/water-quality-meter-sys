import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import Temperature from './Temperature'
import Oxygen from './Oxygen'
import PH from './PH'

export default function Chart() {

    const style = {
        background: '#2a2d3e',
        padding: '10px 20px',
        borderRadius: '5px'
    }
    return (
        <>
            <Box >
                <Grid container spacing={1} alignItems="stretch" direction="row" justifyContent="center">
                    <Grid item sm={12} md={12} lg={4}>
                        <Box sx={style}>
                            <Stack>
                                <PH />
                                <Typography align="center" sx={{ color: 'white', fontFamily: 'mitr' }}>
                                    ค่าความเป็นกรด - ด่าง
                                </Typography>
                            </Stack>

                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>
                        <Box sx={style}>
                            <Stack>
                                <Temperature />
                                <Typography align="center" sx={{ color: 'white', fontFamily: 'mitr' }}>
                                    อุณหภูมิ
                                </Typography>
                            </Stack>

                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>
                        <Box sx={style}>
                            <Stack>
                                <Oxygen />
                                <Typography align="center" sx={{ color: 'white', fontFamily: 'mitr' }}>
                                    ออกซิเจนในน้ำ
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}