import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';


import styles from '../../styles/home.module.css'

export default function Section3() {



    return (
        <Box className={`${styles.section}`}>
            <Container>
                <Stack spacing={1}>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}