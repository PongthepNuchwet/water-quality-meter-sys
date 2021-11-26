import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'

import ResultText from './ResultText'
import ResultTree from './ResultTree'

export default function Result() {
    return (
        <>
            <Box sx={{
                background: '#2a2d3e',
                padding: '20px 20px',
                borderRadius: '5px',
                height: 'auto'
            }}>
                <Grid spacing={2} container >
                    <Grid item sm={4}>
                        <ResultText />
                    </Grid>
                    <Grid item sm={8}>
                        <ResultTree />
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}