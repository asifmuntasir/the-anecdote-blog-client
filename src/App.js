import "./main.scss";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Store from "./store";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./privateRoute/PrivateRoute";
import RouteLinks from "./privateRoute/RouteLinks";
import NotFound from "./components/NotFound";
import CreatePost from "./components/CreatePost/CreatePost";


function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <RouteLinks path="/login" exact component={Login} />
          <RouteLinks path="/register" exact component={Register} />
          <PrivateRoute path="/userDashboard/:page?" exact component={Dashboard} />
          <PrivateRoute path="/createPost" exact component={CreatePost} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
