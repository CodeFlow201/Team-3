import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/home/home";
import NavBar from "./components/navbar/navbar";
import Signup from "./components/signup/Signup";
import Order from "./components/Order/Order";
import Footer from "./components/Footer";

import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/signin' component={Signup} />
          {/* define all the routes here */}
          <Route path='/order' component={Order}/>
          <Route path='/login' component={Login}/>
        </Switch>

        <Footer />

      </Router>
      
    </>
  );
}

export default App;
