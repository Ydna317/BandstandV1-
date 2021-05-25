
import React, { Component } from "react";
import {Link } from "react-router-dom";
import "./log.css";


export default class Login extends Component {
    render() {
        return (
          <div className="log">
            <form>
                <h1>Sign In</h1>
                <br />

                <div className="form-group">
                    
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <br />
                <div className="form-group">
                    
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Link to="/chatroom"><button type="submit" className="btnn bg-light btn-block">
                  <strong>Submit</strong>
                  </button></Link>

                <br />
                <p className="forgot-password">
                    <a href="/SignUp" className=" text-right">Register An Account</a>
                  
                </p>

                <p className="forgot-password">
                
                    <a href="/forgotPass" className="text-right">Forgot My Password</a>
                </p>
                
                
               
                
            </form>
          </div>
        );
    }
}







