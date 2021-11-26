import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import Water from './Water';
import Hidden from '@mui/material/Hidden';
export default function ResultText() {
    return (
        <>
            <Box >
                <Typography variant="subtitle1" sx={{ color: 'white', fontFamily: 'mitr' }}>
                    วิเคราะห์
                </Typography>
                <Divider color="white" />
                <Water />
                <Typography variant="body2" sx={{ color: 'white', fontFamily: 'mitr' ,display:'none'}}>
                    1111
                </Typography>
            </Box>
        </>
    )
}