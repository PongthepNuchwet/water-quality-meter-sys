import Header from '../component/WaterQuality/Header';
import Dashboard from '../component/WaterQuality/Dashboard';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function WaterQuality() {

  let navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Token')
        if (!authToken) {
            navigate('/login')
        }
    },)

  return (
    <>
      <Box sx={{
        background: '#212332',
        minHeight: '100vh',
        paddingBottom: '20px'
      }}>
        <Stack spacing={1} >
          <Header />
          <Dashboard />
        </Stack>
      </Box>
    </>
  );
}