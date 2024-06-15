import Register from "./Components/Register/Register";
import Login from "./Components/login/Login";
import Profile from "./Components/profile/Profile";
import Home from "./pages/home/Home";
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/profile/:username">
          <Profile/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
