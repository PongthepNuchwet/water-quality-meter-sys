import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Temperature from './Temperature'
import Oxygen from './Oxygen'
import Water from './Water';

export default function Chart() {
    return (
        <>
            <Box >
                <Grid container spacing={2} alignItems="stretch" direction="row" justifyContent="center">
                    {/* <Grid item xs={12} sm={12} >
                        <Water />
                    </Grid> */}
                    <Grid item xs={12} sm={12}>
                        <Grid container spacing={2}>
                            <Grid item sm={4} >
                                <Box sx={{
                                    background: '#2a2d3e',
                                    padding: '10px 20px',
                                    borderRadius: '5px'
                                }}>
                                    <Temperature />
                                </Box>
                            </Grid>
                            <Grid item sm={4} >
                                <Box sx={{
                                    background: '#2a2d3e',
                                    padding: '10px 20px',
                                    borderRadius: '5px'
                                }}>
                                    <Oxygen />
                                </Box>
                            </Grid>
                            <Grid item sm={4} >
                                <Box sx={{
                                    background: '#2a2d3e',
                                    padding: '10px 20px',
                                    borderRadius: '5px'
                                }}>
                                    <Oxygen />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}