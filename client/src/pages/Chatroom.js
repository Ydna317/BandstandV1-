import React from "react";
//import Container from "../components/Container";
import { Row, Col } from "react-bootstrap";
// import Card from "../components/Card";
//import Container from "../components/Container";
//import Row from "../components/Row";
// import Navbar from "../components/Navbar";
// import Col from "../components/Col";
//import List from "../components/List";
//import Card from 'react-bootstrap/Card';
//import ChatWindow from "../components/ChatWindow";
//import Media from 'react-bootstrap/Media';
import "./style.css";
//import Image from 'react-bootstrap/Image';
//import { Link } from "react-router-dom";
import SpotifyPlayer from "../components/SpotifyPlayer";
import Panechat from "./Panechat";
import PaneSidebar from "../components/PaneSidebar";
import Footer from "../components/Footer";

function Chatroom() {

    return (

        <div style={{width: '100%', height: '90%'}}>
            <br />
            <br />
            <Row className="main-row row justify-content-center">
               
                <Col md={9}>
                    <br />
                    <Row className="Row1 row justify-content-center" >
                        <div className="media">
                       
                                <SpotifyPlayer></SpotifyPlayer>
                                
                                {/* <iframe src="https://open.spotify.com/embed/playlist/4qtTFHqg0TsNXJkgOPclKU" width="300" height="380" frameborder="0" allowtransparency="true" title="music" allow="encrypted-media"></iframe>   */}
                                    
                        </div>

                    </Row>



                    <Row className="row justify-content-center">
                        <div className="side">
                            <PaneSidebar> </PaneSidebar>
                        </div>
                    </Row>



                    <Row size="row justify-content-center" >
                       <Col className="chat">
                            <Panechat /> 
                        </Col>
                    </Row>

                </Col>

            </Row>
            
            <Footer /> 
        </div>
    );
}



export default Chatroom;
