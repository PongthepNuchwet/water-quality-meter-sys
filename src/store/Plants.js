import { createSlice } from '@reduxjs/toolkit'

export const plants = createSlice({
  name: 'plants',
  initialState: {
    data: [{ id: 1, name: 'กล้วย', image: 'plants/01.png', pHMin: 5.5, pHMax: 6.5 },
    { id: 2, name: 'กลางตุ้งใบ', image: 'plants/02.png', pHMin: 6, pHMax: 7 },
    { id: 3, name: 'กระหล่ำดอก', image: 'plants/03.png', pHMin: 6.5, pHMax: 7 },
    { id: 4, name: 'กะหล่ำปลี', image: 'plants/04.png', pHMin: 6.5, pHMax: 7 },
    { id: 5, name: 'ข้าวโพดหวาน', image: 'plants/05.png', pHMin: 6, pHMax: 6 },
    { id: 6, name: 'แครอท', image: 'plants/06.png', pHMin: 6.3, pHMax: 6.3 },
    { id: 7, name: 'เซอลารี่', image: 'plants/07.png', pHMin: 6.5, pHMax: 6.5 },
    { id: 8, name: 'แตงกวา', image: 'plants/08.png', pHMin: 5.5, pHMax: 6.5 },
    { id: 9, name: 'แตงกวาชูกินี่', image: 'plants/09.png', pHMin: 6, pHMax: 6 },
    { id: 10, name: 'แตงโม', image: 'plants/10.png', pHMin: 5.8, pHMax: 5.8 },
    { id: 11, name: 'ถั่ว', image: 'plants/11.png', pHMin: 6, pHMax: 6 },
    { id: 12, name: 'บลอคเคอรี่', image: 'plants/12.png', pHMin: 6, pHMax: 6.8 },
    { id: 13, name: 'บลูเบอร์รี่', image: 'plants/13.png', pHMin: 4, pHMax: 5 },
    { id: 14, name: 'โหระพา', image: 'plants/14.png', pHMin: 5.5, pHMax: 6.0 },
    { id: 15, name: 'บีทรูท', image: 'plants/15.png', pHMin: 6.0, pHMax: 6.5 },
    { id: 16, name: 'ผักโขม', image: 'plants/16.png', pHMin: 6.0, pHMax: 7.0 },
    { id: 17, name: 'พาสเลย์', image: 'plants/17.png', pHMin: 5.5, pHMax: 6.0 },
    { id: 18, name: 'ฟักทอง', image: 'plants/18.png', pHMin: 5.5, pHMax: 7.0 },
    { id: 19, name: 'มะเขือเทศ', image: 'plants/19.png', pHMin: 6.0, pHMax: 6.8 },
    { id: 20, name: 'มะเขือม่วง', image: 'plants/20.png', pHMin: 6, pHMax: 6 },
    { id: 21, name: 'เมล่อน', image: 'plants/21.png', pHMin: 6, pHMax: 6.8 },
    { id: 22, name: 'หัวไชเท้า', image: 'plants/22.png', pHMin: 6, pHMax: 7 },
    { id: 23, name: 'วอเตอร์เครส', image: 'plants/23.png', pHMin: 6.5, pHMax: 6.8 },
    { id: 24, name: 'สตรอเบอรี่', image: 'plants/24.png', pHMin: 6, pHMax: 6.8 },
    { id: 25, name: 'สะระแหน่', image: 'plants/25.png', pHMin: 5.5, pHMax: 6.0 },
    { id: 26, name: 'สับปะรด', image: 'plants/26.png', pHMin: 5.5, pHMax: 6.5 },
    { id: 27, name: 'เสาวรส', image: 'plants/27.png', pHMin: 6.5, pHMax: 6.5 },
    { id: 28, name: 'หน่อไม้ฝรั่ง', image: 'plants/28.png', pHMin: 6, pHMax: 6.8 },
    ],
  },

})

export default plants.reducer