import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
                <Grid container spacing={2} alignItems="stretch" direction="row" justifyContent="center">
                    <Grid item sm={4} >
                        <Box sx={style}>
                            <PH />
                        </Box>
                    </Grid>
                    <Grid item sm={4} >
                        <Box sx={style}>
                            <Temperature />
                        </Box>
                    </Grid>
                    <Grid item sm={4} >
                        <Box sx={style}>
                            <Oxygen />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}