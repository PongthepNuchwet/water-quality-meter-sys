import {
  BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch, } from 'react-redux'
import { setPH, setTemperature, setOxygen } from './store/Gauge'

import Login from './pages/Login'
import WaterQuality from './pages/WaterQuality'
import NotFound from './pages/NotFound'
import Authenticate from './Authenticate'

import myFirebase from './firebase/firebase-config'
import { getDatabase, ref, onValue } from "firebase/database";


export default function App() {

  const user = useSelector((state) => state.auth.status)
  const dispatch = useDispatch()

  useEffect(() => {
    const db = getDatabase(myFirebase)
    const starCountRef = ref(db, 'gauge');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      dispatch(setPH(data.pH))
      dispatch(setTemperature(data.temperature))
      dispatch(setOxygen(data.oxygen))
    });
  }, []);

  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Authenticate user={user} />
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/home" /> : <Login />}
        </Route>
        <Route path="/home">
          {user ? <WaterQuality /> : <Redirect to="/login" />}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

