import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faYoutube} from'@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhone, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection text-center" >
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="serviceName">Follow Me</h2>
                            <a className="socialLink" href="#"><FontAwesomeIcon icon={faFacebook} /> FaceBook</a><br/>
                            <a className="socialLink" href="#"><FontAwesomeIcon icon={faYoutube} /> YouTube</a>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="serviceName">Address</h2>
                            <p className="serviceDescription">#79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} /> hr@yahoo.com</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone}/> 0199220011</p>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="serviceName">Information</h2>
                            <Link className="footerLink" to="/about">About Me</Link><br/>
                            <Link className="footerLink" to="/contact">Contact Me</Link>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="serviceName">Legal</h2>
                            <Link className="footerLink" to="/Refund">Refund Policy</Link><br/>
                            <Link className="footerLink" to="/Terms">Terms And Condition</Link><br/>
                            <Link className="footerLink" to="/Privacy">Privacy Policy</Link>

                        </Col>

                    </Row>
                </Container>



                <Container fluid={true} className="text-center copyrightSection">
                    <a href="#" className="copyrightLink">World-it.com &copy 2020-2021</a>

                </Container>

            </Fragment>
        );
    }
}

export default Footer;
