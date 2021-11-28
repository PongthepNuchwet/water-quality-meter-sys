import LottieWater from '../../lottie/Water'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function Water() {
    return (
        <>
            <Box >
                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                >
                    <LottieWater />
                </Stack>
            </Box>
        </>
    )
}