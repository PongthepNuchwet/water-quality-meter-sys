import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid'
export default function ResultTree() {
    return (
        <>
            <Box >
                <Typography variant="subtitle1" sx={{ color: 'white', fontFamily: 'mitr' }}>
                    พืชที่เหมาะกับค่า pH
                </Typography>
                <Divider color="white" />
                <Box sx={{ p: '10px', display: 'inline' }} variant="outlined">
                    <Grid container spacing={1}>

                        <Grid item sm={3} >
                            <Card sx={{ maxWidth: 150, background: '#212332' }} >
                                <CardMedia component="img"
                                    height="100px"
                                    image="https://www.thefruitfields.co.uk/wp-content/uploads/2020/05/Sweetcorn-400-350x161.png"
                                    alt="banana" />
                                <Box sx={{
                                    color: 'white',
                                    padding: '10px',
                                    background: '#313448'

                                }}>
                                    <Typography variant="subtitle1" sx={{ color: 'white' }} align='center' sx={{ fontFamily: 'mitr' }}>
                                        ข้าวโพดหวาน
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ color: 'white' }} align='center' sx={{ fontFamily: 'mitr' }}>
                                        6 pH
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}