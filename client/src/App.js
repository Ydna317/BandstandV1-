import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chatroom from "./pages/Chatroom";
//import Navbar from "./components/Navbar";
 //import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import forgotPass from "./pages/forgotPass";
//import { Container } from "react-bootstrap";
import Panechat from "./pages/Panechat";
import "./App.css";


function App() {
  return (
    <Router>
      
          <Wrapper >
            <Route exact path="/" component={Login} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Chatroom" component={Chatroom} />
            <Route exact path="/forgotPass" component={forgotPass} />
            <Route exact path="/Panechat" component={Panechat} />
          </Wrapper>
      
    </Router>
  );
}

export default App;
