import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, } from 'react-redux'
import { setPH, setTemperature, setOxygen, setTime, setPHList, setOxygenList, setTempList } from './store/Gauge'

import Login from './pages/Login'
import WaterQuality from './pages/WaterQuality'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

import { myFirebase } from './firebase/firebase-config'
import { getDatabase, ref, onValue } from "firebase/database";

export default function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    const db = getDatabase(myFirebase)
    const set = ref(db, 'Set');
    onValue(set, (snapshot) => {
      const data = snapshot.val()
      dispatch(setPH(Number(data.pH).toFixed(2)))
      dispatch(setTemperature(Number(data.temperature).toFixed(2)))
      dispatch(setOxygen(Number(data.oxygen).toFixed(2)))
      dispatch(setTime(data.EpochTime))
    });

    const push = ref(db, 'Push');
    onValue(push, (snapshot) => {
      const data = snapshot.val()

      const pH = Object.keys(data.pH).map(key => data.pH[key])
      const temperature = Object.keys(data.temperature).map(key => data.temperature[key])
      const oxy = Object.keys(data.oxygen).map(key => data.oxygen[key])

      dispatch(setPHList(pH))
      dispatch(setOxygenList(oxy))
      dispatch(setTempList(temperature))
    });

  }, []);

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route index path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/WaterQuality" element={<WaterQuality />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

