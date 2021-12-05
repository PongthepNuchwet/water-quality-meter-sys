import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux'
import Grow from '@mui/material/Grow';
export default function ResultTree() {
    const pH = useSelector((state) => state.gauge.pH)
    const plants = useSelector((state) => state.plants.data)
    return (
        <>
            <Box >
                <Typography variant="subtitle1" sx={{ color: 'white', fontFamily: 'mitr' }}>
                    พืชที่เหมาะกับค่า pH
                </Typography>
                <Divider color="white" />
                <Box sx={{ p: '10px', display: 'inline' }} variant="outlined">
                    <Grid container spacing={1}>

                        {
                            plants.map((data) => {
                                if (pH >= data.pHMin && pH <= data.pHMax) {
                                // if (pH) {
                                    return (
                                        <Grow in={true} key={data.id}>
                                            <Grid item xs={12} md={6} lg={3} xl={2} >
                                                <Card sx={{ width: '100%', background: '#212332' }} >
                                                    <CardMedia component="img"
                                                        height="90px"
                                                        image={data.image}
                                                        alt={data.name} />
                                                    <Box sx={{
                                                        color: 'white',
                                                        padding: '10px',
                                                        background: '#313448'

                                                    }}>
                                                        <Typography variant="subtitle2" sx={{ color: 'white', fontFamily: 'mitr' }} align='center' >
                                                            {data.name}
                                                        </Typography>
                                                        <Typography variant="subtitle2" sx={{ color: 'white', fontFamily: 'mitr' }} align='center'>
                                                            {data.pHMin === data.pHMax ? `${data.pHMin} pH` : `${data.pHMin} - ${data.pHMax} pH`}
                                                        </Typography>
                                                    </Box>
                                                </Card>
                                            </Grid>
                                        </Grow>
                                    )
                                } else {
                                    return null
                                }
                            })
                        }
                    </Grid>
                </Box>
            </Box>
        </>
    )
}