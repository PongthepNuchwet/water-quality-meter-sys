import { useState } from 'react';

import Box from '@mui/material/Box';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Button } from '@mui/material';

export default function PH() {

    const [count, setCount] = useState(0)
    const [label, setLabel] = useState([])
    const [dataset, setDataset] = useState([])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'PH',
            },
        },
    };

    const data = {
        labels: label,
        datasets: [
            {
                label: 'PH',
                data: dataset,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const onClick = () => {
        setLabel(() => {
            let tmp = label
            tmp.push(count)
            return tmp
        })

        setDataset(() => {
            let tmp = dataset
            tmp.push(count)
            return tmp
        })
        setCount(count + 1)
    }

    return (
        <>
            <Box  style={{
                height:'200px'
            }} >
                <Line options={options} data={data} />
                {/* <Button onClick={onClick}>Click</Button> */}
            </Box>
        </>
    )
}