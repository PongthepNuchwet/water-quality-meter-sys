import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import Chart from './Chart';
import Result from './Result'
import Time from './Time'


export default function Dashboard() {

    return (
        <>
            <Box >
                <Container >
                    <Stack spacing={1}>
                        <Time />
                        <Chart />
                        <Result />
                    </Stack>
                </Container>
            </Box>
        </>
    )
}