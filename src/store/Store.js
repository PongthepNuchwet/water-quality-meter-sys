import { configureStore } from '@reduxjs/toolkit'
import Plants from './Plants'
import Gauge from './Gauge'
export default configureStore({
  reducer: {
    plants:Plants,
    gauge:Gauge
  },
})