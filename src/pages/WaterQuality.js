import Header from '../component/WaterQuality/Header';
import Dashboard from '../component/WaterQuality/Dashboard';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

export default function WaterQuality() {

  return (
    <>
      <Box sx={{
        background: '#212332',
        height: 'auto',
        paddingBottom:'20px'
      }}>
        <Stack spacing={2} >
          <Header />
          <Dashboard />
        </Stack>
      </Box>
    </>
  );
}