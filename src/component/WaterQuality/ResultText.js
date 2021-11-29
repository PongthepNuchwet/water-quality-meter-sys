import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import Water from './Water';
import { useSelector } from 'react-redux'

export default function ResultText() {
    const pH = useSelector((state) => state.gauge.pH)
    const Text1 = ({ ph }) => {
        if (ph >= 9.5) { return 'ด่างจัดมาก' }
        else if (ph >= 8.5) { return 'ด่างจัดมาก' }
        else if (ph >= 8) { return 'ด่างปานกลาง' }
        else if (ph === 7) { return 'กลาง' }
        else if (ph >= 7) { return 'ด่างอ่อน' }
        else if (ph >= 6) { return 'กรดอ่อน' }
        else if (ph >= 5.5) { return 'กรดปานกลาง' }
        else if (ph >= 5) { return 'กรดจัด' }
        else if (ph >= 4.5) { return 'กรดแก่จัด' }
        else if (ph >= 4) { return 'กรดแก่จัดรุนแรง' }
        else { return '-' }
    }

    const Text2 = ({ ph }) => {
        if (ph > 7) { return 'ค่า pH ที่มากกว่า 7 จะเป็นด่าง นึกถึงน้ำสบู่ หากมีความเป็นด่างสูง ธาตุอาหารพืชจะตกตะกอนจนพืชไม่สามารถดูดซึมได้ ส่งผลให้พืชมีอาการแคระแกรน ใบเหลือง' }
        else if (ph === 7) { return '-' }
        else if (ph >= 4) { return 'สารจะเป็นกรด หากมีความเป็นกรดสูง ธาตุอาหารของพืชจะละลายน้ำได้ดี พืชดูดไปใช้ได้ง่าย แต่รากพืชจะถูกกัดกร่อน และรากจะอ่อนแอ ส่งผลให้เชื้อโรคเข้าทำลายได้ง่าย ' }
        else if (ph < 4) { return 'ค่า pH ที่ต่ำกว่า 4 ไม่เหมาะสมในการใช้ปลูกพืชเนื่องจากว่ามีความเป็นกรดมากเกินไปอาจทำให้รากของพืช โดนกัดกร่อนและเน่าได้ง่ายด่างปานกลาง' }
        else { return '-' }
    }

    return (
        <>
            <Box >
                <Typography variant="subtitle1" sx={{ color: 'white', fontFamily: 'mitr' }}>
                    วิเคราะห์
                </Typography>
                <Divider color="white" />
                <Water />
                <Typography variant="h5" sx={{ color: 'white', fontFamily: 'mitr' }}>
                    สถานะ : <Text1 ph={pH} />
                </Typography>
                <Typography variant="body1" sx={{ mt: '10px', color: 'white', fontFamily: 'mitr', textIndent: '20px' }}>
                    <Text2 ph={pH} />
                </Typography>
            </Box>
        </>
    )
}