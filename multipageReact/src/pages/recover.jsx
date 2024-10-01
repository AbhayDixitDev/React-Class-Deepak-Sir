import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import "../pages/login.css"
import { BiBasketball } from "react-icons/bi";

const Recover=()=>{
    return (
        <>
        <Container fluid className="loginsign">
                <Row>
                    <Col md={12} xl={12} xs={12} sm={12} className="loginsign-1">
                        <div className="loginsign-1-1">Log In</div>
                        <div className="loginsign-1-2">
                            <div className="loginsign-1-2-1"><Link to="/"><BiBasketball color="red" size="60px" onClick={z}/>Home</Link></div>
                            <div className="loginsign-1-2-2">Account</div>
                        </div>
                    </Col>
                </Row>
                    <Row md={6} xl={6} xs={12} sm={12}   className="loginsign-2">
                        <Col className="loginsign-2-1" >
                            <div className="loginsign-2-1-1">Reset your password</div>
                            <div className="loginsign-2-1-2">We will send you an email to reset your password.</div>
                            <div className="loginsign-2-1-3"><input type="email" placeholder="Email" required/></div>
                            <div className="loginsign-2-1-41"><input type="submit" value="SUBMIT" ></input></div>
                            <div className="loginsign-2-1-8"><Link to="/login">CANCEL</Link></div>
                        </Col>
                        <Col md={6} xl={6} xs={12} sm={12} className="loginsign-2-2">
                            <div className="loginsign-2-2-1">New Customer</div>
                            <div className="loginsign-2-2-2">Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</div>
                            <div className="loginsign-2-2-3"><Link to="/registration">REGISTER</Link></div>
                        </Col>
                </Row>
            </Container>
        
        </>
    )
}

export default Recover;