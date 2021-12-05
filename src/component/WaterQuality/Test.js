import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { setPH, pushPHList } from '../../store/Gauge'
import { useDispatch } from 'react-redux'
import { useState } from "react"

export default function Test() {

    const dispatch = useDispatch()
    const [intervalId, setIntervalId] = useState();
    const [count, setCount] = useState(0)
    let number = 0

    const handleClick = (count) => {
        number = count
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
            return;
        }
        const newIntervalId = setInterval(() => {
            dispatch(setPH(number))
            dispatch(pushPHList(number))
            setCount(count => count + 0.1);
            number += 0.1
        }, 500);
        setIntervalId(newIntervalId);
    };

    return (
        <>
            <Box>
                <Button variant="contained" onClick={() => handleClick(count)} size="small" sx={{ p: 0, fontFamily: 'mitr', mr: '3px' }}>{!intervalId ? "Start" : "Stop"}</Button>
            </Box>
        </>
    )
}
