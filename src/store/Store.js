import { configureStore } from '@reduxjs/toolkit'
import Plants from './Plants'
import Gauge from './Gauge'
import Auth from './Auth'

export default configureStore({
  reducer: {
    plants: Plants,
    gauge: Gauge,
    auth: Auth
  },
})