import React, { Component } from "react";
import "./log.css";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h1><strong>Sign Up</strong></h1>
                <br />
                <div className="form-group"> 
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btnn btn-light btn-block"><strong>Sign Up</strong></button>
                <br />
                <p className="forgot-password text-center">
                    <a href="/Login">Already Registered</a>
                </p>
            </form>
        );
    }
}