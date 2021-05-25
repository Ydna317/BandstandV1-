import React, { Component } from "react";
import "./log.css";

export default class forgotPass extends Component {
    render() {
        return (
            <form>
                <h1><strong>Forgot Password</strong></h1>
                <br />
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <button type="submit" className="btnn btn-light btn-block">Submit</button>
                <p className="forgot-password text-center">
                <a href="/Login">Woops, I Remembered My Password</a>
                </p>
            </form>
        );
    }
}

