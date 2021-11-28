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
    }, {
      id: 2,
      name: 'ข้าวโพดหวาน2',
      image: 'https://lh3.googleusercontent.com/proxy/abEKY78upUtrG08-3l9e9N3aD7PJBYK8t-PAG50dxKctABfBMO1hU6aTmkBA4eWBfAxQ0t1W0i4BmXAw-17EzsAC72AZyMs9M4OtY6mpEXQwugHt1MmIgw',
      pHMin: 6,
      pHMax: 6
    },],
  },

})

export default plants.reducer