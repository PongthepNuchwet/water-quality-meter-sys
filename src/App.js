import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useState, createRef } from "react";
import Login from './pages/Login'
import WaterQuality from './pages/WaterQuality'
import NotFound from './pages/NotFound'
import Authenticate from './Authenticate'

export default function App() {

  const [user, setUser] = useState(true)
  const username = createRef()
  const password = createRef()

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

