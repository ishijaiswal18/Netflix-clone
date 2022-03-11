import "./app.scss";
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate as Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";


const App = () => {
  const { user } = useContext(AuthContext);
  // const user = false;
  return (
    <Router>
      <Switch>
        <Route exact path="/" element = {user ? <Home /> : <Redirect to = "/register"/>} />
        <Route exact path="/register" element = {!user ? <Register /> : <Redirect to = "/" />} />
        <Route exact path="/login" element = {!user ? <Login /> : <Redirect to = "/" />} />
        {
          user && (
          <>
            <Route exact path = "/movies" element = {<Home type = "movie" />}/>
            <Route exact path = "/series" element = {<Home type = "series" />}/>
            <Route exact path = "/watch" element = {<Watch />}/>
          </>
          )
        }
      </Switch>
     </Router> 
  );
};

export default App;