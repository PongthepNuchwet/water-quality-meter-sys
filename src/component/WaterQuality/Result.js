import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

import ResultText from './ResultText'
import ResultTree from './ResultTree'

export default function Result() {
    return (
        <>
            <Box sx={{
               background: '#2a2d3e',
               padding: '10px 20px',
               borderRadius: '5px'
            }}>
                <Grid spacing={2} container >
                    <Grid item sm={12} md={4}>
                        <ResultText />
                    </Grid>
                    <Grid item sm={12} md={8}>
                        <ResultTree  />
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}