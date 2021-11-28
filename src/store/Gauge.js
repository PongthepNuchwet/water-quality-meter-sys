import { createSlice } from '@reduxjs/toolkit'

export const Gauge = createSlice({
  name: 'Gauge',
  initialState: {
    pH: 6,
    temperature: 21,
    oxygen: 0
  },
  reducers: {
    setPH: (state, data) => {
      state.pH = data.payload
    },
    setTemperature: (state, data) => {
      state.temperature = data.payload
    },
    setOxygen: (state, data) => {
      state.oxygen = data.payload
    },
  }

})

export const { setPH, setTemperature, setOxygen } = Gauge.actions
export default Gauge.reducer