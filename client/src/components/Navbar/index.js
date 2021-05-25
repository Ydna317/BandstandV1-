import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fluid">
      <h1 className="navbar-brand" ><strong>Bandstand</strong></h1>
      {/* <navbar className="justify-content-end">
        <ul className="navbar-nav ">
           <li className="nav-item justify-right">
            <Link
              to="/chatroom"
              className={
                window.location.pathname === "/" || window.location.pathname === "/log-in"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li> 
          <li className="nav-item">
            <Link
              to="/chatroom"
              className={window.location.pathname === "/chatroom" ? "nav-link active" : "nav-link"}
            >
              ChatRoom
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className={window.location.pathname === "/log-out" ? "nav-link active" : "nav-link"}
            >
              Log out
            </Link>
          </li>
        </ul>
      </navbar> */}
    </nav>
  );
}

export default Navbar;

