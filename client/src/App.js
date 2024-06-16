import { useContext } from "react";
import Register from "./Components/Register/Register";
import Login from "./Components/login/Login";
import Profile from "./Components/profile/Profile";
import Home from "./pages/home/Home";
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {

  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          { user ? <Home /> : <Register/>}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />} 
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
