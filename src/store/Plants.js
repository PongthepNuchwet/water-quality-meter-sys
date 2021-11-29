import { createSlice } from '@reduxjs/toolkit'

export const plants = createSlice({
  name: 'plants',
  initialState: {
    data: [{
      id: 1,
      name: 'ข้าวโพดหวาน1',
      image: 'https://www.thefruitfields.co.uk/wp-content/uploads/2020/05/Sweetcorn-400-350x161.png',
      pHMin: 5,
      pHMax: 6
    },],
  },

})

export default plants.reducer