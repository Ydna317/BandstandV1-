// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Chatroom from "./pages/Chatroom";
// //import Navbar from "./components/Navbar";
//  //import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
// import forgotPass from "./pages/forgotPass";
// //import { Container } from "react-bootstrap";
// import Panechat from "./pages/Panechat";
// import "./App.css";


// function App() {
//   return (
//     <Router>
      
//           <Wrapper >
//             <Route exact path="/" component={Login} />
//             <Route exact path="/Login" component={Login} />
//             <Route exact path="/Signup" component={Signup} />
//             <Route exact path="/Chatroom" component={Chatroom} />
//             <Route exact path="/forgotPass" component={forgotPass} />
//             <Route exact path="/Panechat" component={Panechat} />
//           </Wrapper>
      
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import PrivateRoute from './components/routing/PrivateRouting';

import Chatroom from "./pages/Chatroom";
import Navbar from "./components/Navbar";
 //import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import forgotPass from "./pages/forgotPass";
//import { Container } from "react-bootstrap";
import Panechat from "./pages/Panechat";
import "./App.css";


function App() {
  return (
    <AuthState>
        <Router>
          <Wrapper >
              <AlertState>
              <Router>
               <Navbar/>
              <div className='container'>
                <Switch>
                <PrivateRoute exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/chatroom" component={Chatroom} />
                <Route exact path="/forgotpass" component={forgotPass} />
                <Route exact path="/panechat" component={Panechat} />
                </Switch>
                </div>
                </Router>
              </AlertState>
          </Wrapper>
        </Router>
    </AuthState>
  );
}

export default App;
