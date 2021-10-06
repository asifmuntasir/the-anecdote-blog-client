import "./main.scss";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Store from "./store";


function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
