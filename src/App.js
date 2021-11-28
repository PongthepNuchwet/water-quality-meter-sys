import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useState, createRef, useEffect } from "react";
import Login from './pages/Login'
import WaterQuality from './pages/WaterQuality'
import NotFound from './pages/NotFound'
import Authenticate from './Authenticate'
import myFirebase from './firebase/firebase-config'
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch } from 'react-redux'
import { setPH, setTemperature, setOxygen } from './store/Gauge'


export default function App() {


  const [user, setUser] = useState(true)
  const username = createRef()
  const password = createRef()
  const dispatch = useDispatch()

  useEffect(() => {
    const db = getDatabase()
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
          {user ? <Redirect to="/home" /> : <Login username={username} password={password} setUser={setUser} />}
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

