import { createSlice } from '@reduxjs/toolkit'

export const Gauge = createSlice({
  name: 'Gauge',
  initialState: {
    pHList: [],
    oxygenList: [],
    tempList: [],
    pH:0,
    temperature: 0,
    oxygen: 0,
    time : 0,
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
    setTime: (state, data) => {
      state.time = data.payload
    },
    setPHList: (state, data) => {
      state.pHList = data.payload
    },
    setOxygenList: (state, data) => {
      state.oxygenList = data.payload
    },
    setTempList: (state, data) => {
      state.tempList = data.payload
    },
    pushPHList: (state, data) => {
      state.pHList.push(data.payload)
    }
  }

})

export const { setPH, setTemperature, setOxygen, setTime,setPHList,setOxygenList,pushPHList,setTempList} = Gauge.actions
export default Gauge.reducer