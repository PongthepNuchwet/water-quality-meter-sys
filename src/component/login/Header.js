import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack'

import Logo from '../Logo'

export default function Header() {

    return (
        <>
            <Stack direction="row" alignItems="center">
                <Logo />
                <Typography variant="h6" color="textPrimary" sx={{
                    fontWeight: '800',
                    color: '#7fb329',
                    fontFamily: 'mitr'
                }} >
                    ระบบตรวจสอบคุณภาพน้ำเพื่อรดน้ำต้นไม้
                </Typography>
            </Stack>
            <Typography variant="h6" color="textSecondary" sx={{
                color: '#03a9f4',
                fontWeight: '800',
                textIndent: '41px',
                fontFamily: 'mitr'
            }}>
                ลงชื่อเข้าสู่ระบบ
            </Typography>
        </>
    )
}