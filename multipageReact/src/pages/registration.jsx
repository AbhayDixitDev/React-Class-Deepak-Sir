import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import "../pages/login.css"

const Registration=()=>{
    return (
        <>
        <Container fluid className="loginsign" style={{height:"100vh"}}>
                <Row>
                    <Col md={12} xl={12} xs={12} sm={12} className="loginsign-1">
                        <div className="loginsign-1-1">Register</div>
                        <div className="loginsign-1-2">
                            <div className="loginsign-1-2-1"><Link to="/">Home</Link></div>
                            <div className="loginsign-1-2-2">Create Account</div>
                        </div>
                    </Col>
                </Row>
                    <Row md={6} xl={6} xs={12} sm={12}   className="loginsign-2">
                        <Col className="loginsign-2-1" >
                            <div className="loginsign-2-1-1">Register</div>
                            <div className="loginsign-2-1-2"><input type="text" placeholder="First Name" required/></div>
                            <div className="loginsign-2-1-3"><input type="text" placeholder="Last Name" required /></div>
                            <div className="loginsign-2-1-3"><input type="email" placeholder="Email" required></input></div>
                            <div className="loginsign-2-1-3"><input type="password" placeholder="Password" required minlength="8"/></div>
                            <div className="loginsign-2-1-6">Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</div>
                            <div className="loginsign-2-1-41"><input type="submit" value="REGISTER" ></input></div>                            
                            <div className="loginsign-2-1-8"><Link to="/login">LOGIN</Link></div>
                        </Col>
                </Row>
            </Container>
        
        </>
    )
}

export default Registration;